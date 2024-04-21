/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export class Parser<Token extends Parser.Token, Ast> {
    #grammar: Parser.Grammar;

    constructor(grammar: Parser.Grammar) {
        this.#grammar = grammar;
    }

    parse(tokens: Iterator<Token>): Ast {}
}

/**
 * A simple Pratt parser implementation.
 */
export namespace Parser {
    export interface Rule<Ast> {
        tokenType: string;
        parser(): Ast;
    }

    export interface Grammar {}

    export interface Token {
        type: string;
    }

    export interface TokenInput extends Iterator<Token> {}

    export interface Tokens {
        done: boolean;
        description: string;
        token?: Token;
        peeked?: Token;
        consume(): Token;
    }
}
