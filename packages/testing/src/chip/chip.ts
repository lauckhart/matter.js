/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Subject } from "../device/subject.js";
import { Test } from "../device/test.js";
import type { Container } from "../docker/container.js";
import type { TestRunner } from "../runner.js";
import { ContainerPaths } from "./config.js";
import { State } from "./state.js";

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
export interface Chip extends chip.Suite {
    (...include: string[]): chip.Suite;

    /**
     * Testing controller.  Must be set prior to use of other methods.
     */
    runner: undefined | TestRunner;

    /**
     * Initialize.  This must run before defining tests to enable test definition via globs.
     */
    initialize(): Promise<void>;

    /**
     * Shut down.  Deactivates any active testee and removes the test container.
     */
    close(): Promise<void>;

    /**
     * Open a command pipe.
     */
    openPipe(name: string): Promise<void>;

    /**
     * Add teardown logic.
     */
    onClose(fn: () => Promise<void>): void;

    /**
     * Key paths within the CHIP container.
     */
    paths: ContainerPaths;

    /**
     * Default test subject.  If this is set, test implementations may omit the subject.
     */
    defaultSubject: Subject.Factory;

    /**
     * The CHIP container.  Must be initialized before access.
     */
    container: Container;

    /**
     * The active test.  Throws if no test is running.
     */
    activeTest: Test;
}

function createSuite(initial: {
    include?: string | string[];
    exclude?: string | string[];
    defaultSubject?: Subject.Factory;
    beforeStart?: chip.BeforeHook;
    beforeTest?: chip.BeforeHook;
}): chip.Suite {
    const tests = new Set<Test>();
    const implementations = new Map<Test, Mocha.Test>();
    let subject: undefined | Subject.Factory;
    const beforeStartHooks = Array<chip.BeforeHook>();
    const beforeTestHooks = Array<chip.BeforeHook>();
    const args = Array<string>();

    const suite: chip.Suite = {
        /**
         * Add tests to include.
         *
         * @param glob one or more sh-style globs for selecting tests based on ID
         */
        include(...glob: string[]) {
            for (const test of State.select(glob)) {
                if (tests.has(test)) {
                    continue;
                }

                implementations.set(
                    test,
                    State.implement({
                        test: test,

                        get subject() {
                            return subject;
                        },

                        get args() {
                            return args;
                        },

                        beforeStart: (...args) => runBeforeHooks(beforeStartHooks, ...args),
                        beforeTest: (...args) => runBeforeHooks(beforeTestHooks, ...args),
                    }),
                );

                tests.add(test);
            }
            return this;
        },

        /**
         * Exclude tests.  Only affects tests already included.
         */
        exclude(...glob: string[]) {
            for (const test of State.select(glob, tests)) {
                implementations.get(test)?.skip();
            }
            return this;
        },

        /**
         * Set the test subject.  Optional if you set {@link chip.subject}.
         */
        subject(newSubject: Subject.Factory) {
            subject = newSubject;
            return this;
        },

        /**
         * Execute a function after initializing but before starting the subject.
         */
        beforeStart(hook: chip.BeforeHook) {
            beforeStartHooks.push(hook);
            return this;
        },

        /**
         * Execute a function after starting the subject but before running the test.
         */
        beforeTest(hook: chip.BeforeHook) {
            beforeTestHooks.push(hook);
            return this;
        },

        /**
         * Add additional arguments passed to the test runner.
         */
        args(...newArgs: string[]) {
            args.push(...newArgs);
            return this;
        },
    };

    for (const key in initial) {
        const fn = (suite as unknown as Record<string, (...args: any[]) => chip.Suite>)[key];
        if (typeof fn === "function") {
            const arg = initial[key as keyof typeof initial];
            if (Array.isArray(arg)) {
                fn(...arg);
            } else {
                fn(arg);
            }
        }
    }

    return suite;
}

function chipFn(...include: string[]): chip.Suite {
    return createSuite({ include });
}

Object.defineProperties(chipFn, {
    runner: {
        set(runner: TestRunner) {
            State.runner = runner;
        },
    },

    defaultSubject: {
        set(subject: Subject.Factory) {
            State.subject = subject;
        },
    },

    activeTest: {
        get: () => State.test,
    },

    container: {
        get: () => State.container,
    },

    paths: { value: ContainerPaths },

    initialize: { value: State.initialize },
    close: { value: State.close },
    openPipe: { value: State.openPipe },
    onClose: { value: State.onClose },
});

export const chip = chipFn as Chip;

function runBeforeHooks(hooks: chip.BeforeHook[], ...args: Parameters<chip.BeforeHook>) {
    const promises = new Array<Promise<void>>();
    for (const hook of hooks) {
        const promise = hook(...args);
        if (promise) {
            promises.push(promise);
        }
    }
    if (promises) {
        return Promise.all(promises).then(() => {});
    }
}

export namespace chip {
    /**
     * The test implementation.
     */
    export type TestSelection = Test | string;

    export interface BeforeHook {
        (subject: Subject, test: Test): void | Promise<void>;
    }

    export interface Suite {
        /**
         * Add tests to include.
         *
         * @param glob one or more sh-style globs for selecting tests based on ID
         */
        include(...glob: string[]): Suite;

        /**
         * Exclude tests.  Only affects tests already included.
         */
        exclude(...glob: string[]): Suite;

        /**
         * Set the test subject.  Optional if you set {@link chip.subject}.
         */
        subject(subject: Subject.Factory): Suite;

        /**
         * Execute a function after initializing but before starting the subject.
         */
        beforeStart(hook: BeforeHook): Suite;

        /**
         * Execute a function after starting the subject but before running the test.
         */
        beforeTest(hook: BeforeHook): Suite;

        /**
         * Add arguments to the test runner.
         */
        args(...args: string[]): Suite;
    }
}
