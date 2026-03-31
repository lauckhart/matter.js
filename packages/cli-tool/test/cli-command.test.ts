/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand, HelpRequest, UsageError } from "#cli-command.js";
import { DatatypeModel, FieldModel } from "@matter/model";

/**
 * Helper: invoke a {@link CliCommand} wrapper with the given argv and return the parsed args record.
 */
function parse(schema: DatatypeModel, ...argv: unknown[]): Record<string, unknown> {
    let captured: Record<string, unknown> | undefined;

    const wrapper = CliCommand.create({
        name: "test",
        description: "test command",
        schema,
        invoke(_context, args: never) {
            captured = args as Record<string, unknown>;
        },
    });

    wrapper.call({}, undefined as never, ...argv);
    return captured!;
}

/**
 * Helper: expect parsing to throw a specific error type.
 */
function parseError(type: new (message?: string) => Error, schema: DatatypeModel, ...argv: unknown[]) {
    expect(() => parse(schema, ...argv)).throws(type);
}

// -- Fixture schemas ----------------------------------------------------------

function schema(name: string, ...children: FieldModel[]): DatatypeModel {
    const result = new DatatypeModel({ name, type: "struct" }, ...children);
    result.finalize();
    return result;
}

const emptySchema = schema("Empty");

const booleanSchema = schema(
    "BoolFlags",
    new FieldModel({ name: "Verbose", type: "bool" }),
    new FieldModel({ name: "Force", type: "bool" }),
    new FieldModel({ name: "DryRun", type: "bool" }),
);

const mixedSchema = schema(
    "Mixed",
    new FieldModel({ name: "OnTime", type: "uint16" }),
    new FieldModel({ name: "OffWaitTime", type: "uint16" }),
    new FieldModel({ name: "Enabled", type: "bool" }),
);

const shortFlagSchema = schema(
    "ShortFlags",
    new FieldModel({ name: "a", type: "bool" }),
    new FieldModel({ name: "l", type: "bool" }),
    new FieldModel({ name: "d", type: "bool" }),
    new FieldModel({ name: "n", type: "uint16" }),
);

const stringSchema = schema("StringArg", new FieldModel({ name: "Name", type: "string" }));

// -- Tests --------------------------------------------------------------------

