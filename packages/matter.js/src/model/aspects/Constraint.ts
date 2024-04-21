/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { camelize } from "../../util/String.js";
import { isObject } from "../../util/Type.js";
import { FieldValue } from "../definitions/index.js";
import { Aspect } from "./Aspect.js";
import { Tokenizer } from "./Tokenizer.js";

/**
 * An operational view of constraints as defined by the Matter specification.
 *
 * A "constraint" limits possible data values.
 *
 * Formally a constraint is not considered a quality by the specification. It is handled similarly to qualities, though,
 * so we keep it in the same section.
 */
export class Constraint extends Aspect<Constraint.Definition> {
    ast: Constraint.Ast;

    /**
     * Initialize from a Constraint.Definition or the constraint DSL defined by the Matter Specification.
     */
    constructor(definition: Constraint.Definition) {
        super(definition);
        this.ast = definitionToAst(this, definition);
    }

    /**
     * Test a value against the constraint.
     */
    test(value: FieldValue, properties?: Record<string, any>): boolean {
        return this.#test(this.ast, value, properties);
    }

    #test(ast: Constraint.Ast, value: FieldValue, properties?: Record<string, any>): boolean {
        if (value === undefined) {
            return false;
        }

        switch (ast?.type) {
            case "in":
                let set = valueOf(ast.value, true);
                if (!Array.isArray(set)) {
                    set = [set];
                }
                return set.indexOf(value) !== -1;

            case "const":
                const v = valueOf(ast.value);
                return v === value;

            case "min": {
                const min = valueOf(ast.value);
                return min === undefined || min === null || (min as any) <= (value as any);
            }

            case "max": {
                const max = valueOf(ast.value);
                return max === undefined || max === null || (max as any) >= (value as any);
            }

            case "to": {
                const min = valueOf(ast.min);
                const max = valueOf(ast.max);
                return (
                    (min === undefined || min === null || (min as any) <= (value as any)) &&
                    (max === undefined || max === null || (max as any) >= (value as any))
                );
            }

            case "any":
                return !ast.parts.every(part => this.#test(part, value, properties) === false);

            case "all":
                return ast.parts.every(part => this.#test(part, value, properties) === true);

            case "desc":
                return true;

            case "array":
                if (!Array.isArray(value)) {
                    return false;
                }
                if (!this.#test(ast.length, valueOf(value), properties)) {
                    return false;
                }
                for (const entry of value) {
                    if (!this.#test(ast.entry, valueOf(entry), properties)) {
                        return false;
                    }
                }
                return true;

            default:
                throw new InternalError(`Unsupported constraint AST node type ${(ast as any)?.type}`);
        }

        /**
         * Evaluate an expression.
         */
        function valueOf(value: Constraint.Expression, raw = false): FieldValue {
            if (!raw) {
                if (typeof value === "string" || Array.isArray(value)) {
                    return value.length;
                }
                if (ArrayBuffer.isView(value)) {
                    return value.byteLength;
                }
            }

            if (isObject(value)) {
                switch (value.type) {
                    case "reference":
                        value = valueOf(properties?.[camelize(value.name)], raw);
                        break;

                    case "-":
                        return binaryOp(value, (lhs, rhs) => lhs - rhs);

                    case "+":
                        return binaryOp(value, (lhs, rhs) => lhs + rhs);

                    case "*":
                        return binaryOp(value, (lhs, rhs) => lhs * rhs);

                    case "/":
                        return binaryOp(value, (lhs, rhs) => lhs / rhs);

                    default:
                        value = FieldValue.unwrap(value as FieldValue) as FieldValue;
                        break;
                }
            }

            return value;
        }

        /**
         * Apply a binary operator.
         */
        function binaryOp(expr: Constraint.BinaryOperation, operator: (lhs: any, rhs: any) => FieldValue) {
            return operator(valueOf(expr.lhs) as any, valueOf(expr.rhs) as any);
        }
    }

    override toString() {
        return serialize(this.ast);
    }

    override get isEmpty() {
        return this.ast === undefined || this.ast.type === "empty" || this.ast.type === "desc";
    }

    override extend(other: Constraint): Constraint {
        if (other.isEmpty) {
            return this;
        }
        if (this.isEmpty) {
            return other;
        }

        const parts = Array<Constraint.Ast>();

        function add(constraint: Constraint) {
            if (constraint.isEmpty) {
                return;
            }

            if (constraint.ast.type === "any") {
                parts.push(...constraint.ast.parts);
            }

            parts.push(constraint.ast);
        }

        add(this);
        add(other);

        if (parts.length === 1) {
            return new Constraint(parts[0]);
        }

        return new Constraint({ type: "or", parts });
    }
}

export namespace Constraint {
    export type NumberOrIdentifier = number | string;

