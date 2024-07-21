/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lifecycle } from "../common/Lifecycle.js";
import { ImplementationError, InternalError } from "../common/MatterError.js";
import { ByteArray } from "../util/ByteArray.js";
import { serialize } from "../util/String.js";
import { Diagnostic } from "./Diagnostic.js";
import { Level } from "./Level.js";

const INDENT_SPACES = 2;

/**
 * Get a formatter for the specified format.
 */
export function Format(format: string) {
    if (format === undefined) {
        format = Format.ANSI;
    }

    switch (format) {
        case Format.PLAIN:
            return plainLogFormatter;

        case Format.ANSI:
            return ansiLogFormatter;

        case Format.HTML:
            return htmlLogFormatter;

        default:
            throw new ImplementationError(`Unsupported log format "${format}"`);
    }
}

/**
 * Log stylization support.
 */
export namespace Format {
    export type Type = typeof PLAIN | typeof ANSI | typeof HTML;

    /** Generate text only */
    export const PLAIN = "plain";

    /** Format log messages using ANSI escape codes */
    export const ANSI = "ansi";

    /** Format log messages using HTML tags */
    export const HTML = "html";

    export const plain = plainLogFormatter;
    export const ansi = ansiLogFormatter;
    export const html = htmlLogFormatter;
}

export type Producer = () => string;

interface Formatter {
    text(text: string): string;
    indent(producer: Producer): string;
    break(): string;
    key(text: string): string;
    value(producer: Producer): string;
    strong(producer: Producer): string;
    weak(producer: Producer): string;
    error(producer: Producer): string;
    status(status: Lifecycle.Status, producer: Producer): string;
    via(text: string): string;
}

const LifecycleIcons = {
    [Lifecycle.Status.Unknown]: "?",
    [Lifecycle.Status.Inactive]: "💤",
    [Lifecycle.Status.Initializing]: "⌛",
    [Lifecycle.Status.Active]: "✔",
    [Lifecycle.Status.Crashed]: "✘",
    [Lifecycle.Status.Destroying]: "☠︎",
    [Lifecycle.Status.Destroyed]: "☠︎",
};

/**
 * Create a small utility shared by plain and ansi formats.
 */
function plaintextCreator() {
    let broke = false;
    let indents = 0;

    return {
        text(value: string) {
            if (broke) {
                broke = false;
                return `\n${"".padStart(indents * INDENT_SPACES)}${value}`;
            }
            return value;
        },

        break() {
            broke = true;
            return "";
        },

        indent(producer: () => string) {
            indents++;
            const result = producer();
            indents--;
            return result;
        },
    };
}

function statusIcon(status: Lifecycle.Status) {
    return LifecycleIcons[status] ?? LifecycleIcons[Lifecycle.Status.Unknown];
}

function plainLogFormatter(now: Date, level: Level, facility: string, prefix: string, values: any[]) {
    const creator = plaintextCreator();

    const formattedValues = renderDiagnostic(values, {
        ...creator,
        key: text => creator.text(`${text}: `),
        value: producer => creator.text(producer()),
        strong: producer => creator.text(`*${producer()}*`),
        weak: producer => creator.text(producer()),
        error: producer => creator.text(producer()),
        status: (status, producer) => `${creator.text(statusIcon(status))}${producer()}`,
        via: text => creator.text(text),
    });

    return `${formatTime(now)} ${Level[level]} ${facility} ${prefix}${formattedValues}`;
}

const ANSI_CODES = {
    reset: 0,
    bold: 1,
    dim: 2,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    default: 39,
    gray: 90,
};

type AnsiCode = "normal" | keyof typeof ANSI_CODES;

function ansiEscape(...codes: AnsiCode[]) {
    const numbers = [];
    for (const code of codes) {
        if (code === "normal") {
            continue;
        }
        const number = ANSI_CODES[code];
        if (number === undefined) {
            throw new InternalError(`Invalid ANSI code ${code}`);
        }
        numbers.push(number);
    }
    if (!numbers.length) {
        return "";
    }
    return `\u001b[${numbers.join(";")}m`;
}

