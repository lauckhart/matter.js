/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MaybePromise } from "@matter/general";
import type { ClusterComposer, ClusterNamespace, ClusterType, TypeFromSchema } from "@matter/types";

/**
 * @see {@link ClusterNamespace}
 */
export type ClusterInterface = ClusterNamespace;

export namespace ClusterInterface {
    export const Empty: ClusterInterface = {};
    export type Empty = ClusterInterface;

    export type Component = ClusterNamespace.Component;

    export type InterfaceOf<B> = B extends { Interface: infer I extends ClusterInterface } ? I : ClusterInterface;

    export type MethodsOf<I extends ClusterInterface, C extends ClusterType> =
        // This is the workaround for TS issue #27965
        InterfaceMethodsOf<I, C["supportedFeatures"]> &
            // Fall back to mapping for methods not defined in an interface
            Omit<MappedMethodsOf<C["commands"]>, keyof InterfaceMethodsOf<I, C["supportedFeatures"]>>;

    export type ComponentsOf<I extends ClusterInterface> = I extends {
        Commands: { Components: infer C extends Component[] };
    }
        ? C
        : [];

    export type InterfaceMethodsOf<
        I extends ClusterInterface,
        S extends ClusterComposer.FeatureFlags,
    > = ClusterInterface extends I ? {} : AppliedMethodsOf<ApplicableComponents<ComponentsOf<I>, S>>;

    export type AppliedMethodsOf<CA extends Component[]> = CA extends [
        infer C extends Component,
        ...infer R extends Component[],
    ]
        ? C["methods"] & AppliedMethodsOf<R>
        : {};

    export type ApplicableComponents<CA extends Component[], S extends ClusterComposer.FeatureFlags> = CA extends [
        infer C extends Component,
        ...infer R extends Component[],
    ]
        ? S extends C["flags"]
            ? [C, ...ApplicableComponents<R, S>]
            : ApplicableComponents<R, S>
        : [];

    export type MethodForCommand<C extends ClusterType.Command> = (
        request: TypeFromSchema<C["requestSchema"]>,
    ) => MaybePromise<TypeFromSchema<C["responseSchema"]>>;

    export type MappedMethodsOf<C extends Record<string, ClusterType.Command>> = string extends keyof C
        ? {}
        : {
              readonly [K in keyof C]: MethodForCommand<C[K]>;
          };
}
