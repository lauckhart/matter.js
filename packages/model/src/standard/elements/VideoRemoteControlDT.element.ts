/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const VideoRemoteControlDt = DeviceType(
    { id: 0x2a, name: "VideoRemoteControl", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 42, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x6, name: "OnOff", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x8, name: "LevelControl", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x503, name: "WakeOnLan", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x504, name: "Channel", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x505, name: "TargetNavigator", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x506, name: "MediaPlayback", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x507, name: "MediaInput", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x508, name: "LowPower", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x509, name: "KeypadInput", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x50a, name: "ContentLauncher", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x50b, name: "AudioOutput", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x50c, name: "ApplicationLauncher", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x50e, name: "AccountLogin", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x50f, name: "ContentControl", conformance: "P, O", element: "clientCluster" })
);

MatterDefinition.children.push(VideoRemoteControlDt);
