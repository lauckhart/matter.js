/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { LogFormat, MatterError } from "@matter/general";
import { any, AnyElement, description, ElementTag, field, Model, ModelDiff, Specification, uint8 } from "@matter/model";

class DiffSpecPositional {
    @description("the baseline model")
    @field(any)
    from?: unknown;

    @description("the target model")
    @field(any)
    to?: unknown;
}

class DiffSpecArgs {
    @description("maximum depth for details")
    @field(uint8)
    d = 2;

    @field(DiffSpecPositional)
    positionalArgs?: DiffSpecPositional;
}

new CliCommand({
    name: "diff-spec",
    usage: "[FROM] [TO]",
    description: "Show differences between Matter versions.",
    input: DiffSpecArgs,

    invoke: async function diffSpec(_context, { d: depth, from, to }: { d?: number; from?: unknown; to?: unknown }) {
        if (to === undefined) {
            to = Specification.REVISION;
        }
        const toModel = await loadModel(to);

        if (from === undefined) {
            let toRevision: string;
            if ("revision" in toModel && typeof toModel.revision === "string") {
                toRevision = toModel.revision;
            } else {
                toRevision = Specification.REVISION;
            }
            from = (Number.parseFloat(toRevision) - 0.1).toFixed(1);
        }
        const fromModel = await loadModel(from);

        const diff = ModelDiff(fromModel, toModel, depth);
        this.out(LogFormat.formats.ansi(ModelDiff.diagnosticOf(diff)));
    },
});

async function loadModel(source: unknown): Promise<Model> {
    if (typeof source !== "string") {
        const model = asModel(source);
        if (model === undefined) {
            throw new MatterError(`Input models must be Model, AnyElement, or a string import specifier`);
        }
        return model;
    }

    let importName;
    if (source.match(/^\d+\.\d+$/)) {
        importName = `@matter/intermediate-models/v${source}/spec`;
    } else {
        importName = source;
    }
    try {
        const module = await import(importName);

        for (const value of Object.values(module)) {
            const model = asModel(value);
            if (model) {
                return model;
            }
        }

        throw new MatterError(`Could not find an exported model in "${importName}"`);
    } catch (cause) {
        throw new MatterError(`Could not import "${importName}"`, { cause });
    }
}

function asModel(value: unknown) {
    if (value instanceof Model) {
        return value;
    }

    if (
        typeof value === "object" &&
        value !== null &&
        "tag" in value &&
        Object.values(ElementTag).includes(value.tag as ElementTag)
    ) {
        return Model.create(value as AnyElement);
    }
}
