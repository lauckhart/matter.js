/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command
} from "../../elements/index.js";

export const BridgedDeviceBasicInformation = Cluster(
    { id: 0x39, name: "BridgedDeviceBasicInformation", type: "BasicInformation" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "BIS", conformance: "O", constraint: "20", longName: "BridgedIcdSupport" })
    ),
    Attribute({ id: 0x0, name: "DataModelRevision", conformance: "X" }),
    Attribute({ id: 0x1, name: "VendorName", conformance: "O" }),
    Attribute({ id: 0x2, name: "VendorId", conformance: "O" }),
    Attribute({ id: 0x3, name: "ProductName", conformance: "O" }),
    Attribute({ id: 0x4, name: "ProductId", conformance: "desc" }),
    Attribute({ id: 0x5, name: "NodeLabel", conformance: "O" }),
    Attribute({ id: 0x6, name: "Location", conformance: "X" }),
    Attribute({ id: 0x7, name: "HardwareVersion", conformance: "O" }),
    Attribute({ id: 0x8, name: "HardwareVersionString", conformance: "O" }),
    Attribute({ id: 0x9, name: "SoftwareVersion", conformance: "O" }),
    Attribute({ id: 0xa, name: "SoftwareVersionString", conformance: "O" }),
    Attribute({ id: 0xb, name: "ManufacturingDate", conformance: "O" }),
    Attribute({ id: 0xc, name: "PartNumber", conformance: "O" }),
    Attribute({ id: 0xd, name: "ProductUrl", conformance: "O" }),
    Attribute({ id: 0xe, name: "ProductLabel", conformance: "O" }),
    Attribute({ id: 0xf, name: "SerialNumber", conformance: "O" }),
    Attribute({ id: 0x10, name: "LocalConfigDisabled", conformance: "X" }),
    Attribute({ id: 0x11, name: "Reachable", conformance: "M" }),
    Attribute({ id: 0x12, name: "UniqueId", conformance: "M" }),
    Attribute({ id: 0x13, name: "CapabilityMinima", conformance: "X" }),
    Attribute({ id: 0x14, name: "ProductAppearance", conformance: "O" }),
    Attribute({ id: 0x15, name: "SpecificationVersion", conformance: "X" }),
    Attribute({ id: 0x16, name: "MaxPathsPerInvoke", conformance: "X" }),
    Event({ id: 0x0, name: "StartUp", conformance: "O", priority: "critical" }),
    Event({ id: 0x1, name: "ShutDown", conformance: "O", priority: "critical" }),
    Event(
        { id: 0x2, name: "Leave", conformance: "O", priority: "critical" },
        Field({ id: 0x0, name: "FabricIndex", conformance: "X" })
    ),
    Event({ id: 0x3, name: "ReachableChanged", conformance: "M", priority: "critical" }),
    Event(
        { id: 0x80, name: "ActiveChanged", access: "V", conformance: "BIS", priority: "info" },
        Field({ id: 0x0, name: "PromisedActiveDuration", type: "uint32", conformance: "M", constraint: "desc" })
    ),
    Command(
        { id: 0x80, name: "KeepActive", access: "O", conformance: "BIS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "StayActiveDuration", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "TimeoutMs", type: "uint32", conformance: "M", constraint: "30000 to 3600000" })
    )
);

MatterDefinition.children.push(BridgedDeviceBasicInformation);
