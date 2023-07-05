/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterComponent } from "../../cluster/ClusterBuilder.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { ClusterFactory, BuildCluster } from "../../cluster/ClusterFactory.js";



/**
 * Standard LowPower cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9
 */
const LowPowerMetadata = ClusterMetadata({ id: 0x508, name: "LowPower", revision: 1 });

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
 * Use LowPowerCluster() to obtain a Cluster instance.
 */
const LowPowerCluster = ClusterFactory();