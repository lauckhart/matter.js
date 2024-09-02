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

    export interface Documented {
        // TODO - this would perhaps save some space converted to markdown
        docs?: Docs;
    }

    /**
     * Root of the API object model.
     */
    export interface Root extends Documented {
        name: string;
        version: string;
        modules: Record<string, Module>;
    }

    /**
     * A file available via "import" or "require".
     */
    export interface Module {
        /**
         * The name of the module.
         */
        name: string;

        /**
         * Path to module relative to the workspace root.
         */
        path: string;

        /**
         * Names exported by the module.
         */
        names?: Record<string, string | NameDefinition>;
    }

    /**
     * The definition of a name within a module or a parent name.
     */
    export interface NameDefinition {
        /**
         * References to external names exported for this name.
         */
        ref?: Reference | Reference[];

        /**
         * If a value is defined, the type of the value.
         */
        value?: Type;

        /**
         * If a type is defined, the type definition.
         */
        type?: TypeDefinition;

        /**
         * Exported sub-names.
         */
        props?: Record<string, string | NameDefinition>;
    }

    export type Type = Reference | TypeDefinition;

    /**
     * The definition of a type.
     */
    export interface TypeDefinition {
        /**
         * Extends and implements clauses for classes and interfaces in module#name form.
         */
        base?: Type | Type[];

        /**
         * Sub-properties of the object.
         */
        props?: Record<string, Type>;

        /**
         * Function signatures if callable.
         */
        calls?: FunctionSignature;
    }

    /**
     * Reference to an api in the form <module>#<export>.
     */
    export type Reference = `${string}#${string}`;

    export interface FunctionSignature extends Documented {
        /**
         * True if callable with "new".
         */
        new?: boolean;

        /**
         * True if callable without "new".  Only present if "new" is true.
         */
        call?: boolean;

        /**
         * Function arguments.
         */
        params?: Record<string, Type>;

        /**
         * Type parameters.
         */
        tparams?: Record<string, Type>;

        /**
         * Function return value.
         */
        returns?: Type;
    }
}
