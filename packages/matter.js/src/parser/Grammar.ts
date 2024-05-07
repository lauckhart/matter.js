/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { type Parser } from "./Parser.js";
import { Token } from "./Token.js";

/**
 * A grammar rule is a method that handles a specific token.
 */
export type Rule<T extends Token> = PrefixRule<T> | InfixRule<T>;

/**
 * Prefix handlers are parser methods that handle tokens at the beginning of a token segment.
 */
export interface PrefixHandler<T extends Token> {
    (this: Parser<{}, T>, token: T): {};
}

/**
 * A prefix rule associates a token with a {@link PrefixHandler}..
 */
export interface PrefixRule<T extends Token> {
    type: "prefix";
    (this: Parser<{}, T>, token: T): {};
    token: T["type"];
}

/**
 * Define a prefix rule.
 */
export function prefix<T extends Token>(token: Token["type"], handler: PrefixHandler<T>) {
    Object.defineProperties(handler, {
        token: { value: token },
    });
    return handler as PrefixRule<T>;
}

/**
 * Infix handlers are parser methods that handle tokens within or ending a token segments.
 */
export interface InfixHandler<T extends Token> {
    (this: Parser<{}, T>, left: {}, token: T): {};
}

/**
 * An infix rule associates a token with a precedence and {@link InfixHandler}.
 */
export interface InfixRule<T extends Token> extends InfixHandler<T> {
    precedence: number;
}

/**
 * Define an infix rule.
 */
export function infix<T extends Token>(token: T["type"], precedence: number, handler: InfixHandler<T>) {
    Object.defineProperties(handler, {
        token: { value: token },
        precedence: { value: precedence },
    });
    return handler as InfixRule<T>;
}

/**
 * A simple grammar description for {@link Parser}.
 *
 * The grammar is a set of rules that define language structure and how it is parsed.
 */
export interface Grammar<T extends Token, A extends {}> extends Array<Rule<T>> {}

interface Foo extends Token {
    type: "-" | "+";
}

const x: Grammar<Foo, "-" | "+"> = [prefix("-", () => "-")];
