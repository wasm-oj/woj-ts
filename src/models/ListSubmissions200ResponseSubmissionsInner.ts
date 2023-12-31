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
 * @interface ListSubmissions200ResponseSubmissionsInner
 */
export interface ListSubmissions200ResponseSubmissionsInner {
    /**
     * 
     * @type {string}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    codeLang: string;
    /**
     * 
     * @type {string}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    problemId: string;
    /**
     * 
     * @type {string}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    status: ListSubmissions200ResponseSubmissionsInnerStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    submitterId: string;
    /**
     * 
     * @type {number}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    score: number | null;
    /**
     * 
     * @type {number}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    cost: number | null;
    /**
     * 
     * @type {number}
     * @memberof ListSubmissions200ResponseSubmissionsInner
     */
    memory: number | null;
}


/**
 * @export
 */
export const ListSubmissions200ResponseSubmissionsInnerStatusEnum = {
    Running: 'running',
    Ac: 'AC',
    Wa: 'WA',
    Sle: 'SLE',
    Mle: 'MLE',
    Re: 'RE',
    Error: 'error'
} as const;
export type ListSubmissions200ResponseSubmissionsInnerStatusEnum = typeof ListSubmissions200ResponseSubmissionsInnerStatusEnum[keyof typeof ListSubmissions200ResponseSubmissionsInnerStatusEnum];


/**
 * Check if a given object implements the ListSubmissions200ResponseSubmissionsInner interface.
 */
export function instanceOfListSubmissions200ResponseSubmissionsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "codeLang" in value;
    isInstance = isInstance && "problemId" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "submitterId" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "memory" in value;

    return isInstance;
}

export function ListSubmissions200ResponseSubmissionsInnerFromJSON(json: any): ListSubmissions200ResponseSubmissionsInner {
    return ListSubmissions200ResponseSubmissionsInnerFromJSONTyped(json, false);
}

export function ListSubmissions200ResponseSubmissionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListSubmissions200ResponseSubmissionsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'codeLang': json['code_lang'],
        'problemId': json['problem_id'],
        'status': json['status'],
        'submitterId': json['submitter_id'],
        'score': json['score'],
        'cost': json['cost'],
        'memory': json['memory'],
    };
}

export function ListSubmissions200ResponseSubmissionsInnerToJSON(value?: ListSubmissions200ResponseSubmissionsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code_lang': value.codeLang,
        'problem_id': value.problemId,
        'status': value.status,
        'submitter_id': value.submitterId,
        'score': value.score,
        'cost': value.cost,
        'memory': value.memory,
    };
}

