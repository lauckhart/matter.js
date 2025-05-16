/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const LaundryDryerDt = DeviceType(
    { name: "LaundryDryer", id: 0x7c },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 124, revision: 1 } ] })
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
    Requirement({ name: "LaundryDryerControls", id: 0x4a, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "TemperatureControl", id: 0x56, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "OperationalState", id: 0x60, element: "serverCluster", conformance: "M" })
);

MatterDefinition.children.push(LaundryDryerDt);
