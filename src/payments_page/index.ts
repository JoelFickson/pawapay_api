
import {InitiatePaymentResponse, PaymentData} from '../../types/Payments';
import NetworkHandler from "@config/NetworkManager";
import {autoInjectable, singleton} from "tsyringe";


@autoInjectable()
@singleton()
export default class PaymentsPage {


    readonly baseEndpoint;

    constructor(protected networkHandler: NetworkHandler) {
        this.baseEndpoint = 'v1/widget/sessions';
    }

    public async initiatePayment(paymentData: PaymentData): Promise<InitiatePaymentResponse | unknown> {
        try {
            const response = await this.networkHandler.getInstance()
                .post(this.baseEndpoint, {
                    depositId: paymentData.deposit_id,
                    amount: paymentData.price.toString(),
                    returnUrl: process.env.RETURN_URL,
                    country: paymentData.basePaymentCountryIso,
                    reason: paymentData.reason,
                });

            return {
                redirectUrl: response.data.redirectUrl,
                error: false,
            };
        } catch (error: unknown) {
            this.networkHandler.handleErrors(error)
        }
    }
}
