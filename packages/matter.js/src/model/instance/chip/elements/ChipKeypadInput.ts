/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0509, name: "KeypadInput",
    description: "Keypad Input",
    details: "This cluster provides an interface for controlling a device like a TV using action commands such as UP, DOWN, and SELECT.",
    children: [
        CommandElement({
            id: 0x0000, name: "SendKey",
            access: "R", conformance: "M", direction: "request", response: "SendKeyResponse",
            children: [
                DatatypeElement({
                    name: "KeyCode", base: "CecKeyCode",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SendKeyResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "KeypadInputStatusEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UnsupportedKey",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidKeyInCurrentState",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CecKeyCode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Select",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Down",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Left",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Right",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "RightUp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "RightDown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LeftUp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LeftDown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "RootMenu",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "SetupMenu",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ContentsMenu",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "FavoriteMenu",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Exit",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "MediaTopMenu",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "MediaContextSensitiveMenu",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001d, name: "NumberEntryMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001e, name: "Number11",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001f, name: "Number12",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Number0OrNumber10",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0021, name: "Numbers1",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0022, name: "Numbers2",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0023, name: "Numbers3",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0024, name: "Numbers4",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0025, name: "Numbers5",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0026, name: "Numbers6",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0027, name: "Numbers7",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0028, name: "Numbers8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0029, name: "Numbers9",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002a, name: "Dot",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002b, name: "Enter",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002c, name: "Clear",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002f, name: "NextFavorite",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0030, name: "ChannelUp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0031, name: "ChannelDown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0032, name: "PreviousChannel",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0033, name: "SoundSelect",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0034, name: "InputSelect",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0035, name: "DisplayInformation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0036, name: "Help",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0037, name: "PageUp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0038, name: "PageDown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Power",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0041, name: "VolumeUp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0042, name: "VolumeDown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0043, name: "Mute",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0044, name: "Play",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0045, name: "Stop",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0046, name: "Pause",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0047, name: "Record",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0048, name: "Rewind",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0049, name: "FastForward",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004a, name: "Eject",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004b, name: "Forward",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004c, name: "Backward",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004d, name: "StopRecord",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004e, name: "PauseRecord",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004f, name: "Reserved",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0050, name: "Angle",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0051, name: "SubPicture",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0052, name: "VideoOnDemand",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0053, name: "ElectronicProgramGuide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0054, name: "TimerProgramming",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0055, name: "InitialConfiguration",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0056, name: "SelectBroadcastType",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0057, name: "SelectSoundPresentation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0060, name: "PlayFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0061, name: "PausePlayFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0062, name: "RecordFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0063, name: "PauseRecordFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0064, name: "StopFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0065, name: "MuteFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0066, name: "RestoreVolumeFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0067, name: "TuneFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0068, name: "SelectMediaFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0069, name: "SelectAvInputFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006a, name: "SelectAudioInputFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006b, name: "PowerToggleFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006c, name: "PowerOffFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006d, name: "PowerOnFunction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0071, name: "F1Blue",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0072, name: "F2Red",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0073, name: "F3Green",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0074, name: "F4Yellow",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0075, name: "F5",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0076, name: "Data",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NavigationKeyCodes",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LocationKeys",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NumberKeys",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
