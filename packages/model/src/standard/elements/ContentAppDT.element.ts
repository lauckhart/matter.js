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
    { id: 0x24, name: "ContentApp", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 36, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x1e, name: "Binding", conformance: "ObserverClient", element: "serverCluster" }),
    Requirement({ id: 0x504, name: "Channel", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x505, name: "TargetNavigator", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x506, name: "MediaPlayback", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x509, name: "KeypadInput", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x50a, name: "ContentLauncher", conformance: "O", element: "serverCluster" }),
    Requirement(
        { id: 0x50c, name: "ApplicationLauncher", conformance: "M", element: "serverCluster" },
        Requirement({ name: "APPLICATIONPLATFORM", conformance: "X", element: "feature" })
    ),
    Requirement({ id: 0x50d, name: "ApplicationBasic", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x50e, name: "AccountLogin", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x510, name: "ContentAppObserver", conformance: "ObserverClient", element: "clientCluster" }),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "ObserverClient" }))
);

MatterDefinition.children.push(ContentAppDt);
