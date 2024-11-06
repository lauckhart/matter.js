/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CancelablePromise } from "#general";
import { WriteResponse } from "#types";

export type WriteResult = CancelablePromise<WriteResponse>;
