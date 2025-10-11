/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Decoration } from "#decoration/decorations/Decoration.js";
import { InvalidMetadataError, MetadataConflictError } from "#decoration/errors.js";
import { Decorator } from "#general";
import { Model } from "#models/Model.js";

/**
 * Decorate a class or field as a specific Matter element type.
 */
export function element<
    T extends Decorator.Collector | Decorator.ClassCollector | Decorator.PropertyCollector | Decorator.MethodCollector,
>(kind: Model.ConcreteType, ...modifiers: element.Modifier<T>[]) {
    return Decorator((target: any, context: DecoratorContext) => {
        const decoration = Decoration.of(context);
        decoration.kind = kind;

        let result: Function | void = undefined;
        for (const mod of modifiers) {
            switch (typeof mod) {
                case "number":
                    decoration.id = mod;
                    continue;

                case "function":
                    if ("Tag" in mod) {
                        decoration.kind = mod;
                    } else if (Decorator.is(mod)) {
                        const subresult = (mod as any)(target, context);
                        if (subresult) {
                            if (result) {
                                throw new MetadataConflictError(`Multiple decorators returned a value`);
                            }
                            result = subresult;
                        }
                    } else {
                        decoration.type = Decoration.modelOf(mod as NewableFunction);
                    }
                    continue;

                case "object":
                    if (mod instanceof Model) {
                        decoration.type = mod;
                        continue;
                    }
                    break;
            }

            throw new InvalidMetadataError(`Unsupported marker ${mod}`);
        }

        return result;
    }) as T;
}

export namespace element {
    /**
     * Create a property decorator for a specific element type.
     */
    export function property(kind: Model.ConcreteType) {
        return (...modifiers: Modifier<Decorator.PropertyCollector>[]) => {
            return element(kind, ...modifiers);
        };
    }

    /**
     * Create a decorator factory for a specific type of class.
     */
    export function klass(kind: Model.ConcreteType) {
        return (...modifiers: Modifier<Decorator.ClassCollector>[]) => {
            return element(kind, ...modifiers);
        };
    }

    /**
     * A value that modifies the decoration of an element.
     *
     * Modifiers affect decoration as follows:
     *
     *   * A model type sets the "kind" property of the decoration
     *
     *   * A model instances sets the "type" property of the decoration
     *
     *   * A constructor instance sets the "type" property of the decoration
     *
     *   * A decorator is invoked to decorate the element
     *
     *   * A number sets the "id" property of the decoration
     *
     *   * A string sets the "name" property of the decoration
     */
    export type Modifier<
        T extends
            | Decorator.Collector
            | Decorator.ClassCollector
            | Decorator.PropertyCollector
            | Decorator.MethodCollector,
    > = Model.ConcreteType | Model | NewableFunction | number | string | T;
}
