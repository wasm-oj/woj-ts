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
 * @interface GetProblem200ResponseProblemPolicyInner
 */
export interface GetProblem200ResponseProblemPolicyInner {
    /**
     * 
     * @type {number}
     * @memberof GetProblem200ResponseProblemPolicyInner
     */
    budget: number;
    /**
     * 
     * @type {number}
     * @memberof GetProblem200ResponseProblemPolicyInner
     */
    memory: number;
    /**
     * 
     * @type {number}
     * @memberof GetProblem200ResponseProblemPolicyInner
     */
    score: number;
}

/**
 * Check if a given object implements the GetProblem200ResponseProblemPolicyInner interface.
 */
export function instanceOfGetProblem200ResponseProblemPolicyInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "budget" in value;
    isInstance = isInstance && "memory" in value;
    isInstance = isInstance && "score" in value;

    return isInstance;
}

export function GetProblem200ResponseProblemPolicyInnerFromJSON(json: any): GetProblem200ResponseProblemPolicyInner {
    return GetProblem200ResponseProblemPolicyInnerFromJSONTyped(json, false);
}

export function GetProblem200ResponseProblemPolicyInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProblem200ResponseProblemPolicyInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'budget': json['budget'],
        'memory': json['memory'],
        'score': json['score'],
    };
}

export function GetProblem200ResponseProblemPolicyInnerToJSON(value?: GetProblem200ResponseProblemPolicyInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'budget': value.budget,
        'memory': value.memory,
        'score': value.score,
    };
}

