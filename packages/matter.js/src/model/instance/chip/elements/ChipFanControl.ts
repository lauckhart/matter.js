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
            access: "RW", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "FanModeSequence", base: "FanModeSequenceType",
            access: "RW", default: 2
        }),

        AttributeElement({
            id: 0x0002, name: "PercentSetting", base: "uint8",
            access: "RW", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "PercentCurrent", base: "uint8",
            default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "SpeedMax", base: "uint8",
            conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0005, name: "SpeedSetting", base: "uint8",
            access: "RW", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "SpeedCurrent", base: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0007, name: "RockSupport", base: "map8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "RockSetting", base: "map8",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0009, name: "WindSupport", base: "map8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "WindSetting", base: "map8",
            access: "RW", conformance: "O", default: 0
        }),

        DatatypeElement({
            name: "FanControlFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "MultiSpeed"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Auto"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rocking"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wind"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Low"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Medium"
                }),

                DatatypeElement({
                    id: 0x0003, name: "High"
                }),

                DatatypeElement({
                    id: 0x0004, name: "On"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Auto"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Smart"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeSequenceType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "OffLowMedHigh"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OffLowHigh"
                }),

                DatatypeElement({
                    id: 0x0002, name: "OffLowMedHighAuto"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OffLowHighAuto"
                }),

                DatatypeElement({
                    id: 0x0004, name: "OffOnAuto"
                }),

                DatatypeElement({
                    id: 0x0005, name: "OffOn"
                })
            ]
        }),

        DatatypeElement({
            name: "RockSupportMask", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "RockLeftRight"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RockUpDown"
                }),

                DatatypeElement({
                    id: 0x0004, name: "RockRound"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSupportMask", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SleepWind"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NaturalWind"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSettingMask", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SleepWind"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NaturalWind"
                })
            ]
        })
    ]
}));
