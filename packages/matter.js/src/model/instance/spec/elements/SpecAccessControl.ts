/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x001f, name: "AccessControl",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Acl", base: "list[AccessControlEntryStruct]",
            access: "RW F A", conformance: "M", constraint: "desc", value: "desc",
            details: "An attempt to add an Access Control Entry when no more entries are available SHALL result in a RESOURCE_EXHAUSTED error being reported and the ACL attribute SHALL NOT have the entry",
            xref: { section: "9.10.5.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "Extension", base: "list[AccessControlExtensionStruct]",
            access: "RW F A", conformance: "O", constraint: "desc", value: "desc",
            details: "If present, the Access Control Extensions MAY be used by Administrators to store arbitrary data related to fabric’s Access Control Entries.",
            xref: { section: "9.10.5.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "SubjectsPerAccessControlEntry", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 4", value: "4", quality: "F",
            details: "This attribute SHALL provide the minimum number of Subjects per entry that are supported by this server.",
            xref: { section: "9.10.5.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "TargetsPerAccessControlEntry", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 3", value: "3", quality: "F",
            details: "This attribute SHALL provide the minimum number of Targets per entry that are supported by this server.",
            xref: { section: "9.10.5.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "AccessControlEntriesPerFabric", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 4", value: "4", quality: "F",
            details: "This attribute SHALL provide the minimum number of ACL Entries per fabric that are supported by this server.",
            xref: { section: "9.10.5.7", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ChangeTypeEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { section: "9.10.4.1", document: "core", version: "1.1" }
        })
    ]
}));
