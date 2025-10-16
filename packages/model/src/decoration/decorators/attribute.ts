/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClassDecoration } from "#decoration/decorations/ClassDecoration.js";
import { Decorator } from "#general";
import { AttributeModel } from "#models/AttributeModel.js";
import { ClusterModel } from "#models/ClusterModel.js";
import { element } from "./element.js";

/**
 * Decorates a property as a Matter attribute.
 */
export function attribute(...modifiers: element.Modifier<Decorator.PropertyCollector>[]): Decorator.PropertyCollector {
    const decorate = element.property(AttributeModel)(...modifiers);
    return Decorator((target, context) => {
        // When adding attributes, force class to cluster
        const decoration = ClassDecoration.of(context);
        decoration.modelType = ClusterModel;

        // Now decorate as normal
        decorate(target, context);
    });
}
