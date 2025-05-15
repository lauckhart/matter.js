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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const EcosystemInformation = Cluster(
    { id: 0x750, name: "EcosystemInformation" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0x0, name: "DeviceDirectory", type: "list", access: "R F M", conformance: "M", quality: "N" },
        Field({ name: "entry", type: "EcosystemDeviceStruct" })
    ),
    Attribute(
        { id: 0x1, name: "LocationDirectory", type: "list", access: "R F M", conformance: "M", quality: "N" },
        Field({ name: "entry", type: "EcosystemLocationStruct" })
    ),

    Datatype(
        { name: "EcosystemDeviceStruct", type: "struct" },
        Field({ id: 0x0, name: "DeviceName", type: "string", access: "S", conformance: "O", constraint: "max 64" }),
        Field({ id: 0x1, name: "DeviceNameLastEdit", type: "epoch-us", access: "S", conformance: "desc", default: 0 }),
        Field({ id: 0x2, name: "BridgedEndpoint", type: "endpoint-no", access: "S", conformance: "desc", constraint: "all" }),
        Field({ id: 0x3, name: "OriginalEndpoint", type: "endpoint-no", access: "S", conformance: "desc", constraint: "all" }),
        Field(
            { id: 0x4, name: "DeviceTypes", type: "list", access: "S", conformance: "M", constraint: "all" },
            Field({ name: "entry", type: "Descriptor.DeviceTypeStruct" })
        ),

        Field(
            {
                id: 0x5, name: "UniqueLocationIDs", type: "list",
                access: "S", conformance: "M", constraint: "max 64[max 64]"
            },
            Field({ name: "entry", type: "string" })
        ),

        Field({ id: 0x6, name: "UniqueLocationIDsLastEdit", type: "epoch-us", access: "S", conformance: "M", default: 0 }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "EcosystemLocationStruct", type: "struct" },
        Field({ id: 0x0, name: "UniqueLocationId", type: "string", access: "S", conformance: "M", constraint: "max 64" }),
        Field({ id: 0x1, name: "LocationDescriptor", type: "locationdesc", access: "S", conformance: "M" }),
        Field({ id: 0x2, name: "LocationDescriptorLastEdit", type: "epoch-us", access: "S", conformance: "M", default: 0 }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    )
);

MatterDefinition.children.push(EcosystemInformation);
