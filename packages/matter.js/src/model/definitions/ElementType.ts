/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Types of elements per the Matter specification.
 */
export enum ElementType {
    Fabric = "fabric",
    Node = "node",
    Endpoint = "endpoint",
    Cluster = "cluster",
    Command = "command",
    Event = "event",
    Attribute = "attribute",
    DeviceType = "deviceType",
    Datatype = "datatype",

    // Root element type - not formally part of specification
    Matter = "matter"
}
