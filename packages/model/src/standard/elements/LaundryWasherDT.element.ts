/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const LaundryWasherDt = DeviceType(
    { name: "LaundryWasher", id: 0x73 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 115, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "LaundryWasherMode", id: 0x51, element: "serverCluster", conformance: "O" },
        Requirement({ name: "StartUpMode", element: "attribute", conformance: "X" }),
        Requirement({ name: "ONOFF", element: "feature", conformance: "X" })
    ),
    Requirement(
        { name: "OnOff", id: 0x6, element: "serverCluster", conformance: "O" },
        Requirement({ name: "DEADFRONTBEHAVIOR", element: "feature", conformance: "M" })
    ),
    Requirement({ name: "LaundryWasherControls", id: 0x53, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "TemperatureControl", id: 0x56, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "OperationalState", id: 0x60, element: "serverCluster", conformance: "M" })
);

MatterDefinition.children.push(LaundryWasherDt);
