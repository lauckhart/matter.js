/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { BaseElement, DeviceTypeElement } from "../index.js";

/**
 * Runtime representation of an endpoint.
 */
export type EndpointElement = BaseElement & {
    type: EndpointElement.Type,
    children: DeviceTypeElement[]
}

export function EndpointElement(definition: EndpointElement.Definition) {
    return BaseElement({
        type: EndpointElement.Type,
        ...definition
    }) as EndpointElement;
}

export namespace EndpointElement {
    export type Type = BaseElement.Type.Endpoint;
    export const Type = BaseElement.Type.Endpoint;
    export type Definition = BaseElement.Definition & {
        children?: DeviceTypeElement[]
    }
}