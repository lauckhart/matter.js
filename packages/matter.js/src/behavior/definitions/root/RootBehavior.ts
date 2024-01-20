/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../Behavior.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { type Host } from "../../../node/Host.js";

/**
 * A "root" {@link Part} is the root of a part hierarchy and represents a single Matter Node.
 * 
 * Root parts installed in a {@link Host} must support RootBehavior.
 */
export class RootBehavior extends Behavior {
    static override id = "root";

    declare internal: RootBehavior.Internal;

    /**
     * The host for a node.  The root {@link Part} uses {@link host} to access components that are node-independent.
     */
    get host() {
        if (this.internal.host === undefined) {
            throw new ImplementationError("Root part is not installed in a host");
        }
        return this.internal.host;
    }

    set host(host: Host) {
        this.internal.host = host;
        host.started.on((started, stopped) => {
            this.start();
            started(this.part);
        );
    }

    /**
     * Bring the node online.
     */
    protected start() {}

    /**
     * Take the node offline.
     */
    protected cancel() {}
}

export namespace RootBehavior {
    export class Internal {
        host?: Host;
    }
}
 