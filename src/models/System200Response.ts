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
import type { System200ResponseCfg } from './System200ResponseCfg';
import {
    System200ResponseCfgFromJSON,
    System200ResponseCfgFromJSONTyped,
    System200ResponseCfgToJSON,
} from './System200ResponseCfg';
import type { System200ResponseStat } from './System200ResponseStat';
import {
    System200ResponseStatFromJSON,
    System200ResponseStatFromJSONTyped,
    System200ResponseStatToJSON,
} from './System200ResponseStat';

/**
 * 
 * @export
 * @interface System200Response
 */
export interface System200Response {
    /**
     * 
     * @type {System200ResponseCfg}
     * @memberof System200Response
     */
    cfg: System200ResponseCfg;
    /**
     * 
     * @type {System200ResponseStat}
     * @memberof System200Response
     */
    stat: System200ResponseStat;
}

/**
 * Check if a given object implements the System200Response interface.
 */
export function instanceOfSystem200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cfg" in value;
    isInstance = isInstance && "stat" in value;

    return isInstance;
}

export function System200ResponseFromJSON(json: any): System200Response {
    return System200ResponseFromJSONTyped(json, false);
}

export function System200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): System200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cfg': System200ResponseCfgFromJSON(json['cfg']),
        'stat': System200ResponseStatFromJSON(json['stat']),
    };
}

export function System200ResponseToJSON(value?: System200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cfg': System200ResponseCfgToJSON(value.cfg),
        'stat': System200ResponseStatToJSON(value.stat),
    };
}

