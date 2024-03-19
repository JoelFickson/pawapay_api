import { autoInjectable, singleton } from "tsyringe";

@autoInjectable()
@singleton()
class PawapayBaseService {

  formatPhoneNumber(phoneNumber: string): string {

    return phoneNumber.replace(/^([+0])/, "");

  }

}

export default PawapayBaseService;