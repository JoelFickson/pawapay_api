import NetworkHandler from "@config/NetworkManager";
import { PawaPayPayoutTransaction, PayoutTransaction } from "../../types/Payout";
import { autoInjectable, singleton } from "tsyringe";
import PawapayBaseService from "@utils/PawapayBaseService";
import { PawaPayNetworkResponse } from "../../types/PawaPayErrorResponse";
import InternalLogger from "@utils/InternalLogger";

@autoInjectable()
@singleton()
export default class Payouts extends InternalLogger {

  private readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler, protected pawapayBaseService: PawapayBaseService) {
    super("Payouts");
    this.baseEndpoint = "/payouts";
  }

  /**
   * Sends a payout transaction to the specified endpoint, processing the transaction
   * details provided in the `transaction` parameter. It formats the phone number,
   * logs the transaction details for debugging, and handles the server response.
   *
   * @param {PayoutTransaction} transaction - The payout transaction object containing all the necessary information
   * for processing the payout. This includes:
   *  - `phoneNumber`: The recipient's phone number.
   *  - `amount`: The payout amount.
   *  - `payoutId`: A unique identifier for the payout.
   *  - `currency`: The currency code for the amount (e.g., USD, GBP).
   *  - `correspondent`: The correspondent code for the transaction.
   *  - `statementDescription`: A description for the statement.
   *
   * @returns {Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse>} A promise that resolves to the payout transaction response object
   * if the request is successful. The object includes all relevant details about the transaction response from the server.
   * In the case of an error, the promise resolves to an `unknown` type that represents the handled error response.
   *
   * @throws {PawaPayNetworkResponse} This method may throw an error if the request fails due to reasons such as network issues,
   * invalid transaction details, or server-side problems. Such errors are caught and handled by `networkHandler.handleErrors`.
   */
  async sendPayout(transaction: PayoutTransaction): Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse> {

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

      this.logSuccess(response);

      return response.data;
    } catch (error) {

      this.logError(error);

      return this.networkHandler.handleErrors(error);
    }

  }

  /**
   * Asynchronously processes a bulk payout transaction request by sending multiple payout transactions to the PawaPay service.
   * Each transaction is formatted according to the requirements before sending. This method is useful for processing multiple
   * payouts in a single operation, improving efficiency and reducing the number of individual requests.
   *
   * @param {PayoutTransaction[]} transactions - An array of `PayoutTransaction` objects representing the individual transactions to be processed in bulk.
   *
   * @returns {Promise<PawaPayPayoutTransaction[] | PawaPayNetworkResponse>} A promise that resolves to an array of `PawaPayPayoutTransaction` objects if the bulk payout is successfully processed.
   * Each object in the array represents the response for the corresponding payout transaction. If an error occurs during the process,
   * the promise resolves to an unknown type, and the error is handled by the `networkHandler`'s error handling method.
   */

  async sendBulkPayout(transactions: PayoutTransaction[]): Promise<PawaPayPayoutTransaction[] | PawaPayNetworkResponse> {
    try {

      const formattedTransactions = transactions.map(transaction => {
        return {
          payoutId: transaction.payoutId,
          amount: transaction.amount.toString(),
          currency: transaction.currency,
          correspondent: transaction.correspondent,
          recipient: {
            type: "MSISDN",
            address: { value: this.pawapayBaseService.formatPhoneNumber(transaction.phoneNumber) }
          },
          customerTimestamp: new Date().toISOString(),
          statementDescription: transaction.statementDescription
        };
      });

      const response = await this.networkHandler.getInstance().post(
        this.baseEndpoint,
        { formattedTransactions }
      );

      this.logSuccess(response);

      return response.data;
    } catch (error) {
      this.logError(error);
      return this.networkHandler.handleErrors(error);
    }
  }

  /**
   * Asynchronously retrieves the details of a specific payout transaction by its unique identifier (depositId).
   * This method constructs the request URL using the depositId and makes a GET request to the PawaPay service endpoint
   * to obtain the transaction details. It is designed to fetch information for individual payout transactions.
   *
   * @param {string} depositId - The unique identifier for the payout transaction whose details are being retrieved.
   *
   * @returns {Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse>} A promise that resolves to a `PawaPayPayoutTransaction` object if the payout details are successfully retrieved.
   * This object contains the details of the specified payout transaction. If an error occurs during the retrieval process,
   * the promise resolves to an unknown type. The method includes error handling that processes the error using the `networkHandler`'s error handling mechanism.
   */

  async getPayout(depositId: string): Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse> {
    try {
      const response = await this.networkHandler.getInstance().get(`${this.baseEndpoint}/${depositId}`);
      this.logSuccess(response);

      return response.data;
    } catch (error) {

      this.logError(error);
      return this.networkHandler.handleErrors(error);
    }
  }

}
