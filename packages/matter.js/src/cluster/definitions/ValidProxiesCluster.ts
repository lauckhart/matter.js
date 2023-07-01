/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WritableFixedAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * Encapsulates the Node ID of a Valid Proxy.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.4.1
 */
export const TlvValidProxyStruct = TlvObject({ nodeId: TlvField(1, TlvUInt64) });

export namespace ValidProxiesCluster {
    export const id = 0x44;
    export const name = "ValidProxies";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.5.1
             */
            validProxyList: WritableFixedAttribute(0, TlvArray(TlvValidProxyStruct), { persistent: true })
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
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};