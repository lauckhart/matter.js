/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { wrapWords } from "#tools";
import colors from "ansi-colors";

export interface FailureDetail {
    message: string;
    stack?: string;
    diff?: string;
    logs?: string;
    cause?: FailureDetail;
    errors?: FailureDetail[];
}

export function FailureDetail(error: any, logs?: string[]) {
    let diff: string | undefined;

    const { message, stack, cause, errors } = parseError(error);

    if (error.expected && error.actual) {
        if (FailureDetail.diff === undefined) {
            diff = "(no diff implementation installed)";
        } else {
            diff = FailureDetail.diff(error.actual.toString(), error.expected.toString());
            diff = diff.trim().replace(/^ {6}/gms, "");
        }
    }

    const result = { message } as FailureDetail;
    if (diff) {
        result.diff = diff;
    }
    if (stack) {
        result.stack = stack;
    }
    if (logs?.length) {
        result.logs = logs.join("\n");
    }
    if (cause) {
        result.cause = cause;
    }
    if (errors) {
        result.errors = errors;
    }

    return result;
}

function parseError(error: Error) {
    let message, stack, cause: FailureDetail | undefined, errors: FailureDetail[] | undefined;

    if (error === undefined || error === null) {
        message = `(error is ${error})`;
    } else {
        message = error.message;
    }

    if (error.stack) {
        let lines = error.stack.trim().split("\n");
        if (!message) {
            message = lines[0];
        }
        lines = lines.filter(line => line.match(/:\d+:\d+\)?/));
        if (lines.length) {
            stack = lines.map(line => line.trim()).join("\n");
        }
    } else if (error.message) {
        message = error.message;
    } else {
        message = error.toString();
    }

    message = message.trim().replace(/Error: /, "");

    if (message.endsWith(":")) {
        message = message.slice(0, message.length - 1);
    }

    const errorCause = error.cause;
    if (errorCause) {
        cause = FailureDetail(errorCause);
    }

    const errorErrors = (error as AggregateError).errors;
    if (Array.isArray(errorErrors)) {
        errors = errorErrors.map(e => FailureDetail(e));
    }

    return { message, stack, cause, errors };
}

const OUTER_PREFIX = colors.red("▌ ");
const INNER_PREFIX = "┆ ";

// const OUTER_PREFIXES = {
//     frst: colors.red("┣"),
//     join: colors.red("┣"),
//     cont: colors.red("┃"),
//     last: colors.red("┗"),
// };

// const INNER_PREFIXES = {
//     frst: "┌",
//     join: "├",
//     cont: "│",
//     last: "└",
// };

export namespace FailureDetail {
    export function format(failure: FailureDetail, title: string, wrapTo?: number) {
        title = wrapWords(title, { width: wrapTo ? wrapTo - 4 : undefined, splitStyling: true }).replace("\n", "\n  ");
        const parts = [`\n\u001b[0;30;41m\u001b[K\n\u001b[K${OUTER_PREFIX}${title}\n\u001b[K\u001b[0m\n`];

        parts.push(`${OUTER_PREFIX.replace(/\s/g, "")}\n`);

        parts.push(formatDetails(failure, OUTER_PREFIX, wrapTo));

        return parts.join("");
    }

    export let diff: undefined | ((actual: string, expected: string) => string);
}

function formatDetails(failure: FailureDetail, prefix: string, wrapTo?: number) {
    const details = [colors.redBright(failure.message)];

    if (failure.diff) {
        details.push(`    ${failure.diff.replace(/\n/gm, "\n    ")}`);
    }

    if (failure.stack) {
        details.push(colors.dim(failure.stack));
    }

    if (failure.cause) {
        details.push(`Caused by:\n\n${formatDetails(failure.cause, INNER_PREFIX, wrapTo)}`);
    }

    if (failure.errors?.length) {
        let num = 0;
        for (const cause of failure.errors) {
            details.push(`Cause #${++num}:\n\n${formatDetails(cause, INNER_PREFIX, wrapTo)}`);
        }
    }

    if (failure.logs) {
        details.push(failure.logs);
    }

    const result = Array<string>();

    for (let i = 0; i < details.length; i++) {
        result.push(
            details[i]
                .split("\n")
                .map(line => {
                    return wrapWords(line, {
                        width: wrapTo,
                        initialPrefix: prefix,
                        wrapPrefix: `${prefix}  `,
                        preserveIndent: true,
                        splitStyling: true,
                    });
                })
                .join("\n"),
        );

        if (i !== details.length - 1) {
            result.push(prefix.replace(/\s/g, ""));
        }
    }

    result.push("");

    return result.join("\n");
}
