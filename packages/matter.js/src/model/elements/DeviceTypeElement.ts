/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeCode } from "../index.js"
import { ClusterElement, CodedElement } from "./index.js"

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
export type DeviceTypeElement = CodedElement & {
    code: DeviceTypeCode,
    class: DeviceTypeClass,
    revision: number,
    composes: DeviceTypeElement[],
    clusters: ClusterElement[]
}
