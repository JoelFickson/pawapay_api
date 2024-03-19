use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub enum MoMoCurrency {
    XOF,
    XAF,
    CDF,
    GHS,
    KES,
    MWK,
    MZN,
    NGN,
    RWF,
    SLE,
    TZS,
    UGX,
    ZMW,
}


#[derive(Debug, Serialize, Deserialize)]
pub enum Correspondent {
    MTN_MOMO_BEN,
    MOOV_BEN,
    MTN_MOMO_CMR,
    ORANGE_CMR,
    MTN_MOMO_CIV,
    ORANGE_CIV,
    AIRTEL_COD,
    ORANGE_COD,
    MTN_MOMO_GHA,
    AIRTELTIGO_GHA,
    VODAFONE_GHA,
    MPESA_KEN,
    AIRTEL_MWI,
    TNM_MWI,
    VODACOM_MOZ,
    AIRTEL_NGA,
    MTN_MOMO_NGA,
    AIRTEL_RWA,
    MTN_MOMO_RWA,
    FREE_SEN,
    ORANGE_SEN,
    ORANGE_SLE,
    AIRTEL_TZA,
    VODACOM_TZA,
    TIGO_TZA,
    HALOTEL_TZA,
    AIRTEL_OAPI_UGA,
    MTN_MOMO_UGA,
    AIRTEL_OAPI_ZMB,
    MTN_MOMO_ZMB,
    ZAMTEL_ZMB,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PayoutTransaction {
    pub amount: String,
    pub phone_number: String,
    pub payout_id: String,
    pub currency: MoMoCurrency,
    pub correspondent: Correspondent,
    pub statement_description: String,
    pub country: String,
    pub customer_timestamp: Option<String>,
}


#[derive(Debug, Serialize, Deserialize)]
pub enum PaymentStatus {
    PENDING,
    COMPLETED,
    FAILED,
    CANCELLED,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum PayoutStatus {
    ACCEPTED,
    ENQUEUED,
    REJECTED,
    DUPLICATE_IGNORED,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum ResendCallbackResponseStatus {
    ACCEPTED,
    REJECTED,
    FAILED,
}


#[derive(Debug, Serialize, Deserialize)]
pub struct Payer {
    pub r#type: String,
    pub address: Address,
}


#[derive(Debug, Serialize, Deserialize)]
pub struct SuspiciousActivityReport {
    pub activity_type: String,
    pub comment: String,
}


#[derive(Debug, Serialize, Deserialize)]
pub struct PaymentTransaction {
    pub deposit_id: String,
    pub status: PaymentStatus,
    pub requested_amount: String,
    pub deposited_amount: String,
    pub currency: MoMoCurrency,
    pub country: String,
    pub payer: Payer,
    pub correspondent: Correspondent,
    pub statement_description: String,
    pub customer_timestamp: String,
    pub created: String,
    pub responded_by_payer: String,
    pub correspondent_ids: HashMap<String, String>,
    pub suspicious_activity_report: Option<Vec<SuspiciousActivityReport>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PawaPayPayoutTransaction {
    pub payoutId: String,
    pub status: PayoutStatus,
    pub created: string,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ResendCallbackResponse {
    pub payoutId: String,
    pub status: ResendCallbackResponseStatus,
    pub rejectionReason: Option<String>,
}


#[derive(Debug, Serialize, Deserialize)]
pub enum RejectionCode {
    DEPOSIT_NOT_FOUND,
    DEPOSIT_NOT_COMPLETED,
    ALREADY_REFUNDED,
    IN_PROGRESS,
    INVALID_AMOUNT,
    AMOUNT_TOO_SMALL,
    AMOUNT_TOO_LARGE,
    PARAMETER_INVALID,
    INVALID_INPUT,
    REFUNDS_NOT_ALLOWED,
    CORRESPONDENT_TEMPORARILY_UNAVAILABLE,

}

#[derive(Debug, Serialize, Deserialize)]
pub struct RejectionReason {
    pub rejectionCode: RejectionCode,
    pub rejectionMessage: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RefundResponse {
    pub refundId: String,
    pub status: String,
    pub created: String,
    pub rejectionReason: Option<RejectionReason>,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum FailureCode {
    BALANCE_INSUFFICIENT,
    RECIPIENT_NOT_FOUND,
    RECIPIENT_NOT_ALLOWED_TO_RECEIVE,
    OTHER_ERROR,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FailureReason {
    pub failureCode: FailureCode,
    pub failureMessage: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RefundTransaction {
    pub refundId: String,
    pub status: String,
    pub amount: String,
    pub currency: MoMoCurrency,
    pub country: String,
    pub correspondent: Correspondent,
    pub recipient: Payer,
    pub customerTimestamp: String,
    pub statementDescription: Option<String>,
    pub created: String,
    pub receivedByRecipient: Option<String>,
    pub correspondentIds: Option<HashMap<String, String>>,
    pub failureReason: Option<FailureReason>,
}



