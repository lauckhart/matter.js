/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, OptionalEvent, EventPriority } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * Body of the BooleanState stateChange event
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
 */
export const TlvStateChangeEvent = TlvObject({ stateValue: TlvField(0, TlvBoolean) });

/**
 * Boolean State
 *
 * This cluster provides an interface to a boolean state called StateValue.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7
 */
export const BooleanStateCluster = Cluster({
    id: 0x45,
    name: "BooleanState",
    revision: 1,
    features: {},

    attributes: {
        /**
         * This represents a Boolean state.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.4.1
         */
        stateValue: Attribute(0, TlvBoolean)
    },

    events: {
        /**
         * This event shall be generated when the StateValue attribute changes.
         *
         * The StateValue field shall indicate the new value of the StateValue attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
         */
        stateChange: OptionalEvent(0, EventPriority.Info, TlvStateChangeEvent)
    }
});
