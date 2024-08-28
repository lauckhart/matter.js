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

    export interface Named {
        name: string;
    }

    export interface Documented {
        // TODO - this would perhaps save some space converted to markdown
        docs?: Docs;
    }

    export interface Root extends Named, Documented {
        version: string;
        modules: Module[];
    }

    export interface Module extends Named, Documented {
        path: string;
        exports: Definition[];
    }

    export interface Definition extends Documented {
        /**
         * If this is true the definition is a type.  Otherwise it is a runtime value.
         */
        type?: boolean;

        /**
         * Reference to another export in module#name form.
         */
        ref?: string;

        /**
         * Extends and implements clauses for classes and interfaces in module#name form.
         */
        base?: Definition | Definition[];

        /**
         * Visible properties, variables and type definitions namespaced under this value.
         */
        props?: Properties;

        /**
         * Instance properties for classes.
         */
        iprops?: Properties;

        /**
         * Call signatures.
         */
        calls?: FunctionSignature | FunctionSignature[];

        /**
         * Serialized typescript for the type.
         */
        ts?: string;
    }

    export interface NamedDefinition extends Named, Definition {}

    export type Properties = NamedDefinition | NamedDefinition[];

    export interface FunctionSignature extends Documented {
        /**
         * If true may be invoked as a constructor.
         */
        new?: boolean;

        /**
         * If true may be invoked normally.  Only set if new is set.
         */
        call?: boolean;

        /**
         * Function arguments.
         */
        params?: NamedDefinition[];

        /**
         * Type parameters.
         */
        tparams?: NamedDefinition[];

        /**
         * Function return value.
         */
        returns?: Definition;
    }

    export function assignName(name: string, definition: Definition): NamedDefinition {
        return {
            name,
            ...definition,
        };
    }
}
