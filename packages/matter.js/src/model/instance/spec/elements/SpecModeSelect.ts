/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0050, name: "ModeSelect",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ONOFF",
                    description: "Dependency with the On/Off cluster",
                    xref: { document: "cluster", section: "1.8.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "Description", base: "string",
            access: "R V", conformance: "M", constraint: "max 64", default: "MS", quality: "F",
            details: "This attribute describes the purpose of the server, in readable text.",
            xref: { document: "cluster", section: "1.8.5.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "StandardNamespace", base: "enum16",
            access: "R V", conformance: "M", constraint: "desc", default: "null", quality: "X F",
            details: "This attribute, when not null, SHALL indicate a single standard namespace for any standard semantic tag value supported in this or any other cluster instance with the same value of this attribute. A null value indicates no standard namespace, and therefore, no standard semantic tags are provided in this cluster instance. Each standard namespace and corresponding values and value meanings SHALL be defined in another document.",
            xref: { document: "cluster", section: "1.8.5.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedModes", base: "list",
            access: "R V", conformance: "M", constraint: "max 255", default: "MS", quality: "F",
            details: "This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each entry in this list SHALL have a unique value for the Mode field.",
            xref: { document: "cluster", section: "1.8.5.3", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "ModeOptionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentMode", base: "uint8",
            access: "R V", conformance: "M", constraint: "desc", default: "MS", quality: "N S",
            details: "This attribute represents the current mode of the server.",
            xref: { document: "cluster", section: "1.8.5.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "StartUpMode", base: "uint8",
            access: "RW VO", conformance: "O", constraint: "desc", default: "MS", quality: "X N",
            details: "The StartUpMode attribute value indicates the desired startup mode for the server when it is supplied with power.",
            xref: { document: "cluster", section: "1.8.5.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "OnMode", base: "uint8",
            access: "RW VO", conformance: "D, EPONOFF", constraint: "desc", default: "null", quality: "X N",
            details: "This attribute SHALL indicate the value of CurrentMode that depends on the state of the On/Off cluster on the same endpoint. If this attribute is not present or is set to null, it SHALL NOT have an effect, otherwise the CurrentMode attribute SHALL depend on the OnOff attribute of the On/Off cluster as described in the table below:",
            xref: { document: "cluster", section: "1.8.5.6", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "ChangeToMode",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the server SHALL set the CurrentMode attribute to the NewMode value, otherwise, the",
            xref: { document: "cluster", section: "1.8.6.1", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ModeOptionStruct", base: "struct",
            details: "This is a struct representing a possible mode of the server.",
            xref: { document: "cluster", section: "1.8.8.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Label", base: "string",
                    conformance: "M", constraint: "max 64", default: "MS", quality: "F",
                    details: "This field is readable text that describes the mode option that can be used by a client to indicate to the user what this option means. This field is meant to be readable and understandable by the user.",
                    xref: { document: "cluster", section: "1.8.8.1.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Mode", base: "uint8",
                    conformance: "M", default: "MS", quality: "F",
                    details: "The Mode field is used to identify the mode option. The value SHALL be unique for every item in the SupportedModes attribute.",
                    xref: { document: "cluster", section: "1.8.8.1.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "SemanticTags", base: "list",
                    conformance: "M", constraint: "max 64", default: "MS", quality: "F",
                    details: "This field is a list of semantic tags that map to the mode option. This MAY be used by clients to determine the meaning of the mode option as defined in a standard or manufacturer specific namespace. Semantic tags can help clients look for options that meet certain criteria. A semantic tag SHALL be either a standard tag or manufacturer specific tag as defined in each SemanticTagStruct list entry.",
                    xref: { document: "cluster", section: "1.8.8.1.3", version: "1.1" },
                    children: [
                        DatatypeElement({
                            name: "entry", base: "SemanticTagStruct"
                        })
                    ]
                })
            ]
        })
    ]
}));
