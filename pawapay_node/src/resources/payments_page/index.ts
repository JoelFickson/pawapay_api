import NetworkHandler from "@config/NetworkManager";
import { autoInjectable, singleton } from "tsyringe";
import { InitiatePaymentResponse, PaymentData } from "../../types/Payments";
import { PawaPayNetworkResponse } from "../../types/PawaPayErrorResponse";
import * as console from "node:console";

@autoInjectable()
@singleton()
export default class PaymentsPage {

  private readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler) {
    this.baseEndpoint = "v1/widget/sessions";
  }

  /**
   * Initiates a payment process by sending payment data to v1/widget/sessions.
   * This method constructs the payment request and handles the response, returning
   * a URL to which the user can be redirected to complete the payment process.
   *
   * @param {PaymentData} paymentData - An object containing all necessary data for initiating the payment.
   * The `PaymentData` object should include:
   * - `deposit_id`: The ID of the deposit.
   * - `price`: The amount of the payment.
   * - `returnUrl`: The URL to which the user will be redirected after payment completion (can be specified in `.env` as `RETURN_URL`).
   * - `basePaymentCountryIso`: ISO country code representing the base country for the payment.
   * - `reason`: A text description of the reason for the payment.
   *
   * @returns {Promise<InitiatePaymentResponse | PawaPayNetworkResponse>} A promise that resolves to an object containing
   * the `redirectUrl` for the payment completion if successful, and an `error` flag set to `false`.
   * In case of failure, the promise may resolve to an `unknown` type or be rejected with an error.
   * It's recommended to handle errors appropriately in the calling context.
   *
   * @throws {PawaPayNetworkResponse} Throws an error if the request fails for reasons such as network issues,
   * invalid payment data, or server errors. Errors are handled by `networkHandler.handleErrors`.
   */
  public async initiatePayment(paymentData: PaymentData): Promise<InitiatePaymentResponse | PawaPayNetworkResponse> {
    try {
      const response = await this.networkHandler.getInstance()
        .post(this.baseEndpoint, {
          depositId: paymentData.deposit_id,
          amount: paymentData.price.toString(),
          returnUrl: paymentData.returnUrl,
          country: paymentData.basePaymentCountryIso,
          reason: paymentData.reason
        });

      console.log(response);

      return {
        redirectUrl: response.data.redirectUrl,
        error: false
      };
    } catch (error: unknown) {
      return this.networkHandler.handleErrors(error);
    }
  }
}
