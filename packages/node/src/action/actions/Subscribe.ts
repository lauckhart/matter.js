/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubscribeRequest } from "#types";

export interface Subscribe extends SubscribeRequest {
    kind: "read";
}

// TODO - subscribe DSL extending read DSL
