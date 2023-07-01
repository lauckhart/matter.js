/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";



export namespace PowerSourceConfigurationCluster {
    export const id = 0x2e;
    export const name = "PowerSourceConfiguration";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * This list SHALL contain the set of all power sources capable of participating in the power system of
             * this Node. Each entry in the list SHALL be the endpoint number of an endpoint having a Power Source
             * cluster, which corresponds to a physical power source. The endpoint number SHALL be unique within the
             * list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.6.4.1
             */
            sources: Attribute(0, TlvArray(TlvUInt16), { persistent: true, readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};