/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { WritableAttribute, AccessLevel, Attribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster, ClusterElements } from "../../cluster/ClusterBuilder.js";
import { Properties } from "../../util/Type.js";

/**
 * This attribute specifies how the identification state is presented to the user. This field SHALL contain one of the
 * values listed below:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.2
 */
export const enum TlvIdentifyType {
    /**
     * No presentation.
     */
    None = 0,

    /**
     * Light output of a lighting product.
     */
    LightOutput = 1,

    /**
     * Typically a small LED.
     */
    VisibleIndicator = 2,

    AudibleBeep = 3,

    /**
     * Presentation will be visible on display screen.
     */
    Display = 4,

    /**
     * Presentation will be conveyed by actuator functionality such as through a window blind operation or in-wall
     * relay.
     */
    Actuator = 5
};

/**
 * This command starts or stops the receiving device identifying itself. This command SHALL have the following data
 * fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
 */
export const TlvIdentifyRequest = TlvObject({ identifyTime: TlvField(0, TlvUInt16) });

/**
 * This field specifies the identify effect to use. All values of the EffectIdentifier SHALL be supported. Implementors
 * MAY deviate from the example light effects in the table below, but they SHOULD indicate during testing how they
 * handle each effect.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.1
 */
export const enum TlvEffectIdentifier {
    /**
     * e.g., Light is turned on/off once.
     */
    Blink = 0,

    /**
     * e.g., Light is turned on/off over 1 second and repeated 15 times.
     */
    Breathe = 1,

    /**
     * e.g., Colored light turns green for 1 second; non-colored light flashes twice.
     */
    Okay = 2,

    /**
     * e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for 0.5s
     * and then minimum brightness for 7.5s.
     */
    ChannelChange = 11,

    /**
     * Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as above),
     * first complete the current 1s breathe effect and then terminate the effect.
     */
    FinishEffect = 254,

    /**
     * Terminate the effect as soon as possible.
     */
    StopEffect = 255
};

/**
 * This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, SHOULD be
 * triggered. If a device does not support the given variant, it SHALL use the default variant. This field SHALL
 * contain one of the values listed below:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.2
 */
export const enum TlvEffectVariant {
    Default = 0
};

/**
 * This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an
 * implementation to provide visual feedback to the user under certain circumstances such as a color light turning
 * green when it has successfully connected to a network. The use of this command and the effects themselves are
 * entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not
 * replace the identify mechanism used during commissioning.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
 */
export const TlvTriggerEffectRequest = TlvObject({
    /**
     * This field specifies the identify effect to use. All values of the EffectIdentifier SHALL be supported.
     * Implementors MAY deviate from the example light effects in the table below, but they SHOULD indicate during
     * testing how they handle each effect.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.1
     */
    effectIdentifier: TlvField(0, TlvEnum<TlvEffectIdentifier>()),

    /**
     * This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, SHOULD be
     * triggered. If a device does not support the given variant, it SHALL use the default variant. This field SHALL
     * contain one of the values listed below:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3.2
     */
    effectVariant: TlvField(1, TlvEnum<TlvEffectVariant>())
});

/**
 * This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the case
 * that the device is currently identifying itself.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4
 */
export const TlvIdentifyQueryResponseRequest = TlvObject({
    /**
     * This field contains the current value of the IdentifyTime attribute, and specifies the length of time, in
     * seconds, that the device will continue to identify itself.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4.1
     */
    timeout: TlvField(0, TlvUInt16)
});

export namespace IdentifyCluster {
    export const id = 0x3;
    export const name = "Identify";
    export const revision = 1;

    export const featureMap = {
        /**
         * Query
         *
         * Multicast query for identification state
         */
        query: BitFlag(0)
    };

    const Base = ClusterElements({
        attributes: {
            /**
             * This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to
             * identify itself.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.1
             */
            identifyTime: WritableAttribute(0, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }),

            /**
             * This attribute specifies how the identification state is presented to the user. This field SHALL contain
             * one of the values listed below:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.5.2
             */
            identifyType: Attribute(1, TlvEnum<TlvIdentifyType>(), { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * This command starts or stops the receiving device identifying itself. This command SHALL have the
             * following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
             */
            identify: Command(0, TlvIdentifyRequest, 0, TlvNoResponse),

            /**
             * This command allows the support of feedback to the user, such as a certain light effect. It is used to
             * allow an implementation to provide visual feedback to the user under certain circumstances such as a
             * color light turning green when it has successfully connected to a network. The use of this command and
             * the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful
             * but it is not the same as and does not replace the identify mechanism used during commissioning.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
             */
            triggerEffect: OptionalCommand(64, TlvTriggerEffectRequest, 64, TlvNoResponse)
        }
    });

    const Query = ClusterElements({
        commands: {
            /**
             * This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command,
             * in the case that the device is currently identifying itself.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4
             */
            identifyQueryResponse: Command(0, TlvIdentifyQueryResponseRequest, 0, TlvNoResponse),

            /**
             * This command allows the sending device to request the target or targets to respond if they are currently
             * identifying themselves.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.2
             */
            identifyQuery: Command(1, TlvNoArguments, 0, TlvIdentifyQueryResponseRequest)
        }
    });

    export const Complete = BuildCluster(
        id,
        name,
        revision,
        featureMap,
        { query: true },
        Base,
        Query
    );
};
