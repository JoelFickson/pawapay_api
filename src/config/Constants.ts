export default class Constants {
    private static readonly _PAWA_PAY_PROD_URL = Symbol("PAWA_PAY_PROD_URL");
    private static readonly _PAWA_PAY_SANDBOX_URL = Symbol("PAWA_PAY_SANDBOX_URL");

    static readonly URLs = {
        [Constants._PAWA_PAY_PROD_URL]: "https://api.pawapay.cloud",
        [Constants._PAWA_PAY_SANDBOX_URL]: "https://api.sandbox.pawapay.cloud"
    }
}
