/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0044, name: "ValidProxies",
    classification: "node", description: "Proxy Valid",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "ValidProxyList",
            access: "RW", conformance: "M", default: [], quality: "N F", type: "list",
            details: "List of valid proxies that can proxy this Node. Each entry in this " +
                     "list is fabric-scoped",
            xref: { document: "core", section: "9.15.15.5.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "ValidProxyStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "GetValidProxiesRequest",
            access: "O", conformance: "M", direction: "request", response: "GetValidProxiesResponse",
            xref: { document: "core", section: "9.15.15.6" }
        },

        {
            tag: "command", id: 0x0001, name: "GetValidProxiesResponse",
            conformance: "M", direction: "response",
            xref: { document: "core", section: "9.15.15.6" }
        },

        {
            tag: "datatype", name: "ValidProxyStruct",
            type: "struct",
            details: "Encapsulates the Node ID of a Valid Proxy",
            xref: { document: "core", section: "9.15.15.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "NodeId",
                    access: "RW", conformance: "M", default: "", type: "node-idx",
                    xref: { document: "core", section: "9.15.15.4.1" }
                }
            ]
        }
    ]
});
