/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeModel, ClusterModel, Datatype, DatatypeModel, MatterModel, Metatype } from "../../../src/model/index.js";

describe("Model", () => {
    describe("local", () => {
        it("finds all models by type", () => {
            expect(Fixtures.matter.childrenOfType(ClusterModel).length).toBe(3);

            // 66 standard datatypes + 3 defined in our fake model
            expect(Fixtures.matter.childrenOfType(DatatypeModel).length).toBe(69);
        })

        it("finds by ID", () => {
            expect(Fixtures.matter.childOfType(ClusterModel, 1)).toBe(Fixtures.cluster1);
            expect(Fixtures.matter.childOfType(AttributeModel, 1)).toBe(Fixtures.globalAttr);
        })

        it("finds by name", () => {
            expect(Fixtures.matter.childOfType(ClusterModel, "Cluster1")).toBe(Fixtures.cluster1);
        })
    })

    describe("base", () => {
        it("finds global base type", () => {
            expect(Fixtures.cluster1StructType.base).toBe(Fixtures.globalStruct);
        })

        it("finds local base type", () => {
            expect(Fixtures.cluster1StructField.base).toBe(Fixtures.cluster1StructType);
        })

        it("finds inherited base type", () => {
            expect(Fixtures.cluster2StructField.base).toBe(Fixtures.cluster1StructType);
        })

        it("is inferred from inherited base", () => {
            expect(Fixtures.feature.base?.name).toBe(Datatype.uint32);
        })
    })

    describe("metatype", () => {
        it("represents global base type", () => {
            expect(Fixtures.cluster1StructType.effectiveMetatype).toBe(Metatype.object);
        })

        it("represents local base type", () => {
            expect(Fixtures.cluster1StructField.effectiveMetatype).toBe(Metatype.object);
        })

        it("represents inherited base type", () => {
            expect(Fixtures.cluster2StructField.effectiveMetatype).toBe(Metatype.object);
        })

        it("is inferred from inherited base type", () => {
            expect(Fixtures.enumValue2.effectiveMetatype).toBe(Metatype.integer);
        })
    });

    describe("enum values", () => {
        it("infers ID", () => {
            expect(Fixtures.enumValue2.effectiveId).toBe(1);
        })

        it("infers type", () => {
            expect(Fixtures.enumValue2.effectiveType).toBe(Datatype.uint16)
        })
    });

    describe("type", () => {
        it("is inherited on datatype override", () => {
            expect(Fixtures.cluster1StructFieldOverride.effectiveType).toBe(Datatype.string);
        })

        it("is inherited on secondary datatype override", () => {
            expect(Fixtures.cluster2StructFieldOverride.effectiveType).toBe(Datatype.string);
        })

        it("is inherited on attribute override", () => {
            expect(Fixtures.cluster2Attr.effectiveType).toBe(Datatype.uint8);
        })
    });
})

namespace Fixtures {
    export const globalStruct = new DatatypeModel({ name: "GlobalStruct", type: "struct", children: [
        { tag: "datatype", name: "numField", type: "uint16" },
        { tag: "datatype", name: "strField", type: "string" }
    ]});

    export const cluster1StructFieldOverride = new DatatypeModel({ name: "strField" });
    export const cluster1StructType = new DatatypeModel({ name: "ClusterDatatype", type: "GlobalStruct", children: [
        { tag: "datatype", name: "numField2", type: "single" },
        cluster1StructFieldOverride
    ]});

    export const cluster1StructField = new DatatypeModel({ name: "structField", type: "ClusterDatatype" });

    export const globalAttr = new AttributeModel({ id: 1, name: "Attr1" });

    export const feature = new DatatypeModel({ tag: "datatype", name: "PIN" });

    export const cluster1 = new ClusterModel({ id: 1, name: "Cluster1", children: [
        { tag: "attribute", id: 0xfffc, name: "FeatureMap", type: "FeatureMap", children: [
            feature
        ]},
        { tag: "attribute", id: 1, name: "byteAttr", type: "uint8" },
        { tag: "attribute", id: 2, name: "structAttr", type: "struct", children: [
            { tag: "datatype", name: "numField", type: "double" },
            { tag: "datatype", name: "enumField", type: "GlobalEnum" },
            cluster1StructField
        ]},
        cluster1StructType
    ]});

    export const cluster2StructFieldOverride = new DatatypeModel({ name: "strField" });
    export const cluster2StructField = new DatatypeModel({ id: 1, name: "inheritedStruct", type: "ClusterDatatype", children: [
        cluster2StructFieldOverride
    ]});
    export const cluster2Attr = new AttributeModel({ id: 1, name: "byteAttr" });

    export const enumValue2 = new DatatypeModel({ name: "Value2"});

    export const matter = new MatterModel({
        name: "Fake Matter",
        children: [
            cluster1,
            { tag: "cluster", id: 2, name: "Cluster2", type: "Cluster1", children: [
                cluster2StructField,
                cluster2Attr 
            ]},
            { tag: "cluster", id: 3, name: "Cluster3" },
            globalAttr,
            { tag: "datatype", name: "GlobalByte", type: "uint8" },
            globalStruct,
            { tag: "datatype", type: "enum16", name: "GlobalEnum", children: [
                { tag: "datatype", name: "Value1" },
                enumValue2
            ]}
        ]
    });
}
