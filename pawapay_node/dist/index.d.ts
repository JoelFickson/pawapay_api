import "reflect-metadata";
import PaymentsPage from "./resources/payments_page";
import Refunds from "./resources/refunds";
import Deposits from "./resources/deposits";
import Payouts from "./resources/payouts";
import PawapayBaseService from "./utils/pawapayBaseService";
declare const pawaPaymentsPage: PaymentsPage;
declare const pawaPayRefunds: Refunds;
declare const pawaPayDeposits: Deposits;
declare const pawaPayPayouts: Payouts;
declare const pawapayBaseService: PawapayBaseService;
export * from "./types/payments";
export * from "./types/payout";
export { pawaPaymentsPage, pawaPayPayouts, pawaPayRefunds, pawaPayDeposits, pawapayBaseService };
//# sourceMappingURL=index.d.ts.map