/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/index.js";

export class IllegalAccessError extends MatterError {}

/**
 * An operational representation of "access" as defined by the Matter
 * specification.
 * 
 * "Access" controls the operations a remote party may perform on a data field
 * or cluster element.
 */
export class Access extends Set<Access.Flag> {
    /**
     * Initialize from an Access.Definition or the access control DSL defined
     * by the Matter Specification.
     */
    constructor(definition: string | Access.Definition) {
        if (Array.isArray(definition)) {
            super(Access.flatten(definition));
        } else {
            super(Access.parse(definition));
        }
    }

    /**
     * Convert an AccessDefinition into AccessFlag[].
     */
    static flatten(definition: Access.Definition) {
        const flags = [] as Access.Flag[];
        for (const a of definition) {
            if (typeof a == "string") {
                flags.push(a);
            } else {
                flags.push(...a);
            }
        }
        return flags;
    }

    /**
     * Parses standard Matter access syntax into an AccessFlag set.  Extremely
     * lenient.
     */
    static parse(definition: string) {
        definition = definition.toUpperCase();
        const flags = new Set<Access.Flag>;
        for (let i = 0; i < definition.length; i++) {
            switch (definition[i]) {
                case 'R': flags.add(Access.Rw.Read); break;
                case 'F': flags.add(Access.Fabric.Scoped); break;
                case 'S': flags.add(Access.Fabric.Sensitive); break;
                case 'V': flags.add(Access.Privilege.View); break;
                case 'O': flags.add(Access.Privilege.Operate); break;
                case 'M': flags.add(Access.Privilege.Manage); break;
                case 'A': flags.add(Access.Privilege.Administer); break;
                case 'T': flags.add(Access.Timed.Required); break;

                case 'W':
                    // Write is stronger requirement than WriteOption
                    flags.delete(Access.Rw.WriteOption);
                    flags.add(Access.Rw.Write);
                    break;

                case '[':
                    // Optional write syntax.  Note only R[W] is legal but we
                    // allow for bare [W]
                    if (i < definition.length - 2 && definition[i + 1] == "W" && definition[i + 2] == "]") {
                        if (!flags.has(Access.Rw.Write)) {
                            flags.add(Access.Rw.WriteOption);
                        }
                        i += 2;
                    }
                    break;
                
                case '*':
                    // Deprecated syntax, again allow for *W when only R*W is
                    // legal
                    if (i < definition.length - 1 && definition[i + 1] == "W") {
                        if (!flags.has(Access.Rw.Write)) {
                            flags.add(Access.Rw.WriteOption);
                        }
                        i++;
                    }
                    break;
                
                case " ":
                case "\t":
                case "\n":
                case "\r":
                case "\f":
                case "\v":
                    break;

                default:
                    throw new IllegalAccessError(`Unknown access flag "${definition[i]}"`);
            }
        }
        return flags;
    }

    /**
     * Displays access using the standard Matter syntax.
     */
    override toString() {
        const rw = [];
        if (this.has(Access.Rw.Read))
            rw.push("R");
        if (this.has(Access.Rw.Write))
            rw.push("W");
        else if (this.has(Access.Rw.WriteOption)) {
            if (!this.has(Access.Rw.Read))
                rw.push("R");
            rw.push("[W]");
        }

        const fs = [];
        if (this.has(Access.Fabric.Scoped))
            fs.push("F");
        if (this.has(Access.Fabric.Sensitive))
            fs.push("S");

        const voma = [];
        if (this.has(Access.Privilege.View))
            voma.push("V");
        if (this.has(Access.Privilege.Operate))
            voma.push("O");
        if (this.has(Access.Privilege.Manage))
            voma.push("M");
        if (this.has(Access.Privilege.Administer))
            voma.push("A");
        
        const t = [];
        if (this.has(Access.Timed.Required))
            t.push("T");

        const all = [ rw, fs, voma, t ]
            .filter((e) => e.length)
            .map((e) => e.join(""))
            .join(" ");

        if (all.length)
            return all;

        return "(no access)";
    }
}

export namespace Access {
    /**
     * Types of read/write access.
     */
    export enum Rw {
        /**
         * Read access.
         */
        Read = "R",

        /**
         * Write access.
         */
        Write = "W",

        /**
         * Optional write access (read access required per Matter specification).
         */
        WriteOption = "[W]",
    }

    /**
     * Affect of fabric on access.
     */
    export enum Fabric {
        /**
         * Writable only by scoped fabric.
         */
        Scoped = "F",

        /**
         * Readable and writable only by scoped fabric.
         */
        Sensitive = "S"
    }

    /**
     * Privilege required for access.
     */
    export enum Privilege {
        /**
         * View privilege.
         */
        View = "V",

        /**
         * Operate privilege.
         */
        Operate = "O",

        /**
         * Manage privilege.
         */
        Manage = "M",

        /**
         * Administer privilege.
         */
        Administer = "A"
    }

    /**
     * Timed access requirement.
     */
    export enum Timed {
        /**
         * Timed access required.
         */
        Required = "T"
    }

    /**
     * All atomic access control values.
     */
    export type Flag
        = Rw
        | Fabric
        | Privilege
        | Timed;

    /**
     * A defined set of access control values.
     */
    export type Flags = Set<Flag>;

    /**
     * Read access.
     */
    export const R = [ Rw.Read ] as [ Rw.Read ];

