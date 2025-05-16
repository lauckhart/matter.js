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

export const ContentAppDt = DeviceType(
    { name: "ContentApp", id: 0x24 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 36, revision: 2 } ] })
    ),
    Requirement({ name: "Binding", id: 0x1e, element: "serverCluster", conformance: "ObserverClient" }),
    Requirement({ name: "Channel", id: 0x504, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "TargetNavigator", id: 0x505, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "MediaPlayback", id: 0x506, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "KeypadInput", id: 0x509, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "ContentLauncher", id: 0x50a, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "ApplicationLauncher", id: 0x50c, element: "serverCluster", conformance: "M" },
        Requirement({ name: "APPLICATIONPLATFORM", element: "feature", conformance: "X" })
    ),
    Requirement({ name: "ApplicationBasic", id: 0x50d, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "AccountLogin", id: 0x50e, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "ContentAppObserver", id: 0x510, element: "clientCluster", conformance: "ObserverClient" }),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "ObserverClient" }))
);

MatterDefinition.children.push(ContentAppDt);
