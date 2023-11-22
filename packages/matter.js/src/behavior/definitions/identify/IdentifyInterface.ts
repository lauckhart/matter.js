/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Type.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { Identify } from "../../../cluster/definitions/IdentifyCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace IdentifyInterface {
    /**
     * This command starts or stops the receiving device identifying itself.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
     */
    export type IdentifyRequest = TypeFromSchema<typeof Identify.TlvIdentifyRequest>;

    /**
     * This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an
     * implementation to provide visual feedback to the user under certain circumstances such as a color light turning
     * green when it has successfully connected to a network. The use of this command and the effects themselves are
     * entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does
     * not replace the identify mechanism used during commissioning.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
     */
    export type TriggerEffectRequest = TypeFromSchema<typeof Identify.TlvTriggerEffectRequest>;

    /**
     * This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
     * case that the device is currently identifying itself.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.4
     */
    export type IdentifyQueryResponse = TypeFromSchema<typeof Identify.TlvIdentifyQueryResponse>;

    export interface Base {
        /**
         * This command starts or stops the receiving device identifying itself.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.1
         */
        identify(request: IdentifyRequest): MaybePromise<void>;

        /**
         * This command allows the support of feedback to the user, such as a certain light effect. It is used to allow
         * an implementation to provide visual feedback to the user under certain circumstances such as a color light
         * turning green when it has successfully connected to a network. The use of this command and the effects
         * themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the
         * same as and does not replace the identify mechanism used during commissioning.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.3
         */
        triggerEffect(request: TriggerEffectRequest): MaybePromise<void>;
    }

    export interface Query {
        /**
         * This command allows the sending device to request the target or targets to respond if they are currently
         * identifying themselves.
         *
         * This command has no data fields.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.2.6.2
         */
        identifyQuery(): MaybePromise<IdentifyQueryResponse>;
    }
}

export type IdentifyInterface = {
    components: [
        { flags: {}, methods: IdentifyInterface.Base },
        { flags: { query: true }, methods: IdentifyInterface.Query }
    ]
};
