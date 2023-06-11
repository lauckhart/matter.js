/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "../../util/String.js";
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
    desc?: boolean;
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
    export type NumberOrIdentifier = number | string;

    /**
     * Parsed list structure.
     */
    export type Ast = {
        /**
         * Indicates constraint is defined in prose and cannot be enforced
         * automatically.
         */
        desc?: boolean,

        /**
         * Lower bound on value or sequence length.
         */
        min?: NumberOrIdentifier,

        /**
         * Upper bound on value or sequence length.
         */
        max?: NumberOrIdentifier,

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
    export type Definition = (Ast & { definition?: Definition }) | string | number | undefined;

    function parseNum(numOrName: string): number | string {
        let value = Number.parseFloat(numOrName);
        if (Number.isNaN(value)) {
            return camelize(numOrName);
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
                        return { desc: true };

                    case "all":
                        return {};
                }
                const value = parseNum(words[0]);
                if (value == undefined) {
                    return;
                }
                return { min: value, max: value };

            case 2:
                switch (words[0].toLowerCase()) {
                    case "min":
                        const min = parseNum(words[1]);
                        if (min == undefined) {
                            return;
                        }
                        return { min: min };

                    case "max":
                        const max = parseNum(words[1]);
                        if (max == undefined) {
                            return;
                        }
                        return { max: max };

                    default:
                        constraint.error("MIN_MAX_EXPECTED", 'Two word constraint must start with "min" or "max"')
                }
                return;

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
                    
                    if (ast.min != undefined || ast.max != undefined) {
                        return ast;
                    }
                }
                return;
        }

        constraint.error("UNRECOGNIZED_VALUE", `Unrecognized value constraint "${words.join(" ")}"`);
    }

    /**
     * Parse constraint DSL.  Extremely lenient.
     */
    export function parse(constraint: Constraint, definition: string): Ast {
        let pos = 2;
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
                if (word) {
                    words.push(word);
                    word = "";
                }

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
                        }
                        break;

                    case "[":
                        next();
                        let ast = parseWords();
                        const entry = scan(depth + 1);
                        if (entry) {
                            if (!ast) {
                                ast = {};
                            }
                            ast.entry = entry;
                        }
                        if (ast) {
                            parts.push(ast);
                        }
                        break;
                    
                    case "]":
                        if (!depth) {
                            constraint.error("UNEXPECTED_OPTION_END", 'Unexpected "]"');
                            break;
                        }
                        emit();
                        if (parts.length > 1) {
                            return { parts: parts };
                        }
                        return parts[0];

                    case ",":
                        emit();
                        break;

                    default:
                        word += current;
                        break;
                }

                next();
            }

            if (depth) {
                constraint.error("PREMATURE_TERMINATION", "Unterminated sub-constraint");
            }

            emit();

            if (parts.length < 2) {
                return parts[0];
            }
    
            return { parts: parts };
        }

        return scan(0);
    }

    function serializeAtom(ast: Ast) {
        if (ast.desc) {
            return "desc";
        }

        if (ast.min != undefined) {
            if (ast.max == undefined) {
                return `min ${ast.min}`;
            } else if (ast.min == ast.max) {
                return `${ast.min}`;
            }
            return `${ast.min} to ${ast.max}`;
        } else if (ast.max != undefined) {
            return `max ${ast.max}`;
        }

        return "all";
    }

    export function serialize(ast: Ast): string {
        if (ast.parts) {
            return ast.parts.map(serialize).join(", ");
        }
        if (ast.entry) {
            return `${serializeAtom(ast)}[${serialize(ast.entry)}]`;
        }
        return serializeAtom(ast);
    }
}
