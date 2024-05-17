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
const tsyringe_1 = require("tsyringe");
const networkManager_1 = __importDefault(require("../../config/networkManager"));
const internalLogger_1 = __importDefault(require("../../utils/internalLogger"));
let Refunds = class Refunds {
    networkHandler;
    baseEndpoint;
    constructor(networkHandler) {
        this.networkHandler = networkHandler;
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
    async createRefundRequest(refundData) {
        try {
            const response = await this.networkHandler.getInstance().post(this.baseEndpoint, {
                refundId: refundData.refundId,
                depositId: refundData.depositId
            });
            internalLogger_1.default.info("Sending refund request for deposit: " + refundData.depositId + "with refundId: " + refundData.refundId);
            return response.data;
        }
        catch (error) {
            internalLogger_1.default.error("Refund request failed: " + error);
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
    async getRefundStatus(refundId) {
        try {
            const endPoint = this.baseEndpoint + `/${refundId}`;
            const response = await this.networkHandler.getInstance().get(endPoint);
            internalLogger_1.default.info("Refund details retrieved successfully: " + response.data);
            return response.data;
        }
        catch (error) {
            internalLogger_1.default.error("Refund transaction failed: " + error);
            return this.networkHandler.handleErrors(error);
        }
    }
};
Refunds = __decorate([
    (0, tsyringe_1.singleton)(),
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [networkManager_1.default])
], Refunds);
exports.default = Refunds;
//# sourceMappingURL=index.js.map