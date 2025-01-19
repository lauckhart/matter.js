/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ansi, Printer, screen } from "#tools";

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

const OUTER_PREFIX = `${ansi.red}▌ ${ansi.not.red}`;
const INNER_PREFIX = "┆ ";

export namespace FailureDetail {
    export function dump(out: Printer, failure: FailureDetail, title: string) {
        out.state({ style: ansi.reset.white.bg.red }, () => {
            out(screen.erase.toEol, "\n ", title, screen.erase.toEol, "\n", screen.erase.toEol, "\n");
        });

        out(screen.erase.toEol);

        out.state({ linePrefix: OUTER_PREFIX }, () => {
            dumpDetails(out, failure);
        });
    }

    export let diff: undefined | ((actual: string, expected: string) => string);
}

function dumpCause(out: Printer, failure: FailureDetail) {
    out.state({ linePrefix: INNER_PREFIX }, () => {
        dumpDetails(out, failure);
    });
}

function dumpDetails(out: Printer, { message, diff, stack, cause, errors, logs }: FailureDetail) {
    out("\n", ansi.bright.red(message), "\n");

    if (diff) {
        out("\n    ", diff, "\n");
    }

    if (stack) {
        out("\n  ", ansi.dim(stack), "\n");
    }

    if (cause) {
        out("\nCaused by:\n\n");
        dumpCause(out, cause);
    }

    if (errors?.length) {
        let num = 0;
        for (const cause of errors) {
            out(`\nCause #${++num}:\n\n`);
            dumpCause(out, cause);
        }
    }

    if (logs) {
        out("\n", logs, "\n");
    }
}
