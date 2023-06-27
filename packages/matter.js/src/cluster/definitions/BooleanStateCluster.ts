/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, OptionalEvent, EventPriority } from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * This event SHALL be generated when the StateValue attribute changes.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
 */
export const StateChangeEvent = TlvObject({ StateValue: TlvField(0, TlvBoolean) });

export namespace BooleanStateCluster {
    /**
     * Boolean State
     *
     * This cluster provides an interface to a boolean state called StateValue.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `BooleanState.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7
     */
    export const Complete = Cluster({
        id: 0x45,
        name: "BooleanState",
        revision: 1,

        attributes: {
            /**
             * This represents a Boolean state.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.4.1
             */
            stateValue: Attribute(0, TlvBoolean, { readAcl: AccessLevel.View })
        },

        events: {
            /**
             * This event SHALL be generated when the StateValue attribute
             * changes.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
             */
            stateChange: OptionalEvent(0, EventPriority.Info, StateChangeEvent)
        }
    });
};