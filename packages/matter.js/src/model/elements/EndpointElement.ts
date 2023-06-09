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
    id: number,
    type: `${EndpointElement.Type}`,
    children: DeviceTypeElement[]
}

export function EndpointElement(definition: EndpointElement.Properties) {
    return BaseElement(EndpointElement.Type, definition) as EndpointElement;
}

export namespace EndpointElement {
    export type Type = BaseElement.Type.Endpoint;
    export const Type = BaseElement.Type.Endpoint;
    export type Properties = BaseElement.Properties<DeviceTypeElement>;
}
