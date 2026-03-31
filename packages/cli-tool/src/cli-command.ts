/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain } from "#domain.js";
import { bin, DomainCommand } from "#globals.js";
import { decamelize, FormattedText, ImplementationError, MatterError, MaybePromise } from "@matter/general";
import { DatatypeModel, FieldModel, Metatype, Schema, ValueModel } from "@matter/model";
import type { ActionContext, Behavior } from "@matter/node";
import type { Val } from "@matter/protocol";
import colors from "ansi-colors";

/**
 * Thrown when `--help` is encountered during arg parsing.
 */
export class HelpRequest extends MatterError {}

/**
 * Thrown on invalid arguments during arg parsing.
 */
export class UsageError extends MatterError {}

/**
 * A CLI command with schema-driven arg parsing and help.
 *
 * Constructed either with an `input` class decorated with {@link field} (resolved via {@link Schema}) or with a
 * pre-built `schema` ({@link DatatypeModel}).  Commands with no arguments need neither.
 */
export class CliCommand {
    readonly name: string;
    readonly schema: ValueModel;
    readonly aliases?: string[];
    readonly #invoke: CliCommand.Options["invoke"];
    readonly #description: string;
    readonly #usage?: string | string[];

    readonly #defaults: Val.Struct;

    constructor(options: CliCommand.Options, register = true) {
        this.name = options.name;
        this.aliases = options.aliases;
        this.#invoke = options.invoke;
        this.#description = options.description;
        this.#usage = options.usage;

        if (options.input) {
            const resolved = Schema(options.input);
            if (resolved === undefined || !(resolved instanceof DatatypeModel)) {
                throw new ImplementationError(`Could not resolve schema for input class ${options.input.name}`);
            }
            this.schema = resolved;
            this.#defaults = readDefaults(options.input);
        } else if (options.schema) {
            this.schema = options.schema;
            this.#defaults = {};
        } else {
            this.schema = Schema.empty;
            this.#defaults = {};
        }

        if (register) {
            this.#register();
        }
    }

    /**
     * Create a {@link DomainCommand} wrapping a behavior method with schema-driven arg parsing.
     */
    static forBehavior(options: {
        method: Function;
        behavior: Behavior;
        schema: ValueModel;
        name: string;
    }): DomainCommand {
        const { method, behavior, schema, name } = options;

        const command = new CliCommand(
            {
                name,
                description: schema.description ?? "",
                schema,
                invoke: (_context: ActionContext, args: never) => {
                    return method.call(behavior, args);
                },
            },
            false,
        );

        return command.#createWrapper(false);
    }

