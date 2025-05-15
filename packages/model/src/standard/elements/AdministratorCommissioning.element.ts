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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const AdministratorCommissioning = Cluster(
    { id: 0x3c, name: "AdministratorCommissioning" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "BC", constraint: "0", description: "Basic" })
    ),
    Attribute({ id: 0x0, name: "WindowStatus", type: "CommissioningWindowStatusEnum", access: "R V", conformance: "M" }),
    Attribute({ id: 0x1, name: "AdminFabricIndex", type: "fabric-idx", access: "R V", conformance: "M", quality: "X" }),
    Attribute({ id: 0x2, name: "AdminVendorId", type: "vendor-id", access: "R V", conformance: "M", quality: "X" }),

    Command(
        { id: 0x0, name: "OpenCommissioningWindow", access: "A T", direction: "request", response: "status" },
        Field({ id: 0x0, name: "CommissioningTimeout", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "PakePasscodeVerifier", type: "octstr", constraint: "97" }),
        Field({ id: 0x2, name: "Discriminator", type: "uint16", conformance: "M", constraint: "0 to 4095" }),
        Field({ id: 0x3, name: "Iterations", type: "uint32", conformance: "M", constraint: "1000 to 100000" }),
        Field({ id: 0x4, name: "Salt", type: "octstr", conformance: "M", constraint: "16 to 32" })
    ),

    Command(
        {
            id: 0x1, name: "OpenBasicCommissioningWindow",
            access: "A T", conformance: "BC", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "CommissioningTimeout", type: "uint16", conformance: "M", constraint: "desc" })
    ),

    Command({ id: 0x2, name: "RevokeCommissioning", access: "A T", conformance: "M", direction: "request", response: "status" }),

    Datatype(
        { name: "CommissioningWindowStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "WindowNotOpen", conformance: "M" }),
        Field({ id: 0x1, name: "EnhancedWindowOpen", conformance: "M" }),
        Field({ id: 0x2, name: "BasicWindowOpen", conformance: "BC" })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8" },
        Field({ id: 0x2, name: "Busy", conformance: "M" }),
        Field({ id: 0x3, name: "PakeParameterError", conformance: "M" }),
        Field({ id: 0x4, name: "WindowNotOpen", conformance: "M" })
    )
);

MatterDefinition.children.push(AdministratorCommissioning);
