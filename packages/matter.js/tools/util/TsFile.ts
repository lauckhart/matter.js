/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { writeMatterFile } from "./file.js";
import { wordWrap } from "./string.js";

const HEADER = `/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/`;

const TAB_SIZE = 4;
const WRAP_WIDTH = 120;

export class Block extends Array<any> {
    constructor(private parentBlock: Block | undefined, ...entries: any[]) {
        super(...entries);
    }

    override toString(linePrefix = "") {
        const pieces = new Array<string>();
        for (let i = 0; i < this.length; i++) {
            const str = `${this[i]}${this.delimiterAfter(i)}`;
            str.split("\n").forEach((line: string) => {
                if (line) {
                    pieces.push(`${linePrefix}${line}`);
                } else {
                    pieces.push("");
                }
            });
            if (i < this.length - 1 && this[i] instanceof Block && str.length && this[i + 1] != "") {
                // Always have blank line after blocks with following content
                pieces.push("");
            }
        }
        return pieces.join("\n");
    }

    /** Access the (required) parent */
    get parent() {
        if (!this.parentBlock) throw new Error("Undefined parent access");
        return this.parentBlock;
    }

    /** Access the file */
    get file() {
        let b: Block = this;
        while (!(b instanceof TsFile)) {
            b = b.parent;
        }
        return b;
    }

    /** Delete from parent */
    remove() {
        if (this.parentBlock) {
            const index = this.parentBlock.indexOf(this);
            if (index != -1) this.parentBlock.splice(index, 1);
        }
    }

    /** Add entries.  Each entry will be serialized using toString() */
    add(...entries: any[]) {
        this.push(...entries);
        return this;
    }

    /** Add a blank line */
    blank() {
        return this.add("");
    }

    /** Add a save point that allows for out-of-order insertion */
    section(...entries: any[]) {
        const section = new Block(this, ...entries);
        this.add(section);
        return section;
    }

    /** Add a block with separate statements terminated by ";" */
    statements(prefix: string = "", suffix = "", ...entries: any[]) {
        const block = new StatementBlock(this, prefix, suffix, ...entries);
        this.add(block);
        return block;
    }

    /** Add a comma-delimited block */
    expressions(prefix: string, suffix: string, ...entries: any[]) {
        const block = new ExpressionBlock(this, prefix, suffix, ...entries);
        this.add(block);
        return block;
    }

    /** Add a statement or expression that will be automatically delimited */
    atom(labelOrEntry: any, entry?: any) {
        this.add(new Atom(labelOrEntry, entry));
        return this;
    }

    /** Add a TsDoc style comment */
    document(content: string) {
        let width = WRAP_WIDTH - 3;
        const other = this;
        while (other.parent) {
            if (other instanceof StatementBlock) {
                width -= TAB_SIZE;
            }
        }
        const lines = wordWrap(content);
        this.add("/**");
        lines.forEach(l => this.add(` * ${l}`));
        this.add(" */");
    }

    protected delimiterAfter(_index: number) {
        return "";
    }
}

class Atom {
    private content: String;

    constructor(labelOrEntry: any, entry: any) {
        if (entry == undefined) {
            this.content = labelOrEntry;
        } else {
            const label = !labelOrEntry.match(/^[\$_a-z][\$_a-z0-9]*$/i)
                ? JSON.stringify(labelOrEntry)
                : labelOrEntry;
            this.content = `${label}: ${entry}`;
        }
    }

    toString() {
        return this.content;
    }
}

class NestedBlock extends Block {
    constructor(parent: Block | undefined, private prefix: string, private suffix: string, ...entries: any[]) {
        super(parent, ...entries);
    }

    override toString() {
        let contents = super.toString("".padStart(TAB_SIZE));
        if (contents) contents = `${contents}\n`;
        let text = `${contents}`;
        if (this.prefix) text = `${this.prefix}${text}`;
        if (this.suffix) text = `${text}${this.suffix}`;
        return text;
    }

    protected isDelimited(index: number) {
        return this[index] instanceof Atom || this[index] instanceof Block;
    }
}

class StatementBlock extends NestedBlock {
    constructor(parent: Block | undefined, prefix: string = "{\n", suffix: string = "}", ...entries: any[]) {
        super(parent, prefix, suffix, entries);
    }

    override delimiterAfter(index: number) {
        if (this.isDelimited(index)) {
            return ";";
        }
        return "";
    }
}

class ExpressionBlock extends NestedBlock {
    constructor(parent: Block, prefix: string, suffix: string, ...entries: any[]) {
        super(parent, `${prefix}\n`, suffix, ...entries);
    }

    override delimiterAfter(index: number) {
        if (this.isDelimited(index)) {
            for (let i = index + 1; i < this.length; i++) {
                if (this.isDelimited(i)) return ",";
            }
        }
        return "";
    }
}

/**
 * Quick & dirty support for code gen.  Mostly string based but slightly higher
 * level.  And less cumberson than e.g. TS compiler AST
 */
export class TsFile extends Block {
    private imports = new Map<string, Array<string>>();
    private header!: Block;

    constructor(
        public name: string,
        ...parts: any[]
    ) {
        super(undefined, ...parts);
        this.header = this.section(HEADER);
    }

    addImport(file: string, name: string) {
        let list = this.imports.get(file);
        if (!list) {
            list = new Array<string>();
            this.imports.set(file, list);
        }
        if (list.indexOf(name) == -1) list.push(name);
        return this;
    }

    save() {
        if (this.imports.size) {
            const importBlock = this.header.section();
            importBlock.blank();
            this.imports.forEach((symbols, name) => {
                importBlock.add(`import { ${symbols.join(", ")} } from "${name}.js";`);
            });
        }

        writeMatterFile(`${this.name}.ts`, this);
        return this;
    }
}
