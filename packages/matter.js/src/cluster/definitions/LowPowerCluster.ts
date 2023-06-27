/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";



export namespace LowPowerCluster {
    /**
     * Low Power
     *
     * This cluster provides an interface for managing low power mode on a
     * device.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `LowPower.with()` and a list of supported
     * features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9
     */
    export const Complete = Cluster({
        id: 0x508,
        name: "LowPower",
        revision: 1,

        commands: {
            /**
             * This command shall put the device into low power mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9.3.1
             */
            sleep: Command(0, TlvNoArguments, 0, TlvNoResponse)
        }
    });
};