interface Style {
    color?: "default" | keyof typeof ANSI_CODES;
    dim?: boolean;
    bold?: boolean;
}

const Styles = {
    default: { color: "default" },
    prefix: { color: "default", dim: true },
    facility: { color: "gray", bold: true },
    debug: { color: "gray" },
    info: { color: "default" },
    notice: { color: "green" },
    warn: { color: "yellow" },
    error: { color: "red" },
    fatal: { color: "red", bold: true },
    key: { color: "blue" },
    value: { color: "default", dim: true },
    strong: { bold: true },
    weak: { dim: true },
    ballotCheck: { color: "green" },
    ballotCross: { color: "red" },
    unknown: { color: "gray" },
    inactive: { color: "gray" },
    initializing: { color: "yellow" },
    active: { color: "green" },
    crashed: { color: "red" },
    destroying: { color: "gray" },
    destroyed: { color: "gray" },
    via: { color: "magenta" },
} as const satisfies Record<string, Style>;

type StyleName = keyof typeof Styles;

function ansiLogFormatter(now: Date, level: Level, facility: string, nestPrefix: string, values: any[]) {
    const primary = Level[level].toLowerCase() as StyleName;
    const creator = plaintextCreator();
    const currentStyle: Style = {
        color: "default",
        dim: false,
        bold: false,
    };
    const styles: StyleName[] = [primary];

    const prefix = style("prefix", `${formatTime(now)} ${Level[level].padEnd(6)}`);

    facility = style(
        "facility",
        facility.length > 20 ? `${facility.slice(0, 10)}~${facility.slice(facility.length - 9)}` : facility.padEnd(20),
    );

    if (nestPrefix) {
        nestPrefix = style("prefix", nestPrefix);
    }

    function normal(text: string) {
        return style(styles[styles.length - 1], text);
    }

    const message = renderDiagnostic(values, {
        text: text => creator.text(normal(text)),

        indent: producer => creator.indent(producer),

        break: () => {
            // After the first line revert to default styling
            if (styles[0] === primary) {
                styles[0] = "default";
            }

            return creator.break();
        },

        key: text => creator.text(style("key", `${text}: `)),

        value: producer => {
            styles.push("value");
            const result = producer();
            styles.pop();
            return result;
        },

        strong: producer => {
            styles.push("strong");
            const result = producer();
            styles.pop();
            return result;
        },

        weak: producer => {
            styles.push("weak");
            const result = producer();
            styles.pop();
            return result;
        },

        error: producer => {
            styles.push("error");
            const result = producer();
            styles.pop();
            return result;
        },

        status: (status, producer) => {
            styles.push(status);
            const result = `${creator.text(style(status, statusIcon(status)))}${producer()}`;
            styles.pop();
            return result;
        },

        via: text => creator.text(style("via", text)),
    });

    return `${prefix} ${facility} ${nestPrefix}${message}${ansiEscape("reset")}`;

    // Convert a style name into a set of escape codes to transition state
    function escapes(styleName: StyleName) {
        const style = Styles[styleName] as Style;
        if (style === undefined) {
            throw new InternalError(`Invalid ANSI style "${styleName}"`);
        }

        const targetDim = !!style.dim;
        const targetBold = !!style.bold;
        let targetColor = style.color;

        // Compute target color from style stack if not explicit
        if (!targetColor) {
            for (let i = styles.length; i > 0; i--) {
                const color = (Styles[styles[i - 1]] as Style).color;
                if (color) {
                    targetColor = color;
                    break;
                }
            }
        }

        const codes = Array<AnsiCode>();

        if ((!targetDim && currentStyle.dim) || (!targetBold && currentStyle.bold)) {
            // Don't think we can reset dim/bold without full reset
            codes.push("reset");
            currentStyle.dim = false;
            currentStyle.bold = false;
            currentStyle.color = "default";
        }

        if (targetDim !== currentStyle.dim) {
            codes.push("dim");
            currentStyle.dim = true;
        }

        if (targetBold !== currentStyle.bold) {
            codes.push("bold");
            currentStyle.bold = true;
        }

        if (targetColor && targetColor !== currentStyle.color) {
            codes.push(targetColor);
            currentStyle.color = targetColor;
        }

        return ansiEscape(...codes);
    }

    // Apply style codes.  Maintains color state (via escapes) so values must
    // be rendered sequentially as they appear
    function style(style: StyleName, text: string) {
        if (text === "") {
            return text;
        }
        const segments = text.match(/([^✓✔✗✘]+|[✓✔✗✘])/g);
        if (segments === null) {
            throw new InternalError("ANSI text processing regex failure");
        }
        return segments
            .map(segment => {
                let esc;
                switch (segment) {
                    case "✓":
                    case "✔":
                        esc = escapes("ballotCheck");
                        break;

                    case "✗":
                    case "✘":
                        esc = escapes("ballotCross");
                        break;

                    default:
                        esc = escapes(style);
                        break;
                }
                return `${esc}${segment}`;
            })
            .join("");
    }
}

