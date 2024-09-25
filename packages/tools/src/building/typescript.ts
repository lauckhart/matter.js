/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { join } from "path";
import ts, {
    createCompilerHost,
    createSolutionBuilder,
    createSolutionBuilderHost,
    Diagnostic,
    EmitAndSemanticDiagnosticsBuilderProgram,
    ExitStatus,
    SolutionBuilder,
} from "typescript";
import { Package } from "../util/package.js";
import { BuildError, InternalBuildError } from "./error.js";

/**
 * Implements Typescript validation and declaration emit using tsc API.
 */
export class Typescript {
    private constructor(
        private pkg: Package,
        private context: TypescriptContext,
        private path: string,
    ) {}

    static emitDeclarations(pkg: Package, context: TypescriptContext, path: string) {
        new Typescript(pkg, context, path).#run();
    }

    static validateTypes(pkg: Package, context: TypescriptContext, path: string) {
        new Typescript(pkg, context, path).#run();
    }

    #run() {
        const status = this.context.builder.build(this.pkg.resolve(join(this.path, "tsconfig.json"))) ?? 0;
        this.context.passTscErrors(status, path);
    }
}

export class TypescriptContext {
    #diagnostics = Array<Diagnostic>();
    builder: SolutionBuilder<EmitAndSemanticDiagnosticsBuilderProgram>;

    constructor(workspace: Package, refreshCallback?: () => void) {
        const host = createSolutionBuilderHost();
        host.reportDiagnostic = diagnostic => this.#diagnostics.push(diagnostic);

        this.builder = createSolutionBuilder(host, [workspace.resolve("tsconfig.json")], {});

        this.passTscErrors(0);

        // The refresh callback allows us to make spinner updates even though TS is synchronous.
        //
        // TODO - add interception points as spinner still hangs
        if (refreshCallback) {
            const { readFile, writeFile } = host;

            host.readFile = (...args: any) => {
                const result = readFile.apply(host, args);
                refreshCallback?.();
                return result;
            };

            host.writeFile = (...args: any) => {
                const result = writeFile?.apply(host, args);
                refreshCallback?.();
                return result;
            };
        }
    }

    passTscErrors(status: ExitStatus, path?: string) {
        if (!this.#diagnostics.length) {
            switch (status) {
                case ExitStatus.Success:
                    return;

                case ExitStatus.InvalidProject_OutputsSkipped:
                    throw new InternalBuildError(
                        `Typescript does not think ${path} is part of the project, this is probably a build tooling error`,
                    );

                case ExitStatus.ProjectReferenceCycle_OutputsSkipped:
                    throw new InternalBuildError(
                        `Typescript identified a cyclical project reference in ${path}, please check package dependencies`,
                    );

                default:
                    throw new InternalBuildError(`Build error ${ExitStatus[status]} without diagnostics`);
            }
        }

        const host = createCompilerHost({});

        let formatted = ts.formatDiagnosticsWithColorAndContext(this.#diagnostics, host);

        // Strangely there are not newlines between errors in this output like there is when you run tsc from the
        // command line.  Use the "light blue" ANSI escape code as an injection point for an additional newline
        //
        // eslint-disable-next-line no-control-regex
        formatted = formatted.replace(/\u001b\[96m/gms, "\n\u001b[96m");

        this.#diagnostics = [];

        throw new BuildError(formatted);
    }
}
