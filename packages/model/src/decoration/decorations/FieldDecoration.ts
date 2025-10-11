/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quality } from "#aspects/Quality.js";
import { ElementTag } from "#common/ElementTag.js";
import type { Scope } from "#logic/Scope.js";
import { FieldModel } from "#models/FieldModel.js";
import type { Model } from "#models/Model.js";
import { InvalidMetadataError } from "../errors.js";
import type { ClassDecoration } from "./ClassDecoration.js";
import { Decoration } from "./Decoration.js";

/**
 * Decorator metadata associated with a specific class field.
 */
export class FieldDecoration extends Decoration {
    name: string;
    #owner: ClassDecoration;
    #nullable?: boolean;
    #nonvolatile?: boolean;

    constructor(owner: ClassDecoration, name: string) {
        super();
        this.#owner = owner;
        this.name = name;
    }

    get nullable() {
        return !!this.#nullable;
    }

    set nullable(nullable: boolean) {
        this.#nullable = nullable;
    }

    get nonvolatile() {
        return !!this.#nonvolatile;
    }

    set nonvolatile(nonvolatile: boolean) {
        this.#nonvolatile = nonvolatile;
    }

    /**
     * Create a new instance that contains my fields overlayed with fields present in another instance.
     */
    extend(overrides: FieldDecoration) {
        const field = new FieldDecoration(overrides.#owner, overrides.name);
        field.type = overrides.type ?? this.type;
        field.response = overrides.response ?? this.response;
        field.kind = overrides.kind ?? this.kind;
        field.id = overrides.id ?? this.id;
        field.nullable = overrides.nullable ?? field.nullable;
        field.nonvolatile = overrides.nonvolatile ?? field.nonvolatile;
        return field;
    }

    /**
     * Create a model that defines the element for a specific owner.
     *
     * Returns undefined if the owner already has an appropriate element present.
     */
    generateExtension(name: string, scope: Scope, owner: Model) {
        // Determine the base type
        let base: Model | undefined;
        if (this.type) {
            base = scope.modelFor(this.type);
        }

        // Locate a "shadow".  This is a matching element present in inherited scope
        let kind = this.kind;
        if (kind === undefined || kind.Tag === ElementTag.Datatype) {
            kind = FieldModel;
        }
        const shadow = scope.membersOf(scope.owner, { tags: [kind.Tag] }).for(name);

        // Do not create an extension if the element is already defined and we have no overrides
        if (
            shadow &&
            (!this.kind || this.kind === shadow.constructor) &&
            (this.type === undefined || this.type === shadow || this.type === shadow.base) &&
            this.response === undefined &&
            this.nullable === undefined &&
            this.nonvolatile === undefined
        ) {
            return;
        }

        // Ensure that an ID is present if required
        let id = this.id;
        if (id === undefined && shadow) {
            id = shadow.id;
        }
        if (kind.requiresId && id === undefined) {
            throw new InvalidMetadataError(
                `Element ${owner.name}.${this.name} is a ${kind.Tag} but has no ID assigned`,
            );
        }

        // Create an extension
        const extension = new kind({ name, id: this.id, operationalBase: base });

        // Apply quality modifiers if appropriate for this element type
        if ("effectiveQuality" in extension) {
            const baseQuality = (extension.effectiveQuality as Quality).toString();
            let quality = baseQuality;

            if (this.nullable) {
                if (!quality.includes(Quality.Field.nullable)) {
                    quality += Quality.Field.nullable;
                }
            }

            if (this.nonvolatile) {
                if (!quality.includes(Quality.Field.nonvolatile)) {
                    quality += Quality.Field.nonvolatile;
                }
            }

            if (baseQuality !== quality) {
                (extension as unknown as { quality: Quality.Definition }).quality = quality;
            }
        }

        return extension;
    }
}
