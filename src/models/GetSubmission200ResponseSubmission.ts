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
 * @interface GetSubmission200ResponseSubmission
 */
export interface GetSubmission200ResponseSubmission {
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    submitterId: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    status: GetSubmission200ResponseSubmissionStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    codeLang: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    problemId: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    compilerVersion: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    runnerVersion: string;
    /**
     * 
     * @type {number}
     * @memberof GetSubmission200ResponseSubmission
     */
    score: number | null;
    /**
     * 
     * @type {number}
     * @memberof GetSubmission200ResponseSubmission
     */
    cost: number | null;
    /**
     * 
     * @type {number}
     * @memberof GetSubmission200ResponseSubmission
     */
    memory: number | null;
    /**
     * 
     * @type {string}
     * @memberof GetSubmission200ResponseSubmission
     */
    details: string | null;
}


/**
 * @export
 */
export const GetSubmission200ResponseSubmissionStatusEnum = {
    Running: 'running',
    Ac: 'AC',
    Wa: 'WA',
    Sle: 'SLE',
    Mle: 'MLE',
    Re: 'RE',
    Error: 'error'
} as const;
export type GetSubmission200ResponseSubmissionStatusEnum = typeof GetSubmission200ResponseSubmissionStatusEnum[keyof typeof GetSubmission200ResponseSubmissionStatusEnum];


/**
 * Check if a given object implements the GetSubmission200ResponseSubmission interface.
 */
export function instanceOfGetSubmission200ResponseSubmission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "submitterId" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "codeLang" in value;
    isInstance = isInstance && "problemId" in value;
    isInstance = isInstance && "compilerVersion" in value;
    isInstance = isInstance && "runnerVersion" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "memory" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function GetSubmission200ResponseSubmissionFromJSON(json: any): GetSubmission200ResponseSubmission {
    return GetSubmission200ResponseSubmissionFromJSONTyped(json, false);
}

export function GetSubmission200ResponseSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSubmission200ResponseSubmission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'submitterId': json['submitter_id'],
        'status': json['status'],
        'code': json['code'],
        'codeLang': json['code_lang'],
        'problemId': json['problem_id'],
        'compilerVersion': json['compiler_version'],
        'runnerVersion': json['runner_version'],
        'score': json['score'],
        'cost': json['cost'],
        'memory': json['memory'],
        'details': json['details'],
    };
}

export function GetSubmission200ResponseSubmissionToJSON(value?: GetSubmission200ResponseSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'submitter_id': value.submitterId,
        'status': value.status,
        'code': value.code,
        'code_lang': value.codeLang,
        'problem_id': value.problemId,
        'compiler_version': value.compilerVersion,
        'runner_version': value.runnerVersion,
        'score': value.score,
        'cost': value.cost,
        'memory': value.memory,
        'details': value.details,
    };
}

