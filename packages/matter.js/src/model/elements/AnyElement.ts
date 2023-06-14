/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ClusterElement,
    DeviceTypeElement,
    EndpointElement,
    FabricElement,
    NodeElement,
    MatterElement,
    AnyDataElement
} from "../index.js";

/**
 * Any Matter element.
 */
export type AnyElement =
    AnyDataElement
    | ClusterElement
    | DeviceTypeElement
    | EndpointElement
    | FabricElement
    | NodeElement
    | MatterElement;
