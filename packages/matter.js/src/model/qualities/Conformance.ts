/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";

export class IllegalConformanceError extends MatterError {}

/**
 * An operational view of conformance as defined by the Matter Specification.
 * 
 * "Conformance" controls when a data field or cluster element is allowed or
 * required.
 */
export class Conformance {
    definition: Conformance.Definition;

    /**
     * Initialize from a Conformance.Definition or the conformance DSL defined
     * by the Matter Specification.
     */
    constructor(definition: Conformance.Definition | string) {
        if (typeof definition == "string") {
            this.definition = new Parser(definition).ast;
        } else {
            this.definition = definition;
        }
    }

    // TODO - offer validation?

    toString() {
        return Conformance.serialize(this.definition);
    }
}

export namespace Conformance {
    export enum Flag {
        Mandatory = "M",
        Optional = "O",
        Provisional = "P",
        Deprecated = "D",
        Disallowed = "X"
    }

    export const M = Flag.Mandatory;
    export const O = Flag.Optional;
    export const P = Flag.Provisional;
    export const D = Flag.Deprecated;
    export const X = Flag.Disallowed;
    export const EQ = "==";
    export const NE = "!=";
    export const OR = "|";
    export const XOR = "^";
    export const AND = "&";
    export const DOT = ".";

    export type Name = string;

    export type Number = number;

    export type Not = { not: Definition };

    export type Equal = [ Definition, typeof EQ, Name | Number ];

    export type NotEqual = [ Definition, typeof NE, Name | Number ];

    export type Or = [ Definition, typeof OR, Definition ];

    export type Xor = [ Definition, typeof XOR, Definition ];

    export type And = [ Definition, typeof AND, Definition ];

    export type ChoiceName = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

    export type Choice = {
        choice: ChoiceName,
        num?: number,
        orMore?: boolean,
        def: Definition
    };

    export type Optional = { optional: Definition }

    export type List = Definition[];

    /**
     * Defines "conformance" per the Matter specification.
     */
    export type Definition
        = Flag
        | Name
        | Number
        | Not
        | Equal
        | NotEqual
        | Or
        | Xor
        | And
        | Choice
        | Optional
        | List;

    export enum NodeType {
        Unknown,
        Flag,
        Value,
        Not,
        BinaryOperator,
        Choice,
        Optional,
        List
    }

    const Flags = new Set([ M, O, P, D, X ]);
    const BinaryOperators = new Set([ EQ, NE, OR, XOR, AND ]);
    const OrXorAnd = new Set([ OR, XOR, AND ]);

    // Retrieve the operator from an "AST" node, or undefined if the node
    // is not an binary operator
    function logicalOperator(definition: Definition) {
        if (!Array.isArray(definition) || definition.length != 3) {
            return undefined;
        }

        const op = definition[1] as string;
        if (BinaryOperators.has(op)) {
            return op;
        }

        return undefined;
    }

    // Serialize with parenthesis if necessary to make the expression atomic
    function serializeAtomic(definition: Definition, operators = BinaryOperators) {
        const serialized = serialize(definition);
        switch (nodeType(definition)) {
            case NodeType.List:
                return `(${serialized})`;

            case NodeType.BinaryOperator:
                const operator = logicalOperator(definition);
                if (operator && operators.has(operator)) {
                    return `(${serialized})`;
                }
        }
        return serialized;
    }

    /**
     * Get the node type for an entry in a definition "AST".
     */
    export function nodeType(definition: Definition) {
        if (typeof definition == "string") {
            if (Flags.has(definition as Flag)) {
                return NodeType.Flag;
            }

            return NodeType.Value;
        }
        
        if (typeof definition == "number") {
            return NodeType.Value;
        }

        if (Array.isArray(definition)) {
            if (definition.length == 3 && BinaryOperators.has(definition[1] as any)) {
                return NodeType.BinaryOperator;
            }

            return NodeType.List;
        }

        if (typeof definition == "object") {
            if (Object.getOwnPropertyDescriptor(definition, "not")) {
                return NodeType.Not;
            }
            if (Object.getOwnPropertyDescriptor(definition, "choice")) {
                return NodeType.Choice;
            }
            if (Object.getOwnPropertyDescriptor(definition, "optional")) {
                return NodeType.Optional;
            }
        }

        return NodeType.Unknown;
    }
    
