/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { DomainCommand } from "#globals.js";
import { topics } from "#help/topics.js";
import { FormattedText } from "@matter/general";
import { any, field } from "@matter/model";
import type { ActionContext } from "@matter/node";
import { Printer, TextWriter, Wrapper } from "@matter/tools/ansi-text";
import { parse } from "acorn";
import colors from "ansi-colors";
import { generate } from "escodegen";

class HelpPositional {
    @field(any)
    path?: unknown;
}

class HelpArgs {
    @field(HelpPositional)
    positionalArgs?: HelpPositional;
}

new CliCommand({
    name: "help",
    usage: "[PATH]",
    description: "Display help",
    aliases: ["man"],
    input: HelpArgs,

    invoke: async function help(context: ActionContext, { path }: { path?: unknown }) {
        const quote = (text: string) => {
            if (this.colorize) {
                return colors.blue(text);
            }
            return `"${text}"`;
        };

        if (path === undefined) {
            const HELP = `This tool allows you to interact with matter.js and your local Matter environment.
This tool understands both JavaScript and a shell-like syntax that maps "commands" to functions.  Use ${quote("ls /bin")} to see commands you can always use.  Use ${quote("help <name>")} for help with a specific command.
The current path appears in the prompt.  This points to the object this tool uses to find commands.  It is also the "global" object for any JavaScript statements you enter.
You can change the current path using ${quote("cd <path>")}.  Paths work like you would expect, including ${quote("/")}, ${quote(".")} and ${quote("..")}.\n`;

            this.out(
                "\nWelcome to ",
                this.description,
                ".\n\n",
                FormattedText(HELP, this.terminalWidth).join("\n"),
                "\n\n",
            );
            return;
        }

        const pathStr = `${path}`;

        const topic = topics[pathStr];
        if (topic) {
            const writer = new TextWriter(text => this.out(text), { terminalWidth: this.terminalWidth });
            writer.state.styleEnabled = this.colorize;
            const wrapper = new Wrapper(writer, { wrapPrefix: "  ", preserveSpace: false });
            const printer = Printer(wrapper);
            printer.write("\n");
            topic.render(printer);
            return;
        }

        const what = await this.searchPathFor(pathStr, context);

        if (what.kind !== "command") {
            this.out(`${path} is a ${what} but we can't tell you much more about it.\n\n`);
            return;
        }

        const help = (what.definition as DomainCommand).help;
        if (help) {
            help(this);
            return;
        }

        let ast;
        try {
            ast = parse(`${what.definition}`, { ecmaVersion: "latest", checkPrivateFields: false }).body[0];
        } catch (e) {
            if (!(e instanceof SyntaxError)) {
                throw e;
            }
            try {
                ast = parse(`function ${what.definition}`, { ecmaVersion: "latest", checkPrivateFields: false })
                    .body[0];
            } catch (e) {
                if (!(e instanceof SyntaxError)) {
                    throw e;
                }
            }
        }

        if (ast?.type !== "FunctionDeclaration") {
            this.out(`\nWell, ${colors.blue(pathStr)} is a function but we can't seem to parse it.\n\n`);
            return;
        }

        const usage = [colors.blue(pathStr)];
        for (const param of ast.params) {
            usage.push(`[${generate(param)}]`);
        }

        this.out(
            `\nUsage: ${usage.join(" ")}\n\n${colors.blue(pathStr)} is a function that does not provide additional usage details.\n\n`,
        );
    },
});
