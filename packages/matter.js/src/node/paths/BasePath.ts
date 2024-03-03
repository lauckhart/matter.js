/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { GroupId } from "../../datatype/GroupId.js";
import { NodeId } from "../../datatype/NodeId.js";

export namespace BasePath {
    /**
     * Cluster name or ID.
     */
    export type Address = ClusterId | string;

    /**
     * Addresses clusters on a single node with optional endpoint and
     * cluster wildcards.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.1.1
     */
    export type Read = {
        node: NodeId;
        endpoint?: EndpointNumber;
        cluster?: Address;
    };

    /**
     * Addresses clusters in a group of nodes.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.1.1
     */
    export type GroupWrite = {
        group: GroupId;
        cluster: Address;
    };

    /**
     * Addresses clusters on a single node with endpoint wildcards.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.1.1
     */
    export type NodeWrite = {
        node: NodeId;
        endpoint?: EndpointNumber;
        cluster: Address;
    };

    /**
     * Addresses a specific cluster.
     */
    export type Concrete = {
        node: NodeId;
        endpoint: EndpointNumber;
        cluster: Address;
    };

    /**
     * Addresses clusters on a node or group of nodes.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.1.1
     */
    export type Write = GroupWrite | NodeWrite;
}
