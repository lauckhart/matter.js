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
    names: Set<string>;
    has(key: string): boolean;
    get(key: string): NodeExport[];
    entries: Array<{ name: string; exports: NodeExport[] }>;
}

export type NodeExport = Node | string;

export function NodeExports(node: Node, file: ApiFile): NodeExports {
    const items = {} as Record<string, NodeExport[]>;

    node.forEachChild(child => {
        if (child.kind === SyntaxKind.ExportDeclaration) {
            if (node.kind !== SyntaxKind.SourceFile) {
                file.abort(
                    `Export statement encountered in ${SyntaxKind[node.kind]}} node (only allowed in SourceFile)`,
                );
            }
            loadExportReferences(child as ExportDeclaration);
        } else if (isNodeExported(child)) {
            if (isVariableStatement(child)) {
                for (const decl of child.declarationList.declarations) {
                    const name = file.nameOf(decl);
                    addItem(name, decl);
                }
            } else {
                const name = file.nameOf(child);
                addItem(name, child);
            }
        }
    });

    const names = new Set(Object.keys(items));

    return {
        file,

        names,

        has(name: string) {
            return name in items;
        },

        get(name: string) {
            if (name === undefined) {
                file.abort(`Unsupported export ${name}`);
            }

            return items[name];
        },

        get entries() {
            return Object.entries(items).map(([name, exports]) => ({ name, exports }));
        },
    };

    function addItem(name: string, ...newItems: NodeExport[]) {
        for (const item of newItems) {
            (items[name] ??= []).push(item);
        }
    }

    /**
     * Load named references from an export statement.
     */
    function loadExportReferences(node: ExportDeclaration) {
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

        const clause = node.exportClause;

        let addExport: (name: string, sourceName?: string) => void;

        const moduleName = file.resolve(file.textOf(moduleSpecifier));

        // If this is a reexport, just add a reference.  Otherwise for documentation purposes we own the item
        if (module.isExternal || module.isExported) {
            addExport = (name, sourceName) => {
                addItem(name, `${moduleName}#${sourceName ?? name}`);
            };
        } else {
            addExport = (name, sourceName) => {
                addItem(name, ...module.exports.get(sourceName ?? name));
            };
        }

        if (!clause) {
            for (const name of module.exports.names) {
                addExport(name);
            }
        } else if (clause.kind === SyntaxKind.NamespaceExport) {
            file.abort(`Namespace export unsupported`);
        } else {
            for (const element of clause.elements) {
                const sourceName = element.propertyName ? file.textOf(element.propertyName) : undefined;
                const name = file.textOf(element.name);
                if (!module.exports.has(sourceName || name)) {
                    file.abort(`Cannot locate export ${name} from ${module.path}`);
                }
                addExport(name, sourceName);
            }
        }
    }
}

function isNodeExported(node: Node) {
    return (
        !!(getCombinedModifierFlags(node as Declaration) & ModifierFlags.Export) && node.kind !== SyntaxKind.SourceFile
    );
}
