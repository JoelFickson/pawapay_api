import NetworkHandler from "../../config/networkManager";
import { PawaPayPayoutTransaction, PayoutTransaction } from "../../types/payout";
import PawapayBaseService from "../../utils/pawapayBaseService";
import { PawaPayNetworkResponse } from "../../types/pawaPayErrorResponse";
export default class Payouts {
    protected networkHandler: NetworkHandler;
    protected pawapayBaseService: PawapayBaseService;
    private readonly baseEndpoint;
    constructor(networkHandler: NetworkHandler, pawapayBaseService: PawapayBaseService);
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
    sendPayout(transaction: PayoutTransaction): Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse>;
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
    sendBulkPayout(transactions: PayoutTransaction[]): Promise<PawaPayPayoutTransaction[] | PawaPayNetworkResponse>;
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
    getPayout(depositId: string): Promise<PawaPayPayoutTransaction | PawaPayNetworkResponse>;
}
//# sourceMappingURL=index.d.ts.map