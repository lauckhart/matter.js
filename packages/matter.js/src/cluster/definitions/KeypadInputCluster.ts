/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

/**
 * Keypad Input
 *
 * This cluster provides an interface for controlling a device like a TV using action commands such as UP, DOWN, and
 * SELECT.
 *
 * This function creates a KeypadInput cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8
 */
export function KeypadInputCluster() {
    const cluster = Cluster({ ...KeypadInputCluster.Metadata, ...KeypadInputCluster.BaseComponent });
    return cluster as unknown as KeypadInputCluster.Type;
}

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
}

/**
 * Upon receipt, this SHALL process a keycode as input to the media device.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1
 */
export const TlvSendKeyRequest = TlvObject({
    /**
     * This SHALL indicate the key code to process.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1.1
     */
    keyCode: TlvField(0, TlvEnum<CecKeyCode>())
});

/**
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
     * Command failed: Requested key code is invalid in the context of the responder’s current state.
     */
    InvalidKeyInCurrentState = 2
}

/**
 * This command SHALL be generated in response to a SendKey command. The data for this command SHALL be as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2
 */
export const TlvSendKeyResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2.1
     */
    status: TlvField(0, TlvEnum<StatusEnum>())
});

export namespace KeypadInputCluster {
    /**
     * These are optional features supported by KeypadInputCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.2
     */
    export enum Feature {
        /**
         * NavigationKeyCodes
         *
         * Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU
         */
        NavigationKeyCodes = "NavigationKeyCodes",

        /**
         * LocationKeys
         *
         * Supports CEC keys 0x0A (Settings) and 0x09 (Home)
         */
        LocationKeys = "LocationKeys",

        /**
         * NumberKeys
         *
         * Supports numeric input 0..9
         */
        NumberKeys = "NumberKeys"
    }

    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * KeypadInput cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8
     */
    export const Metadata = ClusterMetadata({
        id: 0x509,
        name: "KeypadInput",
        revision: 1,

        features: {
            /**
             * NavigationKeyCodes
             *
             * Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU
             */
            navigationKeyCodes: BitFlag(0),

            /**
             * LocationKeys
             *
             * Supports CEC keys 0x0A (Settings) and 0x09 (Home)
             */
            locationKeys: BitFlag(1),

            /**
             * NumberKeys
             *
             * Supports numeric input 0..9
             */
            numberKeys: BitFlag(2)
        }
    });

    /**
     * A KeypadInputCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt, this SHALL process a keycode as input to the media device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.1
             */
            sendKey: Command(0, TlvSendKeyRequest, 1, TlvSendKeyResponseRequest),

            /**
             * This command SHALL be generated in response to a SendKey command. The data for this command SHALL be as
             * follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.8.3.2
             */
            sendKeyResponse: Command(1, TlvSendKeyResponseRequest, 1, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all KeypadInput features.
     */
    export const Complete = Cluster({ ...Metadata, commands: { ...BaseComponent.commands } });
}
