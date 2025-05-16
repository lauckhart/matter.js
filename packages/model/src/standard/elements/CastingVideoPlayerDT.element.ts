/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const CastingVideoPlayerDt = DeviceType(
    { name: "CastingVideoPlayer", id: 0x23 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 35, revision: 2 } ] })
    ),
    Requirement({ name: "OnOff", id: 0x6, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "WakeOnLan", id: 0x503, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "Channel", id: 0x504, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "TargetNavigator", id: 0x505, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "MediaPlayback", id: 0x506, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "MediaInput", id: 0x507, element: "serverCluster", conformance: "PhysicalInputs" }),
    Requirement({ name: "LowPower", id: 0x508, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "KeypadInput", id: 0x509, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "ContentLauncher", id: 0x50a, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "AudioOutput", id: 0x50b, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "ApplicationLauncher", id: 0x50c, element: "serverCluster", conformance: "ContentAppPlatform" },
        Requirement({ name: "APPLICATIONPLATFORM", element: "feature", conformance: "M" })
    ),
    Requirement({ name: "AccountLogin", id: 0x50e, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "ContentControl", id: 0x50f, element: "serverCluster", conformance: "P, O" }),
    Requirement({ name: "Messages", id: 0x97, element: "serverCluster", conformance: "O" }),
    Field(
        { name: "conditions", type: "enum8" },
        Field({ name: "ContentAppPlatform" }),
        Field({ name: "PhysicalInputs" })
    )
);

MatterDefinition.children.push(CastingVideoPlayerDt);
