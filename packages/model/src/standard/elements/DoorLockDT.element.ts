/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DoorLockDt = DeviceType(
    { id: 0xa, name: "DoorLock", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 10, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "X", element: "serverCluster" }),
    Requirement({ id: 0x62, name: "ScenesManagement", conformance: "X", element: "serverCluster" }),

    Requirement(
        { id: 0x101, name: "DoorLock", conformance: "M", element: "serverCluster" },
        Requirement({ name: "USER", conformance: "Matter & (PIN | RID | FPG | FACE | ALIRO)", element: "feature" }),
        Requirement({ name: "RFIDCREDENTIAL", conformance: "P, O", element: "feature" }),
        Requirement({ name: "AlarmMask", conformance: "[Alarms]", element: "attribute" })
    )
);

MatterDefinition.children.push(DoorLockDt);
