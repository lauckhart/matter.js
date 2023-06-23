/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Identify", id: 0x3, classification: "endpoint", description: "Identify",
    details: "Attributes and commands for putting a device into Identification mode (e.g. flashing a light",
    xref: { document: "cluster", section: "1.2" },
    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            children: [
                {
                    tag: "datatype", name: "QUERY", id: 0x0, description: "Multicast query for identification state",
                    details: "This feature supports a unicast, groupcast or multicast query of the cluster state, with a response " +
                             "back to query initiator, if the identification state is active. This feature is supported for " +
                             "underlying stacks that support a response to a multicast or groupcast command",
                    xref: { document: "cluster", section: "1.2.4.1" }
                }
            ]
        },

        {
            tag: "attribute", name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW", conformance: "M",
            details: "This attribute specifies the remaining length of time, in seconds, that the endpoint will continue " +
                     "to identify itself",
            xref: { document: "cluster", section: "1.2.5.1" }
        },

        {
            tag: "attribute", name: "IdentifyType", id: 0x1, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc",
            details: "This attribute specifies how the identification state is presented to the user. This field SHALL " +
                     "contain one of the values listed below",
            xref: { document: "cluster", section: "1.2.5.2" },
            children: [
                {
                    tag: "datatype", name: "None", id: 0x0,
                    xref: { document: "cluster", section: "1.2.5.2" }
                },

                {
                    tag: "datatype", name: "Lightoutput", id: 0x1,
                    xref: { document: "cluster", section: "1.2.5.2" }
                },

                {
                    tag: "datatype", name: "Visibleindicator", id: 0x2,
                    xref: { document: "cluster", section: "1.2.5.2" }
                },

                {
                    tag: "datatype", name: "Audiblebeep", id: 0x3,
                    xref: { document: "cluster", section: "1.2.5.2" }
                },

                {
                    tag: "datatype", name: "Display", id: 0x4,
                    xref: { document: "cluster", section: "1.2.5.2" }
                },

                {
                    tag: "datatype", name: "Actuator", id: 0x5,
                    xref: { document: "cluster", section: "1.2.5.2" }
                }
            ]
        },

        {
            tag: "command", name: "IdentifyQueryResponse", id: 0x0, access: "R M", conformance: "QRY",
            direction: "request",
            details: "This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery " +
                     "Command, in the case that the device is currently identifying itself",
            xref: { document: "cluster", section: "1.2.6.4" },
            children: [
                {
                    tag: "datatype", name: "Timeout", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "1.2.6.4" }
                },

                {
                    tag: "datatype", name: "IdentifyTime", type: "uint16", conformance: "M"
                }
            ]
        },

        {
            tag: "command", name: "IdentifyQuery", id: 0x1, access: "M", conformance: "QRY",
            direction: "request", response: "IdentifyQueryResponse",
            details: "This command allows the sending device to request the target or targets to respond if they are " +
                     "currently identifying themselves",
            xref: { document: "cluster", section: "1.2.6.2" }
        },

        {
            tag: "command", name: "TriggerEffect", id: 0x40, access: "R M", conformance: "O",
            direction: "request", response: "status",
            details: "This command allows the support of feedback to the user, such as a certain light effect. It is used " +
                     "to allow an implementation to provide visual feedback to the user under certain circumstances such " +
                     "as a color light turning green when it has successfully connected to a network. The use of this " +
                     "command and the effects themselves are entirely up to the implementer to use whenever a visual " +
                     "feedback is useful but it is not the same as and does not replace the identify mechanism used during" +
                     " commissioning",
            xref: { document: "cluster", section: "1.2.6.3" },
            children: [
                {
                    tag: "datatype", name: "EffectIdentifier", id: 0x0, type: "enum8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "1.2.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "Blink", id: 0x0, conformance: "M"
                        },

                        {
                            tag: "datatype", name: "Breathe", id: 0x1, conformance: "M"
                        },

                        {
                            tag: "datatype", name: "Okay", id: 0x2, conformance: "M"
                        },

                        {
                            tag: "datatype", name: "ChannelChange", id: 0xb, conformance: "M"
                        },

                        {
                            tag: "datatype", name: "FinishEffect", id: 0xfe, conformance: "M"
                        },

                        {
                            tag: "datatype", name: "StopEffect", id: 0xff, conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EffectVariant", id: 0x1, type: "enum8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "1.2.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "Default", id: 0x0, conformance: "M"
                        }
                    ]
                }
            ]
        }
    ]
});
