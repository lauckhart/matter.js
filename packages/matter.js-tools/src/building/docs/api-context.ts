/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, SourceFile, SyntaxKind, Node as TsNode, TypeChecker } from "typescript";
import { Package } from "../../util/package.js";
import { Progress } from "../../util/progress.js";
import type { ApiFile } from "./api-file.js";

/**
 * Key stuff we need during doc generation.
 */
export interface ApiContext {
    pkg: Package;
    program: Program;
    checker: TypeChecker;
    files: Record<string, ApiFile>;
    moduleToFile: Record<string, string>;
    fileToModule: Record<string, string>;

    warn(message: string, location?: string | TsNode): void;

    toString(): string;
}

export function ApiContext(pkg: Package, program: Program, progress: Progress): ApiContext {
    const moduleToFile = pkg.sourceModules;
    const fileToModule = Object.fromEntries(Object.entries(moduleToFile).map(([k, v]) => [v, k]));

    return {
        pkg,
        program,
        checker: program.getTypeChecker(),
        files: {},
        moduleToFile,
        fileToModule,

        warn(message, location) {
            if (typeof location === "object") {
                if (location.kind === SyntaxKind.SourceFile) {
                    location = (location as SourceFile).fileName;
                } else {
                    const file = location.getSourceFile();
                    const { line, character } = file.getLineAndCharacterOfPosition(location.getStart(file, false));
                    location = `${file.fileName}:${line + 1}:${character + 1}`;
                }
            }
            if (location !== undefined) {
                message = `${message} (${location})`;
            }
            progress.warn(message);
        },

        toString() {
            return pkg.name;
        },
    };
}
