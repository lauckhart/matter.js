/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Specification } from "../../src/model/index.js";
import { writeMatterFile } from "./file.js";
import { wordWrap } from "./string.js";

const HEADER = `/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/`;

const INDENT = "    ";
const WRAP_WIDTH = 120;

type Documentation = {
    description?: string,
    details?: string,
    xref?: Specification.CrossReference
}

abstract class Entry {
    private documentation?: Documentation;
    private docText?: string;

    constructor(protected parentBlock: Block | undefined) {}

    get isDocumented() {
        return !!this.documentation || !!this.docText;
    }

    /** Add a TsDoc style comment */
    document(content: string | Documentation, extra?: string) {
        if (typeof content == "string") {
            this.documentation = { details: content };
        } else {
            this.documentation = content;
        }
        this.docText = extra;
    }

    toString(linePrefix = "") {
        return `${this.serializeComment(linePrefix)}${this.serialize(linePrefix)}`;
    }

    protected abstract serialize(linePrefix: string): string;

    private serializeComment(linePrefix: string) {
        let paragraphs = Array<string>();
        
        if (this.documentation?.details) {
            paragraphs.push(this.documentation.details);
        } else if (this.documentation?.description) {
            paragraphs.push(this.documentation.description);
        }

        if (this.docText) {
            paragraphs.push(this.docText);
        }

        // Word wrap documentation
        const lines = wordWrap(paragraphs.join("\n"), WRAP_WIDTH - 3 - linePrefix.length);

        // Add xref after wrapping so we can ensure it never wraps
        const xref = this.documentation?.xref;
        if (xref) {
            let spec;
            switch (xref.document) {
                case "core":
                    spec = "MatterCoreSpecificationV1_1";
                    break;

                case "cluster":
                    spec = "MatterApplicationClusterSpecificationV1_1";
                    break;

                case "device":
                    spec = "MatterDeviceLibrarySpecificationV1_1";
                    break;
            }
            if (spec) {
                if (lines.length) {
                    lines.push("");
                }
                this.parentBlock!.file.addImport("spec/Specifications", spec);
                lines.push(`@see {@link ${spec}} § ${xref.section}`);
            }
        }

        if (lines.length) {
            return `${linePrefix}/**\n${lines.map(l => `${linePrefix} * ${l}`.trimEnd()).join("\n")}\n${linePrefix} */\n`
        }

        return "";
    }
}

class Raw extends Entry {
    text: string;

    constructor(parentBlock: Block, text: {}) {
        super(parentBlock);
        this.text = text.toString();
    }

    serialize(linePrefix: string) {
        if (this.text == undefined) {
            return "";
        }
        return this.text.split("\n").map(l => `${linePrefix}${l}`).join("\n");
    }
}

class Atom extends Raw {
    constructor(parentBlock: Block, labelOrText: {}, text?: any) {
        if (text == undefined) {
            text = labelOrText.toString();
        } else {
            let label = labelOrText.toString();
            if (!label.match(/^[\$_a-z][\$_a-z0-9]*$/i)) {
                label = JSON.stringify(label);
            }
            text = `${label}: ${text}`;
        }

        super(parentBlock, text);
    }
}

export class Block extends Entry {
    entries = Array<Entry>();

    constructor(parentBlock: Block | undefined) {
        super(parentBlock);
    }

    get length() {
        return this.entries.length;
    }

    indexOf(entry: Entry) {
        return this.entries.indexOf(entry);
    }

    splice(start: number, deleteCount?: number) {
        return this.entries.splice(start, deleteCount);
    }

    get(index: number) {
        return this.entries[index];
    }    

