import { autoInjectable, singleton } from "tsyringe";
import NetworkHandler from "@config/NetworkManager";
import { RefundResponse, RefundTransaction } from "../../types/Payout";

@singleton()
@autoInjectable()
export default class Refunds {

  private readonly baseEndpoint;

  constructor(protected networkHandler: NetworkHandler) {
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
