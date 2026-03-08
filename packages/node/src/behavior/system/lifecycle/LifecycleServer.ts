/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { Node } from "#node/Node.js";
import { Time } from "@matter/general";
import { method } from "@matter/model";

/**
 * Optional behavior that exposes lifecycle management over privileged, non-Matter APIs (e.g. WebSocket).
 *
 * Install on a {@link ServerNode} to allow remote clients to shut it down gracefully via the `stop` method.  This
 * behavior is not included in any default endpoint type — add it explicitly when remote lifecycle control is desired.
 */
export class LifecycleServer extends Behavior {
    static override readonly id = "lifecycle";

    /**
     * Gracefully shut down the owning node.
     *
     * This closes the node without terminating the process.  The close is deferred so the response can be sent to
     * the caller before the node shuts down.
     */
    @method()
    stop() {
        const node = Node.forEndpoint(this.endpoint);
        // Defer close by two macrotask ticks to ensure the response is delivered before shutdown
        void Time.macrotask.then(() => Time.macrotask).then(() => node.close());
    }
}
