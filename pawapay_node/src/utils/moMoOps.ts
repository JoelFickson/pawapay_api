export enum MoMoCurrency {
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
    ZMW = "ZMW",
}

export enum Correspondent {
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

export const MoMoOperators: MoMoOperatorType[] = [
    {
        MNO: "MTN",
        Correspondent:Correspondent.MTN_MOMO_BEN,
        Country: "Benin",
        Currency: MoMoCurrency.XOF,

    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MOOV_BEN,
        Country: "Benin",
        Currency: MoMoCurrency.XOF,
    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_CMR,
        Country: "Cameroon",

        Currency: MoMoCurrency.XAF,
    },
    {
        MNO: "Orange",
        Correspondent: Correspondent.ORANGE_CMR,
        Country: "Cameroon",
        Currency: MoMoCurrency.XAF,
    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_CIV,
        Country: "Côte d'Ivoire",
        Currency: MoMoCurrency.XOF,
    },
    {
        MNO: "Orange",
        Correspondent: Correspondent.ORANGE_CIV,
        Country: "Côte d'Ivoire",
        Currency: MoMoCurrency.XOF,
    },
    {
        MNO: "Vodacom",
        Correspondent: Correspondent.VODACOM_MPESA_COD,
        Country: "Democratic Republic of the Congo",
        Currency: MoMoCurrency.CDF,
    },
    {
        MNO: "Airtel",
        Correspondent: Correspondent.AIRTEL_COD,
        Country: "Democratic Republic of the Congo",
        Currency: MoMoCurrency.CDF,
    },
    {
        MNO: "Orange",
        Correspondent: Correspondent.ORANGE_COD,
        Country: "Democratic Republic of the Congo",
        Currency: MoMoCurrency.CDF,
    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_GHA,
        Country: "Ghana",

        Currency: MoMoCurrency.GHS,
    },
    {
        MNO: "AT",
        Correspondent: Correspondent.AIRTELTIGO_GHA,
        Country: "Ghana",
        Currency: MoMoCurrency.GHS,
    },
    {
        MNO: "Vodafone",
        Correspondent: Correspondent.VODAFONE_GHA,
        Country: "Ghana",
        Currency: MoMoCurrency.GHS,
    },
    {
        MNO: "MPesa",
        Correspondent: Correspondent.MPESA_KEN,
        Country: "Kenya",
        Currency: MoMoCurrency.KES,
    },
    {
        MNO: "Airtel",
        Correspondent: Correspondent.AIRTEL_MWI,
        Country: "Malawi",
        Currency: MoMoCurrency.MWK,
    },
    {
        MNO: "TNM",
        Correspondent: Correspondent.TNM_MWI,
        Country: "Malawi",
        Currency: MoMoCurrency.MWK,
    },
    {
        MNO: "Vodacom",
        Correspondent: Correspondent.VODACOM_MOZ,
        Country: "Mozambique",
        Currency: MoMoCurrency.MZN,
    },
    {
        MNO: "Airtel",
        Correspondent: Correspondent.AIRTEL_NGA,
        Country: "Nigeria",
        Currency: MoMoCurrency.NGN,
    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_NGA,
        Country: "Nigeria",
        Currency: MoMoCurrency.NGN,
    },
    {
        MNO: "Airtel",
        Correspondent: Correspondent.AIRTEL_RWA,
        Country: "Rwanda",
        Currency: MoMoCurrency.RWF,
    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_RWA,
        Country: "Rwanda",
        Currency: MoMoCurrency.RWF,
    },
    {
        MNO: "Free",
        Correspondent: Correspondent.FREE_SEN,
        Country: "Senegal",
        Currency: MoMoCurrency.XOF,
    },
    {
        MNO: "Orange",
        Correspondent: Correspondent.ORANGE_SEN,
        Country: "Senegal",
        Currency: MoMoCurrency.XOF,
    },
    {
        MNO: "Orange",
        Correspondent: Correspondent.ORANGE_SLE,
        Country: "Sierra Leone",

        Currency: MoMoCurrency.SLE,
    },
    {
        MNO: "Airtel",
        Correspondent: Correspondent.AIRTEL_TZA,
        Country: "Tanzania",
        Currency: MoMoCurrency.TZS,
    },
    {
        MNO: "Vodacom",
        Correspondent: Correspondent.VODACOM_TZA,
        Country: "Tanzania",
        Currency: MoMoCurrency.TZS,
    },
    {
        MNO: "Tigo",
        Correspondent: Correspondent.TIGO_TZA,
        Country: "Tanzania",
        Currency: MoMoCurrency.TZS,
    },
    {
        MNO: "Halotel",
        Correspondent: Correspondent.HALOTEL_TZA,
        Country: "Tanzania",
        Currency: MoMoCurrency.TZS,
    },
    {
        MNO: "Airtel",
        Correspondent: Correspondent.AIRTEL_OAPI_UGA,
        Country: "Uganda",
        Currency: MoMoCurrency.UGX,
    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_UGA,
        Country: "Uganda",
        Currency: MoMoCurrency.UGX,
    },
    {
        MNO: "Airtel",
        Correspondent: Correspondent.AIRTEL_OAPI_ZMB,
        Country: "Zambia",
        Currency: MoMoCurrency.ZMW,
    },
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_ZMB,
        Country: "Zambia",
        Currency: MoMoCurrency.ZMW,
    },
    {
        MNO: "Zamtel",
        Correspondent: Correspondent.ZAMTEL_ZMB,
        Country: "Zambia",
        Currency: MoMoCurrency.ZMW,
    },
];


export type AirtelMalawi = Extract<MoMoOperatorType, { MNO: 'Airtel', Country: 'Malawi' }>;


export type MoMoOperatorType = {
    MNO: string;
    Correspondent: string;
    Country: string;
    Currency: string;
};