/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003b, name: "Switch",
    description: "Switch",
    details: "This cluster exposes interactions with a switch device, for the purpose of using those interactions by other devices. Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch (e.g. push button), distinguished with their feature flags. Interactions with the switch device are exposed as attributes (for the latching switch) and as events (for both types of switches). An interested party MAY subscribe to these attributes/events and thus be informed of the interactions, and can perform actions based on this, for example by sending commands to perform an action such as controlling a light or a window shade.",
    children: [
        AttributeElement({
            id: 0x0000, name: "NumberOfPositions", type: "uint8",
            conformance: "M", default: 2
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentPosition", type: "uint8",
            conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0002, name: "MultiPressMax", type: "uint8",
            conformance: "O", default: 2
        }),

        EventElement({
            id: 0x0000, name: "SwitchLatched",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "InitialPress",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LongPress",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "ShortRelease",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousPosition", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LongRelease",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousPosition", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0005, name: "MultiPressOngoing",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "NewPosition", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CurrentNumberOfPressesCounted", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0006, name: "MultiPressComplete",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousPosition", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TotalNumberOfPressesCounted", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SwitchFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "LatchingSwitch",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "MomentarySwitch",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MomentarySwitchRelease",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "MomentarySwitchLongPress",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "MomentarySwitchMultiPress",
                    conformance: "M"
                })
            ]
        })
    ]
}));
