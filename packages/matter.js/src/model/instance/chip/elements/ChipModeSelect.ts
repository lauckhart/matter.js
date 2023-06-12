/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0050, name: "ModeSelect",
    description: "Mode Select",
    details: "Attributes and commands for selecting a mode from a list of supported options.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ModeDescription", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "StandardNamespace", base: "enum16",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedModes", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "ModeOptionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentMode", base: "uint8",
            access: "R", conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0004, name: "StartUpMode", base: "uint8",
            access: "W", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "OnMode", base: "uint8",
            access: "W", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ChangeToMode",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "NewMode", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SemanticTagStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "MfgCode", base: "vendor-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", base: "enum16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ModeOptionStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Label", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Mode", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "SemanticTags", base: "SemanticTagStruct",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ModeSelectFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Deponoff",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
