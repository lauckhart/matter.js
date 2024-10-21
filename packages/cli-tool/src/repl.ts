/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain } from "#domain.js";
import { IncompleteError } from "#errors.js";
import { Diagnostic, Environment, LogFormat, StorageService } from "#general";
import { undefinedValue } from "#location.js";
import { isCommand } from "#parser.js";
import colors from "ansi-colors";
import { readFile } from "fs/promises";
import { homedir } from "os";
import { dirname, join } from "path";
import { exit, stderr, stdout } from "process";
import { AsyncCompleter, CompleterResult } from "readline";
import { Recoverable, REPLEval, ReplOptions, REPLServer, start } from "repl";
import { Context } from "vm";
import "./commands/index.js";
import "./providers/index.js";

// Node.js repl implementation does good stuff for us so want to keep it but we don't want the "." commands and it has
// no way to disable those.  So use this prefix as a hack to prevent it from noticing lines that start with "."
const LINE_PROTECTOR_CHAR = "\u0001";

export async function repl() {
    const domain = await createDomain();
    stdout.write(`Welcome to ${domain.description}.  Type ${colors.bold('"help"')} for help.\n`);

    const repl = createNodeRepl(domain);
    configureHistory(repl, domain);
    addCompletionSupport(repl, domain);
    instrumentReplToMaintainPrompt(repl);
    instrumentReplToAddLineProtector(repl);
}

async function createDomain() {
    const description = `${colors.bold("matter.js")} ${await readPackageVersion()}`;

    const domain = await Domain({
        description,

        out(...text) {
            stdout.write(text.join(""));
        },

        err(...text) {
            let str = text.join("");
            if (str.indexOf("\x1b") === -1) {
                str = colors.red(str);
            }
            stdout.write(str);
        },

        get terminalWidth() {
            return stdout.columns;
        },

        get colorize() {
            return stdout.isTTY;
        },

        get env() {
            return Environment.default;
        },
    });

    domain.exitHandler = () => {
        exit(0);
    };

    return domain;
}

async function readPackageVersion() {
    let path = new URL(import.meta.url).pathname;
    while (dirname(path) !== path) {
        path = dirname(path);
        try {
            const pkg = await readFile(join(path, "package.json"));
            const parsed = JSON.parse(pkg.toString());
            if (typeof parsed.version === "string") {
                return parsed.version;
            }
        } catch (e) {
            if ((e as any).code === "ENOENT") {
                continue;
            }
            throw e;
        }
    }

    return "?";
}

function configureHistory(repl: REPLServer, domain: Domain) {
    let historyPath = domain.env.vars.string("history.path");
    if (historyPath === undefined) {
        const storagePath = domain.env.get(StorageService).location;
        if (storagePath === undefined) {
            historyPath = join(homedir(), ".matter-cli-history");
        } else {
            historyPath = join(storagePath, "cli-history");
        }
    }

    repl.setupHistory(historyPath, error => {
        if (error) {
            console.error(error);
            exit(1);
        }
    });
}

function createNodeRepl(domain: Domain) {
    let repl: REPLServer | undefined = undefined;

    const evaluate: REPLEval = function (this, evalCmd, _context, _file, cb: (err: Error | null, result: any) => void) {
        repl?.pause();

        // See comment below r.e. "realEmit".  We can't just strip first character because the line protector will
        // appear multiple times if there are multiple lines
        evalCmd = evalCmd.replace(new RegExp(LINE_PROTECTOR_CHAR, "g"), "");

        if (evalCmd.endsWith("\n")) {
            evalCmd = evalCmd.slice(0, evalCmd.length - 1);
        }
        const result: Promise<unknown> = domain.execute(evalCmd);
        result.then(handleSuccess, handleError);

        function handleSuccess(result: unknown) {
            repl?.setPrompt(createPrompt());
            if (result === undefinedValue) {
                domain.out(domain.inspect(result));
                finish(null, undefined);
            }
            finish(null, result);
        }

        function handleError(error: Error) {
            repl?.setPrompt(createPrompt());

            if (error.constructor.name === "IncompleteError") {
                finish(new Recoverable((error as IncompleteError).cause as Error), undefined);
                return;
            }

            // Stack frames following our special matter-cli-* "filenames" are just cruft.  And if the first filename
            // then just remove the stack and place location at end of message
            const stack = error.stack;
            if (stack !== undefined) {
                const lines = stack.split("\n");
                let specialLoc: string | undefined;
                let specialLine;
                if ("isCliError" in error) {
                    // These are thrown at the top level and should not display a stack trace
                    specialLine = 1;
                } else {
                    // Look for the "matter-cli-" marker which we prefix on the "filename"
                    specialLine = lines.findIndex(line => {
                        const match = line.match(/at matter-cli-(?:[a-z]+):([0-9]+:[0-9]+)?/);
                        if (match) {
                            specialLoc = match[1];
                            return true;
                        }
                    });
                }

                if (specialLine === 1) {
                    if (specialLoc) {
                        error.message += ` (${specialLoc})`;
                    }
                    error.stack = `${error.constructor.name}: ${error.message}`;
                } else if (specialLine !== -1) {
                    error.stack = lines.slice(0, specialLine + 1).join("\n");
                }
            }

            // Display the error ourselves so is pretty and captures all details
            const diagnostic = Diagnostic.error(error);
            const formatted = LogFormat[colors.enabled ? "ansi" : "plain"](diagnostic);
            stderr.write(`${formatted}\n`);

            // Do not report the error to node
            finish(null, undefined);
        }

        function finish(err: Error | null, result: any) {
            repl?.resume();
            cb(err, result);
        }
    };

    repl = start({
        prompt: createPrompt(),
        eval: evaluate,
        ignoreUndefined: true,
        historySize: domain.env.vars.integer("history.size", 10000),
    } as ReplOptions);

    return repl;

    function createPrompt() {
        return `${colors.dim("matter")} ${colors.yellow(domain.location.path)} ❯ `;
    }
}

