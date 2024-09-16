/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Docker from "dockerode";
import { readdir } from "fs/promises";
import { Writable } from "stream";
import { Package } from "../util/package.js";
import { DOCKER_BUILD_PATH, DOCKER_NAME, NamedEnvironments, TestEnvironment } from "./chip/chip-config.js";
import { type TestRunner } from "./runner.js";

/**
 * Path configuration.
 */
namespace Constants {
    export const chip = "/connectedhomeip";
    export const chipTool = `${chip}/scripts/tests/chipyaml/chiptool.py`;
    export const yamlTests = `${chip}/src/app/tests/suites/certification`;
    export const pythonTests = `${chip}/src/python_testing`;
    export const python = ["/usr/bin/env", "-S", "python3", "-B"];
    export const pics = "/pics.properties";
    export const commonArgs = {
        "storage-path": "/storage.json",
        "commissioning-method": "on-network",
        discriminator: "1234",
        passcode: "20202021",
    };
    export const buildTimeout = 600000;
    export const defaultTimeout = 10000;
}

/**
 * Internal state.
 */
const State = {
    options: undefined as Chip.Options | undefined,
    docker: undefined as Docker | undefined,
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

    get environment() {
        let environment = State.options?.environment;

        if (environment === undefined || environment === null) {
            environment = "default";
        } else if (typeof environment === "object") {
            return environment;
        }

        environment = NamedEnvironments[environment];
        if (environment === undefined) {
            throw new Error(`There is no predefined environment named ${environment}`);
        }

        return environment;
    },

    async docker() {
        if (State.docker) {
            return State.docker;
        }

        const docker = new Docker();

        await Config.runner.progress.run("Build test image", () => buildImage(docker));

        State.docker = docker;

        return docker;
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
     * Run a YAML test.  This is a declarative CHIP test defined in a YAML file.
     */
    yaml(testee: Chip.Testee, tester: Chip.TestSelection) {
        tester = configureTester(tester, {
            defaultExtension: "yaml",
            defaultPath: Constants.yamlTests,
            defaultArgs: {
                ...Constants.commonArgs,
                "pics-file": Constants.pics,
            },
        });

        tester.args?.push(tester.name);

        implementTest(testee, tester);
    },

    /**
     * Define a "python" test.  This is a CHIP test implemented as a python script.
     */
    python(testee: Chip.Testee, tester: Chip.TestSelection) {
        if (typeof tester === "string") {
            tester = {
                name: tester,
                args: [`/connectedhomeip/src/python_testing/${tester}.py`],
            };
        }
        tester = configureTester(tester, {
            defaultExtension: "py",
            defaultPath: Constants.pythonTests,
            defaultArgs: {
                ...Constants.commonArgs,
                PICS: Constants.pics,
            },
        });

        tester.command?.push(tester.name);

        implementTest(testee, tester);
    },
};

interface TesterConfiguration {
    defaultPath: string;
    defaultExtension: string;
    defaultArgs: Record<string, string | undefined>;
}

function configureTester(
    tester: Chip.TestSelection,
    options: TesterConfiguration,
): Chip.Tester & { description: string } {
    if (typeof tester === "string") {
        tester = { name: tester };
    }

    let { name, description } = tester;

    if (description === undefined) {
        description = name;
    }

    if (!name.includes("/")) {
        name = `${options.defaultPath}/${name}`;
    }

    if (!name.includes(".")) {
        name = `${name}.${options.defaultExtension}`;
    }

    const args = tester.args ? [...tester.args] : Array<string>();

    for (const [name, value] of Object.entries(options.defaultArgs)) {
        const opt = `--${name}`;
        if (!args.includes(opt)) {
            args.unshift(opt);
            if (value !== undefined) {
                args.unshift(value);
            }
        }
    }

    return { ...tester, name, description };
}

let containerInitializerInstalled = false;

function implementTest(testee: Chip.Testee, tester: Chip.Tester) {
    if (!containerInitializerInstalled) {
        containerInitializerInstalled = true;
        before(async function () {
            this.timeout(Constants.buildTimeout);
            await Config.docker();
        });
    }

    it(tester.description ?? tester.name, async () => {
        await testee.setup();
        await testee.start();

        try {
            await invokeTester(tester);
        } finally {
            try {
                await testee.stop();
            } catch (e) {
                console.warn("Error stopping test subject", e);
            }
        }
    }).timeout(tester.timeout ?? Constants.defaultTimeout);
}

async function invokeTester(tester: Chip.Tester) {
    const docker = await Config.docker();

    const output = OutputProcessor(Config.runner);

    const Env = Object.entries(Config.environment).map(([key, value]) => {
        if (Array.isArray(value)) {
            value = value.join(",");
        }
        return `${key}=${value}`;
    });

    const HostConfig: Docker.HostConfig = {
        AutoRemove: true,
        Binds: [`${Package.workspace.path}:/matter.js`],
        Privileged: true,
        NetworkMode: "host",
    };

    const command = [];
    if (tester.command) {
        command.push(...tester.command);
    }
    if (tester.args) {
        command.push(...tester.args);
    }

    await docker.run(DOCKER_NAME, command, output.collector, { Env, HostConfig }, {});
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
        environment?: TestEnvironment;
    }

    /**
     * Details of how to run a specific test.
     */
    export interface Tester {
        name: string;
        description?: string;
        command?: string[];
        args?: string[];
        timeout?: number;
    }
}

