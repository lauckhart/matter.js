/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ClusterType } from "../../cluster/ClusterType.js";
import type { TypeFromSchema } from "../../tlv/TlvSchema.js";
import type { Behavior } from "../Behavior.js";
import { ClusterOf } from "./ClusterBehaviorUtil.js";

/**
 * Instance type for complete (endpoint + fabric) state.
 */
export type ClusterState<C extends ClusterType, B extends Behavior.Type> = ClusterState.Endpoint<C, B> &
    ClusterState.Fabric<C, B>;

export namespace ClusterState {
    /**
     * Instance type for ClusterBehavior global state.
     */
    export type Endpoint<C extends ClusterType, B extends Behavior.Type> =
        // Keep properties *not* from attributes of the old cluster
        Omit<InstanceType<B["EndpointScope"]>, keyof EndpointProperties<ClusterOf<B>>> &
            // Add properties from attributes of the old cluster
            EndpointProperties<C>;

    /**
     * Instance type for ClusterBehavior scoped state.
     */
    export type Fabric<C extends ClusterType, B extends Behavior.Type> =
        // Keep properties *not* from attributes of the old cluster
        Omit<InstanceType<B["FabricScope"]>, keyof FabricProperties<ClusterOf<B>>> &
            // Add properties from attributes of the old cluster
            FabricProperties<C>;

    /**
     * Properties a cluster contributes to Global.
     */
    export type EndpointProperties<C> = EndpointAttributeProperties<ClusterType.AttributesOf<C>>;

    export type EndpointAttributeProperties<A extends Record<string, ClusterType.Attribute>> = AttributeProperties<{
        [N in keyof A as A[N] extends { fabricScoped: true } ? never : N]: A[N];
    }>;

    /**
     * Properties a cluster contributes to Scope.
     */
    export type FabricProperties<C> = FabricAttributeProperties<ClusterType.AttributesOf<C>>;

    export type FabricAttributeProperties<A extends Record<string, ClusterType.Attribute>> = AttributeProperties<{
        [N in keyof A as A[N] extends { fabricScoped: true } ? N : never]: A[N];
    }>;

    export type AttributeProperties<A extends Record<string, ClusterType.Attribute>> = ClusterType.SomeOptional<
        A,
        {
            [N in keyof A as A[N] extends { fixed: true } ? never : N]: TypeFromSchema<A[N]["schema"]>;
        } & {
            readonly [N in keyof A as A[N] extends { fixed: true } ? N : never]: TypeFromSchema<A[N]["schema"]>;
        }
    >;
}
