import NetworkHandler from "@config/NetworkManager";
import { PawaPayPayoutTransaction, PayoutTransaction } from "../../types/Payout";
import { autoInjectable, singleton } from "tsyringe";
import PawapayBaseService from "@utils/PawapayBaseService";

@autoInjectable()
@singleton()
export default class Payouts {

  private readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler, protected pawapayBaseService: PawapayBaseService) {
    this.baseEndpoint = "/deposits";
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
   * @returns {Promise<PawaPayPayoutTransaction | unknown>} A promise that resolves to the payout transaction response object
   * if the request is successful. The object includes all relevant details about the transaction response from the server.
   * In the case of an error, the promise resolves to an `unknown` type that represents the handled error response.
   *
   * @throws {Error} This method may throw an error if the request fails due to reasons such as network issues,
   * invalid transaction details, or server-side problems. Such errors are caught and handled by `networkHandler.handleErrors`.
   *
   * @example
   * const payoutTransaction = {
   *   phoneNumber: "265993456789",
   *   amount: 100,
   *   payoutId: "unique_payout_id",
   *   currency: "MWK",
   *   correspondent: "correspondent_code",
   *   statementDescription: "Payout for services rendered"
   * };
   *
   * sendPayout(payoutTransaction)
   *   .then(response => console.log("Payout successful:", response))
   *   .catch(error => console.error("Payout failed:", error));
   */
  async sendPayout(transaction: PayoutTransaction): Promise<PawaPayPayoutTransaction | unknown> {

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

      return response.data;
    } catch (error) {

      return this.networkHandler.handleErrors(error);
    }

  }

  async sendBulkPayout(transactions: PayoutTransaction[]): Promise<PawaPayPayoutTransaction[] | unknown> {
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

      return response.data;
    } catch (error) {
      return this.networkHandler.handleErrors(error);
    }
  }

  async getPayout(depositId: string): Promise<PawaPayPayoutTransaction | unknown> {
    try {
      const response = await this.networkHandler.getInstance().get(`${this.baseEndpoint}/${depositId}`);
      return response.data;
    } catch (error) {
      return this.networkHandler.handleErrors(error);
    }
  }

}
