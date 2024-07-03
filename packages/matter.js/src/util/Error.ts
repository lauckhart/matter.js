/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Ensure that a cause is an error object.
 */
export function asError(cause: unknown): Error {
    if (cause === undefined || cause === null) {
        return Error("Unknown error");
    }

    const { message } = cause as Error;
    if (message !== undefined) {
        return cause as Error;
    }

    return new Error(cause.toString());
}
