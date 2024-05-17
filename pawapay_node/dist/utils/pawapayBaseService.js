"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
let PawapayBaseService = class PawapayBaseService {
    formatPhoneNumber(phoneNumber) {
        return phoneNumber.replace(/^([+0])/, "");
    }
    /**
     * Checks if a given response is a PawaPayNetworkResponse.
     *
     * This function is a type guard that attempts to determine if an unknown input
     * conforms to the PawaPayNetworkResponse interface by checking for the presence
     * and type of specific properties. Specifically, it checks for the properties
     * `errorMessage`, `statusCode`, and `errorObject`, and verifies that these properties
     * are of the correct types (string for `errorMessage` and `errorObject`, and number
     * for `statusCode`).
     *
     * @param {unknown} response - The response object to check. Its type is unknown
     *                             to allow for any input, as the purpose of this function
     *                             is to perform runtime type checking.
     * @returns {response is PawaPayNetworkResponse} True if the input object matches
     *          the PawaPayNetworkResponse interface, otherwise false. This return type
     *          enables TypeScript's type narrowing, allowing the compiler to treat
     *          validated objects as being of type PawaPayNetworkResponse within conditional blocks.
     */
    isPawaPayErrorResponse(response) {
        if (typeof response === "object" && response !== null) {
            const hasErrorMessage = "errorMessage" in response && typeof response.errorMessage === "string";
            const hasStatusCode = "statusCode" in response && typeof response.statusCode === "number";
            const hasErrorObject = "errorObject" in response && typeof response.errorObject === "string";
            return hasErrorMessage && hasStatusCode && hasErrorObject;
        }
        return false;
    }
};
PawapayBaseService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    (0, tsyringe_1.singleton)()
], PawapayBaseService);
exports.default = PawapayBaseService;
//# sourceMappingURL=pawapayBaseService.js.map