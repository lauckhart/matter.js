/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterId } from "../../datatype/ClusterId.js";
import { ConditionalFeatureList } from "../Cluster.js";
import { ClusterType } from "../ClusterType.js";
import { ClusterComposer } from "./ClusterComposer.js";
import { ElementModifier } from "./ElementModifier.js";

/**
 * A "mutable cluster" is a {@link ClusterType} with builder methods that
 * support a limited number of modifications as defined by the Matter
 * specification.
 */
export interface MutableCluster<T extends ClusterType.Options>
    extends ClusterType.Of<T>,
        MutableCluster.Methods<ClusterType.Of<T>> {}

/**
 * Define a new {@link MutableCluster}.
 */
export function MutableCluster<const T extends ClusterType.Options>(options: T) {
    const cluster = ClusterType(options);

    Object.assign(cluster, {
        with(features: ClusterComposer.FeatureSelection<typeof cluster>) {
            return new ClusterComposer(cluster).compose(features);
        },

        alter(alterations: ElementModifier.Alterations<typeof cluster>) {
            return new ElementModifier(cluster).alter(alterations);
        },

        set(values: ClusterType.InputAttributeValues<typeof cluster>) {
            return new ElementModifier(cluster).set(values);
        },

        enable(flags: ElementModifier.ElementFlags<typeof cluster>) {
            return new ElementModifier(cluster).enable(flags);
        },
    });

    return cluster as unknown as MutableCluster<T>;
}

export namespace MutableCluster {
    /**
     * Define a "component" -- a set of elements that may be added to a
     * cluster.
     */
    export function Component<const T extends Partial<ClusterType.Options>>(elements: T) {
        return elements;
    }

    /**
     * Define a cluster's extension set.
     */
    export function Extensions<const T extends readonly ClusterType.Extension[]>(...extensions: T) {
        return extensions;
    }

    export interface Methods<T extends ClusterType> {
        /**
         * Select features using {@link ClusterComposer.compose}.
         */
        with<const SelectionT extends ClusterComposer.FeatureSelection<T>>(
            ...selection: SelectionT
        ): ClusterComposer.Of<T, SelectionT>;

        /**
         * Modify elements using {@link ElementModifier.alter}.
         */
        alter<const AlterationsT extends ElementModifier.Alterations<T>>(
            alterations: AlterationsT,
        ): ElementModifier.WithAlterations<T, AlterationsT>;

        /**
         * Modify elements using {@link ElementModifier.set}.
         */
        set<const ValuesT extends ClusterType.InputAttributeValues<T>>(
            values: ValuesT,
        ): ElementModifier.WithValues<T, ValuesT>;

        /**
         * Modify elements using {@link ElementModifier.enable}.
         */
        enable<const FlagsT extends ElementModifier.ElementFlags<T>>(
            flags: FlagsT,
        ): ElementModifier.WithFlags<T, FlagsT>;
    }

    /**
     * ExtensibleOnly creates a factory that produces a {@link MutableCluster}
     * when the user selects features.
     *
     * We define clusters this way if the Matter specification defines a
     * cluster with a set of features, one of which is required, but that are
     * mutually exclusive.
     */
    export interface ExtensibleOnly<T extends ClusterType.Options> {
        id: ClusterId;
        name: string;

        with: Methods<ClusterType.Of<T>>["with"];
    }

    /**
     * Create a factory for clusters that require extension.
     */
    export function ExtensibleOnly<const T extends ClusterType.Options>(options: T) {
        return {
            id: ClusterId,
            name: String,

            with(features: ClusterComposer.FeatureSelection<ClusterType.Of<T>>) {
                return new ClusterComposer(ClusterType(options)).compose(features);
            },
        } as unknown as ExtensibleOnly<T>;
    }

    /**
     * Create a conditional version of an unconditional element definition.
     */
    export function AsConditional<
        const ClusterT extends ClusterType,
        const E extends ClusterType.Attribute | ClusterType.Command | ClusterType.Event,
        const OI extends ConditionalFeatureList<ClusterT["features"]>,
        const MI extends ConditionalFeatureList<ClusterT["features"]>,
    >(element: E, { optionalIf, mandatoryIf }: { optionalIf?: OI; mandatoryIf?: MI }) {
        return {
            ...element,
            optional: true,
            isConditional: true,
            optionalIf: optionalIf ?? [],
            mandatoryIf: mandatoryIf ?? [],
        } as const;
    }
}
