/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExportDeclaration, Node, SourceFile, SyntaxKind } from "typescript";
import { ApiContext } from "./api-context.js";
import { Api } from "./api.js";
import { isNodeExported, nameOfNode } from "./ts-utils.js";

export interface NamedNodes {
    [name: string]: Node[];
}

export interface FileReference {
    source: ApiFile;
    name: string;
}

export interface NamedReferences {
    [name: string]: FileReference;
}

export class ApiFileError extends Error {
    constructor(message: string, file?: string | ApiFile) {
        if (file) {
            if (file instanceof ApiFile) {
                file = file.path;
            }
            message = `${message} (${file})`;
        }
        super(message);
    }
}

/**
 * Utility for interacting the the API of a source file.
 *
 * Allows for incremental extraction of only exports relevant to documentation.
 */
export class ApiFile {
    #cx: ApiContext;
    #file: SourceFile;
    #exportedReferences: NamedReferences;
    #exportedDeclarations: NamedNodes;
    #exportNames: Set<string>;
    #exportItems = {} as Record<string, Api.Item>;
    #api?: Api.Module;

    constructor(file: Node, cx: ApiContext) {
        if (file.kind !== SyntaxKind.SourceFile) {
            throw new ApiFileError(`Cannot create API file for node kind ${SyntaxKind[file.kind]}`);
        }
        this.#cx = cx;
        this.#file = file as SourceFile;
        const { references, declarations } = this.#loadExportedNodes();
        this.#exportedReferences = references;
        this.#exportedDeclarations = declarations;
        this.#exportNames = new Set({ ...Object.keys(references), ...Object.keys(declarations) });
    }

    get path() {
        return this.#file.fileName;
    }

    get exportNames() {
        return this.#exportNames;
    }

    get api() {
        if (this.#api === undefined) {
            this.#api = this.#loadApi();
        }
        return this.#api;
    }

    exportForName(name: string) {
        if (name in this.#exportItems) {
            return this.#exportItems[name];
        }
    }

    static for(path: string, cx: ApiContext) {
        path = cx.pkg.resolve(path);
        if (path in cx.files) {
            return cx.files[path];
        }

        const file = cx.program.getSourceFile(path);
        if (file === undefined) {
            throw new ApiFileError("No source file in program", path);
        }

        return (cx.files[path] = new ApiFile(file, cx));
    }

    static forNode(node: Node, cx: ApiContext) {
        if (node.kind !== SyntaxKind.SourceFile) {
            throw `Cannot load API file for node kind ${SyntaxKind[node.kind]}`;
        }

        return ApiFile.for((node as SourceFile).fileName, cx);
    }

    get isExternal() {
        const relative = this.#cx.pkg.relative(this.path);
        return relative.startsWith("../") || relative.startsWith("node_modules/");
    }

    get isExported() {
        return this.path in this.#cx.fileToModule;
    }

    #loadApi() {
        const path = this.path;

        const module: Api.Module = {
            kind: "module",
            name: this.#cx.fileToModule[path] ?? "(internal)",
            items: [],
            path,
        };

        for (const name in this.#exportedReferences) {
            const ref = this.#exportedReferences[name];
            // TODO
        }

        for (const name in this.#exportedDeclarations) {
            const decl = this.#exportedDeclarations[name];
            // TODO
        }

        return module;
    }

    /**
     * Load declarations exported directly from this file.
     */
    #loadExportedNodes() {
        const references = {} as NamedReferences;
        const declarations = {} as NamedNodes;

        this.#file.forEachChild(node => {
            if (node.kind === SyntaxKind.ExportDeclaration) {
                this.#loadExportReferences(node as ExportDeclaration, references);
            } else if (isNodeExported(node)) {
                const name = nameOfNode(node, this.#file);
                (declarations[name] ??= []).push(node);
            }
        });

        return { references, declarations };
    }

    /**
     * Load named references from an export statement.
     */
    #loadExportReferences(node: ExportDeclaration, into: NamedReferences) {
        const moduleSpecifier = node.moduleSpecifier;
        if (moduleSpecifier === undefined) {
            // Should have been caught as bad grammar
            throw new ApiFileError("Export declaration missing module specifier", this);
        }

        const sourceSymbol = this.#cx.checker.getSymbolAtLocation(moduleSpecifier);
        if (sourceSymbol === undefined) {
            throw new ApiFileError(`No symbol for module specifier ${moduleSpecifier.getText(this.#file)}`, this);
        }

        if (sourceSymbol.valueDeclaration === undefined) {
            throw new ApiFileError(
                `No value declaration for module specifier ${moduleSpecifier.getText(this.#file)}`,
                this,
            );
        }

        const source = ApiFile.forNode(sourceSymbol.valueDeclaration, this.#cx);

        const clause = node.exportClause;
        if (!clause) {
            for (const name of source.exportNames) {
                if (name in into) {
                    throw new ApiFileError(`Unsupported merged exports ${name}`, this);
                }
                into[name] = { source, name };
            }
        } else if (clause.kind === SyntaxKind.NamespaceExport) {
            throw new ApiFileError(`Namespace export unsupported`, this);
        } else {
            const available = source.exportNames;
            for (const element of clause.elements) {
                const name = element.name.getText(this.#file);
                if (!available.has(name)) {
                    throw new ApiFileError(`Cannot locate export ${name} from ${source.path}`, this);
                }
                into[name] = { source, name };
            }
        }
    }
}
