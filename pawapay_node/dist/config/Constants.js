"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Constants {
    static _PAWA_PAY_PROD_URL = Symbol("PAWA_PAY_PROD_URL");
    static _PAWA_PAY_SANDBOX_URL = Symbol("PAWA_PAY_SANDBOX_URL");
    static URLs = {
        [Constants._PAWA_PAY_PROD_URL]: "https://api.pawapay.cloud",
        [Constants._PAWA_PAY_SANDBOX_URL]: "https://api.sandbox.pawapay.cloud"
    };
}
exports.default = Constants;
//# sourceMappingURL=Constants.js.map