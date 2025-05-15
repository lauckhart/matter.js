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
    EventElement as Event,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const CommissionerControl = Cluster(
    { id: 0x751, name: "CommissionerControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({
        id: 0x0, name: "SupportedDeviceCategories", type: "SupportedDeviceCategoryBitmap",
        access: "R M", conformance: "M", default: 0
    }),

    Event(
        { id: 0x0, name: "CommissioningRequestResult", access: "S M", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "RequestId", type: "uint64", access: "S", conformance: "M" }),
        Field({ id: 0x1, name: "ClientNodeId", type: "node-id", access: "S", conformance: "M" }),
        Field({ id: 0x2, name: "StatusCode", type: "status", access: "S", conformance: "M", constraint: "all" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Command(
        {
            id: 0x0, name: "RequestCommissioningApproval",
            access: "M", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "RequestId", type: "uint64", conformance: "M" }),
        Field({ id: 0x1, name: "VendorId", type: "vendor-id", conformance: "M" }),
        Field({ id: 0x2, name: "ProductId", type: "uint16", conformance: "M" }),
        Field({ id: 0x3, name: "Label", type: "string", conformance: "O", constraint: "max 64" })
    ),

    Command(
        {
            id: 0x1, name: "CommissionNode",
            access: "M", conformance: "M", direction: "request", response: "ReverseOpenCommissioningWindow"
        },
        Field({ id: 0x0, name: "RequestId", type: "uint64", conformance: "M" }),
        Field({
            id: 0x1, name: "ResponseTimeoutSeconds", type: "uint16",
            conformance: "M", constraint: "30 to 120", default: 30
        })
    ),

    Command(
        { id: 0x2, name: "ReverseOpenCommissioningWindow", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "CommissioningTimeout", type: "uint16", conformance: "M", constraint: "all" }),
        Field({ id: 0x1, name: "PakePasscodeVerifier", type: "octstr", conformance: "M" }),
        Field({ id: 0x2, name: "Discriminator", type: "uint16", conformance: "M", constraint: "max 4095" }),
        Field({ id: 0x3, name: "Iterations", type: "uint32", conformance: "M", constraint: "1000 to 100000" }),
        Field({ id: 0x4, name: "Salt", type: "octstr", conformance: "M", constraint: "16 to 32" })
    ),

    Datatype(
        { name: "SupportedDeviceCategoryBitmap", type: "map32" },
        Field({ name: "FabricSynchronization", constraint: "0" })
    )
);

MatterDefinition.children.push(CommissionerControl);
