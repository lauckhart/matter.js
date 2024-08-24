/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Node, Program, SourceFile, SyntaxKind, Node as TsNode, TypeChecker } from "typescript";
import { Package } from "../../util/package.js";
import { Progress } from "../../util/progress.js";
import { ApiFileError } from "./api-file-error.js";
import { type ApiFile } from "./api-file.js";

/**
 * Key stuff we need during doc generation.
 */
export interface ApiContext {
    pkg: Package;
    program: Program;
    checker: TypeChecker;
    exports: Iterable<ApiFile>;

    fileFor(source: string | Node): ApiFile;

    warn(message: string, location?: string | TsNode): void;

    toString(): string;
}

const x = {} as Generator<ApiFile>;
x satisfies Iterable<ApiFile>;

export function ApiContext(
    pkg: Package,
    program: Program,
    progress: Progress,
    fileFactory: (file: SourceFile, cx: ApiContext, moduleName?: string) => ApiFile,
): ApiContext {
    const moduleToFile = pkg.sourceModules;
    const fileToModule = Object.fromEntries(Object.entries(moduleToFile).map(([k, v]) => [v, k]));
    const files = {} as Record<string, ApiFile>;

    const cx: ApiContext = {
        pkg,
        program,
        checker: program.getTypeChecker(),

        get exports() {
            function* loadExports() {
                for (const name in moduleToFile) {
                    if (name.endsWith(".json")) {
                        continue;
                    }

                    yield cx.fileFor(moduleToFile[name]);
                }
            }
            return loadExports();
        },

        fileFor(source: string | Node, referencedAs?: string) {
            if (typeof source !== "string") {
                if (source.kind !== SyntaxKind.SourceFile) {
                    source = source.getSourceFile();
                }
                source = (source as SourceFile).fileName;
            }

            source = cx.pkg.resolve(source);
            if (source in files) {
                return files[source];
            }

            const file = cx.program.getSourceFile(source);
            if (file === undefined) {
                throw new ApiFileError("No source file in program", source);
            }

            let moduleName: string | undefined = fileToModule[source];
            if (moduleName === undefined && !file.fileName.startsWith(`${pkg.path}/`)) {
                moduleName = referencedAs;
            }

            return (files[source] = fileFactory(file, cx, moduleName));
        },

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

    return cx;
}