    /**
     * Write access.
     */
    export const W = [ Rw.Write ] as [ Rw.Write ];

    /**
     * Read and write access.
     */
    export const RW = [ Rw.Read, Rw.Write ] as [ Rw.Read, Rw.Write ];

    /**
     * Read with optional write.
     */
    export const RWo = [ Rw.Read, Rw.WriteOption ] as [ Rw.Read, Rw.WriteOption ]

    /**
     * Fabric-scoped quality
     */
    export const F = [ Fabric.Scoped ] as [ Fabric.Scoped ];

    /**
     * Fabric-sensitive quality.
     */
    export const S = [ Fabric.Sensitive ] as [ Fabric.Sensitive ];

    /**
     * Fabric scoped & sensitive.
     */
    export const FS = [ Fabric.Scoped, Fabric.Sensitive ] as [ Fabric.Scoped, Fabric.Sensitive ];

    /**
     * View allowed.
     */
    export const V = [ Privilege.View ] as [ Privilege.View ];

    /**
     * Operate allowed.
     */
    export const O = [ Privilege.Operate ] as [ Privilege.Operate ];

    /**
     * Manage allowed.
     */
    export const M = [ Privilege.Manage ] as [ Privilege.Manage ];

    /**
     * Administer allowed.
     */
    export const A = [ Privilege.Administer ] as [ Privilege.Administer ];

    /**
     * View and operate allowed.
     */
    export const VO = [ Privilege.View, Privilege.Operate ] as [ Privilege.View, Privilege.Operate ];

    /**
     * View, operate and manage allowed.
     */
    export const VOM = [ Privilege.View, Privilege.Operate, Privilege.Manage ] as [ Privilege.View, Privilege.Operate, Privilege.Manage ];

    /**
     * View, operate, manage and administer allowed.
     */
    export const VOMA = [ Privilege.View, Privilege.Operate, Privilege.Manage, Privilege.Administer ] as [ Privilege.View, Privilege.Operate, Privilege.Manage, Privilege.Administer ];

    /**
     * View, operate, manage and administer allowed.
     */
    export const VOA = [ Privilege.View, Privilege.Operate, Privilege.Administer ] as [ Privilege.View, Privilege.Operate, Privilege.Administer ];

    /**
     * View and manage allowed.
     */
    export const VM = [ Privilege.View, Privilege.Manage ] as [ Privilege.View, Privilege.Manage ];

    /**
     * View, manage and administer allowed.
     */
    export const VMA = [ Privilege.View, Privilege.Manage, Privilege.Administer ] as [ Privilege.View, Privilege.Manage, Privilege.Administer ];

    /**
     * View and administer allowed.
     */
    export const VA = [ Privilege.View, Privilege.Administer ] as [ Privilege.View, Privilege.Administer ];

    /**
     * Operate and manage allowed.
     */
    export const OM = [ Privilege.Operate, Privilege.Manage ] as [ Privilege.Operate, Privilege.Manage ];

    /**
     * Operate, manage and administer allowed.
     */
    export const OMA = [ Privilege.Operate, Privilege.Manage, Privilege.Administer ] as [ Privilege.Operate, Privilege.Manage, Privilege.Administer ];

    /**
     * Operate and administer allowed.
     */
    export const OA = [ Privilege.Operate, Privilege.Administer ] as [ Privilege.Operate, Privilege.Administer ];

    /**
     * Manage and administer allowed.
     */
    export const MA = [ Privilege.Manage, Privilege.Administer ] as [ Privilege.Manage, Privilege.Administer ];

    /**
     * Timed access required.
     */
    export const T = [ Timed.Required ] as [ Timed.Required ];

    /**
     * All valid R/W tags.
     */
    export type RwTag
        = typeof R
        | typeof W
        | typeof RW
        | typeof RWo;

    /**
     * All valid fabric tags.
     */
    export type FabricTag
        = typeof F
        | typeof S
        | typeof FS;

    /**
     * All valid privilege tags.
     */
    export type PrivilegeTag
        = typeof V
        | typeof VO
        | typeof VOM
        | typeof VOMA
        | typeof VOA
        | typeof VM
        | typeof VMA
        | typeof VA
        | typeof O
        | typeof OM
        | typeof OMA
        | typeof OA
        | typeof M
        | typeof MA
        | typeof A;

    /**
     * All valid timed tags.
     */
    export type TimedTag
        = typeof T;

    /**
     * Defines access as defined in the Matter 1.1 specification.
     * 
     * In TypeScript and JavaScript, definitions adhering to this type look like
     * `[ RW, VOA ]`.
     */
    export type Definition
        = [ RwTag ]
        | [ RwTag, FabricTag ]
        | [ RwTag, FabricTag, PrivilegeTag ]
        | [ RwTag, PrivilegeTag ]
        | [ FabricTag ]
        | [ FabricTag, PrivilegeTag ]
        | [ PrivilegeTag ]
        | [ RwTag, TimedTag ]
        | [ RwTag, FabricTag, TimedTag ]
        | [ RwTag, FabricTag, PrivilegeTag, TimedTag ]
        | [ RwTag, PrivilegeTag, TimedTag ]
        | [ FabricTag, TimedTag ]
        | [ FabricTag, PrivilegeTag, TimedTag ]
        | [ PrivilegeTag, TimedTag ]
        | [ TimedTag ];
}
