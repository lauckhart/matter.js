/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, WritableFixedAttribute, Command, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Proxy Valid
 *
 * Cluster to control Proxy Valid
 *
 * Use this factory function to create a ValidProxies cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.15
 */
export function ValidProxiesCluster() {
    const cluster = Cluster({ ...ValidProxiesCluster.Metadata, ...ValidProxiesCluster.BaseComponent });
    return cluster as unknown as ValidProxiesCluster.Type;
}

/**
 * Encapsulates the Node ID of a Valid Proxy.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.4.1
 */
export const TlvValidProxyStruct = TlvObject({ nodeId: TlvField(1, TlvNodeId) });

export namespace ValidProxiesCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * ValidProxies cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.15
     */
    export const Metadata = ClusterMetadata({ id: 0x44, name: "ValidProxies", revision: 1, features: {} });

    /**
     * A ValidProxiesCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.5.1
             */
            validProxyList: WritableFixedAttribute(0, TlvArray(TlvValidProxyStruct), { persistent: true, default: [] })
        },

        commands: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.6
             */
            getValidProxiesRequest: Command(0, TlvNoArguments, 1, TlvNoArguments)
        }
    });

    /**
     * This cluster supports all ValidProxies features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands }
    });
}
