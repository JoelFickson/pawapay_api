import { Correspondent, MoMoCurrency } from "@utils/MoMoOps";

export interface PaymentTransaction {
  depositId: string;
  status: PaymentStatus;
  requestedAmount: string;
  depositedAmount: string;
  currency: MoMoCurrency;
  country: string;
  payer: Payer;
  correspondent: Correspondent;
  statementDescription: string;
  customerTimestamp: string;
  created: string;
  respondedByPayer: string;
  correspondentIds: { [key: string]: string };
  suspiciousActivityReport?: SuspiciousActivityReport[];
}

export interface Payer {
  type: string;
  address: {
    value: string;
  };
}

export interface SuspiciousActivityReport {
  activityType: string;
  comment: string;
}

export interface PaymentTransaction {
  depositId: string;
  status: PaymentStatus;
  requestedAmount: string;
  depositedAmount: string;
  currency: MoMoCurrency;
  country: string;
  payer: Payer;
  correspondent: Correspondent;
  statementDescription: string;
  customerTimestamp: string;
  created: string;
  respondedByPayer: string;
  correspondentIds: { [key: string]: string };
  suspiciousActivityReport?: SuspiciousActivityReport[];
}

export type CompletedTransaction = PaymentTransaction & {
  status: "COMPLETED";
};

export type AcceptedTransaction =
  Omit<PaymentTransaction, "depositedAmount" | "respondedByPayer" | "correspondentIds" | "suspiciousActivityReport">
  & {
  status: "ACCEPTED";
};

export type SubmittedTransaction =
  Omit<PaymentTransaction, "depositedAmount" | "respondedByPayer" | "correspondentIds" | "suspiciousActivityReport">
  & {
  status: "SUBMITTED";
};

export interface FailedTransaction extends Omit<PaymentTransaction, "suspiciousActivityReport"> {
  status: "FAILED";
  failureReason: {
    failureCode: string;
    failureMessage: string;
  };
}

export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED";

export enum PayoutStatus {
  ACCEPTED = "ACCEPTED",
  ENQUEUED = "ENQUEUED",
  REJECTED = "REJECTED",
  DUPLICATE_IGNORED = "DUPLICATE_IGNORED",
}

export type ResendCallbackResponseStatus = "ACCEPTED" | "REJECTED" | "FAILED";

export interface PawaPayPayoutTransaction {
  payoutId: string;
  status: PayoutStatus;
  created: string;
}

export interface PayoutTransaction {
  amount: string;
  phoneNumber: string;
  payoutId: string;
  currency: MoMoCurrency;
  correspondent: Correspondent;
  statementDescription: string;
  country: string;
  customerTimestamp?: string;
}

export interface ResendCallbackResponse {
  payoutId: string;
  status: ResendCallbackResponseStatus;
  rejectionReason?: string;
}

export interface RefundResponse {
  refundId: string;
  status: "ACCEPTED" | "REJECTED" | "DUPLICATE_IGNORED";
  created?: Date;
  rejectionReason?: {
    rejectionCode: "DEPOSIT_NOT_FOUND" | "DEPOSIT_NOT_COMPLETED" | "ALREADY_REFUNDED" | "IN_PROGRESS" | "INVALID_AMOUNT" | "AMOUNT_TOO_SMALL" | "AMOUNT_TOO_LARGE" | "PARAMETER_INVALID" | "INVALID_INPUT" | "REFUNDS_NOT_ALLOWED" | "CORRESPONDENT_TEMPORARILY_UNAVAILABLE";
    rejectionMessage: string;
  };
}

export interface RefundTransaction {
  refundId: string;
  status: "ACCEPTED" | "SUBMITTED" | "ENQUEUED" | "COMPLETED" | "FAILED",
  amount: string;
  currency: MoMoCurrency;
  country: string;
  correspondent: Correspondent;
  recipient: Payer;
  customerTimestamp: string;
  statementDescription?: string;
  created: string;
  receivedByRecipient?: string;
  correspondentIds?: { [key: string]: string };
  failureReason?: {
    failureCode: "BALANCE_INSUFFICIENT" | "RECIPIENT_NOT_FOUND" | "RECIPIENT_NOT_ALLOWED_TO_RECEIVE" | "OTHER_ERROR",
    failureMessage: string;
  }
}