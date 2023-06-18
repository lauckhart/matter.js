/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x003b, name: "Switch",
    classification: "application", description: "Switch",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "NumberOfPositions",
            conformance: "M", constraint: "min 2", default: 2, quality: "F", type: "uint8",
            details: "This attribute SHALL indicate the maximum number of positions the " +
                     "switch has. Any kind of switch has a minimum of 2 positions. Also see " +
                     "Section 1.11.10, “NumberOfPositions > 2” for the case " +
                     "NumberOfPositions>2",
            xref: { document: "cluster", section: "1.11.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "CurrentPosition",
            conformance: "M", constraint: "0 to NumberOfPositions1", default: 0, quality: "N", type: "uint8",
            details: "This attribute SHALL indicate the position of the switch. The valid " +
                     "range is zero to NumberOfPositions-1. CurrentPosition value 0 SHALL be" +
                     " assigned to the default position of the switch: for example the \"open" +
                     "\" state of a rocker switch, or the \"idle\" state of a push button " +
                     "switch",
            xref: { document: "cluster", section: "1.11.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "MultiPressMax",
            conformance: "M, SM", constraint: "min 2", default: 2, quality: "F", type: "uint8",
            details: "This attribute SHALL indicate how many consecutive presses can be " +
                     "detected and reported by a momentary switch which supports multi-press" +
                     " (e.g. it will report the value 3 if it can detect single press, " +
                     "double press and triple press, but not quad press and beyond",
            xref: { document: "cluster", section: "1.11.5.3" }
        },

        {
            tag: "event", id: 0x0000, name: "SwitchLatched",
            access: "V", conformance: "LS", priority: "info",
            details: "This event SHALL be generated, when the latching switch is moved to a " +
                     "new position. It MAY have been delayed by debouncing within the switch",
            xref: { document: "cluster", section: "1.11.7.1" },
            children: [
                {
                    tag: "datatype", name: "NewPosition",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "InitialPress",
            access: "V", conformance: "M, S", priority: "info",
            details: "This event SHALL be generated, when the momentary switch starts to be " +
                     "pressed (after debouncing",
            xref: { document: "cluster", section: "1.11.7.2" },
            children: [
                {
                    tag: "datatype", name: "NewPosition",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "event", id: 0x0002, name: "LongPress",
            access: "V", conformance: "M, SL", priority: "info",
            details: "This event SHALL be generated, when the momentary switch has been " +
                     "pressed for a \"long\" time (this time interval is manufacturer " +
                     "determined (e.g. since it depends on the switch physics",
            xref: { document: "cluster", section: "1.11.7.3" },
            children: [
                {
                    tag: "datatype", name: "NewPosition",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "event", id: 0x0003, name: "ShortRelease",
            access: "V", conformance: "M, SR", priority: "info",
            details: "This event SHALL be generated, when the momentary switch has been " +
                     "released (after debouncing",
            xref: { document: "cluster", section: "1.11.7.4" },
            children: [
                {
                    tag: "datatype", name: "PreviousPosition",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "event", id: 0x0004, name: "LongRelease",
            access: "V", conformance: "M, SL", priority: "info",
            details: "This event SHALL be generated, when the momentary switch has been " +
                     "released (after debouncing) and after having been pressed for a long " +
                     "time, i.e. this event SHALL be generated when the switch is released " +
                     "if a LongPress event has been generated since since the previous " +
                     "InitialPress event. Also see Section 1.11.8, “Sequence of generated " +
                     "events",
            xref: { document: "cluster", section: "1.11.7.5" },
            children: [
                {
                    tag: "datatype", name: "PreviousPosition",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "event", id: 0x0005, name: "MultiPressOngoing",
            access: "V", conformance: "M, SM", priority: "info",
            details: "This event SHALL be generated to indicate how many times the momentary" +
                     " switch has been pressed in a multi-press sequence, during that " +
                     "sequence. See Section 1.11.9, “Sequence of events for MultiPress” " +
                     "below",
            xref: { document: "cluster", section: "1.11.7.6" },
            children: [
                {
                    tag: "datatype", name: "NewPosition",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "CurrentNumberOfPressesCounted",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "event", id: 0x0006, name: "MultiPressComplete",
            access: "V", conformance: "M, SM", priority: "info",
            details: "This event SHALL be generated to indicate how many times the momentary" +
                     " switch has been pressed in a multi-press sequence, after it has been " +
                     "detected that the sequence has ended. See Section 1.11.9, “Sequence of" +
                     " events for MultiPress” below",
            xref: { document: "cluster", section: "1.11.7.7" },
            children: [
                {
                    tag: "datatype", name: "PreviousPosition",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TotalNumberOfPressesCounted",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "datatype", name: "SwitchFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "LatchingSwitch",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "MomentarySwitch",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "MomentarySwitchRelease",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "MomentarySwitchLongPress",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "MomentarySwitchMultiPress",
                    conformance: "M"
                }
            ]
        }
    ]
});
