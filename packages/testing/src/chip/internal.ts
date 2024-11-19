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
    activeTestee: undefined as Chip.Testee | undefined,

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

        State.maybeContainer = await configureContainer();

        await configurePics();
        await YamlTests.initialize(this.container);
        await PythonTests.initialize(this.container);

        State.configured = true;
    },

    /**
     * Teardown.
     */
    async close() {
        await this.deactivateTestee();

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
     * Activate a test app.
     */
    async activateTestee(testee: Chip.Testee, tester: Chip.Tester) {
        if (State.activeTestee === testee) {
            return;
        }

        await this.deactivateTestee();

        await testee.setup();
        await testee.start();

        await this.container.exec(["rm", "-rf", "/tmp/*"]);
        await tester.commission(this.container);

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
     * Define a new test.
     *
     * Installs a test into the current Mocha suite.
     */
    implement(testee: Chip.Testee, tester: Chip.Tester) {
        if (!containerInitializerInstalled) {
            containerInitializerInstalled = true;
            before(async function () {
                this.timeout(Constants.initTimeout);
                await Internal.initialize();
            });
        }

        it(tester.description ?? tester.name, async () => {
            await Internal.activateTestee(testee, tester);
            await tester.invoke(Internal.container);
        }).timeout(tester.timeout ?? Constants.defaultTimeout);
    },
};

async function configureContainer() {
    const docker = new Docker();

    const { progress } = State.runner;

    // TODO - define docker network to match CHIP's testing infrastructure

    return await progress.run(`Pull and start ${progress.emphasize(Constants.imageName)}`, async () => {
        // Clear any previously existing container.  It would probably work but may be stale
        await docker.erase(Constants.containerName);

        await docker.pull(Constants.imageName);

        return await docker.open({
            image: Constants.imageName,
            name: Constants.containerName,
            autoRemove: true,
            network: "host",

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
    });
}

async function configurePics() {
    const ciPics = await Internal.container.readFile(ContainerPaths.chipPics);
    const pics = new PicsFile(ciPics, true);

    const overrides = new PicsFile(Constants.inputPicsFile);
    pics.patch(overrides);

    pics.save(Constants.outputPicsFile);
}
