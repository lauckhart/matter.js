/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0005, name: "Scenes",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "SceneCount", base: "uint8",
            access: "R V", conformance: "M", value: "0",
            details: "The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.",
            xref: { section: "1.4.7.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentScene", base: "uint8",
            access: "R V", conformance: "M", value: "0",
            details: "The CurrentScene attribute holds the scene identifier of the scene last invoked.",
            xref: { section: "1.4.7.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentGroup", base: "group-id",
            access: "R V", conformance: "M", value: "0",
            details: "The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last invoked is not associated with a group.",
            xref: { section: "1.4.7.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "SceneValid", base: "bool",
            access: "R V", conformance: "M", value: "FALSE",
            details: "The SceneValid attribute indicates whether the state of the server corresponds to that associated with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE indicates that they are not valid.",
            xref: { section: "1.4.7.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "NameSupport", base: "map8",
            access: "R V", conformance: "M", constraint: "desc", value: "0",
            details: "This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0.",
            xref: { section: "1.4.7.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "LastConfiguredBy", base: "node-id",
            access: "R V", conformance: "O", constraint: "-", value: "null", quality: "X",
            details: "The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that last configured the Scene Table.",
            xref: { section: "1.4.7.6", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "AttributeValuePair", base: "struct",
            details: "This data type indicates a combination of an identifier and the value of an attribute.",
            xref: { section: "1.4.6.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "AttributeId", base: "attribute-id",
                    access: "RW", conformance: "Matter!Zigbee", value: "",
                    details: "This field SHALL be present or not present, for all instances in the Scenes cluster. If this field is not present, then the data type of AttributeValue SHALL be determined by the order and data type defined in the cluster specification. Otherwise the data type of AttributeValue SHALL be the data type of the attribute indicated by AttributeID.",
                    xref: { section: "1.4.6.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "AttributeValue", base: "variable",
                    access: "RW", conformance: "M", constraint: "", value: "",
                    details: "This is the attribute value as part of an extension field set. See AttributeID to determine the data type for this field.",
                    xref: { section: "1.4.6.1.2", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}));
