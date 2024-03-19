import NetworkHandler from "@config/NetworkManager";
import {autoInjectable, singleton} from "tsyringe";
import {
    PawaPayPayoutTransaction,
    PaymentTransaction,
    PayoutTransaction,
    ResendCallbackResponse
} from "../../types/Payout";
import PawapayBaseService from "@utils/PawapayBaseService";

@autoInjectable()
@singleton()
class Deposits {

    readonly baseEndpoint;

    constructor(protected networkHandler: NetworkHandler, protected pawapayBaseService: PawapayBaseService) {
        this.baseEndpoint = '/deposits';
    }

    async sendDeposit(transaction: PayoutTransaction): Promise<PawaPayPayoutTransaction | unknown> {
        try {

            const phoneNumber = this.pawapayBaseService.formatPhoneNumber(transaction.phoneNumber);

            console.log('Sending payout to', phoneNumber, 'the amount of', transaction.amount, 'with payoutId', transaction.payoutId, 'and currency', transaction.currency);

            const response = await this.networkHandler.getInstance().post(
                this.baseEndpoint,
                {
                    payoutId: transaction.payoutId,
                    amount: transaction.amount.toString(),
                    currency: transaction.currency,
                    correspondent: transaction.correspondent,
                    recipient: {
                        type: 'MSISDN',
                        address: {value: phoneNumber}
                    },
                    customerTimestamp: new Date().toISOString(),
                    statementDescription: transaction.statementDescription
                }
            );

            return response.data;
        } catch (error: unknown) {
            this.networkHandler.handleErrors(error)

        }

    }

    async getDeposit(depositId: string): Promise<PaymentTransaction[] | unknown> {

        try {
            const endPoint = this.baseEndpoint + `/${depositId}`;
            const response = await this.networkHandler.getInstance().get(endPoint);

            return response.data;
        } catch (error) {
            this.networkHandler.handleErrors(error)
        }

    }


    async resendCallback(depositId: string): Promise<ResendCallbackResponse | unknown> {
        try {
            const {data} = await this.networkHandler.getInstance().post(`/deposits/resend-callback`, {
                depositId: depositId
            });

            return data;
        } catch (error: unknown) {
            this.networkHandler.handleErrors(error)
        }
    }

}

export default Deposits;