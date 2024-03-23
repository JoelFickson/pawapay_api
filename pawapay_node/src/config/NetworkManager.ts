import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { autoInjectable, singleton } from "tsyringe";
import Constants from "@config/Constants";
import { PawaPayNetworkResponse } from "../types/PawaPayErrorResponse";

@autoInjectable()
@singleton()
class NetworkHandler {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    const pawaPayJwt = process.env.PAWAPAY_JWT;
    const environment = process.env.Node_ENV;

    const baseURL = environment === "production" ?
      Constants.URLs[Constants["_PAWA_PAY_PROD_URL"]] :
      Constants.URLs[Constants["_PAWA_PAY_SANDBOX_URL"]];

    const headers = {} as AxiosRequestHeaders;

    if (pawaPayJwt) {
      headers.Authorization = `Bearer ${pawaPayJwt}`;
    }

    this.axiosInstance = axios.create({
      baseURL,
      headers
    });

    this.setupInterceptors();
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  public handleErrors(error: unknown): PawaPayNetworkResponse {

    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    let errorObject = "{}";
    
    if (axios.isAxiosError(error) && error.response) {
      statusCode = error.response.status;

      try {
        const data = error.response.data as { message?: string; error?: string; };
        errorMessage = data.message || data.error || errorMessage;
        errorObject = JSON.stringify(data);
      } catch {

        errorMessage = "Failed to parse error response";
      }
    }

    return {
      errorMessage,
      statusCode,
      errorObject
    };
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.response.use(
      (response) =>
        new Promise((resolve) => {
          resolve(response);
        }),
      (error) =>
        new Promise((_, reject) => {
          reject(error);
        })
    );
  }
}

export default NetworkHandler;
