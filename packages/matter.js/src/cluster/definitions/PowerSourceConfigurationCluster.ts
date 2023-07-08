/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";

/**
 * Power Source Configuration
 *
 * This cluster is used to describe the configuration and capabilities of a Device's power system.
 *
 * This function creates a PowerSourceConfiguration cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.6
 */
export function PowerSourceConfigurationCluster() {
    const cluster = { ...PowerSourceConfigurationCluster.Metadata, ...PowerSourceConfigurationCluster.BaseComponent };
    return cluster as unknown as PowerSourceConfigurationCluster.Type;
};

export namespace PowerSourceConfigurationCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * PowerSourceConfiguration cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.6
     */
    export const Metadata = ClusterMetadata({ id: 0x2e, name: "PowerSourceConfiguration", revision: 1 });

    /**
     * A PowerSourceConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This list SHALL contain the set of all power sources capable of participating in the power system of
             * this Node. Each entry in the list SHALL be the endpoint number of an endpoint having a Power Source
             * cluster, which corresponds to a physical power source. The endpoint number SHALL be unique within the
             * list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.6.4.1
             */
            sources: Attribute(0, TlvArray(TlvUInt16), { persistent: true, default: [], readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all PowerSourceConfiguration features.
     */
    export const Complete = { ...Metadata, attributes: { ...BaseComponent.attributes } };
};
