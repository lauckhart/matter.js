/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0202, name: "FanControl",
    description: "Fan Control",
    details: "An interface for controlling a fan in a heating/cooling system.",
    children: [
        AttributeElement({
            id: 0x0000, name: "FanMode", base: "FanModeType",
            access: "W", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "FanModeSequence", base: "FanModeSequenceType",
            access: "W", conformance: "M", default: 2
        }),

        AttributeElement({
            id: 0x0002, name: "PercentSetting", base: "uint8",
            access: "W", conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "PercentCurrent", base: "uint8",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "SpeedMax", base: "uint8",
            access: "R", conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0005, name: "SpeedSetting", base: "uint8",
            access: "W", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "SpeedCurrent", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0007, name: "RockSupport", base: "map8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "RockSetting", base: "map8",
            access: "W", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0009, name: "WindSupport", base: "map8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "WindSetting", base: "map8",
            access: "W", conformance: "O", default: 0
        }),

        DatatypeElement({
            name: "FanControlFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "MultiSpeed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Auto",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rocking",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wind",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Low",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Medium",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "High",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "On",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Auto",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Smart",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeSequenceType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "OffLowMedHigh",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OffLowHigh",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "OffLowMedHighAuto",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OffLowHighAuto",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "OffOnAuto",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "OffOn",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RockSupportMask", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "RockLeftRight",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RockUpDown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "RockRound",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSupportMask", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SleepWind",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NaturalWind",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSettingMask", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SleepWind",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NaturalWind",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
