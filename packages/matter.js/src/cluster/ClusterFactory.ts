/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "./Cluster.js";

export type ClusterComponent<A extends Attributes, C extends Commands, E extends Events> = {
    readonly attributes: A,
    readonly commands: C,
    readonly events: E
};

export function ClusterComponent<
    A extends Attributes,
    C extends Commands,
    E extends Events
>({
    attributes = {} as A,
    commands = {} as C,
    events = {} as E
}: Partial<ClusterComponent<A, C, E>>): ClusterComponent<A, C, E> {
    return {
        attributes,
        commands,
        events
    };
}

export type ClusterMetadata<F extends BitSchema> = {
    id: number,
    name: string,
    revision: number,
    features: F
}

export function ClusterMetadata<F extends BitSchema>(metadata: ClusterMetadata<F>): ClusterMetadata<F> {
    return metadata;
}

export function extendCluster<F extends BitSchema>(
    cluster: Cluster<F, any, any, any, any>,
    component: ClusterComponent<any, any, any>,
    ...applicableFeatures: TypeFromPartialBitSchema<F>[]
) {
    let applicable = false;
    pool: for (const features of applicableFeatures) {
        for (const k in features) {
            if (cluster.supportedFeatures[k] !== features[k]) {
                continue pool;
            }
        }
        applicable = true;
        break;
    }

    if (!applicable) {
        return;
    }

    Object.assign(cluster.attributes, component.attributes);
    Object.assign(cluster.commands, component.commands);
    Object.assign(cluster.events, component.events);
}

// export type ClusterComponents = {
//     [ name in Exclude<string, "id" | "name" | "string" | "featureMap"> ]: ClusterComponent<any, any, any>
// }

// export type BuildCluster<
//     F extends BitSchema,
//     SF extends TypeFromPartialBitSchema<F>,
//     EL extends readonly ClusterComponent<any, any, any>[]
// > = Cluster<
//     F,
//     SF,
//     MergeAll<Pluck<"attributes", EL>>,
//     MergeAll<Pluck<"commands", EL>>,
//     MergeAll<Pluck<"events", EL>>
// >;

// export function BuildCluster<
//     F extends BitSchema,
//     SF extends TypeFromPartialBitSchema<F>,
//     CMP extends readonly ClusterComponent<any, any, any>[]
// >({ id, name, revision, features }: ClusterMetadata<F>, supportedFeatures: SF, ...components: [ ...CMP ]): BuildCluster<F, SF, CMP> {
//     return Cluster({
//         id,
//         name,
//         revision,
//         features,
//         supportedFeatures,
//         attributes: MergeAll(Pluck("attributes", ...components)),
//         commands: MergeAll(Pluck("commands", ...components)),
//         events: MergeAll(Pluck("events", ...components))
//     });
// }

// type FindCluster<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>, CL extends Cluster<F, any, any, any, any>[]>
//     = CL extends [ infer C, ...infer R extends Cluster<F, any, any, any, any>[] ]
//     ? C extends Cluster<F, SF, any, any, any>
//         ? C
//         : FindCluster<F, SF, R>
//     : undefined;

// export type ClusterFactory<F extends BitSchema, C extends Cluster<F, any, any, any, any>[]> = {
//     <FLAGS extends Extract<keyof F, string>[]>(...features: [ ...FLAGS ]): FindCluster<F, BitFlags<F, FLAGS>, C> | undefined
// }

// export function ClusterFactory<
//     F extends BitSchema,
//     C extends Cluster<F, any, any, any, any>[]
// >(...clusters: [ ...C ]): ClusterFactory<F, C> {
//     return <FLAGS extends Extract<keyof F, string>[]>(...features: [ ...FLAGS ]) => {
//         const lookup = new Set<string>(features);
//         clusters: for (const c of clusters) {
//             for (const k in c.supportedFeatures) {
//                 if (c.supportedFeatures[k] !== lookup.has(k)) {
//                     continue clusters;
//                 }
//             }
//             return c as any;
//         }
//         return undefined;
//     }
// }
