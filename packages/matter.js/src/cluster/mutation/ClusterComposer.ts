/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { BitFlags } from "../../schema/BitmapSchema.js";
import { camelize, serialize } from "../../util/String.js";
import { ClusterType } from "../ClusterType.js";

export class IllegalClusterError extends MatterError {}

/**
 * A "cluster composer" manages cluster configuration based on feature
 * selection.
 */
export class ClusterComposer<const T extends ClusterType> {
    constructor(public cluster: T) {}

    /**
     * Build a cluster using selected feature flags.
     *
     * @param selection the name(s) of optional features to support
     * @param original an optional pre-existing cluster; any injected elements present here will be used rather than
     *     those in the source component
     * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
     */
    compose<const SelectionT extends ClusterComposer.FeatureSelection<T>>(selection: SelectionT) {
        this.validateFeatureSelection(selection);

        const extensions = this.cluster.extensions;
        let cluster: ClusterType;

        if (extensions) {
            const base = this.cluster.base ?? this.cluster;

            const baseElements = (type: "attributes" | "commands" | "events") => {
                const elements = {} as Record<string, any>;
                const clusterElements = this.cluster[type];
                for (const name in base[type]) {
                    elements[name] = clusterElements[name] ?? base[type][name];
                }
                return elements;
            };

            cluster = ClusterType({
                ...base,
                attributes: baseElements("attributes"),
                commands: baseElements("commands"),
                events: baseElements("events"),
                supportedFeatures: BitFlags(this.cluster.features, ...selection),
                base,
            });

            for (const selector of extensions) {
                if (selector.component) {
                    this.accept(cluster, selector.component, this.cluster, selector.flags);
                } else {
                    this.reject(cluster, selector.flags);
                }
            }
        } else {
            cluster = this.cluster;
        }

        return cluster as ClusterComposer.Of<T, SelectionT>;
    }

    /**
     * Validates a set of feature flags against the features supported by a
     * cluster.
     */
    private validateFeatureSelection(features: ClusterComposer.FeatureSelection<any>) {
        for (const f of features) {
            if (!this.cluster.features[camelize(f, false)]) {
                throw new IllegalClusterError(`"${f}" is not a valid feature identifier`);
            }
        }
    }

    /**
     * Injects a component into a cluster if the cluster supports the specified
     * features.  Uses matching element from "original" if present.  This
     * allows for component insertion without overwrite of other changes to the
     * named element.
     */
    private accept(
        definition: ClusterComposer.WritableDefinition,
        component: Partial<ClusterType.Elements>,
        original: Partial<ClusterType> | undefined,
        flags: ClusterComposer.FeatureFlags,
    ) {
        for (const k in flags) {
            if (!!definition.supportedFeatures[k] !== !!flags[k]) {
                return;
            }
        }

        function installElements(name: "attributes" | "commands" | "events") {
            const src = component[name];
            if (!src) {
                return;
            }

            let dest = definition[name];
            if (dest) {
                dest = { ...dest } as any;
            } else {
                dest = {};
            }
            (definition as any)[name] = dest;

            for (const key in src) {
                const orig = original?.[name]?.[key];
                if (orig) {
                    dest[key] = orig;
                } else {
                    dest[key] = src[key];
                }
            }
        }

        installElements("attributes");
        installElements("commands");
        installElements("events");
    }

    /**
     * Throws an error if a feature combination is illegal per the Matter
     * specification.
     */
    private reject(definition: ClusterType, flags: ClusterComposer.FeatureFlags) {
        for (const k in flags) {
            if (!!definition.supportedFeatures[k] !== !!flags[k]) {
                return;
            }
        }
        throw new IllegalClusterError(
            `Feature combination ${serialize(flags)} is disallowed by the Matter specification`,
        );
    }
}

export namespace ClusterComposer {
    export type Component = Partial<ClusterType.Elements>;

    /**
     * An array of names indicating features to be injected.
     */
    export type FeatureSelection<T extends ClusterType> = readonly Capitalize<string & keyof T["features"]>[];

    /**
     * A set of boolean values indicating whether a feature is enabled.
     */
    export type FeatureFlags = Record<string, boolean | undefined>;

    /**
     * Describes the output of {@link ClusterComposer.compose}.
     */
    export type Of<ClusterT extends ClusterType, FeaturesT extends FeatureSelection<ClusterT>> = ClusterT extends {
        extensions: {};
    }
        ? WithFeatures<ClusterT, FeaturesT>
        : ClusterT;

    /**
     * The base of a cluster.
     */
    export type BaseOf<T extends ClusterType> = T["base"] extends ClusterType ? T["base"] : T;

    /**
     * The result of composition.
     */
    export type WithFeatures<ClusterT extends ClusterType, FeaturesT extends FeatureSelection<BaseOf<ClusterT>>> = Omit<
        BaseOf<ClusterT>,
        "supportedFeatures" | "base" | ElementType
    > & {
        supportedFeatures: FeaturesAsFlags<BaseOf<ClusterT>, FeaturesT>;
        base: BaseOf<ClusterT>;
    } & WithSelected<
            ClusterT,
            SelectedElements<
                FeaturesAsFlags<ClusterT, FeaturesT>,
                ClusterT["extensions"] extends object ? ClusterT["extensions"] : []
            >
        >;

    /**
     * Convert a {@link FeatureSelection} array into a {@link FeatureFlags}
     * object.
     */
    export type FeaturesAsFlags<ClusterT extends ClusterType, FlagsT extends FeatureSelection<ClusterT>> = {
        [K in keyof ClusterT["features"]]: K extends Uncapitalize<FlagsT[number]> ? true : false;
    };

    /**
     * Choose elements from applicable extensions.
     */
    export type SelectedElements<
        FlagsT extends FeatureFlags,
        extensionsT extends readonly ClusterType.Extension[],
    > = extensionsT extends readonly [
        infer S extends ClusterType.Extension,
        ...infer R extends readonly ClusterType.Extension[],
    ]
        ? SelectorContribution<FlagsT, S> & SelectedElements<FlagsT, R>
        : {};

    /**
     * Determine the type contributed to feature selection by a specific
     * selector.
     */
    export type SelectorContribution<
        FlagsT extends FeatureFlags,
        SelectorT extends ClusterType.Extension,
    > = FlagsT extends SelectorT["flags"]
        ? SelectorT["component"] extends false
            ? never
            : SelectorT["component"]
        : {};

    /**
     * Merge elements from the base, selected features and an original cluster
     * definition.
     *
     * Note that we have to track the base separate from the originating
     * cluster.  If we are removing features, we want to maintain only
     * those features present in the base or selected components.
     */
    export type WithSelected<ClusterT extends ClusterType, SelectedT extends Component> = [SelectedT] extends [never]
        ? never
        : {
              [TypeT in ElementType]: // and extensions // Include elements in current cluster if valid according to base
              Pick<ClusterT[TypeT], keyof ClusterT[TypeT] & (keyof BaseOf<ClusterT>[TypeT] | keyof SelectedT[TypeT])> &
                  // Include extension elements if not present in current cluster
                  Omit<SelectedT[TypeT], keyof ClusterT[TypeT]> &
                  // Include base elements if not present in current cluster or
                  // extensions
                  Omit<BaseOf<ClusterT>[TypeT], keyof ClusterT[TypeT] | keyof SelectedT[TypeT]>;
          };

    /**
     * A "WritableDefinition" is a Cluster with fields that may be modified.
     */
    export type WritableDefinition = {
        -readonly [Key in keyof ClusterType]: ClusterType[Key];
    };

    export type ElementType = "attributes" | "commands" | "events";
}
