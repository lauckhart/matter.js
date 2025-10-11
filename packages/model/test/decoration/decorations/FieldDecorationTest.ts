/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Ensure correct initialization order
import "#decoration/decorations/index.js";

import { Schema } from "#decoration/Schema.js";
import { attribute } from "#decoration/decorators/attribute.js";
import { field } from "#decoration/decorators/field.js";
import { nonvolatile } from "#decoration/decorators/nonvolatile.js";
import { nullable } from "#decoration/decorators/nullable.js";
import { AttributeModel } from "#models/AttributeModel.js";
import { FieldModel } from "#models/index.js";
import { uint16, uint32 } from "#standard/elements/models.js";

describe("FieldDecoration", () => {
    it("sets type", () => {
        class Foo {
            @field(uint32)
            bar = 4;
        }

        const schema = Schema(Foo);
        expect(schema.children.length).equals(1);
        const bar = schema.get(FieldModel, "bar");
        expect(bar).not.undefined;
        expect(bar!.name).equals("bar");
    });

    it("sets attribute ID", () => {
        class Foo {
            @attribute(2, uint32)
            bar = 4;
        }

        const schema = Schema(Foo);
        expect(schema.children.length).equals(1);
        const bar = schema.get(AttributeModel, "bar");
        expect(bar).not.undefined;
        expect(bar!.name).equals("bar");
        expect(bar!.id).equals(2);
    });

    it("sets nullable", () => {
        class Foo {
            @field(uint32, nullable)
            bar = 4;
        }

        const schema = Schema(Foo);
        expect(schema.children.length).equals(1);
        const bar = schema.get(FieldModel, "bar");
        expect(bar).not.undefined;
        expect(bar!.quality.nullable).true;
        expect(bar!.quality.nonvolatile).not.true;
    });

    it("sets nonvolatile", () => {
        class Foo {
            @field(uint32, nonvolatile)
            bar = 4;
        }

        const schema = Schema(Foo);
        expect(schema.children.length).equals(1);
        const bar = schema.get(FieldModel, "bar");
        expect(bar).not.undefined;
        expect(bar!.quality.nullable).not.true;
        expect(bar!.quality.nonvolatile).true;
    });

    it("merges with base class", () => {
        class Obj {
            @field(uint16)
            foo = 4;
        }

        class Obj2 extends Obj {
            @field(uint32)
            bar = 4;
        }

        const schema = Schema(Obj2);

        const foo = schema.get(FieldModel, "foo");
        expect(foo).not.undefined;
        expect(foo!.base).equals(uint16);

        const bar = schema.get(FieldModel, "bar");
        expect(bar).not.undefined;
        expect(bar!.base).equals(uint32);
    });
});
