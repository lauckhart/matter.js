/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableFixedAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Proxy Valid
 *
 * Cluster to control Proxy Valid
 *
 * This function creates a ValidProxies cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.15
 */
export function ValidProxiesCluster() {
    const cluster = { ...ValidProxiesCluster.Metadata, ...ValidProxiesCluster.BaseComponent };
    return cluster as unknown as ValidProxiesCluster.Type;
};

/**
 * Encapsulates the Node ID of a Valid Proxy.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.4.1
 */
export const TlvValidProxyStruct = TlvObject({ nodeId: TlvField(1, TlvUInt64) });

export namespace ValidProxiesCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * ValidProxies cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.15
     */
    export const Metadata = ClusterMetadata({ id: 0x44, name: "ValidProxies", revision: 1 });

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
            getValidProxiesRequest: Command(0, TlvNoArguments, 1, TlvNoArguments),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.6
             */
            getValidProxiesResponse: Command(1, TlvNoArguments, 1, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all ValidProxies features.
     */
    export const Complete = {
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands }
    };
};
