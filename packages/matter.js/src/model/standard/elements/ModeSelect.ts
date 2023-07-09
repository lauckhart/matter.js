/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ModeSelect", id: 0x50, classification: "application",
    description: "Mode Select",
    details: "Attributes and commands for selecting a mode from a list of supported options.",
    xref: { document: "cluster", section: "1.8" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "1.8.4" },
            children: [{
                tag: "datatype", name: "DEPONOFF", id: 0x0, description: "OnOff",
                details: "Dependency with the On/Off cluster"
            }]
        },

        {
            tag: "attribute", name: "Description", id: 0x0, type: "string", access: "R V", conformance: "M",
            constraint: "max 64", quality: "F",
            details: "This attribute describes the purpose of the server, in readable text.",
            xref: { document: "cluster", section: "1.8.5.1" }
        },

        {
            tag: "attribute", name: "StandardNamespace", id: 0x1, type: "enum16", access: "R V",
            conformance: "M", constraint: "desc", default: null, quality: "X F",
            details: "This attribute, when not null, SHALL indicate a single standard namespace for any standard semantic " +
                "tag value supported in this or any other cluster instance with the same value of this attribute. A " +
                "null value indicates no standard namespace, and therefore, no standard semantic tags are provided " +
                "in this cluster instance. Each standard namespace and corresponding values and value meanings SHALL " +
                "be defined in another document.",
            xref: { document: "cluster", section: "1.8.5.2" }
        },

        {
            tag: "attribute", name: "SupportedModes", id: 0x2, type: "list", access: "R V", conformance: "M",
            constraint: "max 255", quality: "F",
            details: "This attribute is the list of supported modes that may be selected for the CurrentMode attribute. " +
                "Each item in this list represents a unique mode as indicated by the Mode field of the " +
                "ModeOptionStruct. Each entry in this list SHALL have a unique value for the Mode field.",
            xref: { document: "cluster", section: "1.8.5.3" },
            children: [{ tag: "datatype", name: "entry", type: "ModeOptionStruct" }]
        },

        {
            tag: "attribute", name: "CurrentMode", id: 0x3, type: "uint8", access: "R V", conformance: "M",
            constraint: "desc", quality: "N S",
            details: "This attribute represents the current mode of the server.",
            xref: { document: "cluster", section: "1.8.5.4" }
        },

        {
            tag: "attribute", name: "StartUpMode", id: 0x4, type: "uint8", access: "RW VO", conformance: "O",
            constraint: "desc", quality: "X N",
            details: "The StartUpMode attribute value indicates the desired startup mode for the server when it is " +
                "supplied with power.",
            xref: { document: "cluster", section: "1.8.5.5" }
        },

        {
            tag: "attribute", name: "OnMode", id: 0x5, type: "uint8", access: "RW VO", conformance: "DEPONOFF",
            constraint: "desc", default: null, quality: "X N",
            details: "This attribute SHALL indicate the value of CurrentMode that depends on the state of the On/Off " +
                "cluster on the same endpoint. If this attribute is not present or is set to null, it SHALL NOT have " +
                "an effect, otherwise the CurrentMode attribute SHALL depend on the OnOff attribute of the On/Off " +
                "cluster as described in the table below:",
            xref: { document: "cluster", section: "1.8.5.6" }
        },

        {
            tag: "command", name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "On receipt of this command, if the NewMode field indicates a valid mode transition within the " +
                "supported list, the server SHALL set the CurrentMode attribute to the NewMode value, otherwise, the",
            xref: { document: "cluster", section: "1.8.6.1" },
            children: [{ tag: "datatype", name: "NewMode", id: 0x0, type: "uint8", conformance: "M", constraint: "desc" }]
        },

        {
            tag: "datatype", name: "ModeOptionStruct", type: "struct", conformance: "M",
            details: "This is a struct representing a possible mode of the server.",
            xref: { document: "cluster", section: "1.8.8.1" },

            children: [
                {
                    tag: "datatype", name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 64",
                    quality: "F",
                    details: "This field is readable text that describes the mode option that can be used by a client to indicate " +
                        "to the user what this option means. This field is meant to be readable and understandable by the " +
                        "user.",
                    xref: { document: "cluster", section: "1.8.8.1.1" }
                },

                {
                    tag: "datatype", name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F",
                    details: "The Mode field is used to identify the mode option. The value SHALL be unique for every item in the " +
                        "SupportedModes attribute.",
                    xref: { document: "cluster", section: "1.8.8.1.2" }
                },

                {
                    tag: "datatype", name: "SemanticTags", id: 0x2, type: "list", conformance: "M",
                    constraint: "max 64", quality: "F",
                    details: "This field is a list of semantic tags that map to the mode option. This MAY be used by clients to " +
                        "determine the meaning of the mode option as defined in a standard or manufacturer specific " +
                        "namespace. Semantic tags can help clients look for options that meet certain criteria. A semantic " +
                        "tag SHALL be either a standard tag or manufacturer specific tag as defined in each " +
                        "SemanticTagStruct list entry.",
                    xref: { document: "cluster", section: "1.8.8.1.3" },
                    children: [{ tag: "datatype", name: "entry", type: "SemanticTagStruct" }]
                }
            ]
        },

        {
            tag: "datatype", name: "SemanticTagStruct", type: "struct", conformance: "M",
            details: "A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.",
            xref: { document: "cluster", section: "1.8.8.2" },

            children: [
                {
                    tag: "datatype", name: "MfgCode", id: 0x0, type: "vendor-id", conformance: "M", constraint: "desc",
                    quality: "X F",

                    details: "If this field is null, the Value field SHALL be defined in a standard namespace as indicated by the " +
                        "StandardNamespace attribute. If this field is not null, it SHALL indicate a manufacturer code " +
                        "(Vendor ID), and the Value field SHALL indicate a semantic tag defined by the manufacturer. Each " +
                        "manufacturer code supports a single namespace of values. The same manufacturer code and semantic " +
                        "tag value in separate cluster instances are part of the same namespace and have the same meaning. " +
                        "For example: a manufacturer tag meaning \"pinch\", has the same meaning in a cluster whose purpose is " +
                        "to choose the amount of sugar, or amount of salt.",

                    xref: { document: "cluster", section: "1.8.8.2.2" }
                },

                {
                    tag: "datatype", name: "Value", id: 0x1, type: "enum16", conformance: "M", quality: "F",
                    details: "This field SHALL indicate the semantic tag within a semantic tag namespace which is either " +
                        "manufacturer specific or standard. For semantic tags in a standard namespace, see Standard " +
                        "Namespace.",
                    xref: { document: "cluster", section: "1.8.8.2.1" }
                }
            ]
        }
    ]
});
