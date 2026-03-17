/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TlvSchema } from "../tlv/TlvSchema.js";
import type { ClusterTyping } from "./ClusterNamespace.js";
import type { ClusterType } from "./ClusterType.js";

/**
 * Bridge type that maps a legacy {@link ClusterType} + {@link ClusterTyping} into a
 * {@link ClusterTyping}-compatible shape so that `ClusterBehavior.for()` can accept
 * either old-style `ClusterType` objects or new-style `ClusterNamespace` objects.
 */
export type ClusterTypeBridge<C extends ClusterType, I extends ClusterTyping> = I & {
    Attributes: AttrValuesOf<C["attributes"]> & {
        Components: [
            {
                flags: {};
                mandatory: MandatoryKeysOf<C["attributes"]>;
                optional: OptionalKeysOf<C["attributes"]>;
            },
        ];
    };
    Events: EventValuesOf<C["events"]> & {
        Components: [
            {
                flags: {};
                mandatory: MandatoryKeysOf<C["events"]>;
                optional: OptionalKeysOf<C["events"]>;
            },
        ];
    };
    Features: FeatureNamesOf<C["features"]>;
    SupportedFeatures: C["supportedFeatures"];
};

type AttrValueOf<A> = A extends { schema: TlvSchema<infer T> } ? T : never;

type AttrValuesOf<R> = { [K in keyof R]: AttrValueOf<R[K]> };

type EventValuesOf<R> = { [K in keyof R]: AttrValueOf<R[K]> };

type MandatoryKeysOf<R> = {
    [K in keyof R]: R[K] extends { optional: true } ? never : K;
}[keyof R] &
    string;

type OptionalKeysOf<R> = {
    [K in keyof R]: R[K] extends { optional: true } ? K : never;
}[keyof R] &
    string;

type FeatureNamesOf<F> = Capitalize<keyof F & string>;
