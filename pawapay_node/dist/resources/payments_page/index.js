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
const internalLogger_1 = __importDefault(require("../../utils/internalLogger"));
let PaymentsPage = class PaymentsPage {
    networkHandler;
    baseEndpoint;
    constructor(networkHandler) {
        this.networkHandler = networkHandler;
        this.baseEndpoint = "v1/widget/sessions";
    }
    /**
     * Initiates a payment process by sending payment data to v1/widget/sessions.
     * This method constructs the payment request and handles the response, returning
     * a URL to which the user can be redirected to complete the payment process.
     *
     * @param {PaymentData} paymentData - An object containing all necessary data for initiating the payment.
     * The `PaymentData` object should include:
     * - `deposit_id`: The ID of the deposit.
     * - `price`: The amount of the payment.
     * - `returnUrl`: The URL to which the user will be redirected after payment completion (can be specified in `.env` as `RETURN_URL`).
     * - `basePaymentCountryIso`: ISO country code representing the base country for the payment.
     * - `reason`: A text description of the reason for the payment.
     *
     * @returns {Promise<InitiatePaymentResponse | PawaPayNetworkResponse>} A promise that resolves to an object containing
     * the `redirectUrl` for the payment completion if successful, and an `error` flag set to `false`.
     * In case of failure, the promise may resolve to an `unknown` type or be rejected with an error.
     * It's recommended to handle errors appropriately in the calling context.
     *
     * @throws {PawaPayNetworkResponse} Throws an error if the request fails for reasons such as network issues,
     * invalid payment data, or server errors. `.
     */
    async initiatePayment(paymentData) {
        try {
            const response = await this.networkHandler.getInstance()
                .post(this.baseEndpoint, {
                depositId: paymentData.deposit_id,
                amount: paymentData.price.toString(),
                returnUrl: paymentData.returnUrl,
                country: paymentData.basePaymentCountryIso,
                reason: paymentData.reason
            });
            internalLogger_1.default.info("Sending payment initiation request for deposit:", paymentData.deposit_id, "with amount:", paymentData.price);
            return {
                redirectUrl: response.data.redirectUrl,
                error: false
            };
        }
        catch (error) {
            internalLogger_1.default.error("Payment initiation failed:", error);
            return this.networkHandler.handleErrors(error);
        }
    }
};
PaymentsPage = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [networkManager_1.default])
], PaymentsPage);
exports.default = PaymentsPage;
//# sourceMappingURL=index.js.map