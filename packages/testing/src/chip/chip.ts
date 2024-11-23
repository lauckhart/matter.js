/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Subject } from "../device/subject.js";
import { Test } from "../device/test.js";
import type { Container } from "../docker/container.js";
import type { TestRunner } from "../runner.js";
import { Internal } from "./internal.js";

/**
 * CHIP test harness.
 *
 * "CHIP tests" are official tests implemented in the connectedhomeip repository.
 *
 * This harness uses Mocha to run a {@link Test} against a {@link Subject}.
 *
 * We provide utility functions for tests against in-process matter.js subjects.  But the subject interface is generic
 * and requires only setup and teardown logic, so could easily support out-of-process subjects.
 *
 * We execute test logic within a Docker container available at {@link https://github.com/matter-js/matter.js-chip}.
 */
export function Chip(subject: Subject.Factory, includeGlob: string, excludeGlob?: string) {
    const tests = Internal.select(includeGlob, excludeGlob);

    for (const test of tests) {
        Internal.implement(subject, test);
    }
}

/**
 * Configure CHIP testing.  Set prior to use of other methods.
 */
Chip.options = undefined as undefined | Chip.Options;

Object.defineProperty(Chip, "options", {
    set(options: Chip.Options) {
        Internal.options = options;
    },
});

/**
 * The test container.  Must be initialized before access.
 */
Chip.container = {} as Container;

Object.defineProperty(Chip, "container", {
    get() {
        if (Internal.container === undefined) {
            throw new Error("CHIP container accessed before initialization");
        }

        return Internal.container;
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

/**
 * Open a command pipe.
 */
Chip.openPipe = async (name: string) => {
    return Internal.openPipe(name);
};

/**
 * Add teardown logic.
 */
Chip.onClose = (fn: () => Promise<void>) => {
    return Internal.onClose(fn);
};

export namespace Chip {
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
}

export type Chip = typeof Chip;