export type Chip = typeof Chip;

/**
 * Strip ANSI escape codes from a string.
 */
function deansify(text: string) {
    // Credit to https://stackoverflow.com/questions/25245716/remove-all-ansi-colors-styles-from-strings
    // eslint-disable-next-line no-control-regex
    return text.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
}

async function buildImage(docker: Docker) {
    const dockerPath = Package.tools.resolve(DOCKER_BUILD_PATH);
    const files = await readdir(dockerPath);

    const stream = await docker.buildImage(
        {
            context: dockerPath,
            src: files,
        },
        {
            t: DOCKER_NAME,
        },
    );

    await new Promise<void>((resolve, reject) => {
        docker.modem.followProgress(stream, (error, result) => {
            if (error) {
                reject(error);
            }

            const finalMessage = result[result.length - 1];
            const errorMessage = finalMessage?.error ?? finalMessage?.errorDetail?.message;
            if (errorMessage) {
                reject(new Error(errorMessage));
            }

            resolve();
        });
    });
}

function OutputProcessor(runner: TestRunner) {
    let testCount = 0;
    const collector = new Writable();
    let capture = Array<string>();

    let partial: string | undefined;

    /**
     * Extract failure details from the test runner's output sphaghetti.
     */
    function reportFailures() {
        let testName: undefined | string;
        let testLogs: undefined | string[];
        for (const line of capture) {
            const subtestBoundary = deansify(line).match(/\*{5} (Test Step \d+|Test Failure) : (.*)/);
            if (subtestBoundary) {
                if (subtestBoundary[1] === "Test Failure") {
                    if (testName === undefined) {
                        continue;
                    }
                    runner.reporter.failTest(testName, {
                        message: subtestBoundary[2],
                        logs: testLogs?.join("\n"),
                    });
                } else {
                    testName = subtestBoundary[2];
                    testLogs = [];
                }
            } else if (testLogs) {
                // Extract matter.js logs
                const appOut = line.match(/^.* APP {2}OUT {2}: (.*)$/);
                if (appOut) {
                    testLogs.push(appOut[1]);
                    continue;
                }

                // Extract diagnostics from the test framework
                const testOut = line.match(/(\d{4}-\d\d-\d\d) .*(\d\d:\d\d:\d\d\.\d\d\d) - TEST OUT {2}: (.*)$/);
                if (testOut) {
                    if (deansify(testOut[3]).match(/^(?:✗ \d+.\d+ms$|\s+\d+\. Running )/)) {
                        continue;
                    }

                    const date = testOut[1];
                    const time = testOut[2];
                    const message = testOut[3].replace("\t\t    ", "").replace(/\t/g, "  ");

                    // Test suite logs date and time of report plus time of log message.  We only care about the second
                    // time so ignore the first
                    testLogs.push(`CHIP ${date} ${time} ${message}`);
                    continue;
                }

                // We don't recognize the line; pass as-is
                testLogs.push(line);
            }
        }
    }

    /**
     * Process test suite output.
     *
     * Unfortunately run_test_suite.py hides most output unless the test crashes so we can't count subtests reliably
     * without PR or replacing with our own thing.  The individual test runners do report this though so we can report
     * per-test information from failure output.
     */
    function processLine(line: string) {
        line = line.trim();
        const plain = deansify(line);
        const testBoundary = plain.match(
            /^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d\.\d{3} [A-Z ]{7} ([a-zA-Z0-9_]+)\s+- (Starting test|(?:Completed|FAILED) in \d+\.\d+ seconds)$/,
        );

        if (testBoundary) {
            if (testBoundary[2].startsWith("Start")) {
                testCount++;
                capture = [];
                runner.reporter.beginRun(testBoundary[1], undefined, false);
            } else if (testBoundary[2].startsWith("Completed")) {
                runner.reporter.endRun();
            } else {
                reportFailures();
                runner.reporter.endRun();
            }
        }

        if (runner.options.allLogs) {
            console.log(line);
        }

        capture.push(line);
    }

    collector._write = (chunk, _encoding, done) => {
        chunk = chunk.toString();

        const lines = chunk.split("\n");
        if (partial) {
            lines[0] = partial + lines[0];
        }

        partial = lines.pop();

        for (const line of lines) {
            processLine(line);
        }
        done();
    };

    collector._final = done => {
        if (partial !== undefined) {
            processLine(partial);
        }

        // If we didn't notice any tests assume something calamitous occurred and dump all output
        if (!testCount) {
            console.log(capture.join(""));
        }

        done();
    };

    return {
        collector: collector,
    };
}
