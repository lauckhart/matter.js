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

export const DeviceEnergyManagementDt = DeviceType(
    { name: "DeviceEnergyManagement", id: 0x50d },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 1293, revision: 2 } ] })
    ),

    Requirement(
        { name: "DeviceEnergyManagement", id: 0x98, element: "serverCluster", conformance: "M" },
        Requirement({ name: "POWERADJUSTMENT", element: "feature", conformance: "ControllableESA.a+" }),
        Requirement({ name: "STARTTIMEADJUSTMENT", element: "feature", conformance: "ControllableESA.a+" }),
        Requirement({ name: "PAUSABLE", element: "feature", conformance: "ControllableESA.a+" }),
        Requirement({ name: "FORECASTADJUSTMENT", element: "feature", conformance: "ControllableESA.a+" }),
        Requirement({ name: "CONSTRAINTBASEDADJUSTMENT", element: "feature", conformance: "ControllableESA.a+" })
    ),

    Requirement(
        { name: "DeviceEnergyManagementMode", id: 0x9f, element: "serverCluster", conformance: "ControllableESA, O" }
    ),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "ControllableEsa" }))
);

MatterDefinition.children.push(DeviceEnergyManagementDt);
