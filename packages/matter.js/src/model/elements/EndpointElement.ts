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
    deviceTypes: DeviceTypeElement[]
}

export function EndpointElement(definition: BaseElement.Typeless<EndpointElement>): EndpointElement {
    return { ...definition, type: EndpointElement.Type }
}

export namespace EndpointElement {
    export type Type = BaseElement.Type.Endpoint;
    export const Type = BaseElement.Type.Endpoint;
}