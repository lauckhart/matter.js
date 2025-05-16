/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SpeakerDt = DeviceType(
    { name: "Speaker", id: 0x22 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 34, revision: 1 } ] })
    ),
    Requirement({ name: "OnOff", id: 0x6, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "LevelControl", id: 0x8, element: "serverCluster", conformance: "M" })
);

MatterDefinition.children.push(SpeakerDt);
