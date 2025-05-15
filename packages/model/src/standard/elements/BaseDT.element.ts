/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    FieldElement as Field,
    RequirementElement as Requirement
} from "../../elements/index.js";

export const BaseDt = DeviceType(
    { name: "Base", classification: "base" },

    Field(
        { name: "conditions", type: "enum8" },
        Field({ name: "Zha" }),
        Field({ name: "Zse" }),
        Field({ name: "Gp" }),
        Field({ name: "Zigbee" }),
        Field({ name: "SuZi" }),
        Field({ name: "Matter" }),
        Field({ name: "LanguageLocale" }),
        Field({ name: "TimeLocale" }),
        Field({ name: "UnitLocale" }),
        Field({ name: "Sit" }),
        Field({ name: "Lit" }),
        Field({ name: "Active" }),
        Field({ name: "Node" }),
        Field({ name: "App" }),
        Field({ name: "Simple" }),
        Field({ name: "Dynamic" }),
        Field({ name: "Composed" }),
        Field({ name: "Client" }),
        Field({ name: "Server" }),
        Field({ name: "Duplicate" }),
        Field({ name: "BridgedPowerSourceInfo" })
    ),

    Requirement(
        { id: 0x1d, name: "Descriptor", conformance: "M", element: "serverCluster" },
        Requirement({ name: "TAGLIST", conformance: "Duplicate", element: "feature" })
    ),
    Requirement({ id: 0x1e, name: "Binding", conformance: "Simple & Client", element: "serverCluster" }),
    Requirement({ id: 0x40, name: "FixedLabel", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x41, name: "UserLabel", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(BaseDt);
