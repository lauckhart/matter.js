/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DishwasherDt = DeviceType(
    { id: 0x75, name: "Dishwasher", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 117, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),
    Requirement(
        { id: 0x6, name: "OnOff", conformance: "O", element: "serverCluster" },
        Requirement({ name: "DEADFRONTBEHAVIOR", conformance: "M", element: "feature" })
    ),
    Requirement({ id: 0x56, name: "TemperatureControl", conformance: "O", element: "serverCluster" }),
    Requirement(
        { id: 0x59, name: "DishwasherMode", conformance: "O", element: "serverCluster" },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),
    Requirement({ id: 0x5d, name: "DishwasherAlarm", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x60, name: "OperationalState", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(DishwasherDt);
