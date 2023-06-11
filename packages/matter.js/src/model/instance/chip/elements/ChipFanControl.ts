/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0202, name: "FanControl",
    description: "Fan Control",
    details: "An interface for controlling a fan in a heating/cooling system.",
    children: [
        AttributeElement({
            id: 0x0000, name: "fanMode", base: "FanModeType",
            access: { rw: "W" }, conformance: [ "M" ], value: "0"
        }),

        AttributeElement({
            id: 0x0001, name: "fanModeSequence", base: "FanModeSequenceType",
            access: { rw: "W" }, conformance: [ "M" ], value: "2"
        }),

        AttributeElement({
            id: 0x0002, name: "percentSetting", base: "uint8",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0003, name: "percentCurrent", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], value: "0"
        }),

        AttributeElement({
            id: 0x0004, name: "speedMax", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], value: "1"
        }),

        AttributeElement({
            id: 0x0005, name: "speedSetting", base: "uint8",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0006, name: "speedCurrent", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0007, name: "rockSupport", base: "map8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0008, name: "rockSetting", base: "map8",
            access: { rw: "W" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0009, name: "windSupport", base: "map8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x000a, name: "windSetting", base: "map8",
            access: { rw: "W" }, conformance: [ "O" ], value: "0x00"
        }),

        DatatypeElement({
            name: "FanControlFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "multiSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "multiSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "rocking",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "rocking",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "wind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "wind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "low",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "low",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "medium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "medium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "high",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "high",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "on",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "on",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "smart",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "smart",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                })
            ]
        }),

        DatatypeElement({
            name: "FanModeSequenceType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "offLowMedHigh",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "offLowMedHigh",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "offLowHigh",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "offLowHigh",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "offLowMedHighAuto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "offLowMedHighAuto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "offLowHighAuto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "offLowHighAuto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "offOnAuto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "offOnAuto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "offOn",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "offOn",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                })
            ]
        }),

        DatatypeElement({
            name: "RockSupportMask", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "rockLeftRight",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "rockLeftRight",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "rockUpDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "rockUpDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "rockRound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "rockRound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSupportMask", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "sleepWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sleepWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "naturalWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "naturalWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "WindSettingMask", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "sleepWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sleepWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "naturalWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "naturalWind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        })
    ]
}));
