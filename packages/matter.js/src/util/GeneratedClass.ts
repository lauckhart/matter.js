/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../common/MatterError.js";

/**
 * Helper function for class generation.
 * 
 * This factory does not offer TypeScript types for the resulting class.  You
 * must cast separately.
 */
export function GeneratedClass(options: GeneratedClass.Options) {
    const {
        base,
        name,
        super: superFn,
        initialize,
        instanceProperties,
        instanceDescriptors,
        staticProperties,
        staticDescriptors,
    } = options;

    let type: new (...args: any[]) => any;

    // Create the base class constructor
    let callSuper;
    if (base) {
        const construct = (...args: any[]) => {
            const instance = Reflect.construct(base, args, type);
            instance.constructor = type;
            return instance;
        }
        if (superFn) {
            callSuper = (...args: any[]) => superFn(construct, ...args);
        } else {
            callSuper = construct;
        }
    }

    // Create the constructor function
    type = createConstructor(name ?? (base ? `${base.name}$` : "GeneratedClass"), initialize, callSuper);

    // Set up inheritance if there's a base
    if (base) {
        // Static inheritance
        Object.setPrototypeOf(type, base);

        // Instance inheritance
        function Proto(this: any) {
            this.constructor = base;
        }
        Proto.prototype = base.prototype;
        type.prototype = new (Proto as any);
    }

    // Install properties
    if (staticProperties) {
        Object.assign(type, staticProperties);
    }
    if (staticDescriptors) {
        Object.defineProperties(type, staticDescriptors);
    }
    if (instanceProperties) {
        Object.assign(type.prototype, instanceProperties);
    }
    if (instanceDescriptors) {
        Object.defineProperties(type.prototype, instanceDescriptors);
    }

    return type;
}

export namespace GeneratedClass {
    /**
     * Input to {@link GeneratedClass}.
     */
    export interface Options {
        /**
         * The name of the class.
         */
        name?: string;

        /**
         * The base class, if any.
         */
        base?: new (...args: any) => any;

        /**
         * A function that constructs the base class.  Only relevant if there's
         * a base class.  Allows implementations to perform pre-instantiation
         * initialization and pass different arguments to the base constructor.
         * This function must call construct and return the result.
         */
        super?: (construct: (...args: any[]) => object, ...args: any[]) => object;

        /**
         * A function that performs initialization after instantiation.  "this"
         * will be the object and arguments are the arguments to the
         * constructor.
         */
        initialize?: (...args: any[]) => void;

        /**
         * Instance properties.
         */
        instanceProperties?: object;

        /**
         * Instance properties defined using descriptors.
         */
        instanceDescriptors?: PropertyDescriptorMap;

        /**
         * Static properties.
         */
        staticProperties?: object;

        /**
         * Static properties defined using descriptors.
         */
        staticDescriptors?: PropertyDescriptorMap;
    }
}

function createConstructor(name: string, initialize?: (...args: any[]) => void, callSuper?: (self: any, ...args: any[]) => object) {
    // CJS Transpilation renames this symbol so bring it local to access
    const _InternalError = InternalError;
    _InternalError;

    // Have to use eval if we don't want every class to be called
    // "GeneratedClass" in the debugger but we can ensure this won't be
    // abused
    if (!name.match(/^[a-z0-9$_]+$/i)) {
        throw new InternalError("Refusing to generate class with name that may be evil");
    }

    const code = [
        `function ${name}() {`,
        `if (!new.target) throw new _InternalError('Class constructor "${name}" cannot be invoked without \\'new\\'')`,
    ]

    if (callSuper) {
        code.push(`const self = callSuper(...arguments)`);
    }

    if (initialize) {
        if (callSuper) {
            code.push("initialize.apply(self, arguments)");
        } else {
            code.push("initialize.apply(this, arguments)");
        }
    }

    if (callSuper) {
        code.push("return self");
    }

    code.push(
        "}",
        name,
    );

    return eval(code.join("\n"));
}
