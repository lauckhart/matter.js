/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../common/MatterError.js";

/**
 * Helper function for class generation.
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

    let type: new () => any;

    function construct(...args: any[]) {
        return Reflect.construct(base ?? Object, args, type);
    }

    let callSuper;

    if (superFn) {
        callSuper = (...args: any[]) => superFn(construct, ...args);
    } else {
        callSuper = construct;
    }

    // Create the constructor function
    type = createConstructor(name ?? "GeneratedClass", callSuper, initialize);

    // Set up inheritance if there's a base
    if (base) {
        // Static inheritance
        Object.setPrototypeOf(type, base);

        // Instance inheritance
        function Proto(this: any) {
            this.constructor = type;
        }
        Proto.prototype = type.prototype;
        type.prototype = new (Proto as any);
    }

    // Install properties
    if (staticProperties) {
        Object.assign(type.prototype, staticProperties);
    }
    if (staticDescriptors) {
        Object.defineProperties(type.prototype, staticDescriptors);
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
         * The name of the class
         */
        name?: string;

        /**
         * The base class
         */
        base?: new (...args: any) => any;

        /**
         * A function that constructs the base class
         */
        super?: (construct: (...args: any[]) => object, ...args: any[]) => object;

        /**
         * A function that performs initialization after instantiation
         */
        initialize?: (...args: any[]) => void;

        /**
         * Instance properties
         */
        instanceProperties?: object;

        /**
         * Instance property descriptors
         */
        instanceDescriptors?: PropertyDescriptorMap;

        /**
         * Static properties
         */
        staticProperties?: object;

        /**
         * Static property descriptors
         */
        staticDescriptors?: PropertyDescriptorMap;
    }
}

function createConstructor(name: string, _callSuper: (...args: any[]) => object, _initialize?: (...args: any[]) => void) {
    // Have to use eval if we don't want every class to be called
    // "GeneratedClass" in the debugger but we can ensure this won't be
    // abused
    if (!name.match(/^[a-z0-9$_]+$/i)) {
        throw new InternalError("Refusing to generate class with name that may be evil");
    }

    return eval(`
        function ${name}() {
            if (!new.target) return Reflect.construct(${name}, arguments);
            const self = _callSuper(arguments);
            _initialize?.apply(self, arguments);
            return self;
        }
        ${name}
    `);
}
