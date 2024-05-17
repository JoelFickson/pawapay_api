"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoMoOperators = exports.Correspondent = exports.MoMoCurrency = void 0;
var MoMoCurrency;
(function (MoMoCurrency) {
    MoMoCurrency["XOF"] = "XOF";
    MoMoCurrency["XAF"] = "XAF";
    MoMoCurrency["CDF"] = "CDF";
    MoMoCurrency["GHS"] = "GHS";
    MoMoCurrency["KES"] = "KES";
    MoMoCurrency["MWK"] = "MWK";
    MoMoCurrency["MZN"] = "MZN";
    MoMoCurrency["NGN"] = "NGN";
    MoMoCurrency["RWF"] = "RWF";
    MoMoCurrency["SLE"] = "SLE";
    MoMoCurrency["TZS"] = "TZS";
    MoMoCurrency["UGX"] = "UGX";
    MoMoCurrency["ZMW"] = "ZMW";
})(MoMoCurrency || (exports.MoMoCurrency = MoMoCurrency = {}));
var Correspondent;
(function (Correspondent) {
    Correspondent["MTN_MOMO_BEN"] = "MTN_MOMO_BEN";
    Correspondent["MOOV_BEN"] = "MOOV_BEN";
    Correspondent["MTN_MOMO_CMR"] = "MTN_MOMO_CMR";
    Correspondent["ORANGE_CMR"] = "ORANGE_CMR";
    Correspondent["MTN_MOMO_CIV"] = "MTN_MOMO_CIV";
    Correspondent["ORANGE_CIV"] = "ORANGE_CIV";
    Correspondent["VODACOM_MPESA_COD"] = "VODACOM_MPESA_COD";
    Correspondent["AIRTEL_COD"] = "AIRTEL_COD";
    Correspondent["ORANGE_COD"] = "ORANGE_COD";
    Correspondent["MTN_MOMO_GHA"] = "MTN_MOMO_GHA";
    Correspondent["AIRTELTIGO_GHA"] = "AIRTELTIGO_GHA";
    Correspondent["VODAFONE_GHA"] = "VODAFONE_GHA";
    Correspondent["MPESA_KEN"] = "MPESA_KEN";
    Correspondent["AIRTEL_MWI"] = "AIRTEL_MWI";
    Correspondent["TNM_MWI"] = "TNM_MWI";
    Correspondent["VODACOM_MOZ"] = "VODACOM_MOZ";
    Correspondent["AIRTEL_NGA"] = "AIRTEL_NGA";
    Correspondent["MTN_MOMO_NGA"] = "MTN_MOMO_NGA";
    Correspondent["AIRTEL_RWA"] = "AIRTEL_RWA";
    Correspondent["MTN_MOMO_RWA"] = "MTN_MOMO_RWA";
    Correspondent["FREE_SEN"] = "FREE_SEN";
    Correspondent["ORANGE_SEN"] = "ORANGE_SEN";
    Correspondent["ORANGE_SLE"] = "ORANGE_SLE";
    Correspondent["AIRTEL_TZA"] = "AIRTEL_TZA";
    Correspondent["VODACOM_TZA"] = "VODACOM_TZA";
    Correspondent["TIGO_TZA"] = "TIGO_TZA";
    Correspondent["HALOTEL_TZA"] = "HALOTEL_TZA";
    Correspondent["AIRTEL_OAPI_UGA"] = "AIRTEL_OAPI_UGA";
    Correspondent["MTN_MOMO_UGA"] = "MTN_MOMO_UGA";
    Correspondent["AIRTEL_OAPI_ZMB"] = "AIRTEL_OAPI_ZMB";
    Correspondent["MTN_MOMO_ZMB"] = "MTN_MOMO_ZMB";
    Correspondent["ZAMTEL_ZMB"] = "ZAMTEL_ZMB";
})(Correspondent || (exports.Correspondent = Correspondent = {}));
exports.MoMoOperators = [
    {
        MNO: "MTN",
        Correspondent: Correspondent.MTN_MOMO_BEN,
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
//# sourceMappingURL=moMoOps.js.map