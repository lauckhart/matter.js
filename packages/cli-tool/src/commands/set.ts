/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { VariableService } from "@matter/general";
import { field, listOf, string } from "@matter/model";

class SetArgs {
    @field(listOf(string))
    restArgs?: string[];
}

new CliCommand({
    name: "set",
    usage: ["", "KEY=VALUE", "KEY VALUE"],
    description:
        'Set or display environment variables.  matter.js defines variables in a hierarchy with "." as a delimiter.  Variables persist across restarts.',
    input: SetArgs,

    invoke: async function set(_context, { _ }: { _: string[] }) {
        switch (_.length) {
            case 0:
                return this.env.vars.vars;

            case 1:
                const assignment = `${_[0]}`;
                const equalPos = assignment.indexOf("=");
                if (equalPos === -1) {
                    this.err("Invalid argument: parameter must be of the form key=value");
                }
                await this.env.vars.persist(assignment.slice(0, equalPos), assignment.slice(equalPos + 1));
                break;

            case 2:
                await this.env.vars.persist(`${_[0]}`, _[1] as VariableService.Value);
                break;
        }
    },
});