    #register() {
        const command = this.#createWrapper();
        bin[this.name] = command;
        if (this.aliases) {
            for (const alias of this.aliases) {
                bin[alias] = command;
            }
        }
    }

    #createWrapper(requireDomain = true): DomainCommand {
        const self = this;

        const command = function invoke(this: { domain?: Domain }, context: ActionContext, ...argv: unknown[]) {
            const domain = this?.domain;
            if (requireDomain && !domain?.isDomain) {
                throw new ImplementationError(`Domain command ${self.name} invoked without bin scope`);
            }

            const result = self.#parseArgs(argv);

            return self.#invoke.call(domain as Domain, context, result as never);
        };

        command.help = (domain: Domain) => this.#help(domain);

        return command as DomainCommand;
    }

    #parseArgs(argv: unknown[]): Val.Struct {
        const fields = this.schema === Schema.empty ? [] : [...this.schema.fields];

        // Categorize fields
        const namedFields = new Map<string, FieldModel>();
        let positionalModel: DatatypeModel | undefined;
        let restField: FieldModel | undefined;

        for (const f of fields) {
            if (f.name === "positionalArgs") {
                const resolved = resolveStruct(f);
                if (resolved) {
                    positionalModel = resolved;
                }
            } else if (f.name === "restArgs") {
                restField = f;
            } else {
                namedFields.set(f.name, f);
            }
        }

        const positionalFields = positionalModel ? [...positionalModel.fields] : [];

        // Build flag lookup: --kebab-name or -x
        const flagLookup = new Map<string, FieldModel>();
        for (const [name, f] of namedFields) {
            if (name.length > 1) {
                flagLookup.set(`--${decamelize(name)}`, f);
            } else {
                flagLookup.set(`-${name}`, f);
            }
        }

        const inputs: Val.Struct = { ...this.#defaults };
        const positionalArgs = Array<unknown>();

        for (let i = 0; i < argv.length; i++) {
            let arg = argv[i] as string;
            if (typeof arg !== "string" || !arg.startsWith("-")) {
                positionalArgs.push(arg);
                continue;
            }

            // --help is always available
            if (arg === "--help") {
                throw new HelpRequest();
            }

            const splitAt = arg.indexOf("=");
            let param: unknown;
            if (splitAt !== -1) {
                param = arg.slice(splitAt + 1);
                arg = arg.slice(0, splitAt);
            }

            let fieldModel: FieldModel | undefined;
            let fieldName: string;

            if (arg[1] === "-") {
                // Long flag
                fieldModel = flagLookup.get(arg);
                if (!fieldModel) {
                    throw new UsageError(`Invalid argument: ${arg}`);
                }
                fieldName = fieldModel.propertyName;
            } else {
                // Short flags — may be combined (e.g. -ald)
                for (let j = 1; j < arg.length; j++) {
                    const subarg = `-${arg[j]}`;
                    const subField = flagLookup.get(subarg);
                    if (!subField) {
                        throw new UsageError(`Invalid argument: ${subarg}`);
                    }

                    if (j < arg.length - 1) {
                        // Combined short flags — all must be boolean
                        if (subField.effectiveMetatype !== Metatype.boolean) {
                            throw new UsageError(`Argument "${subarg}" requires a parameter`);
                        }
                        inputs[subField.propertyName] = true;
                        continue;
                    }

                    fieldModel = subField;
                    fieldName = subField.propertyName;
                }

                if (!fieldModel) {
                    continue;
                }
            }

            if (param === undefined) {
                if (fieldModel.effectiveMetatype === Metatype.boolean || fieldModel.effectiveMetatype === undefined) {
                    param = true;
                } else {
                    if (i === argv.length - 1) {
                        throw new UsageError(`Argument "${arg}" requires a parameter`);
                    }
                    param = argv[++i];
                }
            }

            inputs[fieldName!] = castValue(fieldModel, param);
        }

        // Assign positional args
        for (const pf of positionalFields) {
            if (!positionalArgs.length) {
                break;
            }
            inputs[pf.propertyName] = castValue(pf, positionalArgs.shift());
        }

        // Enforce max positional args when there is no rest collector
        if (!restField && positionalArgs.length) {
            throw new UsageError("Too many arguments");
        }

        // Rest args
        if (restField) {
            const restMetatype = restEntryMetatype(restField);
            if (restMetatype) {
                inputs._ = positionalArgs.map(a => Metatype.cast(restMetatype, a));
            } else {
                inputs._ = positionalArgs;
            }
        } else {
            inputs._ = positionalArgs;
        }

        return inputs;
    }

    #help(domain: Domain) {
        const fields = this.schema === Schema.empty ? [] : [...this.schema.fields];

        const namedFields = Array<FieldModel>();
        let positionalModel: DatatypeModel | undefined;
        let restField: FieldModel | undefined;

        for (const f of fields) {
            if (f.name === "positionalArgs") {
                const resolved = resolveStruct(f);
                if (resolved) {
                    positionalModel = resolved;
                }
            } else if (f.name === "restArgs") {
                restField = f;
            } else {
                namedFields.push(f);
            }
        }

        const positionalFields = positionalModel ? [...positionalModel.fields] : [];

        // Build arg detail rows: [flag-string, description]
        const argDetails = Array<[string, string]>();

        // --help is always available
        argDetails.push(["--help", "Show this help"]);

        for (const f of namedFields) {
            const flag = f.name.length > 1 ? `--${decamelize(f.name)}` : `-${f.name}`;
            let desc = f.description ?? "";
            const defaultValue = this.#defaults[f.propertyName];
            if (defaultValue !== undefined) {
                desc = `${desc} (default ${defaultValue})`;
            }
            argDetails.push([flag, desc]);
        }

        const maxArgWidth = Math.max(...argDetails.map(([arg]) => arg.length));
        const argNameWidth = maxArgWidth + 4;
        const argDetailWidth = domain.terminalWidth - argNameWidth;

        const argHelp = argDetails.map(([arg, description]) => {
            arg = colors.blue(arg.padEnd(maxArgWidth));
            description = FormattedText(description, argDetailWidth).join("\n").replace(/\n/g, "".padEnd(maxArgWidth));
            return `  ${arg}  ${description}`;
        });

        // Build usage string
        let usageStr: string;
        const name = colors.blue(this.name);
        const usage = this.#usage;
        switch (typeof usage) {
            case "object":
                usageStr = ["", ...usage.map(str => `${name}${str ? ` ${str}` : ""}`)].join("\n  ");
                break;

            case "string":
                usageStr = ` ${name} ${usage}`;
                break;

            default: {
                const parts = [name];
                if (namedFields.length) {
                    parts.push("[OPTION]...");
                }
                for (const pf of positionalFields) {
                    parts.push(`[${pf.name.toUpperCase()}]`);
                }
                if (restField) {
                    parts.push("[...]");
                }
                usageStr = ` ${parts.join(" ")}`;
                break;
            }
        }

        domain.out(
            [
                `\n${colors.bold("Usage:")}${usageStr}`,
                "",
                ...FormattedText(this.#description, domain.terminalWidth),
                "",
                ...argHelp,
            ].join("\n"),
            "\n\n",
        );
    }
}