    export function serialize(definition: Definition): string {
        switch (nodeType(definition)) {
            case NodeType.Flag:
            case NodeType.Value:
                return `${definition}`;

            case NodeType.BinaryOperator:
                const lhs = (definition as Definition[])[0];
                const op = (definition as string[])[1];
                const rhs = (definition as Definition[])[2];

                return `${serializeAtomic(lhs, OrXorAnd)} ${op} ${serializeAtomic(rhs, OrXorAnd)}`;

            case NodeType.Not:
                const n = definition as Conformance.Not;
                return `!${serializeAtomic(n.not)}`;
                
            case NodeType.Choice:
                const c = definition as Conformance.Choice;
                let result = `${serializeAtomic(c.def)}.${c.choice}`;
                if (c.num) {
                    result = `${result}${c.num}`;
                }
                if (c.orMore) {
                    result = `${result}+`;
                }
                return result;

            case NodeType.List:
                const l = definition as Conformance.List;
                return l.map(d => serialize(d)).join(", ");

            case NodeType.Optional:
                const o = definition as Conformance.Optional;
                return `[${serialize(o.optional)}]`;
        }

        return "?";
    }
}

namespace Tokenizer {
    export enum Special {
        Not = "!",
        Equal = "==",
        NotEqual = "!=",
        Or = "|",
        Xor = "^",
        And = "&",
        Dot = ".",
        Comma = ",",
        OptionalBegin = "[",
        OptionalEnd = "]",
        GroupBegin = "(",
        GroupEnd = ")",
        Plus = "+"
    }

    export enum TokenType {
        Flag,
        Special,
        Name,
        Choice,
        Number
    }

    namespace Token {
        export type Flag = {
            type: TokenType.Flag,
            value: Conformance.Flag
        }

        export type Special= {
            type: TokenType.Special,
            value: Tokenizer.Special
        }

        export type Name = {
            type: TokenType.Name,
            value: string
        }

        export type Choice = {
            type: TokenType.Choice,
            value: Conformance.ChoiceName
        }

        export type Number = {
            type: TokenType.Number,
            value: number
        }
    }

    export type Token
        = Token.Flag
        | Token.Special
        | Token.Name
        | Token.Choice
        | Token.Number;

    export function* tokenize(definition: string): Generator<Token> {
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

        while (!current.done) {
            switch (current.value) {
                case Conformance.Flag.Mandatory:
                case Conformance.Flag.Optional:
                case Conformance.Flag.Provisional:
                case Conformance.Flag.Deprecated:
                case Conformance.Flag.Disallowed:
                    yield { type: TokenType.Flag, value: current.value };
                    break;

                case Special.Or:
                case Special.Xor:
                case Special.And:
                case Special.Dot:
                case Special.Comma:
                case Special.OptionalBegin:
                case Special.OptionalEnd:
                case Special.GroupBegin:
                case Special.GroupEnd:
                case Special.Plus:
                    yield { type: TokenType.Special, value: current.value };
                    break;

                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    let num = 0;
                    while (true) {
                        num = num * 10 + current.value.charCodeAt(0) - "0".charCodeAt(0);
                        if (peeked.done || peeked.value < "0" || peeked.value > "9") {
                            break;
                        }
                        next();
                    }
                    yield({ type: TokenType.Number, value: num });
                    break;
                    
                case "!":
                    if (peeked.value == "=") {
                        next();
                        yield { type: TokenType.Special, value: Special.NotEqual };
                    } else {
                        yield { type: TokenType.Special, value: Special.Not };
                    }
                    break;

                case "=":
                    if (peeked.value == "=") {
                        next();
                        yield { type: TokenType.Special, value: Special.Equal };
                    } else {
                        throw new IllegalConformanceError(`"=" must be followed by another "="`);
                    }
                    break;

                case " ":
                case "\t":
                case "\r":
                case "\n":
                case "\v":
                case "\f":
                    break;

                default:
                    if (current.value >= "a" && current.value <= "z") {
                        yield { type: TokenType.Choice, value: current.value as Conformance.ChoiceName };
                    } else if (current.value >= "A" && current.value <= "Z") {
                        const name = [ current.value ];
                        while (peeked.value >= "A" && peeked.value <= "Z") {
                            next();
                            name.push(current.value);
                        }
                        yield { type: TokenType.Name, value: name.join("") };
                    } else {
                        throw new Error(`Unexpected character "${current.value}"`);
                    }
                    break;
            }
            next();
        }        
    }
}

// The DSL is *almost* complex enough to warrant a proper parser library.  Not
// quite though...
class Parser {
    // Note that Conformance.Definition effectively serves as our AST.  Its
    // design is slightly suboptimal for this purpose because it also attempts
    // to serve as a reasonable DSL for manual expression of conformance
    public ast: Conformance.Definition;

    private tokens: Iterator<Tokenizer.Token>;
    private token?: Tokenizer.Token;
    private peeked?: Tokenizer.Token;

