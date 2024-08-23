/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Node, SyntaxKind } from "typescript";
import { ApiContext } from "./api-context.js";
import { Api } from "./api.js";

export function apiForNode(cx: ApiContext, node: Node): undefined | Api.Item {
    switch (node.kind) {
        case SyntaxKind.SourceFile:
            break;

        case SyntaxKind.VariableStatement:
            break;

        case SyntaxKind.FunctionDeclaration:
            break;

        case SyntaxKind.ClassDeclaration:
            break;

        case SyntaxKind.InterfaceDeclaration:
            break;

        case SyntaxKind.ModuleDeclaration:
            break;

        case SyntaxKind.EnumDeclaration:
            break;

        case SyntaxKind.TypeAliasDeclaration:
            break;
    }

    cx.warn(`Cannot document TS node kind ${SyntaxKind[node.kind]}`, node);
}
