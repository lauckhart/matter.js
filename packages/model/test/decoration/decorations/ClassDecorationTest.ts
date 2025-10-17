/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Import from index to ensure correct initialization order
import { ClassDecoration } from "#decoration/decorations/index.js";

import { cluster } from "#decoration/decorators/cluster.js";
import { datatype } from "#decoration/decorators/datatype.js";
import { field } from "#decoration/decorators/field.js";
import { Schema } from "#decoration/Schema.js";
import { AttributeModel, ClusterModel } from "#index.js";
import { FieldModel } from "#models/FieldModel.js";
import { any, locationdesc, struct, uint32, WindowCovering } from "../../../src/standard/elements/models.js";

describe("ClassDecoration", () => {
    describe("defines datatypes", () => {
        it("derived", () => {
            @datatype(locationdesc)
            class MyLocation {}

            const schema = Schema.Required(MyLocation);
            expect(schema.tag).equals("datatype");
            expect(schema.name).equals("MyLocation");
            expect(schema.base).equals(locationdesc);
        });

        it("standalone", () => {
            @datatype()
            class MyState {}

            const schema = Schema.Required(MyState);
            expect(schema.tag).equals("datatype");
            expect(schema.name).equals("MyState");
            expect(schema.base).equals(struct);
        });
    });

    describe("defines clusters", () => {
        it("derived", () => {
            @cluster(WindowCovering)
            class MyWindowCoveringState {}

            const schema = Schema.Required(MyWindowCoveringState);
            expect(schema.tag).equals("cluster");
            expect(schema.name).equals("MyWindowCoveringState");
            expect(schema.base).equals(WindowCovering);
            expect(schema.id).equals(WindowCovering.id);
        });

        it("standalone", () => {
            @cluster(12)
            class MyState {}

            const schema = Schema.Required(MyState);
            expect(schema).not.undefined;
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

            @cluster()
            class OverengineeredBlinds extends BasicBlinds {}

            const schema = Schema.Required(OverengineeredBlinds);
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

            const schema = Schema.Required(OverengineeredBlinds);
            expect(schema.tag).equals("cluster");
            expect(schema.name).equals("OverengineeredBlinds");

            const operationalStatus = schema.conformant.properties.for("operationalStatus");
            expect(operationalStatus).not.undefined;

            const foo = schema.conformant.properties.for("foo");
            expect(foo).not.undefined;
        });
    });

    it("extends with unknown fields but not known fields", () => {
        const BaseCluster = new ClusterModel({ id: 1, name: "Foo" }, new AttributeModel({ id: 2, name: "Baz" }));

        @cluster(BaseCluster)
        class Foo {
            @field()
            foo = 3;
        }

        @datatype()
        class Bar extends Foo {
            // Known via base class decorator
            override foo = 3;

            // Unknown - should be added
            bar = 4;

            // Known via base inheritance
            baz = 5;

            static [ClassDecoration.before](decoration: ClassDecoration) {
                decoration.defineUnknownMembers(new Bar());
            }
        }

        const schema = Schema.Required(Bar);
        expect(schema.children.length).equals(1);
        const bar = schema.get(FieldModel, "bar");
        expect(bar).not.undefined;
        expect(bar!.base).equals(any);
    });
});
