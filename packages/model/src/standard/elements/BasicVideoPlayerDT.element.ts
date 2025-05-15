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

export const BasicVideoPlayerDt = DeviceType(
    { id: 0x28, name: "BasicVideoPlayer", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 40, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x6, name: "OnOff", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x503, name: "WakeOnLan", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x504, name: "Channel", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x505, name: "TargetNavigator", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x506, name: "MediaPlayback", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x507, name: "MediaInput", conformance: "PhysicalInputs", element: "serverCluster" }),
    Requirement({ id: 0x508, name: "LowPower", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x509, name: "KeypadInput", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x50b, name: "AudioOutput", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x50f, name: "ContentControl", conformance: "P, O", element: "serverCluster" }),
    Requirement({ id: 0x97, name: "Messages", conformance: "O", element: "serverCluster" }),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "PhysicalInputs" }))
);

MatterDefinition.children.push(BasicVideoPlayerDt);
