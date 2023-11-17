/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneratedClass } from "../../src/util/GeneratedClass.js"

describe("GeneratedClass", () => {
    it("names classes correctly", () => {
        expect(GeneratedClass({}).name).equals("GeneratedClass");

        const Foo = GeneratedClass({ name: "Foo" });
        expect(Foo.name).equals("Foo");

        expect(GeneratedClass({ base: Foo }).name).equals("Foo$");
    })

    it("sets static property", () => {
        expect((GeneratedClass({ staticProperties: { foo: "bar" }}) as any).foo).equals("bar");
    })

    it("sets static descriptor", () => {
        expect((GeneratedClass({ staticDescriptors: { foo: { value: "bar" } }}) as any).foo).equals("bar");
    })

    it("inherits static property", () => {
        const Base = GeneratedClass({ staticProperties: { foo: "bar" }});
        expect((GeneratedClass({ base: Base }) as any).foo).equals("bar");
    })

    it("inherits static descriptor", () => {
        const Base = GeneratedClass({ staticDescriptors: { foo: { value: "bar" } }});
        expect((GeneratedClass({ base: Base }) as any).foo).equals("bar");
    })

    it("instantiates as instanceof", () => {
        const Klass = GeneratedClass({});
        const instance = new Klass;
        expect(instance.constructor).equals(Klass);
        expect(instance).instanceof(Klass);
    })

    it("requires new", () => {
        const Klass = GeneratedClass({});
        expect(() => (Klass as any)()).throws("Class constructor \"GeneratedClass\" cannot be invoked without 'new'");
    })

    it("instantiates as instanceof base", () => {
        class Base {}
        const Klass = GeneratedClass({ base: Base });
        const instance = new Klass;
        expect(instance.constructor).equals(Klass);
        expect(instance) instanceof Klass;
        expect(instance) instanceof Base;
    })

    it("sets instance property", () => {
        expect((new (
            GeneratedClass({ instanceProperties: { foo: "bar" }}
        )) as any).foo).equals("bar");
    })

    it("sets instance descriptor", () => {
        expect((new (
            GeneratedClass({ instanceDescriptors: { foo: { value: "bar" } }})
        ) as any).foo).equals("bar");
    })

    it("inherits instance property", () => {
        const Base = GeneratedClass({ instanceProperties: { foo: "bar" }});
        expect((new (
            GeneratedClass({ base: Base })
        ) as any).foo).equals("bar");
    })

    it("inherits instance descriptor", () => {
        const Base = GeneratedClass({ instanceDescriptors: { foo: { value: "bar" } }});
        expect((new (
            GeneratedClass({ base: Base })
        ) as any).foo).equals("bar");
    })

    it("initializes", () => {
        const klass = GeneratedClass({
            initialize(this: { foo: string }, input: string) {
                this.foo = input.toUpperCase();
            }
        })

        expect((new klass("hello") as any).foo).equals("HELLO");
    })

    it("delegates to super", () => {
        const klass = GeneratedClass({
            base: Object,
            
            super(construct) {
                const instance = construct();
                (instance as any).foo = "bar";
                return instance;
            }
        });

        expect((new klass() as any).foo).equals("bar");
    })
})
