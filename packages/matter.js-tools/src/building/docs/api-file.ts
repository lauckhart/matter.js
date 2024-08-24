/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NamedDeclaration, Node, SourceFile, SyntaxKind } from "typescript";
import { ApiContext } from "./api-context.js";
import { ApiFileError } from "./api-file-error.js";
import { Api } from "./api.js";
import { NodeExports } from "./node-exports.js";

/**
 * Utility for interacting the the API of a source file.
 *
 * Allows for incremental extraction of only exports relevant to documentation.
 */
export class ApiFile {
    #cx: ApiContext;
    #node: SourceFile;

    #exports: NodeExports;
    #exportNames: Set<string>;
    #exportItems = {} as Record<string, Api.Item>;
    #moduleName?: string;

    constructor(file: SourceFile, cx: ApiContext, moduleName?: string) {
        this.#cx = cx;
        this.#node = file;
        this.#moduleName = moduleName;
        this.#exports = NodeExports(file, this);
        this.#exportNames = new Set([
            ...Object.keys(this.#exports.references),
            ...Object.keys(this.#exports.declarations),
        ]);
    }

    get cx() {
        return this.#cx;
    }

    get path() {
        return this.#node.fileName;
    }

    get moduleName() {
        return this.#moduleName;
    }

    get exports() {
        return this.#exports;
    }

    get exportNames() {
        return this.#exportNames;
    }

    get node() {
        return this.#node;
    }

    exportForName(name: string) {
        if (name in this.#exportItems) {
            return this.#exportItems[name];
        }
    }

    get isExternal() {
        const relative = this.#cx.pkg.relative(this.path);
        return relative.startsWith("../") || relative.startsWith("node_modules/");
    }

    get isExported() {
        return this.#moduleName !== undefined;
    }

    nameOf(node: Node) {
        const name = (node as NamedDeclaration).name;
        if (name === undefined) {
            this.abort(`Node of kind ${SyntaxKind[node.kind]} has no name`);
        }
        if (typeof name.kind !== "number") {
            this.abort(`Node of kind ${SyntaxKind[node.kind]} has name that is not a node`);
        }

        return this.textOf(name);
    }

    textOf(what: Node) {
        return what.getText(this.#node);
    }

    abort(why: string): never {
        throw new ApiFileError(why, this);
    }
}
