import { autoInjectable, singleton } from "tsyringe";

@autoInjectable()
@singleton()
export default class PawapayBaseService {

  formatPhoneNumber(phoneNumber: string): string {
    return phoneNumber.replace(/^([+0])/, "");
  }

}