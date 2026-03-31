/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";

new CliCommand({
    name: "pwd",
    description: "Display current working directory.",

    invoke: function pwd() {
        this.out(this.location.path, "\n");
    },
});
