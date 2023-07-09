/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Low Power
 *
 * This cluster provides an interface for managing low power mode on a device.
 *
 * This function creates a LowPower cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9
 */
export function LowPowerCluster() {
    const cluster = Cluster({ ...LowPowerCluster.Metadata, ...LowPowerCluster.BaseComponent });
    return cluster as unknown as LowPowerCluster.Type;
};

export namespace LowPowerCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * LowPower cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9
     */
    export const Metadata = ClusterMetadata({ id: 0x508, name: "LowPower", revision: 1, features: {} });

    /**
     * A LowPowerCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        commands: {
            /**
             * This command shall put the device into low power mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9.3.1
             */
            sleep: Command(0, TlvNoArguments, 0, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all LowPower features.
     */
    export const Complete = Cluster({ ...Metadata, commands: { ...BaseComponent.commands } });
};
