/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DoorLockControllerDt = DeviceType(
    { id: 0xb, name: "DoorLockController", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 11, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x4, name: "Groups", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x62, name: "ScenesManagement", conformance: "P, O", element: "clientCluster" }),
    Requirement({ id: 0x38, name: "TimeSynchronization", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x101, name: "DoorLock", conformance: "M", element: "clientCluster" })
);

MatterDefinition.children.push(DoorLockControllerDt);
