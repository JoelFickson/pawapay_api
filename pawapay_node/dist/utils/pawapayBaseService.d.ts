import { PawaPayNetworkResponse } from "../types/pawaPayErrorResponse";
export default class PawapayBaseService {
    formatPhoneNumber(phoneNumber: string): string;
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
    isPawaPayErrorResponse(response: unknown): response is PawaPayNetworkResponse;
}
//# sourceMappingURL=pawapayBaseService.d.ts.map