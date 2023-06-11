/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0509, name: "KeypadInput",
    description: "Keypad Input",
    details: "This cluster provides an interface for controlling a device like a TV using action commands such as UP, DOWN, and SELECT.",
    children: [
        CommandElement({
            id: 0x0000, name: "SendKey",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "SendKeyResponse",
            children: [
                DatatypeElement({
                    name: "keyCode", base: "CecKeyCode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "keyCode", base: "CecKeyCode",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SendKeyResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "KeypadInputStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "KeypadInputStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unsupportedKey",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unsupportedKey",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "invalidKeyInCurrentState",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "invalidKeyInCurrentState",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "CecKeyCode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "select",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "select",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "up",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "up",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "down",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "down",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "left",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "left",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "right",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "right",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "rightUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "rightUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "rightDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "rightDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "leftUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "leftUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "leftDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "leftDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "rootMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "rootMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "setupMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "setupMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "contentsMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "contentsMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "favoriteMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "favoriteMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "exit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0D"
                }),

                DatatypeElement({
                    name: "exit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0D"
                }),

                DatatypeElement({
                    name: "mediaTopMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "mediaTopMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "mediaContextSensitiveMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x11"
                }),

                DatatypeElement({
                    name: "mediaContextSensitiveMenu",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x11"
                }),

                DatatypeElement({
                    name: "numberEntryMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1D"
                }),

                DatatypeElement({
                    name: "numberEntryMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1D"
                }),

                DatatypeElement({
                    name: "number11",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1E"
                }),

                DatatypeElement({
                    name: "number11",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1E"
                }),

                DatatypeElement({
                    name: "number12",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1F"
                }),

                DatatypeElement({
                    name: "number12",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1F"
                }),

                DatatypeElement({
                    name: "number0OrNumber10",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "number0OrNumber10",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "numbers1",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x21"
                }),

                DatatypeElement({
                    name: "numbers1",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x21"
                }),

                DatatypeElement({
                    name: "numbers2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x22"
                }),

                DatatypeElement({
                    name: "numbers2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x22"
                }),

                DatatypeElement({
                    name: "numbers3",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x23"
                }),

                DatatypeElement({
                    name: "numbers3",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x23"
                }),

                DatatypeElement({
                    name: "numbers4",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x24"
                }),

                DatatypeElement({
                    name: "numbers4",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x24"
                }),

                DatatypeElement({
                    name: "numbers5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x25"
                }),

                DatatypeElement({
                    name: "numbers5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x25"
                }),

                DatatypeElement({
                    name: "numbers6",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x26"
                }),

                DatatypeElement({
                    name: "numbers6",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x26"
                }),

                DatatypeElement({
                    name: "numbers7",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x27"
                }),

                DatatypeElement({
                    name: "numbers7",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x27"
                }),

                DatatypeElement({
                    name: "numbers8",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x28"
                }),

                DatatypeElement({
                    name: "numbers8",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x28"
                }),

                DatatypeElement({
                    name: "numbers9",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x29"
                }),

                DatatypeElement({
                    name: "numbers9",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x29"
                }),

                DatatypeElement({
                    name: "dot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2A"
                }),

                DatatypeElement({
                    name: "dot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2A"
                }),

                DatatypeElement({
                    name: "enter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2B"
                }),

                DatatypeElement({
                    name: "enter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2B"
                }),

                DatatypeElement({
                    name: "clear",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2C"
                }),

                DatatypeElement({
                    name: "clear",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2C"
                }),

                DatatypeElement({
                    name: "nextFavorite",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2F"
                }),

                DatatypeElement({
                    name: "nextFavorite",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2F"
                }),

                DatatypeElement({
                    name: "channelUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x30"
                }),

                DatatypeElement({
                    name: "channelUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x30"
                }),

                DatatypeElement({
                    name: "channelDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x31"
                }),

                DatatypeElement({
                    name: "channelDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x31"
                }),

                DatatypeElement({
                    name: "previousChannel",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x32"
                }),

                DatatypeElement({
                    name: "previousChannel",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x32"
                }),

                DatatypeElement({
                    name: "soundSelect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x33"
                }),

                DatatypeElement({
                    name: "soundSelect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x33"
                }),

                DatatypeElement({
                    name: "inputSelect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x34"
                }),

                DatatypeElement({
                    name: "inputSelect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x34"
                }),

                DatatypeElement({
                    name: "displayInformation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x35"
                }),

                DatatypeElement({
                    name: "displayInformation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x35"
                }),

                DatatypeElement({
                    name: "help",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x36"
                }),

                DatatypeElement({
                    name: "help",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x36"
                }),

                DatatypeElement({
                    name: "pageUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x37"
                }),

                DatatypeElement({
                    name: "pageUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x37"
                }),

                DatatypeElement({
                    name: "pageDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x38"
                }),

                DatatypeElement({
                    name: "pageDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x38"
                }),

                DatatypeElement({
                    name: "power",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "power",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "volumeUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x41"
                }),

                DatatypeElement({
                    name: "volumeUp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x41"
                }),

                DatatypeElement({
                    name: "volumeDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x42"
                }),

                DatatypeElement({
                    name: "volumeDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x42"
                }),

                DatatypeElement({
                    name: "mute",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x43"
                }),

                DatatypeElement({
                    name: "mute",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x43"
                }),

                DatatypeElement({
                    name: "play",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x44"
                }),

                DatatypeElement({
                    name: "play",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x44"
                }),

                DatatypeElement({
                    name: "stop",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x45"
                }),

                DatatypeElement({
                    name: "stop",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x45"
                }),

                DatatypeElement({
                    name: "pause",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x46"
                }),

                DatatypeElement({
                    name: "pause",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x46"
                }),

                DatatypeElement({
                    name: "record",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x47"
                }),

                DatatypeElement({
                    name: "record",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x47"
                }),

                DatatypeElement({
                    name: "rewind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x48"
                }),

                DatatypeElement({
                    name: "rewind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x48"
                }),

                DatatypeElement({
                    name: "fastForward",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x49"
                }),

                DatatypeElement({
                    name: "fastForward",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x49"
                }),

                DatatypeElement({
                    name: "eject",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4A"
                }),

                DatatypeElement({
                    name: "eject",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4A"
                }),

                DatatypeElement({
                    name: "forward",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4B"
                }),

                DatatypeElement({
                    name: "forward",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4B"
                }),

                DatatypeElement({
                    name: "backward",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4C"
                }),

                DatatypeElement({
                    name: "backward",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4C"
                }),

                DatatypeElement({
                    name: "stopRecord",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4D"
                }),

                DatatypeElement({
                    name: "stopRecord",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4D"
                }),

                DatatypeElement({
                    name: "pauseRecord",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4E"
                }),

                DatatypeElement({
                    name: "pauseRecord",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4E"
                }),

                DatatypeElement({
                    name: "reserved",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4F"
                }),

                DatatypeElement({
                    name: "reserved",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4F"
                }),

                DatatypeElement({
                    name: "angle",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x50"
                }),

                DatatypeElement({
                    name: "angle",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x50"
                }),

                DatatypeElement({
                    name: "subPicture",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x51"
                }),

                DatatypeElement({
                    name: "subPicture",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x51"
                }),

                DatatypeElement({
                    name: "videoOnDemand",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x52"
                }),

                DatatypeElement({
                    name: "videoOnDemand",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x52"
                }),

                DatatypeElement({
                    name: "electronicProgramGuide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x53"
                }),

                DatatypeElement({
                    name: "electronicProgramGuide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x53"
                }),

                DatatypeElement({
                    name: "timerProgramming",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x54"
                }),

                DatatypeElement({
                    name: "timerProgramming",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x54"
                }),

                DatatypeElement({
                    name: "initialConfiguration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x55"
                }),

                DatatypeElement({
                    name: "initialConfiguration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x55"
                }),

                DatatypeElement({
                    name: "selectBroadcastType",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x56"
                }),

                DatatypeElement({
                    name: "selectBroadcastType",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x56"
                }),

                DatatypeElement({
                    name: "selectSoundPresentation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x57"
                }),

                DatatypeElement({
                    name: "selectSoundPresentation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x57"
                }),

                DatatypeElement({
                    name: "playFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x60"
                }),

                DatatypeElement({
                    name: "playFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x60"
                }),

                DatatypeElement({
                    name: "pausePlayFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x61"
                }),

                DatatypeElement({
                    name: "pausePlayFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x61"
                }),

                DatatypeElement({
                    name: "recordFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x62"
                }),

                DatatypeElement({
                    name: "recordFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x62"
                }),

                DatatypeElement({
                    name: "pauseRecordFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x63"
                }),

                DatatypeElement({
                    name: "pauseRecordFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x63"
                }),

                DatatypeElement({
                    name: "stopFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x64"
                }),

                DatatypeElement({
                    name: "stopFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x64"
                }),

                DatatypeElement({
                    name: "muteFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x65"
                }),

                DatatypeElement({
                    name: "muteFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x65"
                }),

                DatatypeElement({
                    name: "restoreVolumeFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x66"
                }),

                DatatypeElement({
                    name: "restoreVolumeFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x66"
                }),

                DatatypeElement({
                    name: "tuneFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x67"
                }),

                DatatypeElement({
                    name: "tuneFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x67"
                }),

                DatatypeElement({
                    name: "selectMediaFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x68"
                }),

                DatatypeElement({
                    name: "selectMediaFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x68"
                }),

                DatatypeElement({
                    name: "selectAvInputFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x69"
                }),

                DatatypeElement({
                    name: "selectAvInputFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x69"
                }),

                DatatypeElement({
                    name: "selectAudioInputFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6A"
                }),

                DatatypeElement({
                    name: "selectAudioInputFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6A"
                }),

                DatatypeElement({
                    name: "powerToggleFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6B"
                }),

                DatatypeElement({
                    name: "powerToggleFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6B"
                }),

                DatatypeElement({
                    name: "powerOffFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6C"
                }),

                DatatypeElement({
                    name: "powerOffFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6C"
                }),

                DatatypeElement({
                    name: "powerOnFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6D"
                }),

                DatatypeElement({
                    name: "powerOnFunction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6D"
                }),

                DatatypeElement({
                    name: "f1Blue",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x71"
                }),

                DatatypeElement({
                    name: "f1Blue",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x71"
                }),

                DatatypeElement({
                    name: "f2Red",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x72"
                }),

                DatatypeElement({
                    name: "f2Red",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x72"
                }),

                DatatypeElement({
                    name: "f3Green",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x73"
                }),

                DatatypeElement({
                    name: "f3Green",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x73"
                }),

                DatatypeElement({
                    name: "f4Yellow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x74"
                }),

                DatatypeElement({
                    name: "f4Yellow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x74"
                }),

                DatatypeElement({
                    name: "f5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x75"
                }),

                DatatypeElement({
                    name: "f5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x75"
                }),

                DatatypeElement({
                    name: "data",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x76"
                }),

                DatatypeElement({
                    name: "data",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x76"
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "navigationKeyCodes",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "navigationKeyCodes",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "locationKeys",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "locationKeys",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "numberKeys",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "numberKeys",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                })
            ]
        })
    ]
}));
