/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x002a, name: "OtaSoftwareUpdateRequestor",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", type: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", type: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "DefaultOtaProviders", type: "list",
            access: "RW F VA", conformance: "M", constraint: "desc", default: "[]",
            xref: { document: "core", section: "11.19.7.5", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", type: "ProviderLocationStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "UpdatePossible", type: "bool",
            access: "R V", conformance: "M", default: true,
            xref: { document: "core", section: "11.19.7.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "UpdateState", type: "UpdateStateEnum",
            access: "R V", conformance: "M", default: "Unknown",
            xref: { document: "core", section: "11.19.7.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "UpdateStateProgress", type: "uint8",
            access: "R V", conformance: "M", constraint: "0 to 100", default: "null", quality: "X",
            xref: { document: "core", section: "11.19.7.5", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "StateTransition",
            access: "V", conformance: "M", priority: "info",
            xref: { document: "core", section: "11.19.7.7", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "VersionApplied",
            access: "V", conformance: "M", priority: "critical",
            xref: { document: "core", section: "11.19.7.7", version: "1.1" }
        }),

        EventElement({
            id: 0x0002, name: "DownloadError",
            access: "V", conformance: "M", priority: "info",
            xref: { document: "core", section: "11.19.7.7", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "AnnounceOtaProvider",
            access: "A", conformance: "O", direction: "request", response: "status",
            xref: { document: "core", section: "11.19.7.6", version: "1.1" }
        })
    ]
}));
