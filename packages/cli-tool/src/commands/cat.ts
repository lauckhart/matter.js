/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { field, listOf, string } from "@matter/model";
import type { ActionContext } from "@matter/node";

class CatArgs {
    @field(listOf(string))
    restArgs?: string[];
}

new CliCommand({
    name: "cat",
    usage: "[PATH]...",
    description: "Inspect values in one or more paths.",
    aliases: ["inspect"],
    input: CatArgs,

    invoke: async function cat(context: ActionContext, { _ }: { _: string[] }) {
        const locations = await Promise.all(_.map(path => this.location.at(`${path}`, undefined, context)));
        for (const location of locations) {
            this.out(this.inspect(location.definition), "\n");
        }
    },
});
