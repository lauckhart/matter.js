/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SpeakerDt = DeviceType(
    { id: 0x22, name: "Speaker", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 34, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x6, name: "OnOff", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x8, name: "LevelControl", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(SpeakerDt);