    constructor(definition: string) {
        this.tokens = Tokenizer.tokenize(definition);
        const next = this.tokens.next();
        if (!next.done) {
            this.peeked = next.value;
            this.next();
        }
        this.ast = this.parse();
    }

    private next() {
        this.token = this.peeked;
        const next = this.tokens.next();

        if (next.done) {
            this.peeked = undefined;
        } else {
            this.peeked = next.value;
        }
    }

    // Note that Conformance.Definition effectively serves as our AST.  Its
    // design is slightly suboptimal for this purpose because it also attempts
    // to serve as a DSL for manual expression of conformance
    private parse() {
        const group = this.parseGroup();

        return group.length < 2 ? group[0] : group;
    }

    private parseGroup(end?: Tokenizer.Special) {
        const group = [] as Conformance.Definition[];

        while (true) {
            if (!this.token) {
                if (end) {
                    throw new IllegalConformanceError("Unterminated conformance grouping");
                }
                return group;
            }

            // Optional brackets are only allowed at the top-level
            const optional = !end
                && this.atSpecial(Tokenizer.Special.OptionalBegin);

            if (optional) {
                this.next();
                group.push({ optional: this.parseGroup(Tokenizer.Special.OptionalEnd)})
            } else {
                group.push(this.parseExpression());
            }
            
            if (this.atSpecial(Tokenizer.Special.Comma)) {
                this.next();
            } else if (end && this.atSpecial(end)) {
                this.next();
                return group;
            }
        }
    }

    private atSpecial(special: Tokenizer.Special) {
        return this.token
            && this.token.type == Tokenizer.TokenType.Special
            && this.token.value == special;
    }

    private parseExpression() {
        let elements = [] as (Tokenizer.Special | Conformance.Definition)[];

        // Collect binary expressions into an array so we can back up and
        // apply operator precedence
        elements.push(this.parseUnaryExpression());
        while (this.token && this.token.type == Tokenizer.TokenType.Special && Parser.BinaryOperators.has(this.token.value)) {
            elements.push(this.token.value);
            this.next();
            elements.push(this.parseUnaryExpression());
        }

        // Convert binary operators into AST nodes in order of precedence
        Parser.BinaryOperatorPrecedence.forEach(operators => {
            for (let i = 0; i < elements.length; i++) {
                if (operators.indexOf(elements[i + 1] as Tokenizer.Special) != -1) {
                    elements.splice(i, 0, elements.splice(i, 3));
                }
            }
        });

        return elements[0]!;
    }

    private parseUnaryExpression(): Conformance.Definition {
        const expr = this.parseUnaryExpressionWithoutChoice();

        // Parse choice suffix
        if (this.atSpecial(Tokenizer.Special.Dot)) {
            this.next();

            if ((this.token as any)?.type != Tokenizer.TokenType.Choice) {
                throw new IllegalConformanceError('Choice indicator (".") must be followed by a single lowercase letter');
            }
            const choice = {
                choice: this.token?.value,
                def: expr
            } as Conformance.Choice;
            this.next();
            if ((this.token as any)?.type == Tokenizer.TokenType.Number) {
                choice.num = this.token?.value as number;
                this.next();
            }
            if (this.atSpecial(Tokenizer.Special.Plus)) {
                choice.orMore = true;
                this.next();
            }

            return choice;            
        }

        return expr;
    }

    private parseUnaryExpressionWithoutChoice(): Conformance.Definition {
        if (!this.token) {
            throw new IllegalConformanceError("Conformance definition terminated with expression expected");
        }

        if (this.token.type == Tokenizer.TokenType.Flag || this.token.type == Tokenizer.TokenType.Name || this.token.type == Tokenizer.TokenType.Number) {
            const value = this.token.value;
            this.next();
            return value;
        }

        if (this.atSpecial(Tokenizer.Special.Not)) {
            this.next();
            return { not: this.parseUnaryExpression() };
        }

        if (this.atSpecial(Tokenizer.Special.GroupBegin)) {
            this.next();
            return this.parseGroup(Tokenizer.Special.GroupEnd);
        }

        throw new IllegalConformanceError(`Unexpected "${this.token.value}" in conformance definition`)
    }
}

namespace Parser {
    export const BinaryOperatorPrecedence = [
        [ Tokenizer.Special.Or, Tokenizer.Special.Xor, Tokenizer.Special.And ],
        [ Tokenizer.Special.Equal, Tokenizer.Special.NotEqual ]
    ]

    export const BinaryOperators = new Set(BinaryOperatorPrecedence.flat());
}
