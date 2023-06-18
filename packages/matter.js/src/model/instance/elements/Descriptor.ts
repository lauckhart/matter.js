/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x001d, name: "Descriptor",
    classification: "endpoint", description: "Descriptor",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "DeviceTypeList",
            access: "R V", conformance: "M", constraint: "min 1", default: "desc", quality: "F", type: "list",
            details: "This is a list of device types and corresponding revisions declaring " +
                     "endpoint conformance (see DeviceTypeStruct). At least one device type " +
                     "entry SHALL be present",
            xref: { document: "core", section: "9.5.5.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "DeviceTypeStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "ServerList",
            access: "R V", conformance: "M", default: "empty", quality: "F", type: "list",
            details: "This attribute SHALL list each cluster ID for the server clusters " +
                     "present on the endpoint instance",
            xref: { document: "core", section: "9.5.5.2" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "cluster-id"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0002, name: "ClientList",
            access: "R V", conformance: "M", default: "empty", quality: "F", type: "list",
            details: "This attribute SHALL list each cluster ID for the client clusters " +
                     "present on the endpoint instance",
            xref: { document: "core", section: "9.5.5.3" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "cluster-id"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0003, name: "PartsList",
            access: "R V", conformance: "M", default: "empty", type: "list",
            details: "This attribute indicates composition of the device type instance. " +
                     "Device type instance composition SHALL include the endpoints in this " +
                     "list. See Endpoint Composition for more information which endpoints to" +
                     " include in this list",
            xref: { document: "core", section: "9.5.5.4" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "endpoint-no"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0000, name: "DeviceList",
            conformance: "M", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "DeviceTypeStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "DeviceTypeStruct",
            conformance: "M", type: "struct",
            details: "The device type and revision define endpoint conformance to a release " +
                     "of a device type definition. See the Data Model specification for more" +
                     " information",
            xref: { document: "core", section: "9.5.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "DeviceType",
                    conformance: "M", default: 0, type: "devtype-id",
                    xref: { document: "core", section: "9.5.4.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Revision",
                    conformance: "M", constraint: "min 1", default: 0, type: "uint16",
                    xref: { document: "core", section: "9.5.4.1" }
                }
            ]
        }
    ]
});
