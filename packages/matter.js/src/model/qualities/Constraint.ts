/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";

/**
 * An operational view of constraints as defined by the Matter specification.
 * 
 * A "constraint" limits possible data values.
 * 
 * Formally a constraint is not considered a quality by the specification.
 * It is handled similarly to qualities, though, so we keep it in the same
 * section.
 */
export class Constraint implements Constraint.Ast {
    type: Constraint.AstNodeType;
    min?: number;
    max?: number;
    entries?: Constraint[];

    /**
     * Initialize from a Constraint.Definition or the constraint DSL defined
     * by the Matter Specification.
     */
    constructor(definition: Constraint.Definition) {
        this.type = "value";

        let ast;
        switch (typeof definition) {
            case "string":
                ast = Constraint.parse(definition);
                break;

            case "number":
                ast = { min: definition, max: definition };
                break;

            default:
                ast = definition;
        }

        Object.assign(this, ast);
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

    function parseNum(num: string): number {
        const value = Number.parseFloat(num);
        if (Number.isNaN(value)) {
            throw new MatterError(`Illegal constraint: "${num}" is not a number`);
        }
        return value;
    }

    function parseAtom(words: string[]): Ast | undefined {
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
                const value = parseNum(words[0]);
                return { min: value, max: value };

            case 2:
                switch (words[0].toLowerCase()) {
                    case "min":
                        return { min: parseNum(words[1]) };
                    case "max":
                        return { max: parseNum(words[1]) };
                }
                break;

            case 3:
                if (words[1].toLowerCase() == "to") {
                    function parseBound(name: string, pos: number) {
                        if (words[pos].toLowerCase() == name) {
                            return undefined;
                        }
                        return parseNum(words[pos]);
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
        }

        throw new MatterError(`Illegal constraint "${words.join(" ")}"`);
    }

    /**
     * Parse constraint DSL.  Extremely lenient.
     */
    export function parse(definition: string): Ast {
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
                const atom = parseAtom(words);
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
                        if (!depth) {
                            throw new MatterError('Illegal constraint: Unexpected "]"');
                        }
                        next();
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
                throw new MatterError("Illegal constraint: Unterminated sub-constraint");
            }

            emit();

            if (parts.length < 2) {
                return parts[0];
            }
    
            return { type: "sequence", parts: parts };
        }

        return scan(0);
    }
}
