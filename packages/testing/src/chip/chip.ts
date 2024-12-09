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
export function Chip({ include, exclude }: Chip.Options): Chip.Builder {
    const tests = State.select(include, exclude);

    const beforeStartHooks = Array<Chip.BeforeHook>();
    const beforeTestHooks = Array<Chip.BeforeHook>();
    let subject: Subject.Factory | undefined;

    for (const test of tests) {
        State.implement({
            test: test,

            get subject() {
                return subject;
            },

            beforeStart: (...args) => runBeforeHooks(beforeStartHooks, ...args),
            beforeTest: (...args) => runBeforeHooks(beforeTestHooks, ...args),
        });
    }

    return {
        subject(newSubject: Subject.Factory) {
            subject = newSubject;
            return this;
        },

        beforeStart(hook) {
            beforeStartHooks.push(hook);
            return this;
        },

        beforeTest(hook) {
            beforeTestHooks.push(hook);
            return this;
        },
    };
}

function runBeforeHooks(hooks: Chip.BeforeHook[], ...args: Parameters<Chip.BeforeHook>) {
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

Chip.paths = ContainerPaths;

/**
 * Testing controller.  Must be set prior to use of other methods.
 */
Chip.runner = undefined as undefined | TestRunner;

Object.defineProperty(Chip, "runner", {
    set(runner: TestRunner) {
        State.runner = runner;
    },
});

/**
 * Default test subject.  If this is set, test implementations may omit the subject.
 */
Chip.subject = undefined as undefined | Subject.Factory;

Object.defineProperty(Chip, "subject", {
    set(subject: Subject.Factory) {
        State.subject = subject;
    },
});

/**
 * The test container.  Must be initialized before access.
 */
Chip.container = {} as Container;

Object.defineProperty(Chip, "container", {
    get() {
        if (State.container === undefined) {
            throw new Error("CHIP container accessed before initialization");
        }

        return State.container;
    },
});

/**
 * Active test.  Will throw if no test is active.
 */
Chip.activeTest = {} as Test;

Object.defineProperty(Chip, "activeTest", {
    get() {
        return State.test;
    },
});

/**
 * Initialize.  This must run before defining tests to enable test definition via globs.
 */
Chip.initialize = async () => {
    await State.initialize();
};

/**
 * Shut down.  Deactivates any active testee and removes the test container.
 */
Chip.close = async () => {
    await State.close();
};

/**
 * Open a command pipe.
 */
Chip.openPipe = async (name: string) => {
    return State.openPipe(name);
};

/**
 * Add teardown logic.
 */
Chip.onClose = (fn: () => Promise<void>) => {
    return State.onClose(fn);
};

export namespace Chip {
    /**
     * The test implementation.
     */
    export type TestSelection = Test | string;

    export interface BeforeHook {
        (subject: Subject, test: Test): void | Promise<void>;
    }

    export interface Builder {
        /**
         * Set the test subject.  Optional if you set {@link Chip.subject}.
         */
        subject(subject: Subject.Factory): Builder;

        /**
         * Execute a function after initializing but before starting the subject.
         */
        beforeStart(hook: BeforeHook): Builder;

        /**
         * Execute a function after starting the subject but before running the test.
         */
        beforeTest(hook: BeforeHook): Builder;
    }

    /**
     * Options for instantiating tests.
     */
    export interface Options {
        /**
         * A glob selecting tests to include.
         */
        include: string | string[];

        /**
         * A glob that excludes tests from the include set.
         */
        exclude?: string | string[];
    }
}

export type Chip = typeof Chip;
