/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodedElement } from "./Element.js";
import { DeviceTypeElement } from "./index.js";

/**
 * Runtime representation of an endpoint.
 */
export type EndpointElement = CodedElement & {
    deviceTypes: DeviceTypeElement[]
}
