import { autoInjectable, singleton } from "tsyringe";
import PawapayBaseService from "@utils/PawapayBaseService";
import NetworkHandler from "@config/NetworkManager";
import { RefundResponse, RefundTransaction } from "../../types/Payout";

@singleton()
@autoInjectable()
class Refunds {

  readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler, protected pawapayBaseService: PawapayBaseService) {
    this.baseEndpoint = "/refunds";
  }

  async createRefundRequest(refundData: any): Promise<RefundResponse | unknown> {
    try {

      const response = await this.networkHandler.getInstance().post(
        this.baseEndpoint,
        {
          refundId: refundData.refundId,
          depositId: refundData.depositId
        }
      );

      return response.data;

    } catch (error: unknown) {
      this.networkHandler.handleErrors(error);
    }
  }

  async getRefundStatus(refundId: string): Promise<RefundTransaction | unknown> {
    try {
      const endPoint = this.baseEndpoint + `/${refundId}`;
      const response = await this.networkHandler.getInstance().get(endPoint);

      return response.data;
    } catch (error: unknown) {
      this.networkHandler.handleErrors(error);
    }
  }

}

export default Refunds;