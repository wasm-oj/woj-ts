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
 * @interface Submit200Response
 */
export interface Submit200Response {
    /**
     * Submission ID
     * @type {string}
     * @memberof Submit200Response
     */
    submissionId: string;
}

/**
 * Check if a given object implements the Submit200Response interface.
 */
export function instanceOfSubmit200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "submissionId" in value;

    return isInstance;
}

export function Submit200ResponseFromJSON(json: any): Submit200Response {
    return Submit200ResponseFromJSONTyped(json, false);
}

export function Submit200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Submit200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'submissionId': json['submission_id'],
    };
}

export function Submit200ResponseToJSON(value?: Submit200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'submission_id': value.submissionId,
    };
}

