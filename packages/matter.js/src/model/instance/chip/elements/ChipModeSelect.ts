/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0050, name: "ModeSelect",
    description: "Mode Select",
    details: "Attributes and commands for selecting a mode from a list of supported options.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ModeDescription", type: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "StandardNamespace", type: "enum16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedModes", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "ModeOptionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentMode", type: "uint8",
            conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0004, name: "StartUpMode", type: "uint8",
            access: "RW", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "OnMode", type: "uint8",
            access: "RW", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ChangeToMode",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "NewMode", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SemanticTagStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "MfgCode", type: "vendor-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", type: "enum16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ModeOptionStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Label", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Mode", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SemanticTags", type: "SemanticTagStruct",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ModeSelectFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Deponoff",
                    conformance: "M"
                })
            ]
        })
    ]
}));
