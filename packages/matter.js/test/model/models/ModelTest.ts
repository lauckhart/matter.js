/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeModel, ClusterModel, DatatypeModel, MatterModel } from "../../../src/model/index.js";

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
    })
})

namespace Fixtures {
    export const structField = new DatatypeModel({ tag: "datatype", name: "structField", type: "ClusterDatatype" });
    export const cluster1 = new ClusterModel({ id: 1, name: "Cluster1", children: [
        { tag: "attribute", id: 1, name: "byteAttr", type: "uint8" },
        { tag: "attribute", id: 2, name: "structAttr", type: "struct", children: [
            { tag: "datatype", name: "numField", type: "double" },
            { tag: "datatype", name: "enumField", type: "GlobalEnum" },
            structField
        ]},
        { tag: "datatype", name: "ClusterDatatype", type: "GlobalStruct", children: [
            { tag: "datatype", name: "strField2", type: "string" },
            { tag: "datatype", name: "numField2", type: "single" }
        ]}
    ]});
    export const globalAttr = new AttributeModel({ id: 1, name: "Attr1" });

    export const matter = new MatterModel({
        name: "Fake Matter",
        children: [
            cluster1,
            { tag: "cluster", id: 2, name: "Cluster2" },
            { tag: "cluster", id: 3, name: "Cluster3" },
            globalAttr,
            { tag: "datatype", name: "GlobalByte", type: "uint8" },
            { tag: "datatype", name: "GlobalStruct", type: "struct", children: [
                { tag: "datatype", name: "numField", type: "uint16" },
                { tag: "datatype", name: "strField", type: "string" }
            ]},
            { tag: "datatype", type: "enum8", name: "GlobalEnum", children: [
                { tag: "datatype", name: "Value1" },
                { tag: "datatype", name: "Value2"}
            ]}
        ]
    });
}
