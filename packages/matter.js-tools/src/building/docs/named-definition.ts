/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ClassDeclaration,
    EnumDeclaration,
    FunctionDeclaration,
    InterfaceDeclaration,
    ModuleDeclaration,
    Node,
    SyntaxKind,
    TypeAliasDeclaration,
    VariableDeclaration,
} from "typescript";
import { ApiFile } from "./api-file.js";
import { Api } from "./api.js";
import { NodeExports } from "./node-exports.js";

export function NamedDefinition(name: string, values: (string | Node)[], file: ApiFile): Api.NamedDefinition {
    const result = {
        name,
    } as Api.NamedDefinition;

    // Remove the actual function in the case of function overloads
    if (values.filter(n => typeof n !== "string" && n.kind === SyntaxKind.FunctionDeclaration).length > 1) {
        values = values.filter(n => {
            if (typeof n === "string") {
                return true;
            }

            if (n.kind !== SyntaxKind.FunctionDeclaration) {
                return true;
            }

            let hasBlock;
            n.forEachChild(child => {
                if (child.kind === SyntaxKind.Block) {
                    hasBlock = true;
                }
            });

            return !hasBlock;
        });
    }

    for (const value of values) {
        if (typeof value === "string") {
            if (result?.ref) {
                file.abort(`Unsupported merge of reference ${value}`);
            }
            result.ref = value;
            continue;
        }

        switch (value.kind) {
            case SyntaxKind.ModuleDeclaration:
                defineModule(value as ModuleDeclaration);
                break;

            case SyntaxKind.FunctionDeclaration:
                defineFunction(value as FunctionDeclaration);
                break;

            case SyntaxKind.ClassDeclaration:
                defineClass(value as ClassDeclaration);
                break;

            case SyntaxKind.InterfaceDeclaration:
                defineInterface(value as InterfaceDeclaration);
                break;

            case SyntaxKind.EnumDeclaration:
                defineEnum(value as EnumDeclaration);
                break;

            case SyntaxKind.TypeAliasDeclaration:
                defineType(value as TypeAliasDeclaration);
                break;

            case SyntaxKind.VariableDeclaration:
                defineVariable(value as VariableDeclaration);
                break;

            default:
                file.warn(`Cannot create API definition of TS node kind ${SyntaxKind[value.kind]}`);
        }
    }

    return result;

    function define<T extends keyof Api.Definition, V extends Exclude<Api.Definition[T], undefined | Array<any>>>(
        name: T,
        value: V,
    ) {
        const current = result[name];
        if (current === undefined) {
            (result as any)[name] = value;
        } else if (Array.isArray(current)) {
            (current as Array<unknown>).push(value);
        } else {
            (result as any)[name] = [current, value];
        }
    }

    function defineModule(decl: ModuleDeclaration) {
        if (!decl.body) {
            file.warn(`No body for exported namespace ${name}`);
            return;
        }

        const exports = NodeExports(decl.body, file);

        for (const name of exports.names) {
            define("props", NamedDefinition(name, exports.get(name), file));
        }
    }

    function defineFunction(decl: FunctionDeclaration) {
        const { parameters, typeParameters } = decl;
        for (const param of parameters) {
            // TODO
        }

        if (typeParameters) {
            for (const param of typeParameters) {
                // TODO
            }
        }

        decl.parameters;
        decl; // TODO
    }

    function defineClass(decl: ClassDeclaration) {
        decl; // TODO
    }

    function defineInterface(decl: InterfaceDeclaration) {
        decl; // TODO
    }

    function defineEnum(decl: EnumDeclaration) {
        decl; // TODO
    }

    function defineType(decl: TypeAliasDeclaration) {
        decl; // TODO
    }

    function defineVariable(decl: VariableDeclaration) {
        decl; // TODO
    }
}
