/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * Status Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.4.1
 */
export const enum StatusEnum {
    /**
     * Command succeeded
     */
    Success = 0,

    /**
     * Command failed: Key code is not supported.
     */
    UnsupportedKey = 1,

    /**
     * Command failed: Requested key code is invalid in the context of the
     * responder’s current state.
     */
    InvalidKeyInCurrentState = 2
};

/**
 * This command SHALL be generated in response to a SendKey command. The data
 * for this command SHALL be as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2
 */
export const SendKeyResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2.1
     */
    Status: TlvField(0, TlvEnum<StatusEnum>())
});

export const enum CecKeyCode {
    Select = 0,
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
    RightUp = 5,
    RightDown = 6,
    LeftUp = 7,
    LeftDown = 8,
    RootMenu = 9,
    SetupMenu = 10,
    ContentsMenu = 11,
    FavoriteMenu = 12,
    Exit = 13,
    MediaTopMenu = 16,
    MediaContextSensitiveMenu = 17,
    NumberEntryMode = 29,
    Number11 = 30,
    Number12 = 31,
    Number0OrNumber10 = 32,
    Numbers1 = 33,
    Numbers2 = 34,
    Numbers3 = 35,
    Numbers4 = 36,
    Numbers5 = 37,
    Numbers6 = 38,
    Numbers7 = 39,
    Numbers8 = 40,
    Numbers9 = 41,
    Dot = 42,
    Enter = 43,
    Clear = 44,
    NextFavorite = 47,
    ChannelUp = 48,
    ChannelDown = 49,
    PreviousChannel = 50,
    SoundSelect = 51,
    InputSelect = 52,
    DisplayInformation = 53,
    Help = 54,
    PageUp = 55,
    PageDown = 56,
    Power = 64,
    VolumeUp = 65,
    VolumeDown = 66,
    Mute = 67,
    Play = 68,
    Stop = 69,
    Pause = 70,
    Record = 71,
    Rewind = 72,
    FastForward = 73,
    Eject = 74,
    Forward = 75,
    Backward = 76,
    StopRecord = 77,
    PauseRecord = 78,
    Reserved = 79,
    Angle = 80,
    SubPicture = 81,
    VideoOnDemand = 82,
    ElectronicProgramGuide = 83,
    TimerProgramming = 84,
    InitialConfiguration = 85,
    SelectBroadcastType = 86,
    SelectSoundPresentation = 87,
    PlayFunction = 96,
    PausePlayFunction = 97,
    RecordFunction = 98,
    PauseRecordFunction = 99,
    StopFunction = 100,
    MuteFunction = 101,
    RestoreVolumeFunction = 102,
    TuneFunction = 103,
    SelectMediaFunction = 104,
    SelectAvInputFunction = 105,
    SelectAudioInputFunction = 106,
    PowerToggleFunction = 107,
    PowerOffFunction = 108,
    PowerOnFunction = 109,
    F1Blue = 113,
    F2Red = 114,
    F3Green = 115,
    F4Yellow = 116,
    F5 = 117,
    Data = 118
};

/**
 * Upon receipt, this SHALL process a keycode as input to the media device.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1
 */
export const SendKeyRequest = TlvObject({
    /**
     * This SHALL indicate the key code to process.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1.1
     */
    KeyCode: TlvField(0, TlvEnum<CecKeyCode>())
});

export namespace KeypadInputCluster {
    export const id = 1289;
    export const name = "KeypadInput";
    export const revision = 1;

    export const featureMap = {
        /**
         * NavigationKeyCodes
         *
         * Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU
         */
        NV: BitFlag(0),

        /**
         * LocationKeys
         *
         * Supports CEC keys 0x0A (Settings) and 0x09 (Home)
         */
        LK: BitFlag(1),

        /**
         * NumberKeys
         *
         * Supports numeric input 0..9
         */
        NK: BitFlag(2)
    };

    const Base = {
        commands: {
            /**
             * Upon receipt, this SHALL process a keycode as input to the media
             * device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1
             */
            sendKey: Command(0, SendKeyRequest, 1, SendKeyResponseRequest),

            /**
             * This command SHALL be generated in response to a SendKey
             * command. The data for this command SHALL be as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2
             */
            sendKeyResponse: Command(1, SendKeyResponseRequest, 1, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: {
            NV: true,
            LK: true,
            NK: true
        },
        elements: [ Base ]
    });
};