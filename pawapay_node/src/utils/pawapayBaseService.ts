import { autoInjectable, singleton } from "tsyringe";
import { PawaPayNetworkResponse } from "types/pawaPayErrorResponse";

@autoInjectable()
@singleton()
export default class PawapayBaseService {

  formatPhoneNumber(phoneNumber: string): string {
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
  isPawaPayErrorResponse(response: unknown): response is PawaPayNetworkResponse {

    if (typeof response === "object" && response !== null) {

      const hasErrorMessage = "errorMessage" in response && typeof (response as any).errorMessage === "string";
      const hasStatusCode = "statusCode" in response && typeof (response as any).statusCode === "number";
      const hasErrorObject = "errorObject" in response && typeof (response as any).errorObject === "string";

      return hasErrorMessage && hasStatusCode && hasErrorObject;
    }

    return false;
  }

}