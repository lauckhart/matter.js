/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0509, name: "KeypadInput",
    classification: "application", description: "Keypad Input",
    children: [
        {
            tag: "command", id: 0x0000, name: "SendKey",
            access: "O", conformance: "M", direction: "request", response: "SendKeyResponse",
            details: "Upon receipt, this SHALL process a keycode as input to the media " +
                     "device",
            xref: { document: "cluster", section: "6.8.3.1" },
            children: [
                {
                    tag: "datatype", name: "KeyCode",
                    conformance: "M", type: "CecKeyCode"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "SendKeyResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to a SendKey command. The " +
                     "data for this command SHALL be as follows",
            xref: { document: "cluster", section: "6.8.3.2" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "KeypadInputStatusEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "KeypadInputFeature",
            conformance: "M", type: "map32",
            details: "Status Data Type is derived from enum8",
            xref: { document: "cluster", section: "6.8.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M", description: "Command succeeded",
                    xref: { document: "cluster", section: "6.8.4.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "NavigationKeyCodes",
                    conformance: "M", description: "Command failed: Key code is not supported.",
                    xref: { document: "cluster", section: "6.8.4.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "LocationKeys",
                    conformance: "M", description: "Command failed: Requested key code is invalid in the context of the responder’s current state.",
                    xref: { document: "cluster", section: "6.8.4.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "NumberKeys",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "KeypadInputStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "UnsupportedKey",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "InvalidKeyInCurrentState",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "CecKeyCode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Select",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Up",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Down",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Left",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Right",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "RightUp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "RightDown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "LeftUp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "LeftDown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "RootMenu",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "SetupMenu",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "ContentsMenu",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "FavoriteMenu",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "Exit",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "MediaTopMenu",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0011, name: "MediaContextSensitiveMenu",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001d, name: "NumberEntryMode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001e, name: "Number11",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001f, name: "Number12",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "Number0OrNumber10",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0021, name: "Numbers1",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0022, name: "Numbers2",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0023, name: "Numbers3",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0024, name: "Numbers4",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0025, name: "Numbers5",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0026, name: "Numbers6",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0027, name: "Numbers7",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0028, name: "Numbers8",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0029, name: "Numbers9",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002a, name: "Dot",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002b, name: "Enter",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002c, name: "Clear",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002f, name: "NextFavorite",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0030, name: "ChannelUp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0031, name: "ChannelDown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0032, name: "PreviousChannel",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0033, name: "SoundSelect",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0034, name: "InputSelect",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0035, name: "DisplayInformation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0036, name: "Help",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0037, name: "PageUp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0038, name: "PageDown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "Power",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0041, name: "VolumeUp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0042, name: "VolumeDown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0043, name: "Mute",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0044, name: "Play",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0045, name: "Stop",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0046, name: "Pause",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0047, name: "Record",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0048, name: "Rewind",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0049, name: "FastForward",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004a, name: "Eject",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004b, name: "Forward",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004c, name: "Backward",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004d, name: "StopRecord",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004e, name: "PauseRecord",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004f, name: "Reserved",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0050, name: "Angle",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0051, name: "SubPicture",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0052, name: "VideoOnDemand",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0053, name: "ElectronicProgramGuide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0054, name: "TimerProgramming",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0055, name: "InitialConfiguration",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0056, name: "SelectBroadcastType",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0057, name: "SelectSoundPresentation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0060, name: "PlayFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0061, name: "PausePlayFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0062, name: "RecordFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0063, name: "PauseRecordFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0064, name: "StopFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0065, name: "MuteFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0066, name: "RestoreVolumeFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0067, name: "TuneFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0068, name: "SelectMediaFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0069, name: "SelectAvInputFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x006a, name: "SelectAudioInputFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x006b, name: "PowerToggleFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x006c, name: "PowerOffFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x006d, name: "PowerOnFunction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0071, name: "F1Blue",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0072, name: "F2Red",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0073, name: "F3Green",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0074, name: "F4Yellow",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0075, name: "F5",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0076, name: "Data",
                    conformance: "M"
                }
            ]
        }
    ]
});
