export type MoMoCurrency = "XOF" | "XAF" | "CDF" | "GHS" | "KES" | "MWK" | "MZN" | "NGN" | "RWF" | "SLE" | "TZS" | "UGX" | "ZMW";
export type Correspondent = "MTN_MOMO_BEN" | "MOOV_BEN" | "MTN_MOMO_CMR" | "ORANGE_CMR" | "MTN_MOMO_CIV" | "ORANGE_CIV" | "VODACOM_MPESA_COD" | "AIRTEL_COD" | "ORANGE_COD" | "MTN_MOMO_GHA" | "AIRTELTIGO_GHA" | "VODAFONE_GHA" | "MPESA_KEN" | "AIRTEL_MWI" | "TNM_MWI" | "VODACOM_MOZ" | "AIRTEL_NGA" | "MTN_MOMO_NGA" | "AIRTEL_RWA" | "MTN_MOMO_RWA" | "FREE_SEN" | "ORANGE_SEN" | "ORANGE_SLE" | "AIRTEL_TZA" | "VODACOM_TZA" | "TIGO_TZA" | "HALOTEL_TZA" | "AIRTEL_OAPI_UGA" | "MTN_MOMO_UGA" | "AIRTEL_OAPI_ZMB" | "MTN_MOMO_ZMB" | "ZAMTEL_ZMB";
export type MoMoOperatorType = {
    MNO: string;
    Correspondent: Correspondent;
    Country: string;
    Currency: MoMoCurrency;
};
//# sourceMappingURL=moMoOps.d.ts.map