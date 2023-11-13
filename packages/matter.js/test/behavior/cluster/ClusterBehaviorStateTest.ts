/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../../src/behavior/Behavior.js";
import { ClusterState } from "../../../src/behavior/cluster/ClusterState.js";
import { State } from "../../../src/behavior/state/State.js";
import { ClusterType } from "../../../src/cluster/ClusterType.js";
import { MyCluster } from "./cluster-behavior-test-util.js";

describe("ClusterState", () => {
    describe("base class", () => {
        it("satisfies State.Type", () => {
            ({}) as ClusterState<ClusterType, Behavior.Type> satisfies State;
        })
    })

    describe("AttributeProperties", () => {
        type Ap = ClusterState.AttributeProperties<ClusterType.AttributesOf<MyCluster>>;

        it("requires mandatory", () => {
            ({
                reqAttr: "foo",
                reqFabricAttr: "foo",
            }) satisfies Ap;
            ({}) as Ap satisfies {
                reqAttr: string,
                reqFabricAttr: string,
            }
        })

        it("allows optional", () => {
            undefined satisfies Ap["optAttr"];
            true satisfies Ap["optAttr"];
        })
    })

    describe("EndpointAttributeProperties", () => {
        type Eap = ClusterState.EndpointAttributeProperties<
            ClusterType.AttributesOf<MyCluster>
        >;

        it("requires mandatory", () => {
            ({
                reqAttr: "foo"
            }) satisfies Eap;
            ({}) as Eap satisfies {
                reqAttr: string
            }
        })

        it("allows optional", () => {
            undefined satisfies Eap["optAttr"];
            true satisfies Eap["optAttr"];
        })
    })

    describe("EndpointProperties", () => {
        type Ep = ClusterState.EndpointProperties<MyCluster>;

        it("requires mandatory", () => {
            ({
                reqAttr: "foo"
            }) satisfies Ep;
            ({}) as Ep satisfies {
                reqAttr: string
            }
        });

        it("allows optional", () => {
            undefined satisfies Ep["optAttr"];
            true satisfies Ep["optAttr"];
        })
    })

    describe("Endpoint", () => {
        type E = ClusterState.Endpoint<MyCluster, Behavior.Type>;

        it("satisfies State.Type", () => {
            ({}) as E satisfies State;
        })

        it("requires mandatory", () => {
            ({}) as E satisfies { reqAttr: string }
        });

        it("allows optional", () => {
            undefined satisfies E["optAttr"];
            true satisfies E["optAttr"];
        })
    });

    describe("FabricAttributeProperties", () => {
        type Fap = ClusterState.FabricAttributeProperties<
            ClusterType.AttributesOf<MyCluster>
        >;

        it("requires mandatory", () => {
            ({ reqFabricAttr: "foo" }) satisfies Fap;
            ({}) as Fap satisfies { reqFabricAttr: string }
        });

        it("allows optional", () => {
            undefined satisfies Fap["optFabricAttr"];
            true satisfies Fap["optFabricAttr"];
        })
    })

    describe("FabricProperties", () => {
        type Fp = ClusterState.FabricProperties<MyCluster>;

        it("requires mandatory", () => {
            ({ reqFabricAttr: "foo" }) satisfies Fp;
            ({}) as Fp satisfies { reqFabricAttr: string }
        });

        it("allows optional", () => {
            undefined satisfies Fp["optFabricAttr"];
            true satisfies Fp["optFabricAttr"];
        })
    })

    describe("Fabric", () => {
        type F = ClusterState.Fabric<MyCluster, Behavior.Type>;

        it("satisfies State", () => {
            ({}) as F satisfies State;
        })

        it("requires mandatory", () => {
            ({}) as F satisfies { reqFabricAttr: string }
        })

        it("allows optional", () => {
            undefined satisfies F["optFabricAttr"];
            true satisfies F["optFabricAttr"];
        })
    });

    describe("state instance", () => {
        type Si = ClusterState<MyCluster, Behavior.Type>;
        
        it("requires mandatory", () => {
            ({}) as Si satisfies {
                reqAttr: string,
                reqFabricAttr: string                    
            };
        })

        it("allows optional", () => {
            undefined satisfies Si["optAttr"];
            true satisfies Si["optAttr"];
            undefined satisfies Si["optFabricAttr"];
            true satisfies Si["optFabricAttr"];
        })
    });
})
