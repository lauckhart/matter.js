/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ApiFile } from "./api-file.js";

export class ApiFileError extends Error {
    constructor(message: string, file?: string | ApiFile) {
        if (file) {
            if (typeof file !== "string") {
                file = file.path;
            }
            message = `${message} (${file})`;
        }
        super(message);
    }
}
