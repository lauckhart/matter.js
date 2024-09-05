/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "@project-chip/matter.js-general";
import {
    AnyElement,
    AttributeElement,
    BaseElement,
    ClusterElement,
    CommandElement,
    DatatypeElement,
    EventElement,
    FieldElement,
    Model,
} from "@project-chip/matter.js-model";
import { Schema } from "../supervision/Schema.js";

/**
 * Internal decorator storage.
 */
interface Metadata {
    schema?: Schema;
    elements?: AnyElement[];
}

function metadataOf(cx: DecoratorContext) {
    const metadata = cx.metadata as Metadata | undefined;

    if (metadata === undefined) {
        throw new InternalError("Decorator metadata is not present");
    }

    return metadata;
}

export function cluster(id: number, options: Metadata.Cluster) {
    return function (this: new (...args: unknown[]) => unknown, cx: ClassDecoratorContext) {
        const metadata = metadataOf(cx);

        const name = cx.name ?? this.name;

        let schema;
        if (options instanceof Model) {
            schema = (options as Model).clone();
            schema.id = id;
            schema.name = cx.name ?? this.name;
        } else {
            schema = Model.create({ tag: "cluster", id, name, ...options });
        }
    };
}

export function schema(options: Metadata.Schema) {}

export function attribute(id: number, options: Metadata.Attribute) {}

export function command(id: number, options: Metadata.Command) {}

export function event(id: number, options: Metadata.Event) {}

export function field(id: number, options: Metadata.Field) {}

export function feature() {}

export const matter = {
    /**
     * Specify the cluster for a behavior.
     */
    cluster(id: number, options: matter.Cluster) {
        return function (this: new (...args: unknown[]) => unknown, cx: ClassDecoratorContext) {
            cx.metadata.cluster = {};
        };
    },

    schema(options: matter.Schema) {},

    attribute(id: number, options: matter.Attribute) {},

    command(id: number, options: matter.Command) {},

    event(id: number, options: matter.Event) {},

    field(id: number, options: matter.Field) {},

    feature() {},
};

export namespace Metadata {
    export type ElementDecorator<T extends {}> = (this: {}, subject: any, context: DecoratorContext) => void;

    export type OptionsOf<T extends BaseElement> = {
        [K in keyof T]?: K extends "type" ? T | DatatypeElement | string : T[K];
    };

    export interface Cluster extends OptionsOf<ClusterElement> {}

    export interface Attribute extends OptionsOf<AttributeElement> {}

    export interface Command extends Omit<OptionsOf<CommandElement>, "response"> {
        response?: string | Command;
    }

    export interface Event extends OptionsOf<EventElement> {}

    export interface Field extends OptionsOf<FieldElement> {}

    export interface Schema extends OptionsOf<DatatypeElement> {}
}
