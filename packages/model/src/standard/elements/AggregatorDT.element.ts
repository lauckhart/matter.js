/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const AggregatorDt = DeviceType(
    { id: 0xe, name: "Aggregator", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 14, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x25, name: "Actions", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x751, name: "CommissionerControl", conformance: "FabricSynchronization", element: "serverCluster" }),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "FabricSynchronization" }))
);

MatterDefinition.children.push(AggregatorDt);
