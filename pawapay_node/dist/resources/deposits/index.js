"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const networkManager_1 = __importDefault(require("../../config/networkManager"));
const tsyringe_1 = require("tsyringe");
const pawapayBaseService_1 = __importDefault(require("../../utils/pawapayBaseService"));
const internalLogger_1 = __importDefault(require("../../utils/internalLogger"));
let Deposits = class Deposits {
    networkHandler;
    pawapayBaseService;
    baseEndpoint;
    constructor(networkHandler, pawapayBaseService) {
        this.networkHandler = networkHandler;
        this.pawapayBaseService = pawapayBaseService;
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
    async sendDeposit(transaction) {
        try {
            const phoneNumber = this.pawapayBaseService.formatPhoneNumber(transaction.phoneNumber);
            internalLogger_1.default.info("Sending payout to", phoneNumber, "the amount of", transaction.amount, "with payoutId", transaction.payoutId, "and currency", transaction.currency);
            const response = await this.networkHandler.getInstance().post(this.baseEndpoint, {
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
            });
            internalLogger_1.default.info("Payout transaction successful:", response.data);
            return response.data;
        }
        catch (error) {
            internalLogger_1.default.error("Payout transaction failed:", error);
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
    async getDeposit(depositId) {
        try {
            const endPoint = this.baseEndpoint + `/${depositId}`;
            const response = await this.networkHandler.getInstance().get(endPoint);
            internalLogger_1.default.info("Deposit details retrieved successfully:", response.data);
            return response.data;
        }
        catch (error) {
            internalLogger_1.default.error("Payout transaction failed:", error);
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
    async resendCallback(depositId) {
        try {
            const { data } = await this.networkHandler.getInstance().post(`/deposits/resend-callback`, {
                depositId: depositId
            });
            internalLogger_1.default.info("RESPONSE", data);
            return data;
        }
        catch (error) {
            internalLogger_1.default.error("ERROR", error);
            return this.networkHandler.handleErrors(error);
        }
    }
};
Deposits = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [networkManager_1.default, pawapayBaseService_1.default])
], Deposits);
exports.default = Deposits;
//# sourceMappingURL=index.js.map