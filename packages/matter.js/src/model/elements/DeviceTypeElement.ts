/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement, DeviceTypeCode, Element } from "../index.js"

export enum DeviceTypeClass {
    Node = "node",
    Utility = "utility",
    Simple = "simple",
    Dynamic = "dynamic"
}

/**
 * Details on a specific device as defined in the Matter specification.
 * 
 * TODO - extract/merge DeviceTypes.ts?
 */
export type DeviceTypeElement = Element & {
    code: DeviceTypeCode,
    class: DeviceTypeClass,
    revision: number,
    composes: DeviceTypeElement[],
    clusters: ClusterElement[]
}
