/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { argv, exit, stdout } from "process";
import { blue, bold } from "./colors.js";
import { error, notice } from "./messages.js";
import { reify } from "./reify.js";
import { Template, TemplateNotFoundError } from "./template.js";

const PATH_ARG = "--path=";

const args = argv.slice(2);

let path = ".";
const pathPos = args.findIndex(arg => arg.startsWith(PATH_ARG));
if (pathPos !== -1) {
    path = args[pathPos].slice(PATH_ARG.length);
    args.splice(pathPos, 1);
}

stdout.write("\n");

const option = args[0] ?? "default";
if (option === "templates") {
    await listTemplates();
    exit(0);
}

if (option === "help" || option === "--help") {
    usage();
    exit(0);
}

if (option.startsWith("-")) {
    error(`Invalid argument ${bold(option)}`);
    usage();
    exit(0);
}

if (args.length > 1) {
    error(`Unexpected argument ${args[1]}`);
    usage();
    exit(1);
}

await init(option);

function welcome() {
    stdout.write(`🎉 Welcome to ${bold("matter.js")}!\n\n`);
}

function usage() {
    welcome();
    stdout.write(
        [
            ``,
            `Initialize a new matter.js project from a project template.`,
            ``,
            `Usage:`,
            `  ${bold("npm init @matter")}            initialize with default template`,
            `  ${bold("npm init @matter <name>")}     initialize with template ${bold("name")}`,
            `  ${bold("npm init @matter templates")}  list available templates`,
            `  ${bold("npm init @matter help")}       show this help`,
            ``,
            `Options:`,
            `  ${bold("--path=<path>")}               initialize in directory ${bold("path")}`,
            ``,
            ``,
        ].join("\n"),
    );
}

async function init(templateName: string) {
    let template;
    try {
        template = Template(templateName);
    } catch (e) {
        if (e instanceof TemplateNotFoundError) {
            error(`Invalid template ${bold(templateName)}`);
            await listTemplates();
            exit(1);
        }

        throw e;
    }

    welcome();
    notice(`Initializing project from ${bold(template.name)} template...`);
    await reify(path, template);
}

async function listTemplates() {
    const templates = await Template.all();

    welcome();
    stdout.write("You can create a new project using one of the following templates:\n\n");
    for (const template of templates) {
        const name = template.name === "default" ? bold(template.name) : template.name;
        stdout.write(`    * ${blue(name)}\n`);
    }

    stdout.write("\n\n");
}
