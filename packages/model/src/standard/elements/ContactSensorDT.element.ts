/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ContactSensorDt = DeviceType(
    { name: "ContactSensor", id: 0x15 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 21, revision: 2 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "BooleanState", id: 0x45, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "BooleanStateConfiguration", id: 0x80, element: "serverCluster", conformance: "O" })
);

MatterDefinition.children.push(ContactSensorDt);
