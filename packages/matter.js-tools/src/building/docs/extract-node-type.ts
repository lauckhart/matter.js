/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Node } from "typescript";
import { ApiFile } from "./api-file.js";
import { FileReference } from "./node-exports.js";

export type NodeType = string | FileReference;

export function extractNodeType(node: Node, file: ApiFile) {
    node;
    file;
    return "TODO";
}
