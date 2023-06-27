/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt64 } from "../../tlv/TlvNumber.js";

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.4.1
 */
export const ConfigurationStruct = TlvObject({
    ProxyAllNodes: TlvField(1, TlvBoolean),
    SourceList: TlvField(2, TlvArray(TlvUInt64))
});

export namespace ProxyConfigurationCluster {
    /**
     * Proxy Configuration
     *
     * Cluster to control Proxy Configuration
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `ProxyConfiguration.with()` and a list of
     * supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.14
     */
    export const Complete = Cluster({
        id: 0x42,
        name: "ProxyConfiguration",
        revision: 1,

        attributes: {
            /**
             * List of proxy configurations. There SHALL NOT be multiple
             * entries in this list for the same fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.5.1
             */
            configurationList: WritableAttribute(0, TlvArray(ConfigurationStruct), { persistent: true })
        }
    });
};