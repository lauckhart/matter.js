/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DeviceTypeElement } from "./index.js";

/**
 * Runtime representation of an endpoint.
 */
export type EndpointElement = Element & {
    deviceTypes: DeviceTypeElement[]
}
