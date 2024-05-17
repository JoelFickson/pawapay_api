export declare enum MoMoCurrency {
    XOF = "XOF",
    XAF = "XAF",
    CDF = "CDF",
    GHS = "GHS",
    KES = "KES",
    MWK = "MWK",
    MZN = "MZN",
    NGN = "NGN",
    RWF = "RWF",
    SLE = "SLE",
    TZS = "TZS",
    UGX = "UGX",
    ZMW = "ZMW"
}
export declare enum Correspondent {
    "MTN_MOMO_BEN" = "MTN_MOMO_BEN",
    "MOOV_BEN" = "MOOV_BEN",
    "MTN_MOMO_CMR" = "MTN_MOMO_CMR",
    "ORANGE_CMR" = "ORANGE_CMR",
    "MTN_MOMO_CIV" = "MTN_MOMO_CIV",
    "ORANGE_CIV" = "ORANGE_CIV",
    "VODACOM_MPESA_COD" = "VODACOM_MPESA_COD",
    "AIRTEL_COD" = "AIRTEL_COD",
    "ORANGE_COD" = "ORANGE_COD",
    "MTN_MOMO_GHA" = "MTN_MOMO_GHA",
    "AIRTELTIGO_GHA" = "AIRTELTIGO_GHA",
    "VODAFONE_GHA" = "VODAFONE_GHA",
    "MPESA_KEN" = "MPESA_KEN",
    "AIRTEL_MWI" = "AIRTEL_MWI",
    "TNM_MWI" = "TNM_MWI",
    "VODACOM_MOZ" = "VODACOM_MOZ",
    "AIRTEL_NGA" = "AIRTEL_NGA",
    "MTN_MOMO_NGA" = "MTN_MOMO_NGA",
    "AIRTEL_RWA" = "AIRTEL_RWA",
    "MTN_MOMO_RWA" = "MTN_MOMO_RWA",
    "FREE_SEN" = "FREE_SEN",
    "ORANGE_SEN" = "ORANGE_SEN",
    "ORANGE_SLE" = "ORANGE_SLE",
    "AIRTEL_TZA" = "AIRTEL_TZA",
    "VODACOM_TZA" = "VODACOM_TZA",
    "TIGO_TZA" = "TIGO_TZA",
    "HALOTEL_TZA" = "HALOTEL_TZA",
    "AIRTEL_OAPI_UGA" = "AIRTEL_OAPI_UGA",
    "MTN_MOMO_UGA" = "MTN_MOMO_UGA",
    "AIRTEL_OAPI_ZMB" = "AIRTEL_OAPI_ZMB",
    "MTN_MOMO_ZMB" = "MTN_MOMO_ZMB",
    "ZAMTEL_ZMB" = "ZAMTEL_ZMB"
}
export declare const MoMoOperators: MoMoOperatorType[];
export type AirtelMalawi = Extract<MoMoOperatorType, {
    MNO: 'Airtel';
    Country: 'Malawi';
}>;
export type MoMoOperatorType = {
    MNO: string;
    Correspondent: string;
    Country: string;
    Currency: string;
};
//# sourceMappingURL=moMoOps.d.ts.map