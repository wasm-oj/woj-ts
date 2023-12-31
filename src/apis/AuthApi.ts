/* tslint:disable */
/* eslint-disable */
/**
 * WASM OJ Wonderland API
 * You can interact with WASM OJ Wonderland through this API
 *
 * The version of the OpenAPI document: 0.0.4
 * Contact: jacob@csie.cool
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Auth200Response,
  Login200Response,
  Login400Response,
  LoginRequest,
  Me200Response,
} from '../models/index';
import {
    Auth200ResponseFromJSON,
    Auth200ResponseToJSON,
    Login200ResponseFromJSON,
    Login200ResponseToJSON,
    Login400ResponseFromJSON,
    Login400ResponseToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    Me200ResponseFromJSON,
    Me200ResponseToJSON,
} from '../models/index';

export interface AuthRequest {
    token: string;
}

export interface LoginOperationRequest {
    loginRequest?: LoginRequest;
}

/**
 * AuthApi - interface
 * 
 * @export
 * @interface AuthApiInterface
 */
export interface AuthApiInterface {
    /**
     * 
     * @param {string} token 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authRaw(requestParameters: AuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Auth200Response>>;

    /**
     */
    auth(requestParameters: AuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Auth200Response>;

    /**
     * 
     * @param {LoginRequest} [loginRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    loginRaw(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Login200Response>>;

    /**
     */
    login(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Login200Response>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    meRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Me200Response>>;

    /**
     */
    me(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Me200Response>;

}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI implements AuthApiInterface {

    /**
     */
    async authRaw(requestParameters: AuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Auth200Response>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling auth.');
        }

        const queryParameters: any = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/auth`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Auth200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async auth(requestParameters: AuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Auth200Response> {
        const response = await this.authRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async loginRaw(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Login200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/send`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters.loginRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Login200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async login(requestParameters: LoginOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Login200Response> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async meRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Me200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Me200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async me(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Me200Response> {
        const response = await this.meRaw(initOverrides);
        return await response.value();
    }

}
