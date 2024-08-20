/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Symbol as TsSymbol, TypeChecker } from "typescript";
import { Package } from "../../util/package.js";
import { Progress } from "../../util/progress.js";
import { Api } from "./api.js";

/**
 * Key stuff we need during doc generation.
 */
export interface ApiContext {
    pkg: Package;
    program: Program;
    checker: TypeChecker;
    progress: Progress;
    symbols: Map<Api.Item, TsSymbol>;
    api: Api.Root;

    toString(): string;
}

export function ApiContext(pkg: Package, program: Program, progress: Progress): ApiContext {
    return {
        pkg,
        program,
        checker: program.getTypeChecker(),
        progress,
        symbols: new Map(),
        api: {
            kind: "root",
            name: pkg.name,
            version: pkg.version,
            items: [],
        },
        toString() {
            return `pkg.name`;
        },
    };
}
