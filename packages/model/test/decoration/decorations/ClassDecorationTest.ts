/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Import from index to ensure correct initialization order
import { ClassDecoration, Decoration } from "#decoration/decorations/index.js";

import { cluster } from "#decoration/decorators/cluster.js";
import { datatype } from "#decoration/decorators/datatype.js";
import { field } from "#decoration/decorators/field.js";
import { Schema } from "#decoration/Schema.js";
import { FieldModel } from "#models/FieldModel.js";
import { any, locationdesc, struct, uint32, WindowCovering } from "../../../src/standard/elements/models.js";

describe("ClassDecoration", () => {
    describe("defines datatypes", () => {
        it("derived", () => {
            @datatype(locationdesc)
            class MyLocation {}

            const schema = Schema(MyLocation);
            expect(schema.tag).equals("datatype");
            expect(schema.name).equals("MyLocation");
            expect(schema.base).equals(locationdesc);
        });

        it("standalone", () => {
            class MyState {}

            const schema = Schema(MyState);
            expect(schema.tag).equals("datatype");
            expect(schema.name).equals("MyState");
            expect(schema.base).equals(struct);
        });
    });

    describe("defines clusters", () => {
        it("derived", () => {
            @cluster(WindowCovering)
            class MyWindowCoveringState {}

            const schema = Decoration.modelOf(MyWindowCoveringState);
            expect(schema.tag).equals("cluster");
            expect(schema.name).equals("MyWindowCoveringState");
            expect(schema.base).equals(WindowCovering);
            expect(schema.id).equals(WindowCovering.id);
        });

        it("standalone", () => {
            @cluster(12)
            class MyState {}

            const schema = Decoration.modelOf(MyState);
            expect(schema.tag).equals("cluster");
            expect(schema.name).equals("MyState");
            expect(schema.base).equals(struct);
            expect(schema.id).equals(12);
        });
    });

    describe("derived classes", () => {
        it("carries from base class", () => {
            @cluster(WindowCovering)
            class BasicBlinds {}

            class OverengineeredBlinds extends BasicBlinds {}

            const schema = Schema(OverengineeredBlinds);
            expect(schema.tag).equals("cluster");
            expect(schema.name).equals("OverengineeredBlinds");
        });

        it("merges with base class", () => {
            @cluster(WindowCovering)
            class BasicBlinds {}

            class OverengineeredBlinds extends BasicBlinds {
                @field(uint32)
                foo = 4;
            }

            const schema = Schema(OverengineeredBlinds);
            expect(schema.tag).equals("cluster");
            expect(schema.name).equals("OverengineeredBlinds");

            const foo = schema.children.get(FieldModel, "foo");
            expect(foo).not.undefined;
        });
    });

    it("extends with undecorated fields", () => {
        class Foo {
            bar = 4;

            static [ClassDecoration.extend](decoration: ClassDecoration) {
                decoration.defineUnknownMembers(new Foo());
            }
        }

        const schema = Schema(Foo);
        expect(schema.children.length).equals(1);
        const bar = schema.get(FieldModel, "bar");
        expect(bar).not.undefined;
        expect(bar!.base).equals(any);
    }).timeout(1e9);
});
