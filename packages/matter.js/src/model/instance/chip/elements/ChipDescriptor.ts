/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001d, name: "Descriptor",
    description: "Descriptor",
    details: "The Descriptor Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a node, its endpoints and clusters.",
    children: [
        AttributeElement({
            id: 0x0000, name: "DeviceList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "DeviceTypeStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ServerList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "cluster-id"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "ClientList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "cluster-id"
                })
            ]
        }),

        AttributeElement({
            id: 0x0003, name: "PartsList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "endpoint-no"
                })
            ]
        }),

        DatatypeElement({
            name: "DeviceTypeStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "DeviceType", base: "devtype-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Revision", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
