/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { NotADirectoryError } from "#errors.js";
import { description, field, string } from "@matter/model";
import type { ActionContext } from "@matter/node";

class CdPositional {
    @description("directory to enter")
    @field(string)
    path?: string;
}

class CdArgs {
    @field(CdPositional)
    positionalArgs?: CdPositional;
}

new CliCommand({
    name: "cd",
    usage: "[PATH]",
    description: "Change current working directory.  If you omit PATH changes to the last node entered.",
    input: CdArgs,

    invoke: async function cd(context: ActionContext, { path }: { path?: string }) {
        if (path === undefined) {
            path = this.env.vars.get("home", "/");
        } else {
            path = `${path}`;
        }

        const location = await this.location.at(`${path}`, undefined, context);

        if (location.kind !== "directory") {
            throw new NotADirectoryError(path);
        }

        this.location = location;

        await this.env.vars.persist("cwd", location.path);
    },
});
