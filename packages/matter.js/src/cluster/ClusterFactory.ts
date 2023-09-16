/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../common/MatterError.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { serialize } from "../util/String.js";
import { Branded, Merge } from "../util/Type.js";
import {
    Attribute,
    Attributes,
    Command,
    Commands,
    ConditionalFeatureList,
    Event,
    Events,
    GlobalAttributes,
} from "./Cluster.js";

export class IllegalClusterError extends MatterError {}

export namespace ClusterFactory {
    /**
     * These fields uniquely identify a cluster.
     */
    export interface Identity {
        readonly id: ClusterId;
        readonly name: string;
        readonly revision: number;
    }

    /**
     * Cluster "elements" are attributes, commands and events that may comprise
     * a cluster.
     */
    export interface Elements {
        readonly attributes: Attributes;
        readonly commands: Commands;
        readonly events: Elements;
    }

    /**
     * A cluster "component" is a set of elements intended to be added to a
     * cluster definition.
     */
    export interface Component extends Elements {}

    /**
     * A "typed component" is a component with detailed type information.
     */
    export interface TypedComponent<T extends Partial<Component>> {
        attributes: T["attributes"] extends Attributes ? T["attributes"] : {};
        commands: T["commands"] extends Commands ? T["commands"] : {};
        events: T["events"] extends Events ? T["events"] : {};
    }

    /**
     * Cluster "features" describe the features supported by a cluster.
     */
    export interface Features<F extends BitSchema = {}> {
        readonly features: F;
        readonly supportedFeatures: TypeFromPartialBitSchema<F>;
        readonly unknown?: boolean;
    }
    
    /**
     * A "definition" represents a fully formed cluster with features selected.
     */
    export interface Definition extends Identity, Features<BitSchema>, Elements {}

    /**
     * An "partial definition" is the input to Definition().  It does not
     * require empty object properties to be present.
     */
    export type PartialDefinition =
        & { id: number }
        & Omit<Identity, "id">
        & Partial<Features>
        & {
            attributes?: Attributes;
            commands?: Commands;
            events?: Events;
        }

    /**
     * A "typed definition" is a definition with detailed type information.
     */
    export type TypedDefinition<T extends PartialDefinition> =
        {
            id: Branded<T["id"], "ClusterId">,
            name: T["name"],
            revision: T["revision"],
            features: T["features"] extends {} ? T["features"] : {},
            supportedFeatures: T["supportedFeatures"] extends {} ? T["supportedFeatures"] : {},
            attributes: T["attributes"] extends infer A extends {}
                ? Merge<A, GlobalAttributes<T["features"] extends {} ? T["features"] : {}>>
                : {},
            commands: T["commands"] extends {} ? T["commands"] : {},
            events: T["events"] extends {} ? T["events"] : {},
            unknown: T["unknown"] extends boolean ? T["unknown"] : false,
        }
        & Omit<T, "attributes">

    /**
     * This is a definition that may be modified.
     */
    export type MutableDefinition = {
        -readonly [Key in keyof Definition]: Definition[Key]
    }

    /**
     * An "extender" is a function that creates a cluster with specific
     * features enabled.
     */
    export type Extender = (...features: any) => Definition;

    /**
     * An "extensible" cluster is a base cluster with support for enabling
     * features.
     */
    export interface Extensible extends Definition {
        with: Extender
    }

    /**
     * An "element" is a single attribute, command or event of a cluster.
     */
    export type Element<F extends BitSchema> = Attribute<any, F> | Command<any, any, F> | Event<any, F>;

    /**
     * Create a conditional version of an unconditional element type.
     */
    export type AsConditional<F extends BitSchema, E extends Element<F>> = Omit<E, "optional"> & {
        optional: true;
        isConditional: true;
    };

    /**
     * "Element conditions" describe the feature sets for which an element is
     * available.
     */
    export type ElementConditions<F extends BitSchema> = {
        optionalIf: ConditionalFeatureList<F>;
        mandatoryIf: ConditionalFeatureList<F>;
    };

