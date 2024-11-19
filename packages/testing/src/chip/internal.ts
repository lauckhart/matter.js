import { basename, extname } from "path";
import { Container } from "../docker/container.js";
import { Docker } from "../docker/docker.js";
import type { Chip } from "./chip.js";
import { Constants, ContainerPaths } from "./config.js";
import { PicsFile } from "./pics-file.js";
import { PythonTests } from "./python-tests.js";
import { YamlTests } from "./yaml-tests.js";

/**
 * Internal state.
 */
const State = {
    configured: false,
    maybeOptions: undefined as Chip.Options | undefined,
    maybeContainer: undefined as Container | undefined,
    activeTestee: undefined as Chip.Subject | undefined,
    tests: Array<Chip.Test>(),

    get runner() {
        const runner = this.maybeOptions?.runner;

        if (runner === undefined) {
            throw new Error("No test runner configured");
        }

        return runner;
    },
};

let containerInitializerInstalled = false;

export const Internal = {
    get container() {
        const container = State.maybeContainer;

        if (container === undefined) {
            throw new Error("Docker container is not initialized");
        }

        return container;
    },

    set options(options: Chip.Options) {
        State.maybeOptions = options;
    },

    /**
     * Setup.
     */
    async initialize() {
        if (State.configured) {
            return;
        }

        const { progress } = State.runner;
        return await progress.run(
            `Initialize container ${progress.emphasize(Constants.containerName)} from ${progress.emphasize(Constants.imageName)}`,
            initialize,
        );
    },

    /**
     * Teardown.
     */
    async close() {
        await deactivateTestee();

        const { maybeContainer: container } = State;
        if (container) {
            try {
                await container.kill();
            } catch (e) {
                console.warn("Error terminating test container", e);
            }
        }
    },

    /**
     * Select tests based on string patterns.  {@link include} and {@link exclude} are "glob" patterns with "*" as a
     * wildcard.
     */
    select(include: string, exclude?: string) {
        let tests = filterWithGlob(State.tests, include);

        if (!tests.length) {
            throw new Error(`Test glob ${include} matched no tests`);
        }

        if (exclude) {
            tests = filterWithGlob(tests, exclude, true);
        }

        if (!tests.length) {
            throw new Error(`Test exclusion glob ${exclude} eliminated all tests selected by glob ${include}`);
        }

        return tests;
    },

    /**
     * Define a new test.
     *
     * Installs a test into the current Mocha suite that activates {@link testee} then runs {@link tester}.
     */
    implement(testee: Chip.Subject, tester: Chip.Test) {
        if (!containerInitializerInstalled) {
            containerInitializerInstalled = true;
            before(async function () {
                this.timeout(Constants.initTimeout);
                await Internal.initialize();
            });
        }

        it(tester.description ?? tester.name, async () => {
            await activateTestee(testee, tester);
            await tester.invoke(Internal.container);
        }).timeout(tester.timeout ?? Constants.defaultTimeout);
    },
};

async function initialize() {
    State.maybeContainer = await configureContainer();

    await configurePics();

    // Load each type of test
    State.tests.push(...(await YamlTests(Internal.container)));
    State.tests.push(...(await PythonTests(Internal.container)));

    // Loaded tests are paths; convert to a normal form that just consists of the actual purpose of the test
    for (const test of State.tests) {
        test.name = testNameOf(test.name);
    }

    // Try to order the tests logically
    State.tests.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

    State.configured = true;
}

async function configureContainer() {
    const docker = new Docker();

    // TODO - define docker network to match CHIP's testing infrastructure

    // Clear any previously existing container.  It would probably work but may be stale
    await docker.erase(Constants.containerName);

    await docker.pull(Constants.imageName, Constants.platform);

    return await docker.open({
        image: Constants.imageName,
        name: Constants.containerName,
        autoRemove: true,
        network: "host",
        platform: Constants.platform,

        // Ensure tools that drop files randomly to cwd get reset when we clear temp
        cwd: "/tmp",

        // Keep the container running until we are through with it
        openStdin: true,

        binds: {
            // Make local config (e.g. our PICS file) available in container
            [Constants.matterJsRoot]: "/matter.js",

            // Better to run avahi in a separate container but use host version for now
            "/var/run/dbus": "/run/dbus",
        },
    });
}

async function configurePics() {
    const ciPics = await Internal.container.readFile(ContainerPaths.chipPics);
    const pics = new PicsFile(ciPics, true);

    const overrides = new PicsFile(Constants.inputPicsFile);
    pics.patch(overrides);

    pics.save(Constants.outputPicsFile);
}

function filterWithGlob(list: Chip.Test[], glob: string, invert = false) {
    const globPattern = glob.replace(/\*/g, "[^\\/]+");
    const pattern = new RegExp(`^${globPattern}$`);
    return list.filter(s => !!s.name.match(pattern) === !invert);
}

function testNameOf(path: string) {
    let name = basename(path);
    name = name.slice(0, name.length - extname(name).length);
    if (name.startsWith("Test_TC_")) {
        name = name.slice(5);
    }
    return name;
}

async function activateTestee(testee: Chip.Subject, tester: Chip.Test) {
    if (State.activeTestee === testee) {
        return;
    }

    await deactivateTestee();

    await testee.setup();
    await testee.start();

    await Internal.container.exec(["rm", "-rf", "/tmp/*"]);
    await tester.commission(Internal.container);

    State.activeTestee = testee;
}

/**
 * Close the current test app, if any.
 */
async function deactivateTestee() {
    if (State.activeTestee === undefined) {
        return;
    }

    try {
        await State.activeTestee.stop();
    } catch (e) {
        console.warn("Error stopping test subject", e);
    }

    State.activeTestee = undefined;
}
