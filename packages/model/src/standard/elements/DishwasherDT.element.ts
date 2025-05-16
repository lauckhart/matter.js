/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DishwasherDt = DeviceType(
    { name: "Dishwasher", id: 0x75 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 117, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "OnOff", id: 0x6, element: "serverCluster", conformance: "O" },
        Requirement({ name: "DEADFRONTBEHAVIOR", element: "feature", conformance: "M" })
    ),
    Requirement({ name: "TemperatureControl", id: 0x56, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "DishwasherMode", id: 0x59, element: "serverCluster", conformance: "O" },
        Requirement({ name: "StartUpMode", element: "attribute", conformance: "X" }),
        Requirement({ name: "ONOFF", element: "feature", conformance: "X" })
    ),
    Requirement({ name: "DishwasherAlarm", id: 0x5d, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "OperationalState", id: 0x60, element: "serverCluster", conformance: "M" })
);

MatterDefinition.children.push(DishwasherDt);
