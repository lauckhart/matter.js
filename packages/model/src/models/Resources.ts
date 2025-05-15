/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Conformance } from "#aspects/Conformance.js";
import type { DefinitionError } from "#common/DefinitionError.js";
import type { ElementTag } from "#common/ElementTag.js";
import type { Specification } from "#common/Specification.js";
import { CrossReference } from "./CrossReference.js";
import type { Model } from "./Model.js";

/**
 * Model information that is currently not required for operational purposes.
 */
export class Resource {
    errors?: DefinitionError[];
    asOf?: Specification.Revision;
    until?: Specification.Revision;
    matchTo?: {
        id?: string | number;
        name?: string;
    };
    classification?: string;
    pics?: string;
    description?: string;
    xref?: Specification.CrossReference;
    details?: string;

    constructor(resources?: Resources.Definition) {
        if (!resources) {
            return;
        }

        this.description = resources.description;
        this.details = resources.details;
        this.xref = resources.xref ? CrossReference.get(resources.xref) : undefined;
        this.errors = resources.errors;
        this.asOf = resources.asOf;
        this.until = resources.until;
        this.matchTo = resources.matchTo;
        this.classification = resources.classification;
        this.pics = resources.pics;
    }
}

/**
 * A pool of loaded resources.
 *
 * Resources are indexed logically via a (tag, name) tuple in the context of the parent and if necessary for
 * discrimination, conformance.  Models that do not have their own resource definition installed will search this
 * pool to fulfill resource properties.
 */
export class Resources {
    #cache?: WeakMap<Model, IndexNode | null>;
    #index: IndexNode = {
        resource: undefined,
        children: undefined,
        discriminated: undefined,
    };

    get(model: Model) {
        const cached = this.#cache?.get(model);
        if (cached !== undefined) {
            return cached?.resource;
        }

        const node = this.#findNode(model);

        if (!this.#cache) {
            this.#cache = new WeakMap<Model, IndexNode | null>();
        }
        this.#cache.set(model, node ?? null);

        return node?.resource;
    }

    add(resource: Resources.Named) {
        this.#addNode(resource, this.#index);
        this.#cache = undefined;
    }

    #addNode(item: Resources.Named, owner: IndexNode) {
        const key = `${item.tag}:${item.name}`;

        let node = owner.children?.get(key);
        if (!node) {
            node = {};
            if (!owner.children) {
                owner.children = new Map();
            }
            owner.children.set(key, node);
        }

        if (item.discriminator) {
            if (node.discriminated) {
                let node2 = node.discriminated.get(item.discriminator);
                if (node2) {
                    node = node2;
                } else {
                    node2 = {};
                    node.discriminated.set(item.discriminator, node2);
                    node = node2;
                }
            } else {
                const node2 = {};
                node.discriminated = new Map();
                node.discriminated.set(item.discriminator, node2);
                node = node2;
            }
        }

        node.resource = new Resource(item);
        Object.freeze(node.resource);

        if (item.children) {
            for (const child of item.children) {
                this.#addNode(child, owner);
            }
        }
    }

    #findNode(model: Model): IndexNode | undefined {
        let parent;

        if (!model.parent || model.parent === model.root) {
            parent = this.#index;
        } else {
            parent = this.#findNode(model.parent);
        }

        if (!parent) {
            return;
        }

        const key = `${model.tag}:${model.name}`;
        const node = parent.children?.get(key);

        if (!node) {
            return;
        }

        if (node.discriminated) {
            const conformance = (model as { conformance?: Conformance }).conformance;
            if (conformance !== undefined && !conformance.isEmpty) {
                return node.discriminated?.get(conformance.toString());
            }
        }
    }

    static readonly default = new Resources();
}

interface IndexNode {
    resource?: Readonly<Resource>;
    discriminated?: Map<string | undefined, IndexNode>;
    children?: Map<string, IndexNode>;
}

export namespace Resources {
    export interface Named extends Definition {
        tag: ElementTag;
        name: string;
        discriminator?: string;
        children?: Named[];
    }

    export type Definition = Omit<Resource, "xref"> & { xref?: CrossReference.Definition };

    export function add(named: Named) {
        Resources.default.add(named);
    }
}
