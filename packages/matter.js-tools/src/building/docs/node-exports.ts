/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Declaration,
    ExportDeclaration,
    getCombinedModifierFlags,
    isVariableStatement,
    ModifierFlags,
    Node,
    SyntaxKind,
} from "typescript";
import type { ApiFile } from "./api-file.js";

export interface NodeExports {
    file: ApiFile;
    references: NamedReferences;
    declarations: NamedNodes;
}

export interface NamedNodes {
    [name: string]: Node[];
}

export interface FileReference {
    source: ApiFile;
    moduleName: string;
    name: string;
}

export interface NamedReferences {
    [name: string]: FileReference;
}

export function NodeExports(node: Node, file: ApiFile): NodeExports {
    /**
     * Load declarations exported directly from this file.
     */
    const references = {} as NamedReferences;
    const declarations = {} as NamedNodes;

    node.forEachChild(node => {
        if (node.kind === SyntaxKind.ExportDeclaration) {
            loadExportReferences(node as ExportDeclaration, references);
        } else if (isNodeExported(node)) {
            if (isVariableStatement(node)) {
                for (const decl of node.declarationList.declarations) {
                    const name = file.nameOf(decl);
                    (declarations[name] ??= []).push(decl);
                }
            } else {
                const name = file.nameOf(node);
                (declarations[name] ??= []).push(node);
            }
        }
    });

    return { file, references, declarations };

    /**
     * Load named references from an export statement.
     */
    function loadExportReferences(node: ExportDeclaration, into: NamedReferences) {
        const moduleSpecifier = node.moduleSpecifier;
        if (moduleSpecifier === undefined) {
            // Should have been caught as bad grammar
            file.abort("Export declaration missing module specifier");
        }

        const sourceSymbol = file.cx.checker.getSymbolAtLocation(moduleSpecifier);
        if (sourceSymbol === undefined) {
            file.abort(`No symbol for module specifier ${file.textOf(moduleSpecifier)}`);
        }

        if (sourceSymbol.valueDeclaration === undefined) {
            file.abort(`No value declaration for module specifier ${file.textOf(moduleSpecifier)}`);
        }

        const module = file.cx.fileFor(sourceSymbol.valueDeclaration);

        const moduleName = file.textOf(moduleSpecifier);

        const clause = node.exportClause;
        if (!clause) {
            for (const name of module.exportNames) {
                if (name in into) {
                    file.abort(`Unsupported merged exports ${name}`);
                }
                into[name] = { source: module, moduleName, name };
            }
        } else if (clause.kind === SyntaxKind.NamespaceExport) {
            file.abort(`Namespace export unsupported`);
        } else {
            const available = module.exportNames;
            for (const element of clause.elements) {
                const name = file.textOf(element.name);
                if (!available.has(name)) {
                    file.abort(`Cannot locate export ${name} from ${module.path}`);
                }
                into[name] = { source: module, moduleName, name };
            }
        }
    }
}

function isNodeExported(node: Node) {
    return (
        !!(getCombinedModifierFlags(node as Declaration) & ModifierFlags.Export) &&
        node.parent?.kind === SyntaxKind.SourceFile
    );
}
