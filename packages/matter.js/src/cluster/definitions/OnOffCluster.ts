/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, OptionalAttribute, OptionalWritableAttribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt16, TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * The data type StartUpOnOffEnum is derived from enum8. The values of the
 * StartUpOnOffEnum data type are listed below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.5.1
 */
export const enum StartUpOnOffEnum {
    /**
     * Set the OnOff attribute to FALSE
     */
    Off = 0,

    /**
     * Set the OnOff attribute to TRUE
     */
    On = 1,

    /**
     * If the previous value of the OnOff attribute is equal to FALSE, set the
     * OnOff attribute to TRUE. If the previous value of the OnOff attribute is
     * equal to TRUE, set the OnOff attribute to FALSE (toggle).
     */
    Toggle = 2
};

export const enum OnOffEffectIdentifier {
    DelayedAllOff = 0,
    DyingLight = 1
};

/**
 * The OffWithEffect command allows devices to be turned off using enhanced
 * ways of fading. The OffWithEffect command SHALL have the following data
 * fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
 */
export const OffWithEffectRequest = TlvObject({
    /**
     * The EffectIdentifier field specifies the fading effect to use when
     * turning the device off. This field SHALL contain one of the non-reserved
     * values listed in Values of the EffectIdentifier Field of the
     * OffWithEffect Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4.1
     */
    EffectIdentifier: TlvField(0, TlvEnum<OnOffEffectIdentifier>()),

    /**
     * The EffectVariant field is used to indicate which variant of the effect,
     * indicated in the EffectIdentifier field, SHOULD be triggered. If the
     * server does not support the given variant, it SHALL use the default
     * variant. This field is dependent on the value of the EffectIdentifier
     * field and SHALL contain one of the non-reserved values listed in Values
     * of the EffectVariant Field of the OffWithEffect Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4.2
     */
    EffectVariant: TlvField(1, TlvUInt8)
});

/**
 * The OnOffControl field contains information on how the server is to be
 * operated. This field SHALL be formatted as illustrated in Format of the
 * OnOffControl Field of the OnWithTimedOff Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
 */
export const OnOffControl = TlvBitmap(TlvUInt8, { AcceptOnlyWhenOn: BitFlag(1) });

/**
 * The OnWithTimedOff command allows devices to be turned on for a specific
 * duration with a guarded off duration so that SHOULD the device be
 * subsequently turned off, further OnWithTimedOff commands, received during
 * this time, are prevented from turning the devices back on. Further
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
 */
export const OnWithTimedOffRequest = TlvObject({
    /**
     * The OnOffControl field contains information on how the server is to be
     * operated. This field SHALL be formatted as illustrated in Format of the
     * OnOffControl Field of the OnWithTimedOff Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
     */
    OnOffControl: TlvField(0, OnOffControl),

    /**
     * The OnTime field is used to adjust the value of the OnTime attribute.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.2
     */
    OnTime: TlvField(1, TlvNullable(TlvUInt16)),

    /**
     * The OffWaitTime field is used to adjust the value of the OffWaitTime
     * attribute.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.3
     */
    OffWaitTime: TlvField(2, TlvNullable(TlvUInt16))
});

export namespace OnOffCluster {
    /**
     * On/Off
     *
     * Attributes and commands for switching devices between 'On' and 'Off'
     * states.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `OnOff.with()` and a list of supported
     * features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5
     */
    export const Complete = Cluster({
        id: 0x6,
        name: "OnOff",
        revision: 1,
        features: { LT: BitFlag(0) },

        attributes: {
            /**
             * The OnOff attribute indicates whether the device type
             * implemented on the endpoint is turned off or turned on, in these
             * cases the value of the OnOff attribute equals FALSE, or TRUE
             * respectively.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.1
             */
            onOff: Attribute(0, TlvBoolean, { scene: true, persistent: true, default: true, readAcl: AccessLevel.View }),

            /**
             * In order to support the use case where the user gets back the
             * last setting of a set of devices (e.g. level settings for
             * lights), a global scene is introduced which is stored when the
             * devices are turned off and recalled when the devices are turned
             * on. The global scene is defined as the scene that is stored with
             * group identifier 0 and scene identifier 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.2
             */
            globalSceneControl: OptionalAttribute(16384, TlvBoolean, { default: true, readAcl: AccessLevel.View }),

            /**
             * The OnTime attribute specifies the length of time (in 1/10ths
             * second) that the ‘On’ state SHALL be maintained before
             * automatically transitioning to the ‘Off’ state when using the
             * OnWithTimedOff command. This attribute can be written at any
             * time, but writing a value only has effect when in the ‘Timed On’
             * state. See OnWithTimedOff Command for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.3
             */
            onTime: OptionalWritableAttribute(16385, TlvNullable(TlvUInt16)),

            /**
             * The OffWaitTime attribute specifies the length of time (in
             * 1/10ths second) that the ‘Off’ state SHALL be guarded to prevent
             * another OnWithTimedOff command turning the server back to its
             * ‘On’ state (e.g., when leaving a room, the lights are turned off
             * but an occupancy sensor detects the leaving person and attempts
             * to turn the lights back on). This attribute can be written at
             * any time, but writing a value only has an effect when in the
             * ‘Timed On’ state followed by a transition to the ‘Delayed Off'
             * state, or in the ‘Delayed Off’ state. See OnWithTimedOff Command
             * for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.4
             */
            offWaitTime: OptionalWritableAttribute(16386, TlvNullable(TlvUInt16)),

            /**
             * The StartUpOnOff attribute SHALL define the desired startup
             * behavior of a device when it is supplied with power and this
             * state SHALL be reflected in the OnOff attribute. If the value is
             * null, the OnOff attribute is set to its previous value.
             * Otherwise, the behavior is defined in the table defining
             * StartUpOnOffEnum.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.5
             */
            startUpOnOff: OptionalWritableAttribute(16387, TlvNullable(TlvEnum<StartUpOnOffEnum>()), { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage })
        },

        commands: {
            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.1
             */
            off: Command(0, TlvNoArguments, 0, TlvNoResponse),

            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.2
             */
            on: Command(1, TlvNoArguments, 1, TlvNoResponse),

            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.3
             */
            toggle: Command(2, TlvNoArguments, 2, TlvNoResponse),

            /**
             * The OffWithEffect command allows devices to be turned off using
             * enhanced ways of fading. The OffWithEffect command SHALL have
             * the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
             */
            offWithEffect: OptionalCommand(64, OffWithEffectRequest, 64, TlvNoResponse),

            /**
             * The OnWithRecallGlobalScene command allows the recall of the
             * settings when the device was turned off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.5
             */
            onWithRecallGlobalScene: OptionalCommand(65, TlvNoArguments, 65, TlvNoResponse),

            /**
             * The OnWithTimedOff command allows devices to be turned on for a
             * specific duration with a guarded off duration so that SHOULD the
             * device be subsequently turned off, further OnWithTimedOff
             * commands, received during this time, are prevented from turning
             * the devices back on. Further
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
             */
            onWithTimedOff: OptionalCommand(66, OnWithTimedOffRequest, 66, TlvNoResponse)
        }
    });
};