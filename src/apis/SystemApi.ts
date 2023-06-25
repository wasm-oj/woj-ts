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
  Login400Response,
  System200Response,
} from '../models/index';
import {
    Login400ResponseFromJSON,
    Login400ResponseToJSON,
    System200ResponseFromJSON,
    System200ResponseToJSON,
} from '../models/index';

/**
 * SystemApi - interface
 * 
 * @export
 * @interface SystemApiInterface
 */
export interface SystemApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApiInterface
     */
    systemRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<System200Response>>;

    /**
     */
    system(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<System200Response>;

}

/**
 * 
 */
export class SystemApi extends runtime.BaseAPI implements SystemApiInterface {

    /**
     */
    async systemRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<System200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/sys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => System200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async system(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<System200Response> {
        const response = await this.systemRaw(initOverrides);
        return await response.value();
    }

}
