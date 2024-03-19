import NetworkHandler from "@config/NetworkManager";
import { PawaPayPayoutTransaction, PayoutTransaction } from "../../types/Payout";
import { autoInjectable, singleton } from "tsyringe";
import PawapayBaseService from "@utils/PawapayBaseService";

@autoInjectable()
@singleton()
class Payouts {

  readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler, protected pawapayBaseService: PawapayBaseService) {
    this.baseEndpoint = "/deposits";
  }

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

export default Payouts;