"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pawapayBaseService = exports.pawaPayDeposits = exports.pawaPayRefunds = exports.pawaPayPayouts = exports.pawaPaymentsPage = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const payments_page_1 = __importDefault(require("./resources/payments_page"));
const refunds_1 = __importDefault(require("./resources/refunds"));
const deposits_1 = __importDefault(require("./resources/deposits"));
const payouts_1 = __importDefault(require("./resources/payouts"));
const pawapayBaseService_1 = __importDefault(require("./utils/pawapayBaseService"));
const pawaPaymentsPage = tsyringe_1.container.resolve(payments_page_1.default);
exports.pawaPaymentsPage = pawaPaymentsPage;
const pawaPayRefunds = tsyringe_1.container.resolve(refunds_1.default);
exports.pawaPayRefunds = pawaPayRefunds;
const pawaPayDeposits = tsyringe_1.container.resolve(deposits_1.default);
exports.pawaPayDeposits = pawaPayDeposits;
const pawaPayPayouts = tsyringe_1.container.resolve(payouts_1.default);
exports.pawaPayPayouts = pawaPayPayouts;
const pawapayBaseService = tsyringe_1.container.resolve(pawapayBaseService_1.default);
exports.pawapayBaseService = pawapayBaseService;
__exportStar(require("./types/payments"), exports);
__exportStar(require("./types/payout"), exports);
//# sourceMappingURL=index.js.map