/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Identify", id: 0x3, classification: "endpoint", description: "Identify",
    details: "Attributes and commands for putting a device into Identification mode (e.g. flashing a light).",
    xref: { document: "cluster", section: "1.2" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",

            children: [
                {
                    tag: "datatype", name: "QUERY", id: 0x0, description: "Multicast query for identification state",
                    details: "This feature supports a unicast, groupcast or multicast query of the cluster state, with a response " +
                             "back to query initiator, if the identification state is active. This feature is supported for " +
                             "underlying stacks that support a response to a multicast or groupcast command.",
                    xref: { document: "cluster", section: "1.2.4.1" }
                }
            ]
        },

        {
            tag: "attribute", name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW", conformance: "M",
            details: "This attribute specifies the remaining length of time, in seconds, that the endpoint will continue " +
                     "to identify itself.",
            xref: { document: "cluster", section: "1.2.5.1" }
        },

        {
            tag: "attribute", name: "IdentifyType", id: 0x1, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc",
            details: "This attribute specifies how the identification state is presented to the user. This field SHALL " +
                     "contain one of the values listed below:",
            xref: { document: "cluster", section: "1.2.5.2" },

            children: [
                { tag: "datatype", name: "None", id: 0x0, description: "No presentation." },
                { tag: "datatype", name: "Lightoutput", id: 0x1, description: "Light output of a lighting product." },
                { tag: "datatype", name: "Visibleindicator", id: 0x2, description: "Typically a small LED." },
                { tag: "datatype", name: "Audiblebeep", id: 0x3 },
                {
                    tag: "datatype", name: "Display", id: 0x4,
                    description: "Presentation will be visible on display screen."
                },
                {
                    tag: "datatype", name: "Actuator", id: 0x5,
                    description: "Presentation will be conveyed by actuator functionality such as through a window blind operation or in-wall relay."
                }
            ]
        },

        {
            tag: "command", name: "Identify", id: 0x0, access: "R M", conformance: "M", direction: "request",
            response: "status",
            details: "This command starts or stops the receiving device identifying itself. This command SHALL have the " +
                     "following data fields:",
            xref: { document: "cluster", section: "1.2.6.1" },
            children: [ { tag: "datatype", name: "IdentifyTime", id: 0x0, type: "uint16", conformance: "M" } ]
        },

        {
            tag: "command", name: "IdentifyQuery", id: 0x1, access: "M", conformance: "QRY",
            direction: "request", response: "IdentifyQueryResponse",
            details: "This command allows the sending device to request the target or targets to respond if they are " +
                     "currently identifying themselves.",
            xref: { document: "cluster", section: "1.2.6.2" }
        },

        {
            tag: "command", name: "TriggerEffect", id: 0x40, access: "R M", conformance: "O",
            direction: "request", response: "status",

            details: "This command allows the support of feedback to the user, such as a certain light effect. It is used " +
                     "to allow an implementation to provide visual feedback to the user under certain circumstances such " +
                     "as a color light turning green when it has successfully connected to a network. The use of this " +
                     "command and the effects themselves are entirely up to the implementer to use whenever a visual " +
                     "feedback is useful but it is not the same as and does not replace the identify mechanism used " +
                     "during commissioning.",

            xref: { document: "cluster", section: "1.2.6.3" },

            children: [
                {
                    tag: "datatype", name: "EffectIdentifier", id: 0x0, type: "enum8", conformance: "M",
                    constraint: "desc",
                    details: "This field specifies the identify effect to use. All values of the EffectIdentifier SHALL be " +
                             "supported. Implementors MAY deviate from the example light effects in the table below, but they " +
                             "SHOULD indicate during testing how they handle each effect.",
                    xref: { document: "cluster", section: "1.2.6.3.1" },

                    children: [
                        {
                            tag: "datatype", name: "Blink", id: 0x0, conformance: "M",
                            description: "e.g., Light is turned on/off once."
                        },
                        {
                            tag: "datatype", name: "Breathe", id: 0x1, conformance: "M",
                            description: "e.g., Light is turned on/off over 1 second and repeated 15 times."
                        },
                        {
                            tag: "datatype", name: "Okay", id: 0x2, conformance: "M",
                            description: "e.g., Colored light turns green for 1 second; non-colored light flashes twice."
                        },
                        {
                            tag: "datatype", name: "Channelchange", id: 0xb, conformance: "M",
                            description: "e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for 0.5s and then minimum brightness for 7.5s."
                        },
                        {
                            tag: "datatype", name: "Finisheffect", id: 0xfe, conformance: "M",
                            description: "Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as above), first complete the current 1s breathe effect and then terminate the effect."
                        },
                        {
                            tag: "datatype", name: "Stopeffect", id: 0xff, conformance: "M",
                            description: "Terminate the effect as soon as possible."
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EffectVariant", id: 0x1, type: "enum8", conformance: "M",
                    constraint: "desc",
                    details: "This field is used to indicate which variant of the effect, indicated in the EffectIdentifier " +
                             "field, SHOULD be triggered. If a device does not support the given variant, it SHALL use the " +
                             "default variant. This field SHALL contain one of the values listed below:",
                    xref: { document: "cluster", section: "1.2.6.3.2" },
                    children: [ { tag: "datatype", name: "Default", id: 0x0, conformance: "M" } ]
                }
            ]
        },

        {
            tag: "command", name: "IdentifyQueryResponse", id: 0x0, conformance: "QRY", direction: "response",
            details: "This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery " +
                     "Command, in the case that the device is currently identifying itself.",
            xref: { document: "cluster", section: "1.2.6.4" },

            children: [
                {
                    tag: "datatype", name: "Timeout", id: 0x0, type: "uint16", conformance: "M",
                    details: "This field contains the current value of the IdentifyTime attribute, and specifies the length of " +
                             "time, in seconds, that the device will continue to identify itself.",
                    xref: { document: "cluster", section: "1.2.6.4.1" }
                }
            ]
        }
    ]
});