/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { symbolName, Symbol as TSSymbol } from "typescript";
import { ApiContext } from "./api-context.js";
import { Api } from "./api.js";

export function translateSymbol(cx: ApiContext, symbol: TSSymbol): Api.Item {
    // TODO

    return {
        kind: "variable",
        name: symbolName(symbol),
        docs: symbol.getDocumentationComment(cx.checker),
    };
}