    /**
     * Define a cluster component.
     */
    export function Component<const T extends Partial<Component>>(component: T): TypedComponent<T> {
        return {
            attributes: {},
            commands: {},
            events: {},
            ...component
        };
    }

    /**
     * Define a cluster.
     */
    export function Definition<
        const T extends PartialDefinition
    >(definition: T) {
        return {
            id: ClusterId(definition.id),
            name: definition.name,
            revision: definition.revision,
            features: definition.features ?? {},
            supportedFeatures: definition.supportedFeatures ?? {},
            attributes: {
                ...GlobalAttributes(definition.features ?? {}),
                ...definition.attributes
            },
            commands: definition.commands ?? {},
            events: definition.events ?? {},
            unknown: definition.unknown,
        } as TypedDefinition<T>;
    }

    /**
     * Define an extensible cluster.
     */
    export function Extensible<
        const DefinitionT extends Identity & Partial<Elements> & Partial<Features>,
        const ExtenderT extends Extender
    >(definition: DefinitionT, extender: ExtenderT) {
        return {
            ...Definition(definition),
            with: extender
        } as const
    }

    /**
     * Define a cluster that can only be extended.
     */
    export function ExtensibleOnly<
        const ExtenderT extends Extender
    >(extender: ExtenderT) {
        return {
            with: extender
        } as const
    }

    /**
     * Injects a set of functionality into a cluster if the cluster supports
     * the specified features.
     * 
     * This is used by extenders and does not convey type information.
     */
    export function extend(
        definition: MutableDefinition,
        elements: Elements,
        ...applicableFeatures: TypeFromPartialBitSchema<any>[]
    ) {
        let applicable = false;
        pool: for (const features of applicableFeatures) {
            for (const k in features) {
                if (!!definition.supportedFeatures[k] !== !!features[k]) {
                    continue pool;
                }
            }
            applicable = true;
            break;
        }

        if (!applicable) {
            return;
        }

        if (elements.attributes) {
            if (definition.attributes) {
                definition.attributes = { ...definition.attributes, ...elements.attributes };
            } else {
                definition.attributes = elements.attributes;
            }
        }

        if (elements.commands) {
            if (definition.commands) {
                definition.commands = { ...definition.commands, ...elements.commands };
            } else {
                definition.commands = elements.commands;
            }
        }

        if (elements.events) {
            if (definition.events) {
                definition.events = { ...definition.events, ...elements.events };
            } else {
                definition.events = elements.events;
            }
        }
    }

    /**
     * Validates a set of feature flags against the features supported by a
     * cluster.
     * 
     * Used by extenders.
     */
    export function validateFeatureSelection(features: string[], validFeatures: Record<string, string>) {
        for (const f of features) {
            if (!validFeatures[f]) {
                throw new IllegalClusterError(`"${f}" is not a valid feature identifier`);
            }
        }
    }

    /**
     * Throws an error if a feature combination is illegal per the Matter
     * specification.
     * 
     * Used by extenders.
     */
    export function prevent(
        definition: Definition,
        ...illegalFeatureCombinations: Record<string, boolean>[]
    ) {
        pool: for (const bitmap of illegalFeatureCombinations) {
            for (const k in bitmap) {
                if (!!definition.supportedFeatures[k] !== !!bitmap[k]) {
                    continue pool;
                }
            }
            throw new IllegalClusterError(
                `Feature combination ${serialize(bitmap)} is disallowed by the Matter specification`,
            );
        }
    }

    /**
     * Create a conditional version of an unconditional element definition.
     */
    export function AsConditional<F extends BitSchema, E extends Element<F>>(
        element: E,
        { optionalIf = [], mandatoryIf = [] }: Partial<ElementConditions<F>>,
    ) {
        const result = {
            ...element,
            optional: true,
            isConditional: true,
            optionalIf: optionalIf,
            mandatoryIf: mandatoryIf,
        };
        result.optional = true;
        return result as AsConditional<F, E>;
    }
}
