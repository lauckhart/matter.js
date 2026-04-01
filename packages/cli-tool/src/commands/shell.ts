/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { repl } from "#repl.js";
import type { ActionContext } from "@matter/node";

new CliCommand({
    name: "shell",
    description: "Enter the interactive REPL",

    invoke: async function shell(_context: ActionContext) {
        await repl();
    },
});
