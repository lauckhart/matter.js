/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { description, field, string } from "@matter/model";

class RestartPositional {
    @description("Node ID to restart")
    @field(string)
    node?: string;
}

class RestartArgs {
    @field(RestartPositional)
    positionalArgs?: RestartPositional;
}

new CliCommand({
    name: "restart",
    usage: "<node>",
    description: "Restart a running node (stop then start).",
    input: RestartArgs,

    invoke: async function restart(_context, { node }: { node?: string }) {
        if (!node) {
            this.err("Node ID is required\n");
            return;
        }

        await this.execute(`stop ${node}`);
        await this.execute(`start ${node}`);
    },
});
