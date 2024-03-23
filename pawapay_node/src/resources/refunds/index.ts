import { autoInjectable, singleton } from "tsyringe";
import NetworkHandler from "@config/NetworkManager";
import { RefundResponse, RefundTransaction } from "../../types/Payout";
import { PawaPayNetworkResponse } from "../../types/PawaPayErrorResponse";
import InternalLogger from "@utils/InternalLogger";

@singleton()
@autoInjectable()
export default class Refunds extends InternalLogger {

  private readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler) {
    super("Refunds");
    this.baseEndpoint = "/refunds";
  }

  /**
   * Asynchronously submits a request to create a refund for a specific transaction. This method sends the refund details,
   * including the unique identifiers for the refund and the original deposit, to a designated service endpoint for processing.
   * It is intended to initiate the refund process for transactions that meet the criteria for refunding.
   *
   * @param {any} refundData - An object containing the refund request details. The structure of this object includes
   * `refundId`, the unique identifier for the refund request, and `depositId`, the unique identifier of the original deposit transaction to be refunded.
   *
   * @returns {Promise<RefundResponse | PawaPayNetworkResponse>} A promise that resolves to a `RefundResponse` object if the refund request is successfully processed.
   * The `RefundResponse` type should detail the outcome of the refund request. In case of an error during the request processing,
   * the promise resolves to an unknown type, with the error handled by the `networkHandler`'s error handling mechanism.
   */

  async createRefundRequest(refundData: any): Promise<RefundResponse | PawaPayNetworkResponse> {
    try {

      const response = await this.networkHandler.getInstance().post(
        this.baseEndpoint,
        {
          refundId: refundData.refundId,
          depositId: refundData.depositId
        }
      );

      this.logSuccess(response);
      return response.data;

    } catch (error: unknown) {
      this.logError(error);
      return this.networkHandler.handleErrors(error);
    }
  }

  /**
   * Asynchronously retrieves the status of a specific refund transaction by its unique identifier (refundId).
   * This method constructs the request URL using the refundId and makes a GET request to the service endpoint
   * to fetch the current status of the refund transaction. It provides a means to track the progress or outcome of refund requests.
   *
   * @param {string} refundId - The unique identifier for the refund transaction whose status is being queried.
   *
   * @returns {Promise<RefundTransaction | PawaPayNetworkResponse>} A promise that resolves to a `RefundTransaction` object if the refund status is successfully retrieved.
   * The `RefundTransaction` type is expected to contain comprehensive details about the refund transaction, including its current status.
   * If an error occurs during the retrieval process, the promise resolves to an unknown type. Errors are handled using the `networkHandler`'s error handling process.
   */

  async getRefundStatus(refundId: string): Promise<RefundTransaction | PawaPayNetworkResponse> {
    try {
      const endPoint = this.baseEndpoint + `/${refundId}`;
      const response = await this.networkHandler.getInstance().get(endPoint);

      this.logSuccess(response);
      return response.data;
    } catch (error: unknown) {
      this.logError(error);
      return this.networkHandler.handleErrors(error);
    }
  }

}