function addCompletionSupport(repl: REPLServer, domain: Domain) {
    const complete: AsyncCompleter = (line, callback) => {
        findCompletions(line).then(result => {
            if (result) {
                callback(null, result);
            } else {
                nodeCompleter.call(repl, line, callback);
            }
        }, callback);
    };

    const nodeCompleter = repl.completer;
    Object.defineProperty(repl, "completer", { value: complete, configurable: true, writable: true });

    async function findCompletions(line: string): Promise<undefined | CompleterResult> {
        if (line.endsWith("/") ? !isCommand(line.slice(0, line.length - 1)) : !isCommand(line)) {
            return;
        }

        const possiblePath = line.replace(/^.*\s/u, "");
        if (!possiblePath.match(/^[/0-9\p{L}$_%]*$/u)) {
            return;
        }

        const pathsToSearch = Array<string>();

        const slashPos = possiblePath.lastIndexOf("/");
        let partial;
        if (slashPos === -1) {
            pathsToSearch.push("");
            pathsToSearch.push("/bin");
            partial = possiblePath;
        } else {
            pathsToSearch.push(possiblePath.slice(0, slashPos));
            partial = possiblePath.slice(slashPos + 1);
        }

        const completions = Array<string>();

        for (const path of pathsToSearch) {
            const location = await domain.location.maybeAt(path);
            if (location?.kind !== "directory") {
                continue;
            }

            completions.push(...(await location.paths).filter(path => path.startsWith(partial)));
        }

        return [completions.sort(), partial];
    }
}

function instrumentReplToMaintainPrompt(repl: REPLServer) {
    if (!stdout.isTTY) {
        return;
    }

    let evaluating = false;
    let promptHidden = false;
    let readlineWriting = false;
    let onNewline = false;

    instrumentStdStream(stdout);
    instrumentStdStream(stderr);

    const serverWithTty = repl as unknown as { _ttyWrite: (...args: unknown[]) => unknown };
    const ttyWrite = serverWithTty._ttyWrite.bind(repl);
    serverWithTty._ttyWrite = (...args: unknown[]) => {
        readlineWriting = true;
        restorePrompt();
        const result = ttyWrite(...args);
        readlineWriting = false;
        return result;
    };

    const realEval = repl.eval;
    Object.defineProperty(repl, "eval", {
        value: function (
            this: REPLServer,
            evalCmd: string,
            context: Context,
            file: string,
            cb: (err: Error | null, result: any) => void,
        ) {
            evaluating = true;
            realEval.call(this, evalCmd, context, file, (err: Error | null, result: any) => {
                cb(err, result);
                evaluating = false;
            });

            if (!onNewline) {
                stdout.write("\n");
            }
        },
        writable: true,
        configurable: true,
    });

    function instrumentStdStream(stream: NodeJS.WriteStream) {
        const actualWrite = stream.write.bind(stream);
        stream.write = (payload: Uint8Array | string, ...params: any[]) => {
            // Doesn't catch cursor movement from ANSI codes but worse case we end up with a blank line
            onNewline = payload[payload.length - 1] === "\n" || payload[payload.length - 1] === "\r";

            if (!evaluating && !promptHidden && !readlineWriting) {
                promptHidden = true;
                stdout.cursorTo(0);
                stdout.clearLine(0);
                queueMicrotask(restorePrompt);
                onNewline = true;
            }

            return actualWrite(payload, ...params);
        };
    }

    function restorePrompt() {
        if (!promptHidden) {
            return;
        }

        if (!onNewline) {
            stdout.write("\n");
        }

        repl?.displayPrompt(true);
        promptHidden = false;
    }
}

function instrumentReplToAddLineProtector(repl: REPLServer) {
    const realEmit = repl.emit as (...args: unknown[]) => boolean;
    repl.emit = (event, ...args: any[]) => {
        if (event === "line") {
            args[0] = `${LINE_PROTECTOR_CHAR}${args[0]}`;
        }
        return realEmit.call(repl, event, ...args);
    };
}
