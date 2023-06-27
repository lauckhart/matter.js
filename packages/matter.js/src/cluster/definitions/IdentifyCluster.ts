/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute, Attribute, AccessLevel, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * This attribute specifies how the identification state is presented to the
 * user. This field SHALL contain one of the values listed below:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.2
 */
export const enum IdentifyType {
    /**
     * No presentation.
     */
    None = 0,

    /**
     * Light output of a lighting product.
     */
    Lightoutput = 1,

    /**
     * Typically a small LED.
     */
    Visibleindicator = 2,

    Audiblebeep = 3,

    /**
     * Presentation will be visible on display screen.
     */
    Display = 4,

    /**
     * Presentation will be conveyed by actuator functionality such as through
     * a window blind operation or in-wall relay.
     */
    Actuator = 5
};

/**
 * This command starts or stops the receiving device identifying itself. This
 * command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
 */
export const IdentifyRequest = TlvObject({ IdentifyTime: TlvField(0, TlvUInt16) });

/**
 * This command is generated in response to receiving an IdentifyQuery command,
 * see IdentifyQuery Command, in the case that the device is currently
 * identifying itself.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4
 */
export const IdentifyQueryResponseRequest = TlvObject({
    /**
     * This field contains the current value of the IdentifyTime attribute, and
     * specifies the length of time, in seconds, that the device will continue
     * to identify itself.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4.1
     */
    Timeout: TlvField(0, TlvUInt16)
});

/**
 * This field specifies the identify effect to use. All values of the
 * EffectIdentifier SHALL be supported. Implementors MAY deviate from the
 * example light effects in the table below, but they SHOULD indicate during
 * testing how they handle each effect.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.1
 */
export const enum EffectIdentifier {
    /**
     * e.g., Light is turned on/off once.
     */
    Blink = 0,

    /**
     * e.g., Light is turned on/off over 1 second and repeated 15 times.
     */
    Breathe = 1,

    /**
     * e.g., Colored light turns green for 1 second; non-colored light flashes
     * twice.
     */
    Okay = 2,

    /**
     * e.g., Colored light turns orange for 8 seconds; non-colored light
     * switches to the maximum brightness for 0.5s and then minimum brightness
     * for 7.5s.
     */
    Channelchange = 11,

    /**
     * Complete the current effect sequence before terminating. e.g., if in the
     * middle of a breathe effect (as above), first complete the current 1s
     * breathe effect and then terminate the effect.
     */
    Finisheffect = 254,

    /**
     * Terminate the effect as soon as possible.
     */
    Stopeffect = 255
};

/**
 * This field is used to indicate which variant of the effect, indicated in the
 * EffectIdentifier field, SHOULD be triggered. If a device does not support
 * the given variant, it SHALL use the default variant. This field SHALL
 * contain one of the values listed below:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.2
 */
export const enum EffectVariant { Default = 0 };

/**
 * This command allows the support of feedback to the user, such as a certain
 * light effect. It is used to allow an implementation to provide visual
 * feedback to the user under certain circumstances such as a color light
 * turning green when it has successfully connected to a network. The use of
 * this command and the effects themselves are entirely up to the implementer
 * to use whenever a visual feedback is useful but it is not the same as and
 * does not replace the identify mechanism used during commissioning.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
 */
export const TriggerEffectRequest = TlvObject({
    /**
     * This field specifies the identify effect to use. All values of the
     * EffectIdentifier SHALL be supported. Implementors MAY deviate from the
     * example light effects in the table below, but they SHOULD indicate
     * during testing how they handle each effect.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.1
     */
    EffectIdentifier: TlvField(0, TlvEnum<EffectIdentifier>()),

    /**
     * This field is used to indicate which variant of the effect, indicated in
     * the EffectIdentifier field, SHOULD be triggered. If a device does not
     * support the given variant, it SHALL use the default variant. This field
     * SHALL contain one of the values listed below:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.2
     */
    EffectVariant: TlvField(1, TlvEnum<EffectVariant>())
});

export namespace IdentifyCluster {
    /**
     * Identify
     *
     * Attributes and commands for putting a device into Identification mode
     * (e.g. flashing a light).
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `Identify.with()` and a list of supported
     * features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2
     */
    export const Complete = Cluster({
        id: 0x3,
        name: "Identify",
        revision: 1,
        features: { QUERY: BitFlag(0) },

        attributes: {
            /**
             * This attribute specifies the remaining length of time, in
             * seconds, that the endpoint will continue to identify itself.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.1
             */
            identifyTime: WritableAttribute(0, TlvUInt16),

            /**
             * This attribute specifies how the identification state is
             * presented to the user. This field SHALL contain one of the
             * values listed below:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.2
             */
            identifyType: Attribute(1, TlvEnum<IdentifyType>(), { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * This command starts or stops the receiving device identifying
             * itself. This command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
             */
            identify: Command(0, IdentifyRequest, 0, TlvNoResponse),

            /**
             * This command allows the sending device to request the target or
             * targets to respond if they are currently identifying themselves.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.2
             */
            identifyQuery: OptionalCommand(1, TlvNoArguments, 0, IdentifyQueryResponseRequest),

            /**
             * This command allows the support of feedback to the user, such as
             * a certain light effect. It is used to allow an implementation to
             * provide visual feedback to the user under certain circumstances
             * such as a color light turning green when it has successfully
             * connected to a network. The use of this command and the effects
             * themselves are entirely up to the implementer to use whenever a
             * visual feedback is useful but it is not the same as and does not
             * replace the identify mechanism used during commissioning.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
             */
            triggerEffect: OptionalCommand(64, TriggerEffectRequest, 64, TlvNoResponse),

            /**
             * This command is generated in response to receiving an
             * IdentifyQuery command, see IdentifyQuery Command, in the case
             * that the device is currently identifying itself.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4
             */
            identifyQueryResponse: OptionalCommand(0, IdentifyQueryResponseRequest, 0, TlvNoResponse)
        }
    });
};