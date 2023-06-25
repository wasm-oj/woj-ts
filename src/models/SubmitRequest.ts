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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SubmitRequest
 */
export interface SubmitRequest {
    /**
     * Problem ID
     * @type {string}
     * @memberof SubmitRequest
     */
    problem: string;
    /**
     * Source code
     * @type {string}
     * @memberof SubmitRequest
     */
    code: string;
    /**
     * Programming language of the source code
     * @type {string}
     * @memberof SubmitRequest
     */
    lang: SubmitRequestLangEnum;
}


/**
 * @export
 */
export const SubmitRequestLangEnum = {
    Rs: 'rs',
    C: 'c',
    Cpp: 'cpp'
} as const;
export type SubmitRequestLangEnum = typeof SubmitRequestLangEnum[keyof typeof SubmitRequestLangEnum];


/**
 * Check if a given object implements the SubmitRequest interface.
 */
export function instanceOfSubmitRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "problem" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "lang" in value;

    return isInstance;
}

export function SubmitRequestFromJSON(json: any): SubmitRequest {
    return SubmitRequestFromJSONTyped(json, false);
}

export function SubmitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubmitRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'problem': json['problem'],
        'code': json['code'],
        'lang': json['lang'],
    };
}

export function SubmitRequestToJSON(value?: SubmitRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'problem': value.problem,
        'code': value.code,
        'lang': value.lang,
    };
}
