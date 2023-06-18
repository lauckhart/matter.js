/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0050, name: "ModeSelect",
    classification: "application", description: "Mode Select",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Description",
            access: "R V", conformance: "M", constraint: "max 64", default: "MS", quality: "F", type: "string",
            details: "This attribute describes the purpose of the server, in readable text",
            xref: { document: "cluster", section: "1.8.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "StandardNamespace",
            access: "R V", conformance: "M", constraint: "desc", default: "null", quality: "X F", type: "enum16",
            details: "This attribute, when not null, SHALL indicate a single standard " +
                     "namespace for any standard semantic tag value supported in this or any" +
                     " other cluster instance with the same value of this attribute. A null " +
                     "value indicates no standard namespace, and therefore, no standard " +
                     "semantic tags are provided in this cluster instance. Each standard " +
                     "namespace and corresponding values and value meanings SHALL be defined" +
                     " in another document",
            xref: { document: "cluster", section: "1.8.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "SupportedModes",
            access: "R V", conformance: "M", constraint: "max 255", default: "MS", quality: "F", type: "list",
            details: "This attribute is the list of supported modes that may be selected for" +
                     " the CurrentMode attribute. Each item in this list represents a unique" +
                     " mode as indicated by the Mode field of the ModeOptionStruct. Each " +
                     "entry in this list SHALL have a unique value for the Mode field",
            xref: { document: "cluster", section: "1.8.5.3" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "ModeOptionStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0003, name: "CurrentMode",
            access: "R V", conformance: "M", constraint: "desc", default: "MS", quality: "N S", type: "uint8",
            details: "This attribute represents the current mode of the server",
            xref: { document: "cluster", section: "1.8.5.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "StartUpMode",
            access: "RW", conformance: "O", constraint: "desc", default: "MS", quality: "X N", type: "uint8",
            details: "The StartUpMode attribute value indicates the desired startup mode for" +
                     " the server when it is supplied with power",
            xref: { document: "cluster", section: "1.8.5.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "OnMode",
            access: "RW", conformance: "D, EPONOFF", constraint: "desc", default: "null", quality: "X N", type: "uint8",
            details: "This attribute SHALL indicate the value of CurrentMode that depends on" +
                     " the state of the On/Off cluster on the same endpoint. If this " +
                     "attribute is not present or is set to null, it SHALL NOT have an " +
                     "effect, otherwise the CurrentMode attribute SHALL depend on the OnOff " +
                     "attribute of the On/Off cluster as described in the table below",
            xref: { document: "cluster", section: "1.8.5.6" }
        },

        {
            tag: "attribute", id: 0x0000, name: "ModeDescription",
            conformance: "M", type: "string"
        },

        {
            tag: "command", id: 0x0000, name: "ChangeToMode",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "On receipt of this command, if the NewMode field indicates a valid " +
                     "mode transition within the supported list, the server SHALL set the " +
                     "CurrentMode attribute to the NewMode value, otherwise, the",
            xref: { document: "cluster", section: "1.8.6.1" },
            children: [
                {
                    tag: "datatype", name: "NewMode",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "datatype", name: "ModeSelectFeature",
            conformance: "M", type: "map32",
            details: "This is a struct representing a possible mode of the server",
            xref: { document: "cluster", section: "1.8.8.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Label",
                    conformance: "M", constraint: "max 64", default: "MS", quality: "F", type: "string",
                    details: "This field is readable text that describes the mode option that can be" +
                             " used by a client to indicate to the user what this option means. This" +
                             " field is meant to be readable and understandable by the user",
                    xref: { document: "cluster", section: "1.8.8.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Deponoff",
                    conformance: "M", default: "MS", quality: "F", type: "uint8",
                    details: "The Mode field is used to identify the mode option. The value SHALL be" +
                             " unique for every item in the SupportedModes attribute",
                    xref: { document: "cluster", section: "1.8.8.1.2" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "SemanticTags",
                    conformance: "M", constraint: "max 64", default: "MS", quality: "F", type: "list",
                    details: "This field is a list of semantic tags that map to the mode option. " +
                             "This MAY be used by clients to determine the meaning of the mode " +
                             "option as defined in a standard or manufacturer specific namespace. " +
                             "Semantic tags can help clients look for options that meet certain " +
                             "criteria. A semantic tag SHALL be either a standard tag or " +
                             "manufacturer specific tag as defined in each SemanticTagStruct list " +
                             "entry",
                    xref: { document: "cluster", section: "1.8.8.1.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "SemanticTagStruct"
                        }
                    ]
                }
            ]
        },

        {
            tag: "datatype", name: "SemanticTagStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "MfgCode",
                    conformance: "M", type: "vendor-id"
                },

                {
                    tag: "datatype", name: "Value",
                    conformance: "M", type: "enum16"
                }
            ]
        }
    ]
});
