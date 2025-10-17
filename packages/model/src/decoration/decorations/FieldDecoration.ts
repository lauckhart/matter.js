/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvalidMetadataError } from "#decoration/errors.js";
import { FieldModel } from "#models/FieldModel.js";
import type { Model } from "#models/Model.js";
import type { ClassDecoration } from "./ClassDecoration.js";
import { Decoration } from "./Decoration.js";

/**
 * Decorator metadata associated with a specific class field.
 */
export class FieldDecoration extends Decoration {
    name: string;
    #owner: ClassDecoration;

    constructor(owner: ClassDecoration, name: string) {
        super();

        this.#owner = owner;
        this.name = name;
    }

    protected override createModel(type: Model.ConcreteType = FieldModel) {
        return new type({ name: this.name, parent: this.#owner.mutableModel });
    }

    static override of(source: FieldDecoration.Source) {
        if (source.kind === "class") {
            throw new InvalidMetadataError(
                `Cannot retrieve field decorator for class decorator ${source.name ?? "of anonymous class"}`,
            );
        }
        return Decoration.classDecorationOf(source).fieldFor(source.name);
    }
}

export namespace FieldDecoration {
    export type Source = DecoratorContext;
}
