/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { WritableAttribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvField, TlvObject } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace ProxyConfiguration {
    /**
     * @see {@link MatterSpecification.v13.Core} § 9.15.13.4.1
     */
    export const TlvConfigurationStruct = TlvObject({
        /**
         * This field shall be set to true to indicate to the proxy that it shall proxy all nodes. When true, the
         * SourceList attribute is ignored.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.15.13.4.1.1
         */
        proxyAllNodes: TlvField(1, TlvBoolean),

        /**
         * When ProxyAllNodes is false, this list contains the set of Node IDs of sources that this proxy shall
         * specifically proxy.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.15.13.4.1.2
         */
        sourceList: TlvField(2, TlvArray(TlvNodeId))
    });

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.15.13.4.1
     */
    export interface ConfigurationStruct extends TypeFromSchema<typeof TlvConfigurationStruct> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x42,
        name: "ProxyConfiguration",
        revision: 1,

        attributes: {
            /**
             * List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.15.13.5.1
             */
            configurationList: WritableAttribute(
                0x0,
                TlvArray(TlvConfigurationStruct),
                { persistent: true, default: [] }
            )
        }
    });

    /**
     * This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.
     *
     * @see {@link MatterSpecification.v13.Core} § 9.15.13
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type ProxyConfigurationCluster = ProxyConfiguration.Cluster;
export const ProxyConfigurationCluster = ProxyConfiguration.Cluster;
ClusterRegistry.register(ProxyConfiguration.Complete);
