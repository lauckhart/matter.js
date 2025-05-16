/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DoorLockControllerDt = DeviceType(
    { name: "DoorLockController", id: 0xb },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 11, revision: 3 } ] })
    ),
    Requirement({ name: "Groups", id: 0x4, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "ScenesManagement", id: 0x62, element: "clientCluster", conformance: "P, O" }),
    Requirement({ name: "TimeSynchronization", id: 0x38, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "DoorLock", id: 0x101, element: "clientCluster", conformance: "M" })
);

MatterDefinition.children.push(DoorLockControllerDt);
