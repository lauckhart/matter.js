/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Model } from "./Model.js";

/**
 * Model implementations use this utility class to simplify access to children.
 */
export class ModelChildArray<T extends Model> extends Array<T> {
    constructor(private model: Model, public factory: abstract new(...args: any[]) => T) {
        super(...model.children.filter(c => c instanceof factory) as T[]);
    }

    get(key: string | number) {
        return this.model.childOfType(this.factory, key);
    }
}

export namespace ModelChildArray {
    export type Type<T> = T extends ModelChildArray<infer T> ? T : never;
}
