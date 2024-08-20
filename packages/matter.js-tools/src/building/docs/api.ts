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

    export type Kind = "root" | "module" | "class" | "type" | "function" | "namespace" | "variable";

    export interface Item<T extends Kind = Kind> {
        kind: T;
        name: string;
        items?: Item[];

        // TODO - this would perhaps save some space converted to markdown
        docs?: Docs;
    }

    export interface Parent<T extends Kind = Kind> extends Item<T> {
        items: Item[];
    }

    export interface Root extends Parent<"root"> {
        version: string;
    }

    export interface Module extends Parent<"module"> {}

    export interface Class extends Parent<"class"> {}

    export interface Type extends Parent<"type"> {}

    export interface Function extends Item<"function"> {
        items?: Variable[];
    }

    export interface Namespace extends Parent<"namespace"> {}

    export interface Variable extends Item<"variable"> {
        type: string;
    }
}
