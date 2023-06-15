/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementType } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { DeviceTypeElement } from "./DeviceTypeElement.js";

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
    export type Type = ElementType.Endpoint;
    export const Type = ElementType.Endpoint;
    export type Properties = BaseElement.Properties<DeviceTypeElement>;
}
