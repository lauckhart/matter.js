/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, WritableAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt64 } from "../../tlv/TlvNumber.js";

/**
 * Proxy Configuration
 *
 * Cluster to control Proxy Configuration
 *
 * Use this factory function to create a ProxyConfiguration cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.14
 */
export function ProxyConfigurationCluster() {
    const cluster = Cluster({ ...ProxyConfigurationCluster.Metadata, ...ProxyConfigurationCluster.BaseComponent });
    return cluster as unknown as ProxyConfigurationCluster.Type;
}

/**
 * ProxyAllNodes
 *
 * This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
 * SourceList attribute is ignored.
 *
 * SourceList
 *
 * When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall specifically
 * proxy.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.4.1
 */
export const TlvConfigurationStruct = TlvObject({
    proxyAllNodes: TlvField(1, TlvBoolean),
    sourceList: TlvField(2, TlvArray(TlvUInt64))
});

export namespace ProxyConfigurationCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * ProxyConfiguration cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.14
     */
    export const Metadata = ClusterMetadata({ id: 0x42, name: "ProxyConfiguration", revision: 1, features: {} });

    /**
     * A ProxyConfigurationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.5.1
             */
            configurationList: WritableAttribute(0, TlvArray(TlvConfigurationStruct), { persistent: true, default: [] })
        }
    });

    /**
     * This cluster supports all ProxyConfiguration features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
