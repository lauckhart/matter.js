/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterComponent } from "../../cluster/ClusterBuilder.js";
import { Attribute, AccessLevel, OptionalEvent, EventPriority } from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { ClusterFactory, BuildCluster } from "../../cluster/ClusterFactory.js";

/**
 * This event SHALL be generated when the StateValue attribute changes.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
 */
export const TlvStateChangeEvent = TlvObject({ stateValue: TlvField(0, TlvBoolean) });

/**
 * Standard BooleanState cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7
 */
const BooleanStateMetadata = ClusterMetadata({ id: 0x45, name: "BooleanState", revision: 1 });

/**
 * A BooleanStateCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
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
         * This event SHALL be generated when the StateValue attribute changes.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
         */
        stateChange: OptionalEvent(0, EventPriority.Info, TlvStateChangeEvent)
    }
});

/**
 * Use BooleanStateCluster() to obtain a Cluster instance.
 */
const BooleanStateCluster = ClusterFactory();