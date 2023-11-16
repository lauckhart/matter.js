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
        name,
        base,
        instanceProperties,
        instanceDescriptors,
        staticProperties,
        staticDescriptors,
    } = options;

    // If a constructor is passed in, it must delegate to super.  Otherwise,
    // if there's a base, we do the delegation.  Otherwise the real constructor
    // is an empty function
    let initialize = options.initialize;
    if (!initialize) {
        if (base) {
            initialize = function(this: any) {
                return (base as any).apply(this, arguments) || this;
            }
        }
    }

    // Create the constructor function
    let type: new () => any;
    if (name) {
        // Have to be a little evil if we don't want every class to be called
        // "GeneratedClass" in the debugger.  But just a little
        if (!name.match(/^[a-z0-9$_]+$/i)) {
            throw new InternalError("Refusing to generate class with name that may be evil");
        }

        if (initialize) {
            type = eval(`function ${name}() { constructor.apply(this, arguments); }`);
        } else {
            type = eval(`function ${name}() {}`);
        }
    } else {
        if (initialize) {
            type = function GeneratedClass(this: any) {
                initialize?.apply(this, arguments);
            } as any;
        } else {
            type = function GeneratedClass(this: any) {
            } as any;
        }
    }

    // Set up inheritance if there's a base
    if (base) {
        // Static inheritance
        Object.setPrototypeOf(type, base);

        // Instance inheritance
        type.prototype = GeneratedClass.prototypeFor(base);
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
         * A function that performs initialization upon instantiation
         */
        initialize?: (...args: any) => any;

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

    /**
     * Create a prototype for derivatives of a class.
     */
    export function prototypeFor(type: new (...args: any[]) => any) {
        function Proto(this: any) {
            this.constructor = type;
        }

        Proto.prototype = type.prototype;
        type.prototype = new (Proto as any);

        return Proto;
    }
}
