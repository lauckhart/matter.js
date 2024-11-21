import { basename, extname } from "path";
import { Container } from "../docker/container.js";
import { Docker } from "../docker/docker.js";
import { afterRun, beforeRun } from "../mocha.js";
import { AccessoryServer } from "./accessory-server.js";
import type { Chip } from "./chip.js";
import { Constants, ContainerPaths } from "./config.js";
import { PicsFile } from "./pics-file.js";
import { PythonTests } from "./python-tests.js";
import { YamlTests } from "./yaml-tests.js";

/**
 * Internal state.
 */
const State = {
    initialized: false,
    maybeOptions: undefined as Chip.Options | undefined,
    maybeContainer: undefined as Container | undefined,
    activeSubject: undefined as Chip.Subject | undefined,
    accessoryServer: undefined as AccessoryServer | undefined,
    tests: Array<Chip.Test>(),

    get runner() {
        const runner = this.maybeOptions?.runner;

        if (runner === undefined) {
            throw new Error("No test runner configured");
        }

        return runner;
    },
};

let containerLifecycleInstalled = false;

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
        if (State.initialized) {
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
        if (!State.initialized) {
            return;
        }
        State.initialized = false;

        await deactivateSubject();

        const { maybeContainer: container, accessoryServer } = State;
        if (container) {
            const docker = container.docker;

            try {
                await container.kill();
            } catch (e) {
                console.error("Error terminating test container", e);
            }

            try {
                await docker.close();
            } catch (e) {
                console.error("Error closing docker connection", e);
            }

            State.maybeContainer = undefined;
        }

        if (accessoryServer) {
            try {
                await accessoryServer.close();
            } catch (e) {
                console.error("Error closing accessory server", e);
            }

            State.accessoryServer = undefined;
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
     * Installs a test into the current Mocha suite that activates {@link subject} then runs {@link tester}.
     */
    implement(subject: Chip.Subject, tester: Chip.Test) {
        if (!containerLifecycleInstalled) {
            containerLifecycleInstalled = true;
            beforeRun(Internal.initialize);
            afterRun(Internal.close);
        }

        it(tester.description ?? tester.name, async () => {
            await activateSubject(subject, tester);
            await tester.invoke(Internal.container);
        }).timeout(tester.timeout ?? Constants.defaultTimeout);
    },
};

async function initialize() {
    State.maybeContainer = await configureContainer();

    await configurePics();
    await configureTests();
    await configureNetwork();
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

    await Internal.container.writeFile(ContainerPaths.matterJsPics, pics.toString());
}

async function configureTests() {
    // Load each type of test
    State.tests.push(...(await YamlTests(Internal.container)));
    State.tests.push(...(await PythonTests(Internal.container)));

    // Loaded tests are paths; convert to a normal form that just consists of the actual purpose of the test
    for (const test of State.tests) {
        test.name = testNameOf(test.name);
    }

    // Try to order the tests logically
    State.tests.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

    State.initialized = true;
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

async function configureNetwork() {
    State.accessoryServer = await AccessoryServer.create();

    // CHIP has 10.10.10.5 hard-coded as IP on linux.  With host networking we would have to add that to the host.  That
    // is undesirable as its platform- and network-specific.
    //
    // We could instead NAT with the bridge network but that will require working through IPv6 networking.  That's a
    // larger task.
    //
    // Instead we just rewrite the address back to the default 127.0.0.1 used by every other platform.
    await Internal.container.exec(["sed", "-i", "s/10.10.10.5/127.0.0.1/g", ContainerPaths.accessoryClient]);

    // While we're at it we rewrite the port so we can rely on dynamic allocation.  This ensures multiple suites may run
    // in parallel and something unexpectedly running on 9000 doesn't interfere with us.
    await Internal.container.exec([
        "sed",
        "-i",
        `s/_PORT = 9000/_PORT = ${State.accessoryServer.port}/g`,
        ContainerPaths.accessoryClient,
    ]);
}

async function activateSubject(subject: Chip.Subject, tester: Chip.Test) {
    if (State.activeSubject === subject) {
        return;
    }

    const { progress } = State.runner;

    await progress.subtask("deactivating previous subject", deactivateSubject);

    await progress.subtask("commissioning subject", async () => {
        await subject.setup();
        await subject.start();

        await Internal.container.exec(["rm", "-rf", "/tmp/*"]);
        await tester.commission(Internal.container);
    });

    State.activeSubject = subject;
}

/**
 * Close the current test app, if any.
 */
async function deactivateSubject() {
    if (State.activeSubject === undefined) {
        return;
    }

    try {
        await State.activeSubject.stop();
    } catch (e) {
        console.warn("Error stopping test subject", e);
    }

    State.activeSubject = undefined;
}
