/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Aspect } from "./Aspect.js";

/**
 * An operational view of constraints as defined by the Matter specification.
 * 
 * A "constraint" limits possible data values.
 * 
 * Formally a constraint is not considered a quality by the specification.
 * It is handled similarly to qualities, though, so we keep it in the same
 * section.
 */
export class Constraint extends Aspect<Constraint.Definition> implements Constraint.Ast {
    type: Constraint.AstNodeType;
    min?: number;
    max?: number;
    entry?: Constraint;
    parts?: Constraint[];

    /**
     * Initialize from a Constraint.Definition or the constraint DSL defined
     * by the Matter Specification.
     */
    constructor(definition: Constraint.Definition) {
        super(definition);

        this.type = "value";

        let ast;
        switch (typeof definition) {
            case "string":
                ast = Constraint.parse(this, definition);
                break;

            case "number":
                ast = { min: definition, max: definition };
                break;

            default:
                ast = definition;
        }

        Object.assign(this, ast);
    }

    override toString() {
        return Constraint.serialize(this);
    }
}

export namespace Constraint {
    export type AstNodeType = "value" | "list" | "desc" | "sequence";

    /**
     * Parsed list structure.
     */
    export type Ast = {
        type?: AstNodeType,

        /**
         * Lower bound on value or sequence length.
         */
        min?: number,

        /**
         * Upper bound on value or sequence length.
         */
        max?: number,

        /**
         * Constraint on list child element.
         */
        entry?: Ast,

        /**
         * List of sub-constraints in a sequence.
         */
        parts?: Ast[]
    }

    /**
     * These are all ways to describe a constraint.
     */
    export type Definition = Ast | string | number | undefined;

    function parseNum(constraint: Constraint, num: string): number {
        let value = Number.parseFloat(num);
        if (Number.isNaN(value)) {
            constraint.error(`"${num}" is not a number`);
            value = 0;
        }
        return value;
    }

    function parseAtom(constraint: Constraint, words: string[]): Ast | undefined {
        switch (words.length) {
            case 0:
                return undefined;

            case 1:
                switch (words[0].toLowerCase()) {
                    case "desc":
                        return { type: "desc" };

                    case "all":
                        return {};
                }
                const value = parseNum(constraint, words[0]);
                return { min: value, max: value };

            case 2:
                switch (words[0].toLowerCase()) {
                    case "min":
                        return { min: parseNum(constraint, words[1]) };
                    case "max":
                        return { max: parseNum(constraint, words[1]) };
                    default:
                        constraint.error('Two word constraint must start with "min" or "max"')
                }
                return;

            case 3:
                if (words[1].toLowerCase() == "to") {
                    function parseBound(name: string, pos: number) {
                        if (words[pos].toLowerCase() == name) {
                            return undefined;
                        }
                        return parseNum(constraint, words[pos]);
                    }

                    const ast: Ast = {};
                    const min = parseBound("min", 0);
                    if (min != undefined) {
                        ast.min = min;
                    }
                    const max = parseBound("max", 2);
                    if (max != undefined) {
                        ast.max = max;
                    }
                    return ast;
                }
                return;
        }

        constraint.error("Too many words");
}

    /**
     * Parse constraint DSL.  Extremely lenient.
     */
    export function parse(constraint: Constraint, definition: string): Ast {
        let pos = 1;
        let current: string | undefined = definition[0];
        let peeked: string | undefined = definition[1];

        function next() {
            current = peeked;
            if (pos == definition.length) {
                peeked = undefined;
            } else {
                peeked = definition[pos];
                pos++;
            }
        }

        function scan(depth: number): Ast {
            const parts = Array<Ast>();
            let words = Array<string>();
            let word = "";

            function parseWords() {
                const atom = parseAtom(constraint, words);
                words = Array<string>();
                return atom;
            }

            function emit() {
                const atom = parseWords();
                if (atom != undefined) {
                    parts.push(atom);
                }
            }

            while (current != undefined) {
                switch (current) {
                    case " ":
                    case "\t":
                    case "\r":
                    case "\n":
                    case "\v":
                    case "\f":
                        if (word) {
                            words.push(word);
                            word = "";
                            next();
                        }
                        break;

                    case "[":
                        next();
                        let list = parseWords();
                        const ast: Ast = {
                            entry: scan(depth + 1)
                        }
                        if (list != undefined) {
                            ast.entry = list;
                        }
                        parts.push(ast);
                        break;
                    
                    case "]":
                        next();
                        if (!depth) {
                            constraint.error('Unexpected "]"');
                            break;
                        }
                        if (parts.length > 1) {
                            return { type: "sequence", parts: parts };
                        }
                        return parts[0];

                    case ",":
                        emit();
                        break;

                    default:
                        word += current;
                        next();
                        break;
                }

                next();
            }

            if (depth) {
                constraint.error("Unterminated sub-constraint");
            }

            emit();

            if (parts.length < 2) {
                return parts[0];
            }
    
            return { type: "sequence", parts: parts };
        }

        return scan(0);
    }

    function serializeValue(ast: Ast) {
        if (ast.min != undefined) {
            if (ast.max == undefined) {
                return `min ${ast.min}`;
            } else {
                return `${ast.min} to ${ast.max}`;
            }
        } else if (ast.max != undefined) {
            return `max ${ast.max}`;
        }
        return "";
    }

    function serializeParts(ast: Ast): string {
        return ast.parts?.map(serialize).join(", ") ?? "";
    }

    export function serialize(ast: Ast) {
        switch (ast.type) {
            case "value":
                return serializeValue(ast);

            case "list":
                return serializeParts(ast);

            case "desc":
                return "desc";

            case "sequence":
                return `${serializeValue}[${serializeParts(ast)}]`;
        }
        return "";
    }
}
