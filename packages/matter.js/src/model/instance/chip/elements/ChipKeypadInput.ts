/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0509, name: "KeypadInput",
    description: "Keypad Input",
    details: "This cluster provides an interface for controlling a device like a TV using action commands such as UP, DOWN, and SELECT.",
    children: [
        CommandElement({
            id: 0x0000, name: "SendKey",
            conformance: "M", direction: "request", response: "SendKeyResponse",
            children: [
                DatatypeElement({
                    name: "KeyCode", base: "CecKeyCode",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SendKeyResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "KeypadInputStatusEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UnsupportedKey",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidKeyInCurrentState",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CecKeyCode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Select",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Down",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Left",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Right",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "RightUp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "RightDown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LeftUp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LeftDown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "RootMenu",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "SetupMenu",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ContentsMenu",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "FavoriteMenu",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Exit",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "MediaTopMenu",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "MediaContextSensitiveMenu",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001d, name: "NumberEntryMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001e, name: "Number11",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001f, name: "Number12",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Number0OrNumber10",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0021, name: "Numbers1",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0022, name: "Numbers2",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0023, name: "Numbers3",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0024, name: "Numbers4",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0025, name: "Numbers5",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0026, name: "Numbers6",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0027, name: "Numbers7",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0028, name: "Numbers8",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0029, name: "Numbers9",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002a, name: "Dot",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002b, name: "Enter",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002c, name: "Clear",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002f, name: "NextFavorite",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0030, name: "ChannelUp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0031, name: "ChannelDown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0032, name: "PreviousChannel",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0033, name: "SoundSelect",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0034, name: "InputSelect",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0035, name: "DisplayInformation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0036, name: "Help",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0037, name: "PageUp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0038, name: "PageDown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Power",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0041, name: "VolumeUp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0042, name: "VolumeDown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0043, name: "Mute",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0044, name: "Play",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0045, name: "Stop",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0046, name: "Pause",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0047, name: "Record",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0048, name: "Rewind",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0049, name: "FastForward",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004a, name: "Eject",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004b, name: "Forward",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004c, name: "Backward",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004d, name: "StopRecord",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004e, name: "PauseRecord",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004f, name: "Reserved",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0050, name: "Angle",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0051, name: "SubPicture",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0052, name: "VideoOnDemand",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0053, name: "ElectronicProgramGuide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0054, name: "TimerProgramming",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0055, name: "InitialConfiguration",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0056, name: "SelectBroadcastType",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0057, name: "SelectSoundPresentation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0060, name: "PlayFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0061, name: "PausePlayFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0062, name: "RecordFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0063, name: "PauseRecordFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0064, name: "StopFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0065, name: "MuteFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0066, name: "RestoreVolumeFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0067, name: "TuneFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0068, name: "SelectMediaFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0069, name: "SelectAvInputFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006a, name: "SelectAudioInputFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006b, name: "PowerToggleFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006c, name: "PowerOffFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x006d, name: "PowerOnFunction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0071, name: "F1Blue",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0072, name: "F2Red",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0073, name: "F3Green",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0074, name: "F4Yellow",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0075, name: "F5",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0076, name: "Data",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NavigationKeyCodes",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LocationKeys",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NumberKeys",
                    conformance: "M"
                })
            ]
        })
    ]
}));