export namespace CliCommand {
    export interface Options {
        name: string;
        description: string;

        /**
         * The command implementation.  Type the `args` parameter to match the fields defined by `input`/`schema`.
         *
         * The parser always produces a record, so narrowing in the function signature is safe.
         */
        invoke(this: Domain, context: ActionContext, args: never): MaybePromise<unknown>;

        input?: NewableFunction;
        schema?: ValueModel;
        aliases?: string[];
        usage?: string | string[];
    }
}

/**
 * Cast a value according to a field's effective metatype.
 */
function castValue(field: FieldModel, value: unknown): unknown {
    const metatype = field.effectiveMetatype;
    if (metatype === undefined || metatype === Metatype.any) {
        return value;
    }
    if (metatype === Metatype.boolean && value === true) {
        return true;
    }
    return Metatype.cast(metatype, value);
}

/**
 * Resolve a field to its struct schema (for positionalArgs).
 */
function resolveStruct(field: FieldModel): DatatypeModel | undefined {
    // If the field's type points to a class, resolve via Schema; otherwise look for a struct base
    const base = field.operationalBase ?? field.base;
    if (base instanceof DatatypeModel && base.effectiveMetatype === Metatype.object) {
        return base;
    }
    return undefined;
}

/**
 * Get the metatype of a rest args list's entry type.
 */
function restEntryMetatype(field: FieldModel): `${Metatype}` | undefined {
    const entry = field.listEntry;
    if (entry) {
        return entry.effectiveMetatype;
    }
    return undefined;
}

/**
 * Read default property values from a fresh instance of the input class.
 */
function readDefaults(input: NewableFunction): Val.Struct {
    const defaults: Val.Struct = {};
    const instance = new (input as new () => Val.Struct)();
    for (const key of Object.keys(instance)) {
        if (instance[key] !== undefined) {
            defaults[key] = instance[key];
        }
    }
    return defaults;
}