function htmlSpan(type: string, inner: string) {
    return `<span class="matter-log-${type}">${inner}</span>`;
}

function htmlLogFormatter(now: Date, level: Level, facility: string, prefix: string, values: any[]) {
    function escape(text: string) {
        return text.toString().replace(/</g, "&amp").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    const formattedValues = renderDiagnostic(values, {
        text: escape,
        break: () => "<br/>",
        indent: producer => htmlSpan("indent", producer()),
        key: text => htmlSpan("key", `${escape(text)}:`) + " ",
        value: producer => htmlSpan("value", producer()),
        strong: producer => `<em>${producer()}</em>`,
        weak: producer => htmlSpan("weak", producer()),
        error: producer => htmlSpan("error", producer()),
        status: (status, producer) => htmlSpan(`status-${status}`, producer()),
        via: text => htmlSpan("via", escape(text)),
    });

    const np = prefix.replace(/ /g, "&nbsp;");

    return htmlSpan(
        `line ${Level[level].toLowerCase()}`,
        `${htmlSpan("time", formatTime(now))} ${htmlSpan("level", Level[level])} ${htmlSpan(
            "facility",
            facility,
        )} ${np}${formattedValues}`,
    );
}

/**
 * Render a value based on its JS type.
 */
function renderValue(value: unknown, formatter: Formatter, squash: boolean): string {
    if (value === undefined) {
        return formatter.text("undefined");
    }
    if (value === null) {
        return formatter.text("null");
    }
    if (value instanceof ByteArray) {
        return formatter.text(value.toHex());
    }
    if (value instanceof Error) {
        return renderDiagnostic(Diagnostic.error(value), formatter);
    }
    if (typeof value === "object" && Symbol.iterator in value && !(value instanceof String)) {
        const list = sequenceToList(value as Iterable<unknown>);
        if (!list.length) {
            return "";
        }
        if (list.length > 1) {
            return renderList(list, formatter);
        }
        const first = valueFor(list[0]) as unknown[];
        return first
            .map(e => {
                if (typeof e === "string" && !squash) {
                    e = e.trim();
                }
                return renderDiagnostic(e, formatter);
            })
            .join(squash ? "" : " ");
    }
    if (value instanceof Date) {
        return formatter.text(formatTime(value));
    }
    if (typeof value === "object") {
        if (value instanceof String) {
            return value.toString();
        }
        return formatter.text(serialize(value) ?? "undefined");
    }

    const text = typeof value === "string" || value instanceof String ? value : value.toString().trim();
    if (!text.includes("\n")) {
        return formatter.text(text as string);
    }

    return renderList(text.split("\n"), formatter);
}

function renderList(value: Iterable<unknown>, formatter: Formatter) {
    const parts = Array<string>();

    for (const v of value) {
        parts.push(renderDiagnostic(v, formatter));
        formatter.break();
    }

    return parts.join("");
}

function renderIndentedList(value: Iterable<unknown>, formatter: Formatter) {
    return formatter.indent(() => {
        return renderList(value, formatter);
    });
}

function renderDictionary(value: object, formatter: Formatter) {
    const entries = value instanceof Map ? value.entries() : Object.entries(value);

    const parts = [];
    for (const [k, v] of entries) {
        if (parts.length) {
            parts.push(" ");
        }
        parts.push(formatter.key(k));
        parts.push(formatter.value(() => renderDiagnostic(v, formatter)));
    }

    return parts.join("");
}

function valueFor(value: unknown) {
    if (typeof value !== "object" || value === null) {
        return value;
    }
    const proxied = (value as Diagnostic)[Diagnostic.value];
    if (proxied) {
        if (proxied === value) {
            throw new InternalError("Diagnostic value proxies to itself");
        }
        return valueFor(proxied);
    }
    return value;
}

function presentationFor(value: unknown) {
    if (typeof value !== "object" || value === null) {
        return;
    }
    if (Diagnostic.presentation in (value as Diagnostic)) {
        return (value as Diagnostic)[Diagnostic.presentation];
    }
    const proxied = (value as Diagnostic)[Diagnostic.value];
    if (proxied && proxied !== value) {
        if (proxied === value) {
            throw new InternalError("Diagnostic value proxies to itself");
        }
        return presentationFor(proxied);
    }
}

/**
 * Render a value with presentation support
 */
function renderDiagnostic(value: unknown, formatter: Formatter): string {
    const presentation = presentationFor(value);
    value = valueFor(value);

    switch (presentation) {
        case undefined:
            return renderValue(value, formatter, false);

        case Diagnostic.Presentation.List:
            if (typeof (value as Iterable<unknown>)?.[Symbol.iterator] !== "function") {
                throw new ImplementationError("Diagnostic list is not iterable");
            }
            return renderIndentedList(value as Iterable<unknown>, formatter);

        case Diagnostic.Presentation.Squash:
            return renderValue(value, formatter, true);

        case Diagnostic.Presentation.Strong:
            return formatter.strong(() => renderDiagnostic(value, formatter));

        case Diagnostic.Presentation.Weak:
            return formatter.weak(() => renderDiagnostic(value, formatter));

        case Diagnostic.Presentation.Error:
            return formatter.error(() => renderDiagnostic(value, formatter));

        case Diagnostic.Presentation.Via:
            return formatter.via(`${value}`);

        case Diagnostic.Presentation.Dictionary:
            if (typeof value !== "object") {
                throw new ImplementationError("Diagnostic dictionary is not an object");
            }
            return renderDictionary(value as object, formatter);

        case Lifecycle.Status.Unknown:
        case Lifecycle.Status.Inactive:
        case Lifecycle.Status.Initializing:
        case Lifecycle.Status.Active:
        case Lifecycle.Status.Crashed:
        case Lifecycle.Status.Destroyed:
            return formatter.status(presentation, () => renderDiagnostic(value, formatter));

        default:
            throw new ImplementationError(`Unsupported diagnostic presentation "${presentation}"`);
    }
}

/**
 * Group items in an iterable based on their presentation.  The result is then
 * appropriate for rendering as a list.
 */
function sequenceToList(sequence: Iterable<unknown>) {
    let group: unknown[] | undefined;
    const list = Array<unknown[]>();
    for (const value of sequence) {
        if (presentationFor(value) === Diagnostic.Presentation.List) {
            group = undefined;
            list.push(value as unknown[]);
            continue;
        }
        if (!group) {
            list.push((group = [value]));
        } else {
            group.push(value);
        }
    }
    return list;
}

function formatTime(time: Date) {
    return `${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2, "0")}-${time
        .getDate()
        .toString()
        .padStart(2, "0")} ${time.getHours().toString().padStart(2, "0")}:${time
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")}.${time
        .getMilliseconds()
        .toString()
        .padStart(3, "0")}`;
}
