/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "../docker/container.js";
import { type TestRunner } from "../runner.js";
import { Internal } from "./internal.js";

/**
 * CHIP test harness.
 *
 * "CHIP tests" are official tests implemented in the connectedhomeip repository.
 *
 * This harness uses Mocha to run a {@link Chip.Test} against a {@link Chip.Subject}.
 *
 * We provide utility functions for tests against in-process matter.js subjects.  But the subject interface is generic
 * and requires only setup and teardown logic, so could easily support out-of-process subjects.
 *
 * We execute test logic within a Docker container available at {@link https://github.com/matter-js/matter.js-chip}.
 */
export function Chip(subject: Chip.Subject, includeGlob: string, excludeGlob?: string) {
    const tests = Internal.select(includeGlob, excludeGlob);

    for (const test of tests) {
        Internal.implement(subject, test);
    }
}

/**
 * Configure CHIP testing.  Invoke prior to use of other methods.
 */
Chip.options = undefined as undefined | Chip.Options;

Object.defineProperty(Chip, "options", {
    set(options: Chip.Options) {
        Internal.options = options;
    },
});

/**
 * Initialize.  This must run before defining tests to enable test definition via globs.
 */
Chip.initialize = async () => {
    await Internal.initialize();
};

/**
 * Shut down.  Deactivates any active testee and removes the test container.
 */
Chip.close = async () => {
    await Internal.close();
};

export namespace Chip {
    /**
     * The test subject.
     */
    export interface Subject {
        setup(): Promise<void>;
        start(): Promise<void>;
        stop(): Promise<void>;
    }

    /**
     * The test implementation.
     */
    export type TestSelection = Test | string;

    /**
     * Configuration required from testing program.
     */
    export interface Options {
        runner: TestRunner;
    }

    /**
     * Details of how to run a specific test.
     */
    export interface Test {
        name: string;
        description?: string;
        timeout?: number;
        commission(container: Container): Promise<void>;
        invoke(container: Container): Promise<void>;
    }
}

export type Chip = typeof Chip;
