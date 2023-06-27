/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";



export namespace PowerSourceConfigurationCluster {
    /**
     * Power Source Configuration
     *
     * This cluster is used to describe the configuration and capabilities of a
     * Device's power system.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `PowerSourceConfiguration.with()` and a
     * list of supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.6
     */
    export const Complete = Cluster({
        id: 0x2e,
        name: "PowerSourceConfiguration",
        revision: 1,

        attributes: {
            /**
             * This list SHALL contain the set of all power sources capable of
             * participating in the power system of this Node. Each entry in
             * the list SHALL be the endpoint number of an endpoint having a
             * Power Source cluster, which corresponds to a physical power
             * source. The endpoint number SHALL be unique within the list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.6.4.1
             */
            sources: Attribute(0, TlvArray(TlvUInt16), { persistent: true, readAcl: AccessLevel.View })
        }
    });
};