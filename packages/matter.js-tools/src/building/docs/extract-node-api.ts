/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Node, SourceFile, SyntaxKind } from "typescript";
import { ApiFileError } from "./api-file-error.js";
import { ApiFile } from "./api-file.js";
import { Api } from "./api.js";
import { extractNodeType } from "./extract-node-type.js";
import { NamedNodes, NodeExports } from "./node-exports.js";

type Generator = (node: Node, file: ApiFile) => undefined | Api.Item;

/**
 * Translations from TS AST to Api.Item.
 */
const translators: Partial<Record<SyntaxKind, Generator>> = {
    [SyntaxKind.SourceFile]: (node, file) => {
        if (node !== file.node) {
            throw new ApiFileError(`Source file node ${(node as SourceFile).fileName} does not match file node`, file);
        }

        const api: Api.Module = {
            kind: "module",
            name: file.moduleName ?? "<internal>",
            path: (node as SourceFile).fileName,
            items: [],
        };

        // Add re-exports
        for (const [name, ref] of Object.entries(file.exports.references)) {
            // If there is a module name then we just document as a re-export
            if (ref.moduleName !== undefined) {
                api.items.push({
                    kind: "export",
                    name,
                    fromModule: ref.moduleName,
                });
                continue;
            }

            // Not available elsewhere; treat like a local definition but rename to the name used for export
            const exportApi = extractNodeApi(node, ref.source);
            if (!exportApi) {
                file.cx.warn(`No API for export of ${name} from ${ref.source.path}`);
                continue;
            }

            exportApi.name = ref.name;
            api.items.push(exportApi);
        }

        // Add local definitions
        addLocalExports(file, file.exports.declarations, api.items);

        return api;
    },

    [SyntaxKind.ModuleDeclaration]: (node, file) => {
        const api: Api.Namespace = {
            kind: "namespace",
            name: file.nameOf(node),
            items: [],
        };

        addLocalExports(file, NodeExports(node, file).declarations, api.items);

        return api;
    },

    [SyntaxKind.VariableDeclaration]: (node, file) => ({
        kind: "variable",
        name: file.nameOf(node),
        type: extractNodeType(node, file),
    }),

    [SyntaxKind.FunctionDeclaration]: undefined,
    [SyntaxKind.ClassDeclaration]: undefined,
    [SyntaxKind.InterfaceDeclaration]: undefined,
    [SyntaxKind.EnumDeclaration]: undefined,
    [SyntaxKind.TypeAliasDeclaration]: undefined,
};

export function extractNodeApi(node: Node, file: ApiFile): undefined | Api.Item {
    const api = translators[node.kind]?.(node, file);

    if (!api) {
        file.cx.warn(`Cannot document TS node kind ${SyntaxKind[node.kind]}`, node);
    }

    return api;
}

function extractMergedApi(nodes: Node[], file: ApiFile): undefined | Api.Item {
    let result: undefined | Api.Item;
    let functionsAsChildren = false;

    // Remove the actual function in the case of function overloads
    if (nodes.filter(n => n.kind === SyntaxKind.FunctionDeclaration).length > 1) {
        nodes = nodes.filter(n => {
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

    for (const node of nodes) {
        const api = extractNodeApi(node, file);
        if (api === undefined) {
            continue;
        }

        if (result === undefined) {
            result = api;
            continue;
        }

        switch (api.kind) {
            case "function":
                if (functionsAsChildren) {
                    (result as Api.Function | Api.Factory).items?.push(api);
                    continue;
                } else if (result.kind === "function") {
                    // Function overloads
                    result = {
                        kind: "function",
                        items: [result, api],
                    };
                    functionsAsChildren = true;
                    continue;
                }
                break;

            case "factory":
                switch (result.kind) {
                    case "function":
                        result = addTo(result, api);
                        functionsAsChildren = true;
                        continue;

                    case "factory":
                        result = mergeInto(result, api);
                        continue;

                    case "type":
                        mergeInto(api, result);
                        continue;
                }
                break;

            case "namespace":
                switch (result.kind) {
                    case "class":
                    case "namespace":
                    case "factory":
                    case "type":
                    case "variable": // TODO - validate is an object(?)
                        result = mergeInto(api, result);
                        continue;

                    case "function":
                        result = {
                            kind: "factory",
                            items: [result],
                        };
                        mergeInto(api, result);
                        break;
                }
                break;

            case "type":
                switch (result.kind) {
                    case "namespace":
                        result = mergeInto(result, api);
                        continue;

                    case "function":
                        result = {
                            kind: "factory",
                            items: [result],
                        };
                        mergeInto(api, result);
                        continue;
                }
                break;

            default:
        }
        file.abort(`Unsupported declaration merge of ${result.kind} and ${api.kind}`);
    }

    return result;

    function mergeInto(fromItem: Api.Base, intoItem: Api.Base) {
        if (fromItem.items?.length) {
            if (intoItem.items) {
                intoItem.items.push(...fromItem.items);
            } else {
                intoItem.items = fromItem.items;
            }
        }

        return intoItem as Api.Item;
    }

    function addTo(item: Api.Item, intoItem: Api.Parent) {
        if (item.items === undefined) {
            item.items = [];
        }
        intoItem.items.push(item);
        return intoItem as Api.Item;
    }
}

function addLocalExports(file: ApiFile, exports: NamedNodes, items: Api.Item[]) {
    for (const name in exports) {
        const nodes = exports[name];

        const api = extractMergedApi(nodes, file);
        if (api === undefined) {
            file.cx.warn(`No API for export ${name}`, file.path);
            continue;
        }

        items.push(api);
    }
}
