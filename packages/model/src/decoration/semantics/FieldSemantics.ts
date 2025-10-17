/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvalidMetadataError } from "#decoration/errors.js";
import { FieldModel } from "#models/FieldModel.js";
import type { Model } from "#models/Model.js";
import type { ClassSemantics } from "./ClassSemantics.js";
import { Semantics } from "./Semantics.js";

/**
 * Decorator metadata associated with a specific class field.
 */
export class FieldSemantics extends Semantics {
    name: string;
    #owner: ClassSemantics;

    constructor(owner: ClassSemantics, name: string) {
        super();

        this.#owner = owner;
        this.name = name;
    }

    protected override createModel(type: Model.ConcreteType = FieldModel) {
        return new type({ name: this.name, parent: this.#owner.mutableModel });
    }

    static override of(source: FieldSemantics.Source) {
        if (source.kind === "class") {
            throw new InvalidMetadataError(
                `Cannot retrieve field decorator for class decorator ${source.name ?? "of anonymous class"}`,
            );
        }
        return Semantics.classOf(source).fieldFor(source.name);
    }
}

export namespace FieldSemantics {
    export type Source = DecoratorContext;
}
