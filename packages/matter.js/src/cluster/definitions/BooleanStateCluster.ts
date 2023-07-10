/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, OptionalEvent, EventPriority, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * Boolean State
 *
 * This cluster provides an interface to a boolean state called StateValue.
 *
 * Use this factory function to create a BooleanState cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7
 */
export function BooleanStateCluster() {
    const cluster = Cluster({ ...BooleanStateCluster.Metadata, ...BooleanStateCluster.BaseComponent });
    return cluster as unknown as BooleanStateCluster.Type;
}

/**
 * Body of the BooleanState stateChange event
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
 */
export const TlvStateChangeEvent = TlvObject({ stateValue: TlvField(0, TlvBoolean) });

export namespace BooleanStateCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * BooleanState cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7
     */
    export const Metadata = ClusterMetadata({ id: 0x45, name: "BooleanState", revision: 1, features: {} });

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

    /**
     * This cluster supports all BooleanState features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        events: { ...BaseComponent.events }
    });
}
