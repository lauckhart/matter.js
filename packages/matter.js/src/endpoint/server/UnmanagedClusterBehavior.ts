/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { Attributes, Events } from "../../cluster/Cluster.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";
import { ClusterType } from "../../cluster/ClusterType.js";
import { ClusterServerObj } from "../../cluster/server/ClusterServerTypes.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { camelize } from "../../util/String.js";

const cache = {} as Record<ClusterId, Behavior.Type>;

/**
 * This class allows us to add a behavior for ClusterServers that are created
 * directly without a behavior.  Most of the behavior interface is not present
 * but it allows us to properly integrate metadata.
 */
export class UnmanagedClusterBehavior extends Behavior {
    static for<A extends Attributes, E extends Events>(server: ClusterServerObj<A, E>) {
        let behavior = cache[server.id];
        if (behavior) {
            return behavior;
        }
        const cluster = ClusterRegistry.get(server.id)
            ?? ClusterType({
                id: server.id,
                name: server.name,
                revision: 1
            });

        behavior = class extends Behavior {
            static override id = camelize(cluster.name, false) as Uncapitalize<string>;
            static readonly cluster = cluster;
            cluster = cluster;
        }

        cache[server.id] = behavior;

        return behavior;
    }
}