describe("CliCommand", () => {
    describe("no-arg commands", () => {
        it("parses empty argv", () => {
            const result = parse(emptySchema);
            expect(result._).deep.equals([]);
        });

        it("rejects extra positional args", () => {
            parseError(UsageError, emptySchema, "extra");
        });
    });

    describe("--help", () => {
        it("throws HelpRequest", () => {
            parseError(HelpRequest, emptySchema, "--help");
        });

        it("throws HelpRequest even with other args", () => {
            parseError(HelpRequest, booleanSchema, "--verbose", "--help");
        });
    });

    describe("long flags", () => {
        it("parses boolean flags", () => {
            const result = parse(booleanSchema, "--verbose", "--force");
            expect(result.verbose).equals(true);
            expect(result.force).equals(true);
            expect(result.dryRun).equals(undefined);
        });

        it("parses kebab-case flags", () => {
            const result = parse(booleanSchema, "--dry-run");
            expect(result.dryRun).equals(true);
        });

        it("parses camelCase flags", () => {
            const result = parse(booleanSchema, "--dryRun");
            expect(result.dryRun).equals(true);
        });

        it("parses PascalCase flags", () => {
            const result = parse(booleanSchema, "--DryRun");
            expect(result.dryRun).equals(true);
        });

        it("rejects unknown flags", () => {
            parseError(UsageError, booleanSchema, "--unknown");
        });
    });

    describe("value flags", () => {
        it("parses next-arg values", () => {
            const result = parse(mixedSchema, "--on-time", "30");
            expect(result.onTime).equals(30);
        });

        it("parses --key=value syntax", () => {
            const result = parse(mixedSchema, "--on-time=30");
            expect(result.onTime).equals(30);
        });

        it("parses multiple value flags", () => {
            const result = parse(mixedSchema, "--on-time", "30", "--off-wait-time", "60");
            expect(result.onTime).equals(30);
            expect(result.offWaitTime).equals(60);
        });

        it("errors when value missing", () => {
            parseError(UsageError, mixedSchema, "--on-time");
        });

        it("mixes boolean and value flags", () => {
            const result = parse(mixedSchema, "--enabled", "--on-time", "42");
            expect(result.enabled).equals(true);
            expect(result.onTime).equals(42);
        });
    });

    describe("short flags", () => {
        it("parses single short flag", () => {
            const result = parse(shortFlagSchema, "-a");
            expect(result.a).equals(true);
        });

        it("parses combined short boolean flags", () => {
            const result = parse(shortFlagSchema, "-ald");
            expect(result.a).equals(true);
            expect(result.l).equals(true);
            expect(result.d).equals(true);
        });

        it("parses short flag with value", () => {
            const result = parse(shortFlagSchema, "-n", "5");
            expect(result.n).equals(5);
        });

        it("errors on non-boolean combined flag needing value", () => {
            // -n requires a value, so it can't be combined before the last position
            parseError(UsageError, shortFlagSchema, "-na");
        });

        it("rejects unknown short flags", () => {
            parseError(UsageError, shortFlagSchema, "-x");
        });
    });

    describe("+flag shorthand", () => {
        it("sets a single boolean flag", () => {
            const result = parse(booleanSchema, "+verbose");
            expect(result.verbose).equals(true);
        });

        it("sets multiple comma-separated flags", () => {
            const result = parse(booleanSchema, "+verbose,force,dry-run");
            expect(result.verbose).equals(true);
            expect(result.force).equals(true);
            expect(result.dryRun).equals(true);
        });

        it("accepts camelCase name", () => {
            const result = parse(booleanSchema, "+dryRun");
            expect(result.dryRun).equals(true);
        });

        it("rejects unknown flag names", () => {
            parseError(UsageError, booleanSchema, "+unknown");
        });

        it("rejects non-boolean fields", () => {
            parseError(UsageError, mixedSchema, "+on-time");
        });

        it("mixes with regular flags", () => {
            const result = parse(mixedSchema, "+enabled", "--on-time", "30");
            expect(result.enabled).equals(true);
            expect(result.onTime).equals(30);
        });
    });

    describe("name=value shorthand", () => {
        it("parses known flag", () => {
            const result = parse(mixedSchema, "on-time=30");
            expect(result.onTime).equals(30);
        });

        it("casts boolean value", () => {
            const result = parse(mixedSchema, "enabled=true");
            expect(result.enabled).equals(true);
        });

        it("falls through to positional for unknown name", () => {
            const restSchema = schema(
                "Rest",
                new FieldModel({ name: "OnTime", type: "uint16" }),
                new FieldModel({ name: "restArgs", type: "list", constraint: "max 100" }),
            );
            const result = parse(restSchema, "unknown=foo");
            expect(result._).deep.equals(["unknown=foo"]);
        });

        it("mixes with regular flags", () => {
            const result = parse(mixedSchema, "on-time=30", "--off-wait-time=60");
            expect(result.onTime).equals(30);
            expect(result.offWaitTime).equals(60);
        });

        it("handles empty value", () => {
            const result = parse(stringSchema, "name=");
            expect(result.name).equals("");
        });

        it("accepts camelCase name", () => {
            const result = parse(mixedSchema, "onTime=30");
            expect(result.onTime).equals(30);
        });

        it("accepts PascalCase name", () => {
            const result = parse(mixedSchema, "OnTime=30");
            expect(result.onTime).equals(30);
        });
    });

    describe("-- sentinel", () => {
        it("forces remaining args to positional", () => {
            const restSchema = schema(
                "Rest",
                new FieldModel({ name: "Verbose", type: "bool" }),
                new FieldModel({ name: "restArgs", type: "list", constraint: "max 100" }),
            );
            const result = parse(restSchema, "--", "--verbose");
            expect(result.verbose).equals(undefined);
            expect(result._).deep.equals(["--verbose"]);
        });

        it("flags before sentinel still work", () => {
            const restSchema = schema(
                "Rest",
                new FieldModel({ name: "Verbose", type: "bool" }),
                new FieldModel({ name: "restArgs", type: "list", constraint: "max 100" }),
            );
            const result = parse(restSchema, "--verbose", "--", "--force");
            expect(result.verbose).equals(true);
            expect(result._).deep.equals(["--force"]);
        });

        it("disables +flag shorthand", () => {
            const restSchema = schema(
                "Rest",
                new FieldModel({ name: "Foo", type: "bool" }),
                new FieldModel({ name: "restArgs", type: "list", constraint: "max 100" }),
            );
            const result = parse(restSchema, "--", "+foo");
            expect(result.foo).equals(undefined);
            expect(result._).deep.equals(["+foo"]);
        });

        it("disables name=value shorthand", () => {
            const restSchema = schema(
                "Rest",
                new FieldModel({ name: "OnTime", type: "uint16" }),
                new FieldModel({ name: "restArgs", type: "list", constraint: "max 100" }),
            );
            const result = parse(restSchema, "--", "on-time=30");
            expect(result.onTime).equals(undefined);
            expect(result._).deep.equals(["on-time=30"]);
        });
    });

    describe("positional args", () => {
        it("collects positional args as rest", () => {
            const restSchema = schema(
                "Rest",
                new FieldModel({ name: "restArgs", type: "list", constraint: "max 100" }),
            );
            const result = parse(restSchema, "foo", "bar");
            expect(result._).deep.equals(["foo", "bar"]);
        });

        it("merges object as first positional", () => {
            const result = parse(stringSchema, { name: "hello" });
            expect(result.name).equals("hello");
        });

        it("flags override object positional", () => {
            const result = parse(stringSchema, { name: "from-obj" }, "--name", "from-flag");
            expect(result.name).equals("from-flag");
        });
    });
});
