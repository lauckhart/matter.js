/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0044, name: "ValidProxies",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "ValidProxyList", base: "list[ValidProxyStruct]",
            access: "RW", conformance: "M", default: "empty", quality: "N F",
            details: "List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.",
            xref: { section: "9.15.15.5.1", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "GetValidProxiesRequest",
            access: "O", conformance: "M", direction: "request", response: "GetValidProxiesResponse",
            xref: { section: "9.15.15.6", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "GetValidProxiesResponse",
            conformance: "M", direction: "response",
            xref: { section: "9.15.15.6", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ValidProxyStruct", base: "struct",
            details: "Encapsulates the Node ID of a Valid Proxy.",
            xref: { section: "9.15.15.4.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NodeId", base: "node-idx",
                    access: "RW", conformance: "M", default: "",
                    xref: { section: "9.15.15.4.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}))