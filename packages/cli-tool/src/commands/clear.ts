/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";

new CliCommand({
    name: "clear",
    description: "Clear the terminal screen",

    invoke: function clear() {
        console.clear();
    },
});
