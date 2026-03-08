/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { Filesystem, LogFile } from "@matter/general";
import { field, method, response, string } from "@matter/model";
import { Logs } from "./Logs.js";

/**
 * Optional behavior that exposes log file querying over privileged, non-Matter APIs (e.g. WebSocket).
 *
 * Install on a {@link ServerNode} to allow remote clients to query and clear the node's log file.  The log file path
 * is configured via {@link LogsServer.State.path}.
 */
export class LogsServer extends Behavior {
    static override readonly id = "logs";

    declare state: LogsServer.State;

    /**
     * Query the log file, returning text content.
     */
    @method(Logs.QueryRequest)
    @response(string)
    async query(options?: Logs.QueryRequest): Promise<string> {
        const path = this.state.path;
        if (!path) {
            return "";
        }
        const fs = this.env.get(Filesystem);
        const file = fs.create(path);
        if (!(await file.exists())) {
            return "";
        }
        return await LogFile.query(file, options);
    }

    /**
     * Truncate the log file.
     */
    @method()
    async clear(): Promise<void> {
        const path = this.state.path;
        if (!path) {
            return;
        }
        const fs = this.env.get(Filesystem);
        const file = fs.create(path);
        if (!(await file.exists())) {
            return;
        }
        await LogFile.clear(file);
    }
}

export namespace LogsServer {
    export class State {
        @field(string)
        path = "";
    }
}
