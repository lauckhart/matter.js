/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "../../../src/behavior/cluster/ClusterBehavior.js";
import {
    Attribute,
    Command,
    Event,
    EventPriority,
    FabricScopedAttribute,
    OptionalAttribute,
    OptionalCommand,
    OptionalEvent,
    OptionalWritableFabricScopedAttribute,
} from "../../../src/cluster/Cluster.js";
import { ClusterType } from "../../../src/cluster/ClusterType.js";
import { TlvBoolean } from "../../../src/tlv/TlvBoolean.js";
import { TlvString } from "../../../src/tlv/TlvString.js";
import { MaybePromise } from "../../../src/util/Type.js";

export const MyCluster = ClusterType({
    id: 1,
    revision: 1,
    name: "MyCluster",

    attributes: {
        reqAttr: Attribute(1, TlvString, { default: "hello" }),
        optAttr: OptionalAttribute(2, TlvBoolean, { default: true }),
        reqFabricAttr: FabricScopedAttribute(3, TlvString, { default: "world" }),
        optFabricAttr: OptionalWritableFabricScopedAttribute(4, TlvBoolean, { default: true }),
    },

    commands: {
        reqCmd: Command(5, TlvString, 5, TlvString),
        optCmd: OptionalCommand(6, TlvBoolean, 6, TlvBoolean),
    },

    events: {
        reqEv: Event(7, EventPriority.Critical, TlvString),
        optEv: OptionalEvent(8, EventPriority.Debug, TlvString),
    },
});
export type MyCluster = typeof MyCluster;

interface MyClusterBaseInterface {
    reqCmd(request: string): MaybePromise<string>;
    optCmd(request: boolean): MaybePromise<boolean>;
}

interface MyClusterInterface {
    components: [
        {
            flags: {};
            methods: MyClusterBaseInterface;
        },
    ];
}

export const BaseBehavior = ClusterBehavior.withInterface<MyClusterInterface>().for(MyCluster);

export class MyBehavior extends BaseBehavior {}
