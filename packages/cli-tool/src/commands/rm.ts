/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { Location } from "#location.js";
import { field, listOf, string } from "@matter/model";
import type { ActionContext } from "@matter/node";

class RmArgs {
    @field(listOf(string))
    restArgs?: string[];
}

new CliCommand({
    name: "rm",
    usage: "[PATH]...",
    description: "Deletes the properties at the paths you specify.",
    input: RmArgs,

    invoke: async function rm(context: ActionContext, { _ }: { _: string[] }) {
        const toDelete = Array<Location>();

        for (const path of _) {
            const location = await this.location.at(`${path}`, undefined, context);
            if (!location.parent) {
                this.err(`Invalid argument: Can't delete ${location.path}`);
                return;
            }
            toDelete.push(location);
        }

        for (const location of toDelete) {
            delete (location.parent!.definition as Record<string, unknown>)[location.basename];
        }
    },
});
