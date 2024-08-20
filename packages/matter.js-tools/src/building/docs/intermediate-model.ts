/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommentDisplayPart } from "typedoc";
import { Symbol as S, symbolName } from "typescript";

/**
 * The temporary model we create by reading the typescript AST then convert to api-extractor-model.
 */
export class IntermediateModel {
    #modules = {} as Record<string, IntermediateModel.Module>;
    #exports = {} as Record<string, IntermediateModel.Export>;

    addModule(name: string, docs?: CommentDisplayPart[]) {
        if (this.#modules[name]) {
            throw new Error(`Duplicate module ${name}`);
        }
        const module: IntermediateModel.Module = { name, docs, exports: {} };
        this.#modules[name] = module;
        return module;
    }

    addExport(moduleName: string, symbol: S) {
        const module = this.#modules[moduleName];
        if (module === undefined) {
            throw new Error(`Export from unknown module ${moduleName}`);
        }

        const name = symbolName(symbol);

        const id = `${moduleName}#${name}`;

        if (id in this.#exports) {
            throw new Error(`Duplicate export ${id}`);
        }

        module.exports[name] = this.#exports[id] = {
            module,
            name,
            symbol,
        };
    }

    get modules() {
        return Object.values(this.#modules);
    }
}

export namespace IntermediateModel {
    export interface Module {
        name: string;
        exports: Record<string, IntermediateModel.Export>;
        docs?: CommentDisplayPart[];
    }

    export interface Export {
        module: Module;
        name: string;
        symbol: S;
    }
}
