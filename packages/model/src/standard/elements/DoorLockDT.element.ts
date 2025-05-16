/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DoorLockDt = DeviceType(
    { name: "DoorLock", id: 0xa },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 10, revision: 3 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "Groups", id: 0x4, element: "serverCluster", conformance: "X" }),
    Requirement({ name: "ScenesManagement", id: 0x62, element: "serverCluster", conformance: "X" }),

    Requirement(
        { name: "DoorLock", id: 0x101, element: "serverCluster", conformance: "M" },
        Requirement({ name: "USER", element: "feature", conformance: "Matter & (PIN | RID | FPG | FACE | ALIRO)" }),
        Requirement({ name: "RFIDCREDENTIAL", element: "feature", conformance: "P, O" }),
        Requirement({ name: "AlarmMask", element: "attribute", conformance: "[Alarms]" })
    )
);

MatterDefinition.children.push(DoorLockDt);
