/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field
} from "../../elements/index.js";

export const LocalizationConfiguration = Cluster(
    { id: 0x2b, name: "LocalizationConfiguration" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({ id: 0x0, name: "ActiveLocale", type: "string", access: "RW VM", constraint: "in SupportedLocales", quality: "N" }),

    Attribute(
        {
            id: 0x1, name: "SupportedLocales", type: "list",
            access: "R V", conformance: "M", constraint: "max 32[max 35]", quality: "F"
        },
        Field({ name: "entry", type: "string" })
    )
);

MatterDefinition.children.push(LocalizationConfiguration);
