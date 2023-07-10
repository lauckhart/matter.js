/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";

/**
 * Power Source Configuration
 *
 * This cluster is used to describe the configuration and capabilities of a Device's power system.
 *
 * Use this factory function to create a PowerSourceConfiguration cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.6
 */
export function PowerSourceConfigurationCluster() {
    const cluster = Cluster({
        ...PowerSourceConfigurationCluster.Metadata,
        ...PowerSourceConfigurationCluster.BaseComponent
    });
    return cluster as unknown as PowerSourceConfigurationCluster.Type;
}

export namespace PowerSourceConfigurationCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * PowerSourceConfiguration cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.6
     */
    export const Metadata = ClusterMetadata({ id: 0x2e, name: "PowerSourceConfiguration", revision: 1, features: {} });

    /**
     * A PowerSourceConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This list shall contain the set of all power sources capable of participating in the power system of
             * this Node. Each entry in the list shall be the endpoint number of an endpoint having a Power Source
             * cluster, which corresponds to a physical power source. The endpoint number shall be unique within the
             * list.
             *
             * The order of power sources on a Node is defined by the Order attribute of its associated Power Source
             * cluster provided on the endpoint. List entries shall be sorted in increasing order, that is, an entry
             * with a lower order shall have a lower index than any entry with a higher order. Multiple entries MAY
             * have the same order, there are no restrictions on their relative sorting.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.6.4.1
             */
            sources: Attribute(0, TlvArray(TlvUInt16), { persistent: true, default: [] })
        }
    });

    /**
     * This cluster supports all PowerSourceConfiguration features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
