/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003b, name: "Switch",
    description: "Switch",
    details: "This cluster exposes interactions with a switch device, for the purpose of using those interactions by other devices. Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch (e.g. push button), distinguished with their feature flags. Interactions with the switch device are exposed as attributes (for the latching switch) and as events (for both types of switches). An interested party MAY subscribe to these attributes/events and thus be informed of the interactions, and can perform actions based on this, for example by sending commands to perform an action such as controlling a light or a window shade.",
    children: [
        AttributeElement({
            id: 0x0000, name: "NumberOfPositions", base: "uint8",
            default: 2
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentPosition", base: "uint8",
            quality: "P"
        }),

        AttributeElement({
            id: 0x0002, name: "MultiPressMax", base: "uint8",
            conformance: "O", default: 2
        }),

        EventElement({
            id: 0x0000, name: "SwitchLatched",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", base: "uint8"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "InitialPress",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", base: "uint8"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LongPress",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", base: "uint8"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "ShortRelease",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousPosition", base: "uint8"
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LongRelease",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousPosition", base: "uint8"
                })
            ]
        }),

        EventElement({
            id: 0x0005, name: "MultiPressOngoing",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", base: "uint8"
                }),

                DatatypeElement({
                    name: "CurrentNumberOfPressesCounted", base: "uint8"
                })
            ]
        }),

        EventElement({
            id: 0x0006, name: "MultiPressComplete",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousPosition", base: "uint8"
                }),

                DatatypeElement({
                    name: "TotalNumberOfPressesCounted", base: "uint8"
                })
            ]
        }),

        DatatypeElement({
            name: "SwitchFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "LatchingSwitch"
                }),

                DatatypeElement({
                    id: 0x0002, name: "MomentarySwitch"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MomentarySwitchRelease"
                }),

                DatatypeElement({
                    id: 0x0008, name: "MomentarySwitchLongPress"
                }),

                DatatypeElement({
                    id: 0x0010, name: "MomentarySwitchMultiPress"
                })
            ]
        })
    ]
}));
