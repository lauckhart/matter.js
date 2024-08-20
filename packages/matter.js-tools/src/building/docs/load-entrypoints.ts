/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApiContext } from "./api-context.js";
import { Api } from "./api.js";
import { translateSymbol } from "./translate-symbol.js";

/**
 * Loads entrypoints and initializes an ApiContext.
 */
export function loadEntrypoints(cx: ApiContext) {
    const modules = cx.pkg.sourceModules;
    if (modules === undefined) {
        throw new Error(`Discovered no source files for ${cx}`);
    }

    for (const [name, filename] of Object.entries(modules)) {
        if (filename.endsWith(".json")) {
            continue;
        }

        extractEntrypoint(name, filename);
    }

    function extractEntrypoint(moduleName: string, filename: string) {
        const source = cx.program.getSourceFile(filename);
        if (source === undefined) {
            throw new Error(`Entrypoint ${filename} is not in program`);
        }

        const symbol = cx.checker.getSymbolAtLocation(source);
        if (!symbol) {
            throw new Error(`No symbol for entrypoint ${moduleName}`);
        }

        const module: Api.Module = {
            kind: "module",
            name: moduleName,
            items: [],
        };

        cx.api.items.push(module);
        cx.symbols.set(module, symbol);

        const exports = cx.checker.getExportsOfModule(symbol);

        for (const exp of exports) {
            module.items.push(translateSymbol(cx, exp));
        }

        if (!Object.keys(module.items).length) {
            cx.progress.warn(`No exports for module ${module.name}`);
        }
    }

    /**
     * Extract any description of the module contained within an entrypoint.  Unused currently because unclear if it's
     * possible to parse a floating JSDoc using typescript API.
     */
    // function extractModuleDescription(source: SourceFile) {
    //     for (const comment of getLeadingCommentRanges(source.text, source.getFullStart()) || []) {
    //         // This comment will just be floating around as "trivia" since it's not attached to anything
    //         if (comment.kind !== SyntaxKind.MultiLineCommentTrivia) {
    //             continue;
    //         }

    //         return undefined;
    //     }
    // }
}
