/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const CastingVideoClientDt = DeviceType(
    { name: "CastingVideoClient", id: 0x29 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 41, revision: 2 } ] })
    ),
    Requirement({ name: "OnOff", id: 0x6, element: "clientCluster", conformance: "M" }),
    Requirement({ name: "LevelControl", id: 0x8, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "WakeOnLan", id: 0x503, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "Channel", id: 0x504, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "TargetNavigator", id: 0x505, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "MediaPlayback", id: 0x506, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "MediaInput", id: 0x507, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "LowPower", id: 0x508, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "KeypadInput", id: 0x509, element: "clientCluster", conformance: "M" }),
    Requirement({ name: "ContentLauncher", id: 0x50a, element: "clientCluster", conformance: "M" }),
    Requirement({ name: "AudioOutput", id: 0x50b, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "ApplicationLauncher", id: 0x50c, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "ApplicationBasic", id: 0x50d, element: "clientCluster", conformance: "M" }),
    Requirement({ name: "AccountLogin", id: 0x50e, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "ContentControl", id: 0x50f, element: "clientCluster", conformance: "P, O" }),
    Requirement({ name: "ContentAppObserver", id: 0x510, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "Messages", id: 0x97, element: "clientCluster", conformance: "O" })
);

MatterDefinition.children.push(CastingVideoClientDt);
