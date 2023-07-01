/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";



export namespace LowPowerCluster {
    export const id = 0x508;
    export const name = "LowPower";
    export const revision = 1;

    const Base = {
        commands: {
            /**
             * This command shall put the device into low power mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9.3.1
             */
            sleep: Command(0, TlvNoArguments, 0, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};