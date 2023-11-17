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
        args,
        initialize,
        instanceProperties,
        instanceDescriptors,
        staticProperties,
        staticDescriptors,
    } = options;

    let type: new (...args: any[]) => any;

    // Create the constructor function
    type = createConstructor({
        name: name ?? (base ? `${base.name}$` : "GeneratedClass"),
        base,
        args,
        initialize,
        instanceProperties,
    });

    // Install properties
    if (staticProperties) {
        Object.assign(type, staticProperties);
    }
    if (staticDescriptors) {
        Object.defineProperties(type, staticDescriptors);
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
         * A preprocessor for arguments.  Derivatives may use this to
         * transform arguments prior to call to super() and initialize().
         */
        args?: (...args: any[]) => any[];

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

interface ConstructorOptions {
    name: string,
    base?: new (...args: any[]) => any,
    args?: (...args: any[]) => any[],
    initialize?: (...args: any[]) => void,
    instanceProperties?: object,
}

function createConstructor({ name, base, args, initialize, instanceProperties }: ConstructorOptions) {
    // CJS Transpilation renames this symbol so bring it local to access
    const _InternalError = InternalError;
    _InternalError;

    // Have to use eval if we don't want every class to be called
    // "GeneratedClass" in the debugger but we can ensure this won't be
    // abused.
    //
    // "name" is the only input to this function that appears textually in the
    // eval.
    if (!name.match(/^[a-z0-9$_]+$/i)) {
        throw new InternalError("Refusing to generate class with untrustworthy name");
    }

    let ext;
    if (base) {
        ext = `extends base `;
    } else {
        ext = "";
    }

    const code = [ `class ${name} ${ext}{` ];

    if (args || initialize || instanceProperties) {
        code.push("constructor() {");

        let argsName;
        if (args) {
            argsName = "a";
            code.push(`const a = args(...arguments)`);
        } else {
            argsName = "arguments";
        }

        if (base) {
            code.push(`super(...${argsName})`);
        }

        if (instanceProperties) {
            code.push(`Object.assign(this, instanceProperties)`);
        }

        if (initialize) {
            code.push(`initialize.apply(this, ${argsName})`);
        }

        code.push("}")
    }

    code.push("}", name);

    return eval(code.join("\n"));
}
