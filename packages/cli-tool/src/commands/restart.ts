/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from "./command.js";

Command({
    usage: "<node>",
    description: "Restart a running node (stop then start).",
    positionalArgs: [{ name: "node", type: "string", description: "Node ID to restart" }],

    invoke: async function restart(args) {
        const nodeId = args.node;
        if (!nodeId) {
            this.err("Node ID is required\n");
            return;
        }

        await this.execute(`stop ${nodeId}`);
        await this.execute(`start ${nodeId}`);
    },
});
