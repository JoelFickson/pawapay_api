import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import {autoInjectable, singleton} from "tsyringe";
import Constants from "@config/Constants";


@autoInjectable()
@singleton()
class NetworkHandler {
    private readonly axiosInstance: AxiosInstance;

    constructor() {
        const pawaPayJwt = process.env.PAWAPAY_JWT;
        const environment = process.env.Node_ENV;

        const baseURL = environment === 'production' ?
            Constants.URLs[Constants["_PAWA_PAY_PROD_URL"]] :
            Constants.URLs[Constants["_PAWA_PAY_SANDBOX_URL"]]


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

    public  handleErrors(error: unknown): unknown{

        return error;
    }
}

export default NetworkHandler;
