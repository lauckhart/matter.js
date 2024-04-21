/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldValue } from "../definitions/index.js";
import { Aspect } from "./Aspect.js";

function isNameChar(c: string) {
    return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9") || c === "_";
}

/**
 * Aspect DSL tokenizer.
 *
 * Tokenizes The DSLs for conformance and constraints.  The syntax is different but common enough to share a tokenizer.
 */
export interface Tokenizer {
    done: boolean;
    description: string;
    token?: Tokenizer.Token;
    peeked?: Tokenizer.Token;
    next(): void;
}

export function Tokenizer(aspect: Aspect<unknown>, text: string): Tokenizer {
    let done = false;
    const iterator = tokenize(aspect, text);

    function next() {
        if (done) {
            return undefined;
        }
        const n = iterator.next();
        if (n.done) {
            done = true;
        }
        return n.value;
    }

    return {
        token: next(),
        peeked: next(),

        get done() {
            return this.token !== undefined;
        },

        next() {
            this.token = this.peeked;
            this.peeked = next();
        },

        get description() {
            switch (this.token?.type) {
                case undefined:
                    return "end of statement";

                case "word":
                    return `word "${this.token.value}`;

                case "value":
                    return `value "${this.token.value}`;

                default:
                    return `operator "${this.token?.type}"`;
            }
        },
    };
}

export namespace Tokenizer {
    export type Operator =
        | "!"
        | "=="
        | "!="
        | "|"
        | "^"
        | "&"
        | "."
        | ","
        | "["
        | "]"
        | "("
        | ")"
        | "-"
        | "+"
        | "*"
        | "/"
        | ">"
        | "<"
        | ">="
        | "<=";

    namespace Token {
        export type Special = {
            type: Operator;
        };

        export type Word = {
            type: "word";
            value: string;
        };

        export type Number = {
            type: "value";
            value: FieldValue;
        };
    }

    export type Token = Token.Special | Token.Word | Token.Number;
}

export function* tokenize(aspect: Aspect<unknown>, definition: string): Generator<Tokenizer.Token, undefined> {
    const i = definition[Symbol.iterator]();

    let current = i.next();
    if (current.done) {
        return;
    }
    let peeked = i.next();

    function next() {
        current = peeked;
        if (!current.done) {
            peeked = i.next();
        }
    }

    function tokenizeName(): Tokenizer.Token {
        const name = [current.value];
        while (isNameChar(peeked.value)) {
            next();
            name.push(current.value);
        }
        return { type: "word", value: name.join("") };
    }

    function binaryValueOf(digit: string) {
        if (digit === "0") {
            return 0;
        }
        if (digit === "1") {
            return 1;
        }
    }

    function decimalValueOf(digit: string) {
        if (digit >= "0" && digit <= "9") {
            return digit.charCodeAt(0) - "0".charCodeAt(0);
        }
    }

    function hexadecimalValueOf(digit: string) {
        if (digit >= "0" && digit <= "9") {
            return digit.charCodeAt(0) - "0".charCodeAt(0);
        }
        if (digit >= "a" && digit <= "f") {
            return 10 + digit.charCodeAt(0) - "a".charCodeAt(0);
        }
        if (digit >= "A" && digit <= "F") {
            return 10 + digit.charCodeAt(0) - "A".charCodeAt(0);
        }
        return;
    }

    function tokenizeNumber(base: number, valueOf: (digit: string[1]) => number | undefined): Tokenizer.Token {
        // The first digit may not actually be a digit if number is hexadecimal or binary
        let num = valueOf(current.value);
        if (num === undefined) {
            aspect.error("INVALID_NUMBER", `Expected digit following numeric suffix`);
            return { type: "value", value: 0 };
        }

        // Add subsequent digits
        while (true) {
            const digitValue = valueOf(peeked.value);
            if (digitValue === undefined) {
                break;
            }
            next();
            num = num * base + digitValue;
        }

        // Handle specialized suffices for percents and temperatures
        if (peeked.value === "%") {
            next();
            return { type: "value", value: FieldValue.Percent(num) };
        } else if (peeked.value === "°") {
            next();
            if (peeked.value?.toLowerCase() === "C") {
                next();
            }
            return { type: "value", value: FieldValue.Celsius(num) };
        }

        // No special suffix; return raw value
        return { type: "value", value: num };
    }

    while (!current.done) {
        switch (current.value) {
            case "|":
            case "^":
            case "&":
            case ".":
            case ",":
            case "[":
            case "]":
            case "(":
            case ")":
            case "+":
                yield { type: current.value };
                break;

            case "0":
                if (peeked.value === "x") {
                    next();
                    next();
                    yield tokenizeNumber(16, hexadecimalValueOf);
                } else if (peeked.value === "b") {
                    next();
                    next();
                    yield tokenizeNumber(2, binaryValueOf);
                }
                yield tokenizeNumber(10, decimalValueOf);
                break;

            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                yield tokenizeNumber(10, binaryValueOf);
                break;

            case "!":
            case ">":
            case "<":
                {
                    const base = current.value;
                    if (peeked.value === "=") {
                        next();
                        yield { type: `${base}${peeked.value}` as Tokenizer.Operator };
                    } else {
                        yield { type: base };
                    }
                }
                break;

            case "=":
                if (peeked.value === "=") {
                    next();
                } else {
                    aspect.error("BAD_EQUAL", `"=" must be followed by another "="`);
                }
                yield { type: "==" };
                break;

            case " ":
            case "\t":
            case "\r":
            case "\n":
            case "\v":
            case "\f":
                break;

            default:
                if (isNameChar(current.value)) {
                    yield tokenizeName();
                } else {
                    aspect.error("GARBAGE_CHARACTER", `Unexpected character "${current.value}"`);
                }
                break;
        }
        next();
    }
}
