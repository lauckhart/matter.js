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
    { name: "Aggregator", id: 0xe },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 14, revision: 2 } ] })
    ),
    Requirement({ name: "Actions", id: 0x25, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "CommissionerControl", id: 0x751, element: "serverCluster", conformance: "FabricSynchronization" }),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "FabricSynchronization" }))
);

MatterDefinition.children.push(AggregatorDt);
