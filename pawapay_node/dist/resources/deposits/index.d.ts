import NetworkHandler from "../../config/networkManager";
import PawapayBaseService from "../../utils/pawapayBaseService";
import { PawaPayPayoutTransaction, PaymentTransaction, PayoutTransaction, ResendCallbackResponse } from "../../types/payout";
import { PawaPayNetworkResponse } from "../../types/pawaPayErrorResponse";
export default class Deposits {
    protected networkHandler: NetworkHandler;
    protected pawapayBaseService: PawapayBaseService;
    private readonly baseEndpoint;
    constructor(networkHandler: NetworkHandler, pawapayBaseService: PawapayBaseService);
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
    sendDeposit(transaction: PayoutTransaction): Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse>;
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
    getDeposit(depositId: string): Promise<PaymentTransaction[] | PawaPayNetworkResponse>;
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
    resendCallback(depositId: string): Promise<ResendCallbackResponse | PawaPayNetworkResponse>;
}
//# sourceMappingURL=index.d.ts.map