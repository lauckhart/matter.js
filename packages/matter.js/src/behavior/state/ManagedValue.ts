/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValueModel } from "../../model/index.js";
import { InvocationContext } from "../InvocationContext.js";

export class ManagedValue {
    #model?: ValueModel;
    #validate?: ManagedValue.Options["validate"];

    constructor(options: ManagedValue.Options) {
        this.#validate = options.validate;
    }

    validate(value: any, context?: InvocationContext) {
        
    }

    readProperty(source: Record<string, any>, name: string, context?: InvocationContext) {
        
    }

    updateProperty(source: Record<string, any>, value: any, context?: InvocationContext) {
        
    }
}

export namespace ManagedValue {
    export enum FabricRelation {
        Unaware,
        Scoped,
        Sensitive,
    }

    export interface Options {
        model?: ValueModel;
        validate?: (value: any, context: InvocationContext) => void;
    }
}
