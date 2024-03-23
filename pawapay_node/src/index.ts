import "reflect-metadata";
import { container } from "tsyringe";
import PaymentsPage from "@resources/payments_page";
import Refunds from "@resources/refunds";
import Deposits from "@resources/deposits";
import Payouts from "@resources/payouts";
import PawapayBaseService from "@utils/PawapayBaseService";

const pawaPaymentsPage = container.resolve(PaymentsPage);
const pawaPayRefunds = container.resolve(Refunds);
const pawaPayDeposits = container.resolve(Deposits);
const pawaPayPayouts = container.resolve(Payouts);
const pawapayBaseService = container.resolve(PawapayBaseService);

export * from "./types/Payments";
export * from "./types/Payout";

export {
  pawaPaymentsPage,
  pawaPayPayouts,
  pawaPayRefunds,
  pawaPayDeposits,
  pawapayBaseService
};

