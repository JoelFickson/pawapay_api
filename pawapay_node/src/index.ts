import "reflect-metadata";
import { container } from "tsyringe";
import PaymentsPage from "@resources/payments_page";
import Refunds from "@resources/refunds";
import Deposits from "@resources/deposits";
import Payouts from "@resources/payouts";
import PawapayBaseService from "@utils/pawapayBaseService";

const pawaPaymentsPage = container.resolve(PaymentsPage);

const pawaPayRefunds = container.resolve(Refunds);
const pawaPayDeposits = container.resolve(Deposits);
const pawaPayPayouts = container.resolve(Payouts);
const pawapayBaseService = container.resolve(PawapayBaseService);

export * from "types/payments";
export * from "types/payout";

export {
  pawaPaymentsPage,
  pawaPayPayouts,
  pawaPayRefunds,
  pawaPayDeposits,
  pawapayBaseService
};

