/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "#tools";
import { parse } from "path";
import { PicsFile } from "./chip/pics-file.js";
import { type TestRunner } from "./runner.js";
import { Container, Docker, Terminal } from "./util/docker.js";

/**
 * Path configuration.
 */
namespace Constants {
    export const yamlRunner = `/scripts/tests/chipyaml/chiptool.py`;
    export const yamlTests = `/tests/yaml`;
    export const pythonTests = `/tests/python`;

    export const pics = "/matter.js/packages/tools/build/pics.properties";
    export const chipPics = "/tests/yaml/ci-pics-values";
    export const initTimeout = 60_000;
    export const defaultTimeout = 60_000;
    export const imageName = "ghcr.io/matter-js/chip";
    export const containerName = "matter.js-chip-test";
}

/**
 * Internal state.
 */
const State = {
    configured: false,
    options: undefined as Chip.Options | undefined,
    container: undefined as Container | undefined,
    yamlTests: Array<string>(),
    pythonTests: Array<string>(),
    activeTestee: undefined as Chip.Testee | undefined,
};

/**
 * Internal configuration management.
 */
const Config = {
    set options(options: Chip.Options) {
        State.options = options;
    },

    get runner() {
        const runner = State.options?.runner;

        if (runner === undefined) {
            throw new Error("No test runner configured");
        }

        return runner;
    },

    get container() {
        const container = State.container;

        if (container === undefined) {
            throw new Error("Docker container is not initialized");
        }

        return container;
    },
};

/**
 * CHIP testing controller.  "CHIP tests" are official tests implemented in the connectedhomeip repository.
 */
export const Chip = {
    /**
     * Configure CHIP testing.  Invoke prior to use of other methods.
     */
    set config(config: Chip.Options) {
        Config.options = config;
    },

    /**
     * Initialize.  This must run before defining tests to enable test definition via globs.
     */
    async initialize() {
        await initialize();
    },

    /**
     * Shut down.  Deactivates any active testee and removes the test container.
     */
    async close() {
        await Chip.deactivateTestee();

        const { container } = State;
        if (container) {
            try {
                await container.kill();
            } catch (e) {
                console.warn("Error terminating test container", e);
            }
        }
    },

    /**
     * Activate a test app.
     */
    async activateTestee(testee: Chip.Testee, afterActivation?: () => void | Promise<void>) {
        if (State.activeTestee === testee) {
            return;
        }

        await this.deactivateTestee();

        await testee.setup();
        await testee.start();

        await afterActivation?.();

        State.activeTestee = testee;
    },

    /**
     * Close the current test app, if any.
     */
    async deactivateTestee() {
        if (State.activeTestee === undefined) {
            return;
        }

        try {
            await State.activeTestee.stop();
        } catch (e) {
            console.warn("Error stopping test subject", e);
        }

        State.activeTestee = undefined;
    },

    /**
     * Define YAML tests.  This is a declarative CHIP test defined in a YAML file.
     */
    yaml(testee: Chip.Testee, includeGlob: string, excludeGlob?: string) {
        let tests = filterWithGlob(State.yamlTests, includeGlob);
        if (excludeGlob !== undefined) {
            tests = filterWithGlob(tests, excludeGlob, true);
        }

        if (tests.length === 0) {
            throw new Error(`YAML test glob ${includeGlob} matched no tests`);
        }

        for (const file of tests) {
            implementTest(testee, {
                name: parse(file).base,

                async invoke(container: Container) {
                    const terminal = await container.exec(Terminal.Line, [
                        "python3",
                        Constants.yamlRunner,
                        file,
                        "--PICS",
                        Constants.pics,
                    ]);
                    for await (const line of terminal) {
                        MockLogger.injectExternalMessage("CHIP", line);
                    }
                },
            });
        }
    },

    /**
     * Define a "python" test.  This is a CHIP test implemented as a python script.
     */
    python(testee: Chip.Testee, includeGlob: string, excludeGlob?: string) {
        let tests = filterWithGlob(State.pythonTests, includeGlob);
        if (excludeGlob !== undefined) {
            tests = filterWithGlob(tests, excludeGlob, true);
        }

        if (tests.length === 0) {
            throw new Error(`Python test glob ${includeGlob} matched no tests`);
        }

        for (const file of tests) {
            const name = parse(file).name;
            implementTest(testee, {
                name,
                async invoke(container) {
                    const terminal = await container.exec(Terminal.Line, ["python3", file, "--PICS", Constants.pics]);
                    for await (const line of terminal) {
                        // TODO - pretty this up
                        MockLogger.injectExternalMessage("CHIP", line);
                    }
                },
            });
        }
    },
};

let containerInitializerInstalled = false;

function implementTest(testee: Chip.Testee, tester: Chip.Tester) {
    if (!containerInitializerInstalled) {
        containerInitializerInstalled = true;
        before(async function () {
            this.timeout(Constants.initTimeout);
            await initialize();
        });
    }

    it(tester.description ?? tester.name, async () => {
        await Chip.activateTestee(testee, commissionTestee);
        await tester.invoke(Config.container);
    }).timeout(tester.timeout ?? Constants.defaultTimeout);
}

async function commissionTestee() {
    const terminal = await Config.container.exec(Terminal.Line, [
        "chip-tool",
        "pairing",
        "onnetwork-long",
        "0x12344321",
        "20202021",
        "1234",
    ]);

    try {
        for await (const line of terminal) {
            MockLogger.injectExternalMessage("CHIP", line);
        }
    } catch (e) {
        throw new Error("Error pairing test app", { cause: e });
    }
}

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
        invoke(container: Container): Promise<void>;
    }
}

export type Chip = typeof Chip;

async function initialize() {
    if (State.configured) {
        return;
    }

    State.container = await configureContainer();

    await configurePics();
    await configureYaml();
    await configurePython();

    State.configured = true;
}

async function configureContainer() {
    const docker = new Docker();

    const { progress } = Config.runner;

    // TODO - define docker network to match CHIP's testing infrastructure

    return await progress.run(`Pull and start ${progress.emphasize(Constants.imageName)}`, async () => {
        await docker.pull(Constants.imageName);
        return await docker.start({
            image: Constants.imageName,
            name: Constants.containerName,
            autoRemove: true,

            // Keep the container running until we are through with it
            attachStdin: true,
        });
    });
}

async function configurePics() {
    const ciPics = await Config.container.readFile(Constants.chipPics);
    const pics = new PicsFile(ciPics, true);

    const overrides = new PicsFile(Package.tools.resolve("src/testing/chip/pics.properties"));
    pics.patch(overrides);

    pics.save(Package.tools.resolve("build/pics.properties"));
}

async function configureYaml() {
    const tests = await Config.container.resolveGlob(`${Constants.yamlTests}/Test_*.yaml`);

    State.yamlTests.push(...tests);
}

async function configurePython() {
    const tests = (await Config.container.resolveGlob(`${Constants.pythonTests}/*.py`)).filter(name =>
        name.match(/(?:TC_|Test)[^/]\.py$/),
    );

    State.pythonTests.push(...tests);
}

function filterWithGlob(list: string[], glob: string, invert = false) {
    const globPattern = glob.replace(/\*/g, "[^\\/]+");
    const pattern = new RegExp(`^.*/(?:Test_TC_|TC|Test)${globPattern}\\.(?:py|yaml)$`);
    return list.filter(s => !!s.match(pattern) === !invert);
}
