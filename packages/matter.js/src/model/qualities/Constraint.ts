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
export class Constraint {
    public definition: Constraint.Definition;

    /**
     * Initialize from a Constraint.Definition or the constraint DSL defined
     * by the Matter Specification.
     */
    constructor(definition: string | Constraint.Definition) {
        if (typeof definition == "string") {
            this.definition = Constraint.parse(definition);
        } else {
            this.definition = definition;
        }
    }
}

export namespace Constraint {
    /**
     * A fixed numeric value or sequence length.
     */
    export type Value = number;

    /**
     * A (possibly unbounded) range of valid values or sequence lengths.
     */
    export type Range = { min?: number, max?: number };

    /**
     * A constraint on a numerical value or sequence length.
     */
    export type Numerical = Value | Range;

    /**
     * A limit on both a list and its entry type.
     */
    export type List = { list?: Definition, entry: Definition };

    /**
     * Constraint is described in prose and cannot be automatically enforced.
     */
    export const Desc = { desc: true };

    /**
     * All non-union constraints.
     */
    export type Atom = Numerical | List | typeof Desc;

    /**
     * A sequence of constraints, any one of which may be true to validate the
     * entire union.
     */
    export type Union = Atom[];

    /**
     * Defines the constraints.
     */
    export type Definition = Atom | Union;

    function parseNum(num: string) {
        const int = Number.parseInt(num);
        if (!Number.isNaN(int)) {
            return int;
        }
        const float = Number.parseFloat(num);
        if (!Number.isNaN(float)) {
            return float;
        }
        throw new MatterError(`Illegal constraint: "${num}" is not a valid number`);
    }

    function parseAtom(words: string[]): Atom | undefined {
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
                return parseNum(words[0]);

            case 2:
                switch (words[0].toLowerCase()) {
                    case "min":
                        return { min: parseNum(words[1]) };
                    case "max":
                        return { max: parseNum(words[1]) };
                }

            case 3:
                if (words[1].toLowerCase() == "to") {
                    function parseBound(name: string, pos: number) {
                        if (words[pos].toLowerCase() == name) {
                            return undefined;
                        }
                        return parseNum(words[pos]);
                    }

                    const atom: Range = {};
                    const min = parseBound("min", 0);
                    if (min != undefined) {
                        atom.min = min;
                    }
                    const max = parseBound("max", 2);
                    if (max != undefined) {
                        atom.max = max;
                    }
                    return atom;
                }
        }

        throw new MatterError(`Illegal constraint "${words.join(" ")}"`);
    }

    /**
     * Parse constraint DSL.  Extremely lenient.
     */
    export function parse(definition: string): Definition {
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

        function scan(depth: number): Definition {
            const parts = Array<Atom>();
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
                        const atom: List = {
                            entry: scan(depth + 1)
                        }
                        if (list != undefined) {
                            atom.list = list;
                        }
                        parts.push(atom);
                        break;
                    
                    case "]":
                        if (!depth) {
                            throw new MatterError('Illegal constraint: Unexpected "]"');
                        }
                        next();
                        return parts;

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
    
            return parts;
        }

        return scan(0);
    }
}
