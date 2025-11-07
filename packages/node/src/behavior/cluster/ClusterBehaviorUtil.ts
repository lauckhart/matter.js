/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterType } from "#types";

/**
 * Create a non-functional instance of a {@link Behavior} for introspection purposes.
 */
export function introspectionInstanceOf(type: Behavior.Type) {
    return new (type as unknown as new () => Record<string, (...args: any[]) => any>)();
}

/**
 * The cluster type for a behavior.
 */
export type ClusterOf<B extends Behavior.Type> = B extends { cluster: infer C extends ClusterType }
    ? C
    : ClusterType.Unknown;

/**
 * The extension interface for a behavior.
 */
export type ExtensionInterfaceOf<B extends Behavior.Type> = B extends { ExtensionInterface: infer I extends {} }
    ? I
    : {};
