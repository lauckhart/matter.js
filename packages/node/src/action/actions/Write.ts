/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WriteRequest } from "#types";

export interface Write {
    kind: "write";
    payload: WriteRequest;
}

// TODO - write DSL
