/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "../docker/container.js";
import { type TestRunner } from "../runner.js";
import { Internal } from "./internal.js";
import { PythonTests } from "./python-tests.js";
import { YamlTests } from "./yaml-tests.js";

/**
 * CHIP testing controller.
 *
 * "CHIP tests" are official tests implemented in the connectedhomeip repository.
 */
export const Chip = {
    /**
     * Configure CHIP testing.  Invoke prior to use of other methods.
     */
    set options(options: Chip.Options) {
        Internal.options = options;
    },

    /**
     * Initialize.  This must run before defining tests to enable test definition via globs.
     */
    async initialize() {
        await Internal.initialize();
    },

    /**
     * Shut down.  Deactivates any active testee and removes the test container.
     */
    async close() {
        await Internal.close();
    },

    /**
     * Define YAML tests.  This is a declarative CHIP test defined in a YAML file.
     */
    yaml(testee: Chip.Testee, includeGlob: string, excludeGlob?: string) {
        return YamlTests(testee, includeGlob, excludeGlob);
    },

    /**
     * Define a "python" test.  This is a CHIP test implemented as a python script.
     */
    python(testee: Chip.Testee, includeGlob: string, excludeGlob?: string) {
        return PythonTests(testee, includeGlob, excludeGlob);
    },
};

export namespace Chip {
    /**
     * The test subject.
     */
    export interface Testee {
        setup(): Promise<void>;
        start(): Promise<void>;
        stop(): Promise<void>;
    }

    /**
     * The test implementation.
     */
    export type TestSelection = Tester | string;

    /**
     * Configuration required from testing program.
     */
    export interface Options {
        runner: TestRunner;
    }

    /**
     * Details of how to run a specific test.
     */
    export interface Tester {
        name: string;
        description?: string;
        timeout?: number;
        commission(container: Container): Promise<void>;
        invoke(container: Container): Promise<void>;
    }
}

export type Chip = typeof Chip;
