/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain } from "#domain.js";
import { IncompleteError } from "#errors.js";
import {
    Diagnostic,
    Environment,
    InternalError,
    LogFormat,
    Observable,
    RuntimeService,
    StorageService,
} from "#general";
import { undefinedValue } from "#location.js";
import { isCommand } from "#parser.js";
import colors from "ansi-colors";
import { readFile } from "fs/promises";
import { homedir } from "os";
import { dirname, join } from "path";
import { exit, stderr, stdout } from "process";
import { AsyncCompleter, CompleterResult, Key } from "readline";
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
    configureHistory(repl);
    addCompletionSupport(repl);
    instrumentReplToMaintainPrompt(repl);
    instrumentReplToAddLineProtector(repl);
    configureInterruptHandling(repl);
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

function configureHistory(repl: AugmentedRepl) {
    let historyPath = repl.dom.env.vars.string("history.path");
    if (historyPath === undefined) {
        const storagePath = repl.dom.env.get(StorageService).location;
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

interface KeypressEvent {
    str: string;
    key: Key;
}

interface AugmentedRepl extends REPLServer {
    // Node has an internal "domain" variable so call ours "dom"
    dom: Domain;

    // Emits when we start/stop evaluating
    evaluationModeChange: Observable<[state: boolean]>;

    // Emits when we receive input from the terminal
    keypressReceived: Observable<[event: KeypressEvent], boolean>;

    // Emits before we pass input from the terminal to readline
    keypressDelivering: Observable<[event: KeypressEvent]>;

    // Emits after we pass input from the terminal to readline
    keypressDelivered: Observable<[event: KeypressEvent]>;

    // Injects data as if it was received from the terminal
    deliverKeypress(event: KeypressEvent): void;
}

function createNodeRepl(domain: Domain) {
    const repl = start({
        prompt: createPrompt(domain),
        eval: evaluate as REPLEval,
        ignoreUndefined: true,
        historySize: domain.env.vars.integer("history.size", 10000),
    } as ReplOptions) as AugmentedRepl;

    repl.dom = domain;
    repl.evaluationModeChange = Observable();
    repl.keypressReceived = Observable();
    repl.keypressDelivered = Observable();

    const onkeypress = repl.input.listeners("keypress").find(listener => listener.name === "onkeypress");
    if (!onkeypress) {
        throw new InternalError("Could not identify REPL keypress listener");
    }
    repl.input.off("keypress", onkeypress as any);

    repl.deliverKeypress = (event: KeypressEvent) => {
        repl.keypressDelivering.emit(event);
        onkeypress(event.str, event.key);
        repl.keypressDelivered.emit(event);
    };

    repl.input.on("keypress", (str: string, key: Key) => {
        const event = { str, key };

        if (repl.keypressReceived.emit(event) === false) {
            return;
        }

        repl.deliverKeypress(event);
    });

    return repl;
}

function evaluate(
    this: AugmentedRepl,
    evalCmd: string,
    _context: Context,
    _file: string,
    cb: (err: Error | null, result: any) => void,
) {
    this.pause();

    // See comment below r.e. "realEmit".  We can't just strip first character because the line protector will
    // appear multiple times if there are multiple lines
    evalCmd = evalCmd.replace(new RegExp(LINE_PROTECTOR_CHAR, "g"), "");

    if (evalCmd.endsWith("\n")) {
        evalCmd = evalCmd.slice(0, evalCmd.length - 1);
    }
    const result: Promise<unknown> = this.dom.execute(evalCmd);

    const finish = (err: Error | null, result: any) => {
        this.resume();
        cb(err, result);
    };

    const handleSuccess = (result: unknown) => {
        this.setPrompt(createPrompt(this.dom));
        if (result === undefinedValue) {
            this.dom.out(this.dom.inspect(result));
            finish(null, undefined);
        }
        finish(null, result);
    };

    const handleError = (error: Error) => {
        this.setPrompt(createPrompt(this.dom));

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
    };

    result.then(handleSuccess, handleError);
}

function createPrompt(domain: Domain) {
    return `${colors.dim("matter")} ${colors.yellow(domain.location.path)} ❯ `;
}

function addCompletionSupport(repl: AugmentedRepl) {
    const nodeCompleter = repl.completer;

    const complete: AsyncCompleter = (line, callback) => {
        findCompletions(line).then(result => {
            if (result) {
                callback(null, result);
            } else {
                (nodeCompleter as any) /* TS bug */
                    .call(repl, line, callback);
            }
        }, callback);
    };

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
            const location = await repl.dom.location.maybeAt(path);
            if (location?.kind !== "directory") {
                continue;
            }

            completions.push(...(await location.paths).filter(path => path.startsWith(partial)));
        }

        return [completions.sort(), partial];
    }
}

function instrumentReplToMaintainPrompt(repl: AugmentedRepl) {
    if (!stdout.isTTY) {
        return;
    }

    let evaluating = false;
    let promptHidden = false;
    let readlineWriting = false;
    let onNewline = false;

    instrumentStdStream(stdout);
    instrumentStdStream(stderr);

    repl.keypressDelivered.on(() => {
        readlineWriting = true;
        restorePrompt();
    });
    repl.keypressDelivered.on(() => {
        readlineWriting = false;
    });

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

function configureInterruptHandling(repl: AugmentedRepl) {
    // These handlers handle ctrl-C from readline.  It's not actually a SIGINT, readline just detects the keypress
    const fakeSigintHandlers = repl.listeners("SIGINT");

    // We do not want node's default behavior
    const onSigInt = fakeSigintHandlers.find(handler => handler.name === "onSigInt");
    if (onSigInt) {
        repl.off("SIGINT", onSigInt as any);
    }

    // Make fake interrupts do the same thing as real interrupts
    repl.on("SIGINT", () => repl.dom.env.get(RuntimeService).interrupt());
}
