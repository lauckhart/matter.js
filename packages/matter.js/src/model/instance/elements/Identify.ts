/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0003, name: "Identify",
    classification: "endpoint", description: "Identify",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "IdentifyTime",
            access: "RW", conformance: "M", default: undefined, type: "uint16",
            details: "This attribute specifies the remaining length of time, in seconds, " +
                     "that the endpoint will continue to identify itself",
            xref: { document: "cluster", section: "1.2.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "IdentifyType",
            access: "R V", conformance: "M", constraint: "desc", default: undefined, type: "enum8",
            details: "This attribute specifies how the identification state is presented to " +
                     "the user. This field SHALL contain one of the values listed below",
            xref: { document: "cluster", section: "1.2.5.2" }
        },

        {
            tag: "command", id: 0x0000, name: "Identify",
            access: "R M", conformance: "M", direction: "request", response: "status",
            details: "This command starts or stops the receiving device identifying itself. " +
                     "This command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.2.6.1" },
            children: [
                {
                    tag: "datatype", name: "IdentifyTime",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "IdentifyQuery",
            access: "M", conformance: "QRY", direction: "request", response: "IdentifyQueryResponse",
            details: "This command allows the sending device to request the target or " +
                     "targets to respond if they are currently identifying themselves",
            xref: { document: "cluster", section: "1.2.6.2" }
        },

        {
            tag: "command", id: 0x0040, name: "TriggerEffect",
            access: "R M", conformance: "O", direction: "request", response: "status",
            details: "This command allows the support of feedback to the user, such as a " +
                     "certain light effect. It is used to allow an implementation to provide" +
                     " visual feedback to the user under certain circumstances such as a " +
                     "color light turning green when it has successfully connected to a " +
                     "network. The use of this command and the effects themselves are " +
                     "entirely up to the implementer to use whenever a visual feedback is " +
                     "useful but it is not the same as and does not replace the identify " +
                     "mechanism used during commissioning",
            xref: { document: "cluster", section: "1.2.6.3" },
            children: [
                {
                    tag: "datatype", name: "EffectIdentifier",
                    conformance: "M", type: "IdentifyEffectIdentifier"
                },

                {
                    tag: "datatype", name: "EffectVariant",
                    conformance: "M", type: "IdentifyEffectVariant"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "IdentifyQueryResponse",
            conformance: "QRY", direction: "response",
            details: "This command is generated in response to receiving an IdentifyQuery " +
                     "command, see IdentifyQuery Command, in the case that the device is " +
                     "currently identifying itself",
            xref: { document: "cluster", section: "1.2.6.4" }
        },

        {
            tag: "datatype", name: "IdentifyIdentifyType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "None",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "VisibleLight",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "VisibleLed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "AudibleBeep",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Display",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Actuator",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "IdentifyEffectIdentifier",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Blink",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Breathe",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Okay",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "ChannelChange",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x00fe, name: "FinishEffect",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x00ff, name: "StopEffect",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "IdentifyEffectVariant",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Default",
                    conformance: "M"
                }
            ]
        }
    ]
});
