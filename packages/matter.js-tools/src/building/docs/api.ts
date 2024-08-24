/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SymbolDisplayPart } from "typescript";

export namespace Api {
    export const Extends = "@";
    export const Returns = "!";

    export type Docs = SymbolDisplayPart[];

    export type Kind =
        | "root"
        | "module"
        | "class"
        | "factory"
        | "type"
        | "function"
        | "namespace"
        | "variable"
        | "export";

    export type Item = Root | Module | Class | Factory | Type | Api.Function | Namespace | Variable | Reexport;

    export interface Base<T extends Kind = Kind> {
        kind: T;
        name?: string;
        items?: Item[];

        // TODO - this would perhaps save some space converted to markdown
        docs?: Docs;
    }

    export interface Parent<T extends Kind = Kind> extends Base<T> {
        items: Item[];
    }

    export interface Root extends Parent<"root"> {
        version: string;
    }

    export interface Module extends Parent<"module"> {
        path: string;
    }

    export interface Class extends Parent<"class"> {}

    export interface Factory extends Parent<"factory"> {}

    export interface Type extends Parent<"type"> {}

    export interface Function extends Base<"function"> {
        items?: (Api.Function | Variable)[];
    }

    export interface Namespace extends Parent<"namespace"> {}

    export interface Variable extends Base<"variable"> {
        type: string;
    }

    export interface Reexport extends Base<"export"> {
        fromModule: string;
        fromName?: string;
    }
}
