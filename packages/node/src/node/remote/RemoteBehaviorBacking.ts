/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import type { SupportedElements } from "#endpoint/properties/Behaviors.js";
import { MaybePromise } from "@matter/general";

/**
 * Backing for behaviors on remote nodes accessed via WebSocket.
 *
 * All behaviors use `primaryKey: "name"` since the StateStream delivers name-keyed values.
 *
 * All state fields are treated as persistent so writes flow through the store (and over the wire via
 * {@link DatasourceCache}).  Without this, the {@link Datasource} would skip the `store.set()` call for fields not
 * marked as non-volatile or writable attributes.
 */
export class RemoteBehaviorBacking extends BehaviorBacking {
    get elements(): SupportedElements {
        return RemoteBehaviorBacking.#emptyElements;
    }

    static #emptyElements: SupportedElements = {
        features: new Set(),
        attributes: new Set(),
        commands: new Set(),
        events: new Set(),
    };

    protected override get datasourceOptions() {
        const options = super.datasourceOptions;
        options.primaryKey = "name";

        // All state fields must be persistent so writes flow through the store (and over the wire via DatasourceCache).
        // The Datasource only calls store.set() for fields in the persistentKeys set.  For remote behaviors, every
        // field write must go over the wire, so we augment the set with all state property names.
        const realPersistentKeys = options.supervisor.persistentKeys.bind(options.supervisor);
        options.supervisor.persistentKeys = () => {
            const keys = realPersistentKeys("name");
            for (const name of Object.getOwnPropertyNames(new options.type())) {
                keys.add(name);
            }
            return keys;
        };

        return options;
    }

    override close(): MaybePromise {
        // Release values if the store supports it
        const store = this.store as { reclaimValues?(): void };
        store.reclaimValues?.();

        // Omit the agent to skip disposal logic as remote behaviors have none
        return super.close();
    }
}
