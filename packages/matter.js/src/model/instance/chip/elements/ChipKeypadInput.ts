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
            direction: "request", response: "SendKeyResponse",
            children: [
                DatatypeElement({
                    name: "KeyCode", base: "CecKeyCode"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SendKeyResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "KeypadInputStatusEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UnsupportedKey"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidKeyInCurrentState"
                })
            ]
        }),

        DatatypeElement({
            name: "CecKeyCode", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Select"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Up"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Down"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Left"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Right"
                }),

                DatatypeElement({
                    id: 0x0005, name: "RightUp"
                }),

                DatatypeElement({
                    id: 0x0006, name: "RightDown"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LeftUp"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LeftDown"
                }),

                DatatypeElement({
                    id: 0x0009, name: "RootMenu"
                }),

                DatatypeElement({
                    id: 0x000a, name: "SetupMenu"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ContentsMenu"
                }),

                DatatypeElement({
                    id: 0x000c, name: "FavoriteMenu"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Exit"
                }),

                DatatypeElement({
                    id: 0x0010, name: "MediaTopMenu"
                }),

                DatatypeElement({
                    id: 0x0011, name: "MediaContextSensitiveMenu"
                }),

                DatatypeElement({
                    id: 0x001d, name: "NumberEntryMode"
                }),

                DatatypeElement({
                    id: 0x001e, name: "Number11"
                }),

                DatatypeElement({
                    id: 0x001f, name: "Number12"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Number0OrNumber10"
                }),

                DatatypeElement({
                    id: 0x0021, name: "Numbers1"
                }),

                DatatypeElement({
                    id: 0x0022, name: "Numbers2"
                }),

                DatatypeElement({
                    id: 0x0023, name: "Numbers3"
                }),

                DatatypeElement({
                    id: 0x0024, name: "Numbers4"
                }),

                DatatypeElement({
                    id: 0x0025, name: "Numbers5"
                }),

                DatatypeElement({
                    id: 0x0026, name: "Numbers6"
                }),

                DatatypeElement({
                    id: 0x0027, name: "Numbers7"
                }),

                DatatypeElement({
                    id: 0x0028, name: "Numbers8"
                }),

                DatatypeElement({
                    id: 0x0029, name: "Numbers9"
                }),

                DatatypeElement({
                    id: 0x002a, name: "Dot"
                }),

                DatatypeElement({
                    id: 0x002b, name: "Enter"
                }),

                DatatypeElement({
                    id: 0x002c, name: "Clear"
                }),

                DatatypeElement({
                    id: 0x002f, name: "NextFavorite"
                }),

                DatatypeElement({
                    id: 0x0030, name: "ChannelUp"
                }),

                DatatypeElement({
                    id: 0x0031, name: "ChannelDown"
                }),

                DatatypeElement({
                    id: 0x0032, name: "PreviousChannel"
                }),

                DatatypeElement({
                    id: 0x0033, name: "SoundSelect"
                }),

                DatatypeElement({
                    id: 0x0034, name: "InputSelect"
                }),

                DatatypeElement({
                    id: 0x0035, name: "DisplayInformation"
                }),

                DatatypeElement({
                    id: 0x0036, name: "Help"
                }),

                DatatypeElement({
                    id: 0x0037, name: "PageUp"
                }),

                DatatypeElement({
                    id: 0x0038, name: "PageDown"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Power"
                }),

                DatatypeElement({
                    id: 0x0041, name: "VolumeUp"
                }),

                DatatypeElement({
                    id: 0x0042, name: "VolumeDown"
                }),

                DatatypeElement({
                    id: 0x0043, name: "Mute"
                }),

                DatatypeElement({
                    id: 0x0044, name: "Play"
                }),

                DatatypeElement({
                    id: 0x0045, name: "Stop"
                }),

                DatatypeElement({
                    id: 0x0046, name: "Pause"
                }),

                DatatypeElement({
                    id: 0x0047, name: "Record"
                }),

                DatatypeElement({
                    id: 0x0048, name: "Rewind"
                }),

                DatatypeElement({
                    id: 0x0049, name: "FastForward"
                }),

                DatatypeElement({
                    id: 0x004a, name: "Eject"
                }),

                DatatypeElement({
                    id: 0x004b, name: "Forward"
                }),

                DatatypeElement({
                    id: 0x004c, name: "Backward"
                }),

                DatatypeElement({
                    id: 0x004d, name: "StopRecord"
                }),

                DatatypeElement({
                    id: 0x004e, name: "PauseRecord"
                }),

                DatatypeElement({
                    id: 0x004f, name: "Reserved"
                }),

                DatatypeElement({
                    id: 0x0050, name: "Angle"
                }),

                DatatypeElement({
                    id: 0x0051, name: "SubPicture"
                }),

                DatatypeElement({
                    id: 0x0052, name: "VideoOnDemand"
                }),

                DatatypeElement({
                    id: 0x0053, name: "ElectronicProgramGuide"
                }),

                DatatypeElement({
                    id: 0x0054, name: "TimerProgramming"
                }),

                DatatypeElement({
                    id: 0x0055, name: "InitialConfiguration"
                }),

                DatatypeElement({
                    id: 0x0056, name: "SelectBroadcastType"
                }),

                DatatypeElement({
                    id: 0x0057, name: "SelectSoundPresentation"
                }),

                DatatypeElement({
                    id: 0x0060, name: "PlayFunction"
                }),

                DatatypeElement({
                    id: 0x0061, name: "PausePlayFunction"
                }),

                DatatypeElement({
                    id: 0x0062, name: "RecordFunction"
                }),

                DatatypeElement({
                    id: 0x0063, name: "PauseRecordFunction"
                }),

                DatatypeElement({
                    id: 0x0064, name: "StopFunction"
                }),

                DatatypeElement({
                    id: 0x0065, name: "MuteFunction"
                }),

                DatatypeElement({
                    id: 0x0066, name: "RestoreVolumeFunction"
                }),

                DatatypeElement({
                    id: 0x0067, name: "TuneFunction"
                }),

                DatatypeElement({
                    id: 0x0068, name: "SelectMediaFunction"
                }),

                DatatypeElement({
                    id: 0x0069, name: "SelectAvInputFunction"
                }),

                DatatypeElement({
                    id: 0x006a, name: "SelectAudioInputFunction"
                }),

                DatatypeElement({
                    id: 0x006b, name: "PowerToggleFunction"
                }),

                DatatypeElement({
                    id: 0x006c, name: "PowerOffFunction"
                }),

                DatatypeElement({
                    id: 0x006d, name: "PowerOnFunction"
                }),

                DatatypeElement({
                    id: 0x0071, name: "F1Blue"
                }),

                DatatypeElement({
                    id: 0x0072, name: "F2Red"
                }),

                DatatypeElement({
                    id: 0x0073, name: "F3Green"
                }),

                DatatypeElement({
                    id: 0x0074, name: "F4Yellow"
                }),

                DatatypeElement({
                    id: 0x0075, name: "F5"
                }),

                DatatypeElement({
                    id: 0x0076, name: "Data"
                })
            ]
        }),

        DatatypeElement({
            name: "KeypadInputFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NavigationKeyCodes"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LocationKeys"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NumberKeys"
                })
            ]
        })
    ]
}));
