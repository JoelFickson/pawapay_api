"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const tsyringe_1 = require("tsyringe");
const Constants_1 = __importDefault(require("./Constants"));
const internalLogger_1 = __importDefault(require("../utils/internalLogger"));
let NetworkHandler = class NetworkHandler {
    axiosInstance;
    constructor() {
        const pawaPayJwt = process.env.PAWAPAY_JWT;
        const environment = process.env.Node_ENV;
        const baseURL = environment === "production" ?
            Constants_1.default.URLs[Constants_1.default["_PAWA_PAY_PROD_URL"]] :
            Constants_1.default.URLs[Constants_1.default["_PAWA_PAY_SANDBOX_URL"]];
        const headers = {};
        if (pawaPayJwt) {
            headers.Authorization = `Bearer ${pawaPayJwt}`;
        }
        this.axiosInstance = axios_1.default.create({
            baseURL,
            headers
        });
        this.setupInterceptors();
    }
    getInstance() {
        return this.axiosInstance;
    }
    handleErrors(error) {
        internalLogger_1.default.error("Error occurred " + error);
        let errorMessage = "An unknown error occurred";
        let statusCode = 500;
        let errorObject = "{}";
        if (axios_1.default.isAxiosError(error) && error.response) {
            statusCode = error.response.status;
            try {
                const data = error.response.data;
                errorMessage = data.message || data.error || errorMessage;
                errorObject = JSON.stringify(data);
            }
            catch {
                errorMessage = "Failed to parse error response";
            }
        }
        return {
            errorMessage,
            statusCode,
            errorObject
        };
    }
    setupInterceptors() {
        this.axiosInstance.interceptors.response.use((response) => new Promise((resolve) => {
            resolve(response);
        }), (error) => {
            return new Promise((_, reject) => {
                reject(error);
            });
        });
    }
};
NetworkHandler = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], NetworkHandler);
exports.default = NetworkHandler;
//# sourceMappingURL=networkManager.js.map