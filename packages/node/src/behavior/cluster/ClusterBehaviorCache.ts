/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { Schema } from "@matter/model";
import type { ClusterBehavior } from "./ClusterBehavior.js";

const behaviorCache = new WeakMap<
    Behavior.Type,
    WeakMap<object, WeakMap<Schema, WeakRef<ClusterBehavior.Type<any>>>>
>();

const clientCache = new WeakMap<
    Behavior.Type,
    WeakMap<object, WeakMap<Schema, WeakRef<ClusterBehavior.Type<any>>>>
>();

/**
 * To save memory we cache behavior implementations specialized for specific clusters.  This allows for efficient
 * configuration of behaviors with conditional runtime logic.
 *
 * We use the namespace and schema as cache keys so this relies on similar caching for those items.
 */
export namespace ClusterBehaviorCache {
    export function get(namespace: object, base: Behavior.Type, schema: Schema, forClient?: boolean) {
        const cache = forClient ? clientCache : behaviorCache;

        const baseCache = cache.get(base);
        if (baseCache === undefined) {
            return;
        }

        const nsCache = baseCache.get(namespace);
        if (nsCache === undefined) {
            return;
        }

        return nsCache.get(schema)?.deref();
    }

    export function set(namespace: object, base: Behavior.Type, schema: Schema, type: ClusterBehavior.Type) {
        let baseCache = behaviorCache.get(base);
        if (baseCache === undefined) {
            behaviorCache.set(base, (baseCache = new WeakMap()));
        }

        let nsCache = baseCache.get(namespace);
        if (nsCache === undefined) {
            baseCache.set(namespace, (nsCache = new WeakMap()));
        }

        nsCache.set(schema, new WeakRef(type));
    }
}
