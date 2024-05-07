/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lexer } from "./Lexer.js";
import { BasicToken, Token } from "./Token.js";
import { ParseErrorHandler } from "./ParseErrorHandler.js";
import { Grammar } from "./Grammar.js";

export abstract class Parser<AstType extends {}, TokenType extends Token = BasicToken> {
    #done = false;
    #error: ParseErrorHandler = () => undefined;
    #tokens: Iterator<TokenType> = { next() { return { done: true, value: undefined }} };
    #nextToken?: TokenType;

    lexer: Lexer<TokenType> = Lexer.basic as Lexer<TokenType>;
    prefix = {} as Record<string, Grammar.PrefixRule<TokenType>>;
    infix = {} as Record<string, { method: Grammar.InfixRule<TokenType>, precedence: number }>;

    parse(tokens: Iterator<TokenType>, error: ParseErrorHandler): AstType | undefined {
        this.#tokens = tokens;
        this.#error = error;

        const next = tokens.next();
        if (next.done) {
            this.#done = true;
        } else {
            this.#nextToken = next.value;
        }

        return this.parseProgram();
    }

    consume(type: TokenType["type"]) {
        if (this.#nextToken?.type !== type) {

        }
    }

    abstract parseProgram(): AstType | undefined;

    #next() {
        const token = this.#nextToken;

        const next = this.#tokens.next();
        if (next.done) {
            this.#done = true;
            this.#nextToken = undefined;
        } else {
            this.#nextToken = next.value;
        }

        return token;
    }

    get token() {
        return this.#token;
    }

    get peeked() {
        return this.#token;
    }

    let done = false;

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
            return this.token === undefined;
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
                    return `word "${(this.token as unknown as BasicToken.Word).value}`;

                case "number":
                    return `number "${(this.token as unknown as BasicToken.Number).value}`;

                default:
                    if (this.token?.type.match(/[a-z]/i)) {
                        return `keyword "${this.token?.type}"`;
                    }
                    return `operator "${this.token?.type}"`;
            }
        },
    };
}
