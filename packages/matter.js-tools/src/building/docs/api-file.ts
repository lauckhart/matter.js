/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { dirname, resolve } from "path";
import { isStringLiteralLike, NamedDeclaration, Node, SourceFile, SyntaxKind } from "typescript";
import { Package } from "../../util/package.js";
import { ApiContext } from "./api-context.js";
import { ApiFileError } from "./api-file-error.js";
import { Api } from "./api.js";
import { NameDefinition } from "./name-definition.js";
import { NodeExports } from "./node-exports.js";

/**
 * Utility for interacting with the API of a source file.
 *
 * Allows for incremental extraction of only exports relevant to documentation.
 */
export class ApiFile {
    #cx: ApiContext;
    #node: SourceFile;

    #exports: NodeExports;
    #moduleName?: string;

    constructor(file: SourceFile, cx: ApiContext, moduleName?: string) {
        this.#cx = cx;
        this.#node = file;
        this.#moduleName = moduleName;
        this.#exports = NodeExports(file, this);
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

    get node() {
        return this.#node;
    }

    get isExternal() {
        const relative = this.#cx.pkg.relative(this.path);
        return relative.startsWith("../") || relative.startsWith("node_modules/");
    }

    get isExported() {
        return this.#moduleName !== undefined;
    }

    get api() {
        if (this.#moduleName === undefined) {
            this.abort("Cannot create API because module is not exported");
        }

        const names = {} as Record<string, Api.NameDefinition>;
        for (const { name, exports } of this.#exports.entries) {
            names[name] = NameDefinition(name, exports, this);
        }

        const api: Api.Module = {
            name: this.#moduleName,
            path: Package.workspace.relative(this.path),
            names,
        };

        return api;
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
        if (isStringLiteralLike(what)) {
            return what.text;
        }

        return what.getText(this.#node);
    }

    resolve(path: string) {
        return resolve(dirname(this.#node.fileName), path);
    }

    warn(message: string) {
        this.#cx.warn(message, this.#node);
    }

    abort(why: string): never {
        throw new ApiFileError(why, this);
    }
}
