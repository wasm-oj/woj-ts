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
  GetSubmission200Response,
  ListSubmissions200Response,
  Login400Response,
  Submit200Response,
  SubmitRequest,
} from '../models/index';
import {
    GetSubmission200ResponseFromJSON,
    GetSubmission200ResponseToJSON,
    ListSubmissions200ResponseFromJSON,
    ListSubmissions200ResponseToJSON,
    Login400ResponseFromJSON,
    Login400ResponseToJSON,
    Submit200ResponseFromJSON,
    Submit200ResponseToJSON,
    SubmitRequestFromJSON,
    SubmitRequestToJSON,
} from '../models/index';

export interface GetSubmissionRequest {
    id: string;
}

export interface ListSubmissionsRequest {
    page?: string;
    lang?: string;
    problem?: string;
    status?: ListSubmissionsStatusEnum;
    submitter?: string;
}

export interface SubmitOperationRequest {
    submitRequest?: SubmitRequest;
}

/**
 * SubmissionApi - interface
 * 
 * @export
 * @interface SubmissionApiInterface
 */
export interface SubmissionApiInterface {
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmissionApiInterface
     */
    getSubmissionRaw(requestParameters: GetSubmissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSubmission200Response>>;

    /**
     */
    getSubmission(requestParameters: GetSubmissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSubmission200Response>;

    /**
     * 
     * @param {string} [page] 
     * @param {string} [lang] 
     * @param {string} [problem] 
     * @param {'running' | 'AC' | 'WA' | 'SLE' | 'MLE' | 'RE' | 'error'} [status] 
     * @param {string} [submitter] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmissionApiInterface
     */
    listSubmissionsRaw(requestParameters: ListSubmissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListSubmissions200Response>>;

    /**
     */
    listSubmissions(requestParameters: ListSubmissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListSubmissions200Response>;

    /**
     * 
     * @param {SubmitRequest} [submitRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmissionApiInterface
     */
    submitRaw(requestParameters: SubmitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Submit200Response>>;

    /**
     */
    submit(requestParameters: SubmitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Submit200Response>;

}

/**
 * 
 */
export class SubmissionApi extends runtime.BaseAPI implements SubmissionApiInterface {

    /**
     */
    async getSubmissionRaw(requestParameters: GetSubmissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSubmission200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSubmission.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/submission/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSubmission200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async getSubmission(requestParameters: GetSubmissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSubmission200Response> {
        const response = await this.getSubmissionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listSubmissionsRaw(requestParameters: ListSubmissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListSubmissions200Response>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.problem !== undefined) {
            queryParameters['problem'] = requestParameters.problem;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.submitter !== undefined) {
            queryParameters['submitter'] = requestParameters.submitter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/submission`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListSubmissions200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async listSubmissions(requestParameters: ListSubmissionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListSubmissions200Response> {
        const response = await this.listSubmissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async submitRaw(requestParameters: SubmitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Submit200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/submission`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubmitRequestToJSON(requestParameters.submitRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Submit200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async submit(requestParameters: SubmitOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Submit200Response> {
        const response = await this.submitRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ListSubmissionsStatusEnum = {
    Running: 'running',
    Ac: 'AC',
    Wa: 'WA',
    Sle: 'SLE',
    Mle: 'MLE',
    Re: 'RE',
    Error: 'error'
} as const;
export type ListSubmissionsStatusEnum = typeof ListSubmissionsStatusEnum[keyof typeof ListSubmissionsStatusEnum];