    /**
     * An operation with an operator and two operands.
     */
    export type BinaryOperation = {
        type: "-" | "+" | "/" | "*";
        lhs: Expression;
        rhs: Expression;
    };

    /**
     * A constraint expression.  Currently very limited as the only expressions are constants and (a - b).
     */
    export type Expression = FieldValue | BinaryOperation;

    /**
     * Parsed list structure.
     */
    export type Ast =
        | { type: "empty" | "desc" }
        | { type: "const" | "min" | "max" | "in"; value: Expression; entry?: Ast }
        | { type: "to"; min: Expression; max: Expression; entry?: Ast }
        | { type: "any" | "all"; parts: Ast[] }
        | { type: "array"; length: Ast; entry: Ast };

    /**
     * Shorthand definition for simple constraints.
     */
    export interface SimpleDefinition {
        type?: undefined;
        min?: Expression;
        max?: Expression;
        entry?: Definition;
    }

    /**
     * These are all ways to describe an input constraint.
     */
    export type Definition =
        | Ast
        | { type?: undefined; ast: Ast; definition?: Definition }
        | SimpleDefinition
        | string
        | number
        | undefined;
}

function definitionToAst(constraint: Constraint, definition: Constraint.Definition): Constraint.Ast {
    switch (typeof definition) {
        case "undefined":
            return { type: "empty" };

        case "string":
            return parse(constraint, definition);

        case "number":
            return { type: "const", value: definition };

        default:
            if (definition.type === undefined) {
                const { ast } = definition as { ast: Constraint.Ast };
                if (ast) {
                    return ast;
                }

                const { min, max, entry: entryDef } = definition as Constraint.SimpleDefinition;
                const entry = entryDef === undefined ? undefined : definitionToAst(constraint, definition);
                if (min !== undefined) {
                    if (max !== undefined) {
                        return { type: "to", min, max, entry };
                    }
                    return { type: "min", value: min, entry };
                }

                if (max !== undefined) {
                    return { type: "max", value: "max", entry };
                }

                return { type: "empty" };
            }

            return definition;
    }
}

function serializeExpression(expression: Constraint.Expression): string {
    if (isObject(expression)) {
        switch (expression.type) {
            case "-":
            case "+":
            case "*":
            case "/":
                return `${serializeExpression(expression)} - ${serializeExpression(expression)}`;
        }
    }

    return FieldValue.serialize(expression);
}

function serializeEntry(ast: Constraint.Ast | undefined): string {
    if (ast === undefined) {
        return "";
    }
    return `[${serialize(ast)}]`;
}

function serialize(ast: Constraint.Ast): string {
    switch (ast.type) {
        case "empty":
            return "";

        case "desc":
            return "desc";

        case "const":
            return serializeExpression(ast.value);

        case "min":
            return `min ${serializeExpression(ast.value)}${serializeEntry(ast.entry)}`;

        case "max":
            return `max ${serializeExpression(ast.value)}${serializeEntry(ast.entry)}`;

        case "to":
            return `${serializeExpression(ast.min)} to ${serializeExpression(ast.max)}${serializeEntry(ast.entry)}`;

        case "in":
            return `in ${serializeExpression(ast.value)}`;

        case "any":
            return ast.parts.map(ast => serialize(ast)).join(", ");

        case "array":
            return `${serialize(ast.length)}[${serialize(ast.entry)}]`;

        default:
            throw new InternalError(`Unrecognized constraint AST node type ${(ast as any).type}`);
    }
}

class ConstraintTokenizer extends Tokenizer {}

function parse(constraint: Constraint, text: string): Constraint.Ast {
    const tokens = Tokenizer(constraint, text);

    const parts = Array<Constraint.Ast>();

    while (!tokens.done) {
        const part = parsePart();
        if (part) {
            parts.push(part);
        }
    }

    if (parts.length === 0) {
        return { type: "empty" };
    }

    if (parts.length === 1) {
        return parts[0];
    }

    return { type: "or", parts };

    function startsExpression() {
        if (tokens.token?.type === "value") {
            return true;
        }

        if (tokens.token?.type === "word") {
            switch (tokens.token.value) {
                case "min":
                case "max":
                case "to":
                case "desc":
                case "any":
                case "all":
                    return false;
            }
        }

        return true;
    }

    function parseValueOrWord(): Constraint.Expression | undefined {
        if (!startsExpression()) {
            return;
        }

        let result: Constraint.Expression | undefined;
        switch (tokens.token?.type) {
            case "word":
                result = { type: "reference", name: tokens.token.value };
                break;

            case "value":
                result = tokens.token.value;
                break;
        }

        if (result === undefined) {
            // Error
            return;
        }

        tokens.next();

        return result;
    }

    function parseExpression(): Constraint.Expression | undefined {
        const start = parseValueOrWord();
        if (start === undefined) {
            return;
        }

        switch (tokens.token?.type) {
            case "-":
            case "+":
            case "*":
            case "/":
                const { type } = tokens.token;
                tokens.next();

                const stop = parseValueOrWord();
                if (stop === undefined) {
                    break;
                }

                return {
                    type,
                    lhs: start,
                    rhs: stop,
                };
        }
    }

    function parseConstOrRangePart(): Constraint.Ast | undefined {
        const start = parseExpression();
        if (start === undefined) {
            return;
        }

        if (tokens.token?.type !== "word" || tokens.token?.value !== "to") {
            // Single value
            return { type: "const", value: start };
        }

        // Range
        tokens.next();
        const stop = parseExpression();
        if (stop === undefined) {
            return;
        }

        return { type: "to", min: start, max: stop };
    }

    function parseUnaryPart(): Constraint.Ast | undefined {
        const type = tokens.token?.type as "min" | "max" | "in";
        tokens.next();

        const value = parseExpression();
        if (value === undefined) {
            return;
        }

        return { type, value: value };
    }

    function parseEntry(): Constraint.Ast | undefined {
        if (tokens.token?.type !== "[") {
            return;
        }

        tokens.next();

        const part = parsePart("]");

        if ((tokens.token?.type as Tokenizer.Token["type"]) === "]") {
            tokens.next();
        } else {
            constraint.error("UNTERMINATED_CLAUSE", `Unterminated array entry (expected "]")`);
        }

        return part;
    }

    function parsePart(terminator?: string): Constraint.Ast | undefined {
        let part: Constraint.Ast | undefined;

        if (startsExpression()) {
            part = parseConstOrRangePart();
        } else if (tokens.token?.type === "word") {
            switch (tokens.token.value) {
                case "desc":
                    tokens.next();
                    part = { type: "desc" };
                    break;

                case "any":
                case "all":
                    break;

                case "min":
                case "max":
                case "in":
                    part = parseUnaryPart();
                    break;
            }
        }

        if (part) {
            const entry = parseEntry();
            if (entry) {
                part = { type: "array", length: part, entry };
            }

            parts.push(part);
        }

        let addedError = false;
        while (true) {
            if (terminator && tokens.token?.type === terminator) {
                break;
            }

            if (tokens.token?.type === ",") {
                tokens.next();
                break;
            }

            if (!addedError) {
                constraint.error("UNEXPECTED_TOKEN", `Unexpected ${tokens.description}`);
                addedError = true;
            }

            tokens.next();
        }

        return part;
    }
}
