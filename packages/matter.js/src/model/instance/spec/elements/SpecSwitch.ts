/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x003b, name: "Switch",
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
                    id: 0x0000, name: "LS",
                    conformance: "O.a1",
                    xref: { document: "cluster", section: "1.11.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "MS",
                    conformance: "O.a1",
                    xref: { document: "cluster", section: "1.11.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "MSR",
                    conformance: "[M, S]",
                    xref: { document: "cluster", section: "1.11.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "MSL",
                    conformance: "[M, S & M, SR]",
                    xref: { document: "cluster", section: "1.11.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "MSM",
                    conformance: "[M, S & M, SR]",
                    xref: { document: "cluster", section: "1.11.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "NumberOfPositions", base: "uint8",
            conformance: "M", constraint: "min 2", default: 2, quality: "F",
            details: "This attribute SHALL indicate the maximum number of positions the " +
                     "switch has. Any kind of switch has a minimum of 2 positions. Also see " +
                     "Section 1.11.10, “NumberOfPositions > 2” for the case " +
                     "NumberOfPositions>2",
            xref: { document: "cluster", section: "1.11.5.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentPosition", base: "uint8",
            conformance: "M", constraint: "0 to NumberOfPositions1", default: 0, quality: "N",
            details: "This attribute SHALL indicate the position of the switch. The valid " +
                     "range is zero to NumberOfPositions-1. CurrentPosition value 0 SHALL be" +
                     " assigned to the default position of the switch: for example the \"open" +
                     "\" state of a rocker switch, or the \"idle\" state of a push button " +
                     "switch",
            xref: { document: "cluster", section: "1.11.5.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MultiPressMax", base: "uint8",
            conformance: "M, SM", constraint: "min 2", default: 2, quality: "F",
            details: "This attribute SHALL indicate how many consecutive presses can be " +
                     "detected and reported by a momentary switch which supports multi-press" +
                     " (e.g. it will report the value 3 if it can detect single press, " +
                     "double press and triple press, but not quad press and beyond",
            xref: { document: "cluster", section: "1.11.5.3", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "SwitchLatched",
            access: "V", conformance: "LS", priority: "critical",
            details: "This event SHALL be generated, when the latching switch is moved to a " +
                     "new position. It MAY have been delayed by debouncing within the switch",
            xref: { document: "cluster", section: "1.11.7.1", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "InitialPress",
            access: "V", conformance: "M, S", priority: "critical",
            details: "This event SHALL be generated, when the momentary switch starts to be " +
                     "pressed (after debouncing",
            xref: { document: "cluster", section: "1.11.7.2", version: "1.1" }
        }),

        EventElement({
            id: 0x0002, name: "LongPress",
            access: "V", conformance: "M, SL", priority: "critical",
            details: "This event SHALL be generated, when the momentary switch has been " +
                     "pressed for a \"long\" time (this time interval is manufacturer " +
                     "determined (e.g. since it depends on the switch physics",
            xref: { document: "cluster", section: "1.11.7.3", version: "1.1" }
        }),

        EventElement({
            id: 0x0003, name: "ShortRelease",
            access: "V", conformance: "M, SR", priority: "critical",
            details: "This event SHALL be generated, when the momentary switch has been " +
                     "released (after debouncing",
            xref: { document: "cluster", section: "1.11.7.4", version: "1.1" }
        }),

        EventElement({
            id: 0x0004, name: "LongRelease",
            access: "V", conformance: "M, SL", priority: "critical",
            details: "This event SHALL be generated, when the momentary switch has been " +
                     "released (after debouncing) and after having been pressed for a long " +
                     "time, i.e. this event SHALL be generated when the switch is released " +
                     "if a LongPress event has been generated since since the previous " +
                     "InitialPress event. Also see Section 1.11.8, “Sequence of generated " +
                     "events",
            xref: { document: "cluster", section: "1.11.7.5", version: "1.1" }
        }),

        EventElement({
            id: 0x0005, name: "MultiPressOngoing",
            access: "V", conformance: "M, SM", priority: "critical",
            details: "This event SHALL be generated to indicate how many times the momentary" +
                     " switch has been pressed in a multi-press sequence, during that " +
                     "sequence. See Section 1.11.9, “Sequence of events for MultiPress” " +
                     "below",
            xref: { document: "cluster", section: "1.11.7.6", version: "1.1" }
        }),

        EventElement({
            id: 0x0006, name: "MultiPressComplete",
            access: "V", conformance: "M, SM", priority: "critical",
            details: "This event SHALL be generated to indicate how many times the momentary" +
                     " switch has been pressed in a multi-press sequence, after it has been " +
                     "detected that the sequence has ended. See Section 1.11.9, “Sequence of" +
                     " events for MultiPress” below",
            xref: { document: "cluster", section: "1.11.7.7", version: "1.1" }
        })
    ]
}));
