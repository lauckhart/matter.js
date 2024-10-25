/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { exit, stderr, stdout } from "process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { reify } from "./reify.js";
import { Template, TemplateNotFoundError } from "./template.js";

colors.enabled = stdout.isTTY;

interface InitArgs {
    template?: string;
}

await yargs(hideBin(process.argv))
    .command(["templates"], "list available templates", () => {}, listTemplates)

    .command<InitArgs>(
        ["$0 [template]"],
        "initialize a new project",
        yargs => {
            yargs.positional("template", {
                describe: "the template to use as a basis for the new project",
                type: "string",
                default: "default",
            });
        },
        init,
    )

    .usage("Generates a matter.js project from one of the example templates.")
    .strict()
    .parse();

async function error(e: Error) {
    stderr.write(`\n${colors.red(e.message)}\n`);
}

function welcome() {
    stdout.write(`\n🎉 Welcome to ${colors.bold("matter.js")}!\n`);
}

async function init({ template: templateName }: InitArgs) {
    let template;
    try {
        template = Template(templateName ?? "default");
    } catch (e) {
        if (e instanceof TemplateNotFoundError) {
            await error(e);
            await listTemplates();
            exit(1);
        }

        throw e;
    }
    welcome();
    stdout.write(`\n${colors.green(`Initializing project based on ${colors.bold(template.name)} template...\n\n`)}`);
    reify(template);
}

async function listTemplates() {
    const templates = await Template.all();

    welcome();
    stdout.write("\nYou can create a new project using one of the following templates:\n\n");
    for (const template of templates) {
        const name = template.name === "default" ? colors.bold(template.name) : template.name;
        stdout.write(`    * ${colors.blueBright(name)}\n`);
    }

    stdout.write("\n");
}
