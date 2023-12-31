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
import type { ListSubmissions200ResponseSubmissionsInner } from './ListSubmissions200ResponseSubmissionsInner';
import {
    ListSubmissions200ResponseSubmissionsInnerFromJSON,
    ListSubmissions200ResponseSubmissionsInnerFromJSONTyped,
    ListSubmissions200ResponseSubmissionsInnerToJSON,
} from './ListSubmissions200ResponseSubmissionsInner';

/**
 * 
 * @export
 * @interface ListSubmissions200Response
 */
export interface ListSubmissions200Response {
    /**
     * 
     * @type {Array<ListSubmissions200ResponseSubmissionsInner>}
     * @memberof ListSubmissions200Response
     */
    submissions: Array<ListSubmissions200ResponseSubmissionsInner>;
}

/**
 * Check if a given object implements the ListSubmissions200Response interface.
 */
export function instanceOfListSubmissions200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "submissions" in value;

    return isInstance;
}

export function ListSubmissions200ResponseFromJSON(json: any): ListSubmissions200Response {
    return ListSubmissions200ResponseFromJSONTyped(json, false);
}

export function ListSubmissions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListSubmissions200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'submissions': ((json['submissions'] as Array<any>).map(ListSubmissions200ResponseSubmissionsInnerFromJSON)),
    };
}

export function ListSubmissions200ResponseToJSON(value?: ListSubmissions200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'submissions': ((value.submissions as Array<any>).map(ListSubmissions200ResponseSubmissionsInnerToJSON)),
    };
}

