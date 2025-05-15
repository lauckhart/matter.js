/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const KeypadInput = Cluster(
    { id: 0x509, name: "KeypadInput" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "NV", constraint: "0", description: "NavigationKeyCodes" }),
        Field({ name: "LK", constraint: "1", description: "LocationKeys" }),
        Field({ name: "NK", constraint: "2", description: "NumberKeys" })
    ),

    Command(
        { id: 0x0, name: "SendKey", access: "O", conformance: "M", direction: "request", response: "SendKeyResponse" },
        Field({ id: 0x0, name: "KeyCode", type: "CecKeyCodeEnum", conformance: "M" })
    ),
    Command(
        { id: 0x1, name: "SendKeyResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "UnsupportedKey", conformance: "M" }),
        Field({ id: 0x2, name: "InvalidKeyInCurrentState", conformance: "M" })
    ),

    Datatype(
        { name: "CecKeyCodeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Select", conformance: "M" }),
        Field({ id: 0x1, name: "Up", conformance: "M" }),
        Field({ id: 0x2, name: "Down", conformance: "M" }),
        Field({ id: 0x3, name: "Left", conformance: "M" }),
        Field({ id: 0x4, name: "Right", conformance: "M" }),
        Field({ id: 0x5, name: "RightUp", conformance: "M" }),
        Field({ id: 0x6, name: "RightDown", conformance: "M" }),
        Field({ id: 0x7, name: "LeftUp", conformance: "M" }),
        Field({ id: 0x8, name: "LeftDown", conformance: "M" }),
        Field({ id: 0x9, name: "RootMenu", conformance: "M" }),
        Field({ id: 0xa, name: "SetupMenu", conformance: "M" }),
        Field({ id: 0xb, name: "ContentsMenu", conformance: "M" }),
        Field({ id: 0xc, name: "FavoriteMenu", conformance: "M" }),
        Field({ id: 0xd, name: "Exit", conformance: "M" }),
        Field({ id: 0x10, name: "MediaTopMenu", conformance: "M" }),
        Field({ id: 0x11, name: "MediaContextSensitiveMenu", conformance: "M" }),
        Field({ id: 0x1d, name: "NumberEntryMode", conformance: "M" }),
        Field({ id: 0x1e, name: "Number11", conformance: "M" }),
        Field({ id: 0x1f, name: "Number12", conformance: "M" }),
        Field({ id: 0x20, name: "Number0OrNumber10", conformance: "M" }),
        Field({ id: 0x21, name: "Numbers1", conformance: "M" }),
        Field({ id: 0x22, name: "Numbers2", conformance: "M" }),
        Field({ id: 0x23, name: "Numbers3", conformance: "M" }),
        Field({ id: 0x24, name: "Numbers4", conformance: "M" }),
        Field({ id: 0x25, name: "Numbers5", conformance: "M" }),
        Field({ id: 0x26, name: "Numbers6", conformance: "M" }),
        Field({ id: 0x27, name: "Numbers7", conformance: "M" }),
        Field({ id: 0x28, name: "Numbers8", conformance: "M" }),
        Field({ id: 0x29, name: "Numbers9", conformance: "M" }),
        Field({ id: 0x2a, name: "Dot", conformance: "M" }),
        Field({ id: 0x2b, name: "Enter", conformance: "M" }),
        Field({ id: 0x2c, name: "Clear", conformance: "M" }),
        Field({ id: 0x2f, name: "NextFavorite", conformance: "M" }),
        Field({ id: 0x30, name: "ChannelUp", conformance: "M" }),
        Field({ id: 0x31, name: "ChannelDown", conformance: "M" }),
        Field({ id: 0x32, name: "PreviousChannel", conformance: "M" }),
        Field({ id: 0x33, name: "SoundSelect", conformance: "M" }),
        Field({ id: 0x34, name: "InputSelect", conformance: "M" }),
        Field({ id: 0x35, name: "DisplayInformation", conformance: "M" }),
        Field({ id: 0x36, name: "Help", conformance: "M" }),
        Field({ id: 0x37, name: "PageUp", conformance: "M" }),
        Field({ id: 0x38, name: "PageDown", conformance: "M" }),
        Field({ id: 0x40, name: "Power", conformance: "M" }),
        Field({ id: 0x41, name: "VolumeUp", conformance: "M" }),
        Field({ id: 0x42, name: "VolumeDown", conformance: "M" }),
        Field({ id: 0x43, name: "Mute", conformance: "M" }),
        Field({ id: 0x44, name: "Play", conformance: "M" }),
        Field({ id: 0x45, name: "Stop", conformance: "M" }),
        Field({ id: 0x46, name: "Pause", conformance: "M" }),
        Field({ id: 0x47, name: "Record", conformance: "M" }),
        Field({ id: 0x48, name: "Rewind", conformance: "M" }),
        Field({ id: 0x49, name: "FastForward", conformance: "M" }),
        Field({ id: 0x4a, name: "Eject", conformance: "M" }),
        Field({ id: 0x4b, name: "Forward", conformance: "M" }),
        Field({ id: 0x4c, name: "Backward", conformance: "M" }),
        Field({ id: 0x4d, name: "StopRecord", conformance: "M" }),
        Field({ id: 0x4e, name: "PauseRecord", conformance: "M" }),
        Field({ id: 0x50, name: "Angle", conformance: "M" }),
        Field({ id: 0x51, name: "SubPicture", conformance: "M" }),
        Field({ id: 0x52, name: "VideoOnDemand", conformance: "M" }),
        Field({ id: 0x53, name: "ElectronicProgramGuide", conformance: "M" }),
        Field({ id: 0x54, name: "TimerProgramming", conformance: "M" }),
        Field({ id: 0x55, name: "InitialConfiguration", conformance: "M" }),
        Field({ id: 0x56, name: "SelectBroadcastType", conformance: "M" }),
        Field({ id: 0x57, name: "SelectSoundPresentation", conformance: "M" }),
        Field({ id: 0x60, name: "PlayFunction", conformance: "M" }),
        Field({ id: 0x61, name: "PausePlayFunction", conformance: "M" }),
        Field({ id: 0x62, name: "RecordFunction", conformance: "M" }),
        Field({ id: 0x63, name: "PauseRecordFunction", conformance: "M" }),
        Field({ id: 0x64, name: "StopFunction", conformance: "M" }),
        Field({ id: 0x65, name: "MuteFunction", conformance: "M" }),
        Field({ id: 0x66, name: "RestoreVolumeFunction", conformance: "M" }),
        Field({ id: 0x67, name: "TuneFunction", conformance: "M" }),
        Field({ id: 0x68, name: "SelectMediaFunction", conformance: "M" }),
        Field({ id: 0x69, name: "SelectAvInputFunction", conformance: "M" }),
        Field({ id: 0x6a, name: "SelectAudioInputFunction", conformance: "M" }),
        Field({ id: 0x6b, name: "PowerToggleFunction", conformance: "M" }),
        Field({ id: 0x6c, name: "PowerOffFunction", conformance: "M" }),
        Field({ id: 0x6d, name: "PowerOnFunction", conformance: "M" }),
        Field({ id: 0x71, name: "F1Blue", conformance: "M" }),
        Field({ id: 0x72, name: "F2Red", conformance: "M" }),
        Field({ id: 0x73, name: "F3Green", conformance: "M" }),
        Field({ id: 0x74, name: "F4Yellow", conformance: "M" }),
        Field({ id: 0x75, name: "F5", conformance: "M" }),
        Field({ id: 0x76, name: "Data", conformance: "M" })
    )
);

MatterDefinition.children.push(KeypadInput);
