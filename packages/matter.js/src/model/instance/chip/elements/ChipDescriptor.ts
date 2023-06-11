/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001d, name: "Descriptor",
    description: "Descriptor",
    details: "The Descriptor Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a node, its endpoints and clusters.",
    children: [
        AttributeElement({
            id: 0x0000, name: "deviceList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "serverList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "clientList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "partsList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "DeviceTypeStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "deviceType", base: "deviceTypeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "deviceType", base: "deviceTypeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "revision", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "revision", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
