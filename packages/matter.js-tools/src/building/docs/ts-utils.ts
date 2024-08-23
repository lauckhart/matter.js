/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Declaration,
    getCombinedModifierFlags,
    isDeclarationStatement,
    ModifierFlags,
    Node,
    SourceFile,
} from "typescript";

export function isNodeExported(node: Node) {
    return !!(getCombinedModifierFlags(node as Declaration) & ModifierFlags.Export);
}

export function nameOfNode(node: Node, file: SourceFile) {
    if (!isDeclarationStatement(node)) {
        throw new Error(`Cannot access name for node that is not a declaration statement in ${file.fileName}`);
    }

    const name = node.name;
    if (name === undefined) {
        throw new Error(`Declaration statement has no name in ${file.fileName}`);
    }

    return name.getText(file);
}
