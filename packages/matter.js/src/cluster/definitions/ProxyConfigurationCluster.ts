/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WritableAttribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt64 } from "../../tlv/TlvNumber.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.4.1
 */
export const TlvConfigurationStruct = TlvObject({
    proxyAllNodes: TlvField(1, TlvBoolean),
    sourceList: TlvField(2, TlvArray(TlvUInt64))
});

export namespace ProxyConfigurationCluster {
    export const id = 0x42;
    export const name = "ProxyConfiguration";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * List of proxy configurations. There SHALL NOT be multiple entries in this list for the same fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.5.1
             */
            configurationList: WritableAttribute(0, TlvArray(TlvConfigurationStruct), { persistent: true })
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};