    serialize(linePrefix: string) {
        const pieces = new Array<string>();
        for (let i = 0; i < this.length; i++) {
            pieces.push(`${this.get(i).toString(linePrefix)}${this.delimiterAfter(i)}`);
            if (i < this.length - 1) {
                if (this.get(i) instanceof Block) {
                    // Always have blank line after blocks with following content
                    pieces.push("");
                } else if (this.get(i) instanceof Atom && (this.get(i + 1).isDocumented)) {
                    // Always have blank line after atoms followed by a comment
                    pieces.push("");
                }
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
    add(...entries: Entry[]) {
        this.entries.push(...entries);
        return this;
    }

    /** Add raw text */
    raw(text: {}) {
        return this.add(new Raw(this, text));
    }

    /** Add a blank line */
    blank() {
        return this.raw("");
    }

    /** Add a save point that allows for out-of-order insertion */
    section() {
        const section = new Block(this);
        this.add(section);
        return section;
    }

    /** Add a block with separate statements terminated by ";" */
    statements(prefix: string = "", suffix = "") {
        const block = new StatementBlock(this, prefix, suffix);
        this.add(block);
        return block;
    }

    /** Add a comma-delimited block */
    expressions(prefix: string, suffix: string) {
        const block = new ExpressionBlock(this, prefix, suffix);
        this.add(block);
        return block;
    }

    /** Add a statement or expression that will be automatically delimited */
    atom(labelOrText: {}, text?: any) {
        this.add(new Atom(this, labelOrText, text));
        return this;
    }

    protected delimiterAfter(index: number): string {
        if (this.isDelimited(index)) {
            return ";";
        }
        return "";
    }

    protected isDelimited(index: number) {
        return this.get(index) instanceof Atom || this.get(index) instanceof NestedBlock;
    }
}

abstract class NestedBlock extends Block {
    /** Add a TsDoc style comment */
    doc?: string | Documentation;

    constructor(parent: Block | undefined, protected prefix: string, protected suffix: string) {
        super(parent);
    }

    override serialize(linePrefix = "") {
        const childLinePrefix = `${linePrefix}${INDENT}`;
        const serializedEntries = this.entries.map(e => e.toString(childLinePrefix));
        return this.layOutEntries(linePrefix, serializedEntries);
    }

    layOutEntries(linePrefix: string, serializedEntries: string[]) {
        let parts = Array<string>();
        if (this.prefix) {
            parts.push(`${linePrefix}${this.prefix}`);
        }
        
        for (let i = 0; i < serializedEntries.length; i++) {
            // Add delimiter to entry if necessary
            const entry = `${serializedEntries[i]}${this.delimiterAfter(i)}`;

            // Add the entry
            parts.push(entry);
        }

        if (this.suffix) {
            parts.push(`${linePrefix}${this.suffix}`);
        }
        return parts.join("\n");
    }
}

class StatementBlock extends NestedBlock {
    constructor(parent: Block | undefined, prefix: string = "{", suffix: string = "}") {
        super(parent, prefix, suffix);
    }
}

// These are different methods for formatting expression blocks.  We want to
// optimize for (in order of priority) readability and size
enum ExpressionLayout {
    None,
    SingleLine,
    MultipleLines,
    Verbose
};

function chooseExpressionLayout(currentLayout: ExpressionLayout, serializedEntry: string) {
    const multiline = serializedEntry.indexOf("\n") != -1;
    const simpleBlock = serializedEntry.match(/^(?:\[.*\]|\{.*\})$/);

    // If the entry is multiline but not a block, must use verbose layout
    if (multiline && !simpleBlock) {
        return ExpressionLayout.Verbose;
    }

    switch (currentLayout) {
        case ExpressionLayout.None:
            return simpleBlock ? ExpressionLayout.Verbose : ExpressionLayout.SingleLine;

        case ExpressionLayout.SingleLine:
            if (!multiline) {
                return ExpressionLayout.MultipleLines;
            }
            break;

        case ExpressionLayout.MultipleLines:
            if (!multiline) {
                return currentLayout;
            }
            break;
    }

    return ExpressionLayout.Verbose;
}

class ExpressionBlock extends NestedBlock {
    constructor(parent: Block, prefix: string, suffix: string) {
        super(parent, prefix, suffix);
    }

    override layOutEntries(linePrefix: string, serializedEntries: string[]) {
        // Scan the entries to determine how we format the code
        let layout = ExpressionLayout.None;
        for (const entry of serializedEntries) {
            layout = chooseExpressionLayout(layout, entry);
            if (layout == ExpressionLayout.Verbose) {
                // Must use least optimal "verbose" format
                break;
            }
        }

        // Render optimized layouts
        switch (layout) {
            case ExpressionLayout.None:
                return `${linePrefix}${this.prefix}${this.suffix}`;

            case ExpressionLayout.SingleLine:
                return `${linePrefix}${this.prefix} ${serializedEntries[0].trim()} ${this.suffix}`;

            case ExpressionLayout.MultipleLines:
                return `${linePrefix}${this.prefix}\n${serializedEntries.join(",\n")}\n${linePrefix}${this.suffix}`;
        }

        // "Verbose" layout is the standard provided by super
        return super.layOutEntries(linePrefix, serializedEntries);
    }

    override delimiterAfter(index: number) {
        if (this.isDelimited(index)) {
            for (let i = index + 1; i < this.length; i++) {
                if (this.isDelimited(i)) {
                    return ",";
                }
            }
        }
        return "";
    }
}

/**
 * Quick & dirty support for code gen.  Less cumberson than e.g. TS compiler
 * AST
 */
export class TsFile extends Block {
    private imports = new Map<string, Array<string>>();
    private header!: Block;

    constructor(public name: string) {
        super(undefined);
        this.header = this.section();
        this.header.raw(HEADER);
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
                importBlock.atom(`import { ${symbols.join(", ")} } from "${name}.js"`);
            });
        }

        writeMatterFile(`${this.name}.ts`, this);
        return this;
    }
}
