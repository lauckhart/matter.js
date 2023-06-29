/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement, ClusterModel, ClusterVariance, ElementVariance, FeatureSet, Conformance, Globals, MatterModel } from "../../../src/model/index.js"

describe("ClusterVariance", () => {
    describe("invariant", () => {
        it("classifies mandatory", () => {
            expectVariance(
                attrs({ name: "attr", conformance: "M" }),
                { mandatory: [ "attr" ]}
            )
        })

        it("classifies optional", () => {
            expectVariance(
                attrs({ name: "attr", conformance: "O" }),
                { optional: [ "attr" ]}
            )
        })

        it("classifies mandatory and optional", () => {
            expectVariance(
                attrs(
                    { name: "attr1", conformance: "M" },
                    { name: "attr2", conformance: "O" }
                ),
                {
                    mandatory: [ "attr1" ],
                    optional: [ "attr2" ]
                }
            )
        })

        it("ignores deprecation", () => {
            expectVariance(
                attrs({ name: "attr", conformance: "D" }),
                { optional: [ "attr" ]}
            )
        })

        it("ignores provisional", () => {
            expectVariance(
                attrs({ name: "attr", conformance: "P, M" }),
                { mandatory: [ "attr" ]}
            )
        })
    })

    describe("simple variance", () => {
        it("classifies mandatory by feature", () => {
            expectVariance(
                attrs(
                    [ "FOO" ],
                    { name: "attr", conformance: "FOO" }
                ),
                { features: { FOO: { mandatory: [ "attr" ] } } }
            );
        })

        it("classifies optional by feature", () => {
            expectVariance(
                attrs(
                    [ "FOO" ],
                    { name: "attr", conformance: "[FOO]" }
                ),
                { features: { FOO: { optional: [ "attr" ] } } }
            );
        })

        it("classifies by multiple features with mandatory and optional", () => {
            expectVariance(
                attrs(
                    [ "FOO", "BAR", "NOPE" ],
                    { name: "attr1", conformance: "M" },
                    { name: "attr2", conformance: "FOO" },
                    { name: "attr3", conformance: "[BAR]" },
                    { name: "attr4", conformance: "[FOO]" },
                    { name: "attr5", conformance: "O" },
                    { name: "attr6", conformance: "M" }
                ),
                {
                    mandatory: [ "attr1", "attr6" ],
                    optional: [ "attr5" ],
                    features: {
                        FOO: { mandatory: [ "attr2" ], optional: [ "attr4" ] },
                        BAR: { optional: [ "attr3" ] }
                    }
                }
            );
        })
    })

    describe("complex variance", () => {

    })
})

type AttributeDefinition =
    { name: string, conformance: Conformance.Definition }
    | string[];

function attrs(...definitions: AttributeDefinition[]) {
    let nextID = 1;
    return definitions.map(attr => {
        let result: ClusterElement.Child;
        if (Array.isArray(attr)) {
            result = {
                tag: "attribute",
                id: Globals.FeatureMap.id,
                name: "FeatureMap",
                type: "FeatureMap",
                children: attr.map(f => ({ tag: "datatype", name: f }))
            }
        } else {
            result = {
                tag: "attribute",
                id: nextID++,
                ...attr
            }
        }
        return result;
    });
}

function analyze(children: ClusterElement.Child[]) {
    const cluster = new ClusterModel({
        id: 1,
        name: "Cluster",
        children: children
    });
    new MatterModel({ name: "Matter", children: [ cluster ]});
    return ClusterVariance(cluster);
}

type ExpectedElementVariance = {
    mandatory?: string[],
    optional?: string[]
}

type ExpectedClusterVariance = ExpectedElementVariance & {
    features?: { [name: string]: ExpectedElementVariance },
    featureSets?: (ExpectedElementVariance & { flags: FeatureSet.Flag[] })[]
}

function elementNames(variance: ElementVariance) {
    const result = {} as ExpectedElementVariance;
    if (variance.optional.length) {
        result.optional = variance.optional.map(e => e.name);
    }
    if (variance.mandatory.length) {
        result.mandatory = variance.mandatory.map(e => e.name);
    }
    return result;
}

function actualToExpected(variance: ClusterVariance) {
    const actual: ExpectedClusterVariance = {
        ...elementNames(variance)
    }
    if (Object.keys(variance.features).length) {
        actual.features = Object.fromEntries(
            Object.entries(
                variance.features
            ).map(([k, v]) => [ k, elementNames(v) ]));
    }
    if (variance.featureSets.length) {
        actual.featureSets = variance.featureSets.map(featureSet => ({
            ...elementNames(featureSet),
            flags: Array(...featureSet.flags)
        }))
    }
    return actual;
}

function expectVariance(children: ClusterElement.Child[], expected: ExpectedClusterVariance) {
    const variance = analyze(children);
    const actual = actualToExpected(variance);
    expect(actual).toStrictEqual(expected);
}
