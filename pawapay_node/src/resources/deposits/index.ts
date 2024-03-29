import NetworkHandler from "@config/NetworkManager";
import { autoInjectable, singleton } from "tsyringe";

import PawapayBaseService from "@utils/PawapayBaseService";
import {
  PawaPayPayoutTransaction,
  PaymentTransaction,
  PayoutTransaction,
  ResendCallbackResponse
} from "../../types/Payout";
import { PawaPayNetworkResponse } from "../../types/PawaPayErrorResponse";
import InternalLogger from "@utils/InternalLogger";

@autoInjectable()
@singleton()
export default class Deposits extends InternalLogger {

  private readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler, protected pawapayBaseService: PawapayBaseService) {
    super("Deposits");
    this.baseEndpoint = "/deposits";
  }

  /**
   * Asynchronously sends a payout transaction to a specified recipient using the PawaPay service.
   * This method formats the recipient's phone number, constructs the payout request payload,
   * and sends it to the PawaPay payout service endpoint. It logs the transaction details and
   * handles any potential errors during the transaction process.
   *
   * @param {PayoutTransaction} transaction - An object containing the details of the payout transaction,
   * including the recipient's phone number, payout amount, currency, payout ID, correspondent, and statement description.
   *
   * @returns {Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse>} A promise that resolves to the response data
   * from the PawaPay service if the transaction is successfully processed. If an error occurs during
   * the process, the promise resolves to an unknown type, and the error is handled by the `networkHandler`'s error handling method.
   *
   * @throws {PawaPayNetworkResponse} The method catches and handles any errors that occur during the execution of the transaction.
   * These errors are processed by the `networkHandler.handleErrors` method, which might throw errors based on its implementation.
   *
   * sendDeposit(transactionDetails)
   *   .then(response => console.log('Payout transaction successful:', response))
   *   .catch(error => console.error('Payout transaction failed:', error));
   */

  async sendDeposit(transaction: PayoutTransaction): Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse> {
    try {

      const phoneNumber = this.pawapayBaseService.formatPhoneNumber(transaction.phoneNumber);

      console.log("Sending payout to", phoneNumber, "the amount of", transaction.amount, "with payoutId", transaction.payoutId, "and currency", transaction.currency);

      const response = await this.networkHandler.getInstance().post(
        this.baseEndpoint,
        {
          payoutId: transaction.payoutId,
          amount: transaction.amount.toString(),
          currency: transaction.currency,
          correspondent: transaction.correspondent,
          recipient: {
            type: "MSISDN",
            address: { value: phoneNumber }
          },
          customerTimestamp: new Date().toISOString(),
          statementDescription: transaction.statementDescription
        }
      );
      console.log("Payout transaction successful:", response.data);

      return response.data as PawaPayPayoutTransaction;
    } catch (error: unknown) {

      console.error("Payout transaction failed:", error);

      return this.networkHandler.handleErrors(error);

    }

  }

  /**
   * Asynchronously retrieves details of a specific deposit transaction by its unique identifier.
   * This method constructs the request endpoint using the deposit ID, makes a GET request to the
   * PawaPay service endpoint, and aims to return the transaction details.
   *
   * @param {string} depositId - The unique identifier for the deposit transaction that is being retrieved.
   *
   * @returns {Promise<PaymentTransaction[] | PawaPayNetworkResponse>} A promise that resolves to an array of `PaymentTransaction` objects
   * if the retrieval is successful. The array contains the details of the deposit transaction identified by the given depositId.
   * If an error occurs during the process, the promise resolves to an unknown type, and the error is handled by the
   * `networkHandler`'s error handling method.
   *
   * @throws {PawaPayNetworkResponse} Catches and handles any errors that occur during the execution of the retrieval process.
   * The errors are processed by the `networkHandler.handleErrors` method, which might throw errors based on its implementation.
   */
  async getDeposit(depositId: string): Promise<PaymentTransaction[] | PawaPayNetworkResponse> {

    try {
      const endPoint = this.baseEndpoint + `/${depositId}`;
      const response = await this.networkHandler.getInstance().get(endPoint);

      console.log("Deposit details retrieved successfully:", response.data);

      return response.data as PaymentTransaction[];
    } catch (error) {
      console.error("Payout transaction failed:", error);
      return this.networkHandler.handleErrors(error);
    }

  }

  /**
   * Asynchronously requests the resend of a callback for a specific deposit transaction using its unique identifier.
   * This method sends a POST request to a specified endpoint dedicated to triggering the resend of callbacks for transactions.
   * The function is designed to facilitate situations where the initial callback from a transaction might have been missed or not received.
   *
   * @param {string} depositId - The unique identifier of the deposit transaction for which the callback resend is requested.
   *
   * @returns {Promise<ResendCallbackResponse | PawaPayNetworkResponse>} A promise that resolves to the response from the service regarding the callback resend operation.
   * The `ResendCallbackResponse` type is expected to contain details about the success or specifics of the resend request.
   * If an error occurs during the operation, the promise resolves to an unknown type. The method includes error handling that processes the error using the `networkHandler`'s error handling mechanism.
   *
   * @throws {PawaPayNetworkResponse} Catches and handles any errors that occur during the execution of the callback resend request.
   * These errors are processed by the `networkHandler.handleErrors` method, which may throw errors based on its implementation.
   */

  async resendCallback(depositId: string): Promise<ResendCallbackResponse | PawaPayNetworkResponse> {
    try {

      const { data } = await this.networkHandler.getInstance().post(`/deposits/resend-callback`, {
        depositId: depositId
      });

      console.log("RESPONSE", data);

      return data as ResendCallbackResponse;
    } catch (error: unknown) {
      console.log("ERROR", error);
      return this.networkHandler.handleErrors(error);
    }
  }

}
