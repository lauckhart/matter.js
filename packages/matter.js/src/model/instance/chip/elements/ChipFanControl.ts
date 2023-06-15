/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0202, name: "FanControl",
    description: "Fan Control",
    details: "An interface for controlling a fan in a heating/cooling system.",
    children: [
        AttributeElement({
            id: 0x0000, name: "FanMode", base: "FanModeType",
            access: "RW", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "FanModeSequence", base: "FanModeSequenceType",
            access: "RW", conformance: "M", default: 2
        }),

        AttributeElement({
            id: 0x0002, name: "PercentSetting", base: "uint8",
            access: "RW", conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "PercentCurrent", base: "uint8",
            conformance: "M", default: 0
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
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "MultiSpeed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Auto",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rocking",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wind",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeType", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Low",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Medium",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "High",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "On",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Auto",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Smart",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeSequenceType", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "OffLowMedHigh",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OffLowHigh",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "OffLowMedHighAuto",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OffLowHighAuto",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "OffOnAuto",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "OffOn",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RockSupportMask", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "RockLeftRight",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RockUpDown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "RockRound",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSupportMask", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SleepWind",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NaturalWind",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSettingMask", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SleepWind",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NaturalWind",
                    conformance: "M"
                })
            ]
        })
    ]
}));
