import { AxiosInstance } from "axios";
import { PawaPayNetworkResponse } from "../types/pawaPayErrorResponse";
declare class NetworkHandler {
    private readonly axiosInstance;
    constructor();
    getInstance(): AxiosInstance;
    handleErrors(error: unknown): PawaPayNetworkResponse;
    private setupInterceptors;
}
export default NetworkHandler;
//# sourceMappingURL=networkManager.d.ts.map