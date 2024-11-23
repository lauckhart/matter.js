import { basename, extname } from "path";
import { BackchannelCommand } from "../device/backchannel.js";
import { Subject } from "../device/subject.js";
import { Test } from "../device/test.js";
import { Container } from "../docker/container.js";
import { Docker } from "../docker/docker.js";
import { afterRun, beforeRun } from "../mocha.js";
import { AccessoryServer } from "./accessory-server.js";
import type { Chip } from "./chip.js";
import { Constants, ContainerPaths } from "./config.js";
import { ContainerCommandPipe } from "./container-command-pipe.js";
import { PicsFile } from "./pics-file.js";
import { PythonTests } from "./python-tests.js";
import { YamlTests } from "./yaml-tests.js";

/**
 * Current process-wide state values.  Internal to this module.
 */
const Values = {
    initialized: false,
    maybeOptions: undefined as Chip.Options | undefined,
    maybeContainer: undefined as Container | undefined,
    initializedSubjects: new WeakSet<Subject>(),
    activeSubject: undefined as Subject | undefined,
    tests: Array<Test>(),
    activePipes: new Set<string>(),
    closers: Array<() => Promise<void>>(),
    subjects: new Map<Subject.Factory, Record<string, Subject>>(),
    snapshots: new Map<Subject, {}>(),
    containerLifecycleInstalled: false,

    get runner() {
        const runner = this.maybeOptions?.runner;

        if (runner === undefined) {
            throw new Error("No test runner configured");
        }

        return runner;
    },
};

/**
 * Internal state management for CHIP testing.
 */
export const State = {
    get container() {
        const container = Values.maybeContainer;

        if (container === undefined) {
            throw new Error("Docker container is not initialized");
        }

        return container;
    },

    set options(options: Chip.Options) {
        Values.maybeOptions = options;
    },

    /**
     * Setup.
     */
    async initialize() {
        if (Values.initialized) {
            return;
        }

        const { progress } = Values.runner;
        return await progress.run(
            `Initialize container ${progress.emphasize(Constants.containerName)} from ${progress.emphasize(Constants.imageName)}`,
            initialize,
        );
    },

    /**
     * Teardown.
     */
    async close() {
        await deactivateSubject();

        let closer;
        while ((closer = Values.closers.pop())) {
            try {
                await closer();
            } catch (e) {
                console.error("Teardown error:", e);
            }
        }
    },

    /**
     * Add cleanup logic.
     */
    onClose(fn: () => Promise<void>) {
        Values.closers.push(fn);
    },

    /**
     * Select tests based on string patterns.  {@link include} and {@link exclude} are "glob" patterns with "*" as a
     * wildcard.
     */
    select(include: string, exclude?: string) {
        let tests = filterWithGlob(Values.tests, include);

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
    implement(subject: Subject.Factory, tester: Test) {
        if (!Values.containerLifecycleInstalled) {
            Values.containerLifecycleInstalled = true;
            beforeRun(State.initialize);
            afterRun(State.close);
        }

        it(tester.description ?? tester.name, async () => {
            await activateSubject(subject, tester);
            // TODO - show step title in progress
            await tester.invoke(State.container, (_title: string) => {});
        }).timeout(tester.timeout ?? Constants.defaultTimeout);
    },

    /**
     * Pass a backchannel command to the active subject.
     */
    backchannel(command: BackchannelCommand) {
        if (Values.activeSubject === undefined) {
            throw new Error(`Backchannel ${command.name} without active test subject`);
        }

        return Values.activeSubject.backchannel(command);
    },

    /**
     * Open a back-channel command pipe.
     */
    async openPipe(name: string) {
        if (Values.activePipes.has(name)) {
            return;
        }

        const pipe = new ContainerCommandPipe(this.container, this, name);

        State.onClose(async () => {
            await pipe.close();
        });
    },
};

/**
 * Perform one-time initialization required for CHIP testing.
 */
async function initialize() {
    await configureContainer();
    await configurePics();
    await configureTests();
    await configureNetwork();
}

/**
 * Start a container based on the matter.js's Docker image.
 */
async function configureContainer() {
    const docker = new Docker();

    // TODO - define docker network to match CHIP's testing infrastructure

    // Clear any previously existing container.  It would probably work but may be stale
    await docker.erase(Constants.containerName);

    await docker.pull(Constants.imageName, Constants.platform);

    const container = (Values.maybeContainer = await docker.open({
        image: Constants.imageName,
        name: Constants.containerName,
        autoRemove: true,
        network: "host",
        platform: Constants.platform,

        // Keep the container running until we are through with it
        openStdin: true,

        binds: {
            // Better to run avahi in a separate container but use host version for now
            "/var/run/dbus": "/run/dbus",
        },
    }));

    State.onClose(async () => {
        const docker = container.docker;

        try {
            await container.kill();
        } catch (e) {
            console.error("Error terminating test container:", e);
        }

        try {
            await docker.close();
        } catch (e) {
            console.error("Error closing docker connection:", e);
        }

        Values.maybeContainer = undefined;
    });
}

/**
 * Create a PICS file in the container appropriate for matter.js.
 */
async function configurePics() {
    const ciPics = await State.container.readFile(ContainerPaths.chipPics);
    const pics = new PicsFile(ciPics, true);

    const overrides = new PicsFile(Constants.inputPicsFile);
    pics.patch(overrides);

    await State.container.writeFile(ContainerPaths.matterJsPics, pics.toString());
}

type TaggedTest = Test & { semanticName: string };

/**
 * Load tests defined in the container.
 */
async function configureTests() {
    // Load each type of test
    Values.tests.push(...(await YamlTests(State.container)));
    Values.tests.push(...(await PythonTests(State.container)));

    // Loaded tests are paths; convert to a normal form that just consists of the actual purpose of the test
    for (const test of Values.tests) {
        test.name = testNameOf(test.name);
    }

    // Attempt to order tests logically
    for (const test of Values.tests) {
        (test as TaggedTest).semanticName = semanticNameOf(test.name);
    }
    Values.tests.sort(compareSemanticNames);

    Values.initialized = true;
}

/**
 * Filter tests based on name using a UNIX-glob-like pattern.
 */
function filterWithGlob(list: Test[], glob: string, invert = false) {
    const globPattern = glob.replace(/\*/g, "[^\\/]+");
    const pattern = new RegExp(`^${globPattern}$`);
    return list.filter(s => !!s.name.match(pattern) === !invert);
}

/**
 * Normalize the test name reported by the underlying test adapter.
 */
function testNameOf(path: string) {
    let name = basename(path);
    name = name.slice(0, name.length - extname(name).length);
    if (name.startsWith("Test_TC_")) {
        name = name.slice(5);
    }
    return name;
}

/**
 * Extract semantic meaning from test names for sorting purposes.
 */
function semanticNameOf(name: string) {
    return name
        .toLowerCase()
        .split("_")
        .map(segment => (segment.match(/^[0-9]+$/) ? segment.padStart(8, "0") : segment))
        .join("_");
}

/**
 * Compare semantic test names.
 */
function compareSemanticNames(a: Test, b: Test) {
    const nameA = (a as TaggedTest).semanticName;
    const nameB = (b as TaggedTest).semanticName;

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

/**
 * Network "configuration" consists of activating the {@link AccessoryServer} used to field backchannel commands from
 * YAML tests and rewriting hard-coded addresses in files for python tests.
 */
async function configureNetwork() {
    const accessoryServer = await AccessoryServer.create(State);

    State.onClose(async () => {
        try {
            await accessoryServer.close();
        } catch (e) {
            console.error("Error closing accessory server:", e);
        }
    });

    // CHIP has 10.10.10.5 hard-coded as IP on linux.  With host networking we would have to add that to the host.  That
    // is undesirable as its platform- and network-specific.
    //
    // We could instead NAT with the bridge network but that will require working through IPv6 networking.  That's a
    // larger task.
    //
    // Instead we just rewrite the address back to the default 127.0.0.1 used by every other platform.
    await State.container.exec(["sed", "-i", "s/10.10.10.5/127.0.0.1/g", ContainerPaths.accessoryClient]);

    // While we're at it we rewrite the port so we can rely on dynamic allocation.  This ensures multiple suites may run
    // in parallel and something unexpectedly running on 9000 doesn't interfere with us.
    await State.container.exec([
        "sed",
        "-i",
        `s/_PORT = 9000/_PORT = ${accessoryServer.port}/g`,
        ContainerPaths.accessoryClient,
    ]);
}

/**
 * Prepare the test environment for a subject.
 *
 * On first activation, commissions the subject.  Thereafter the subject is either already active or reactivated here.
 */
async function activateSubject(factory: Subject.Factory, test: Test) {
    const subject = loadSubject(factory, test.domain);

    if (Values.activeSubject === subject) {
        return;
    }

    const { progress } = Values.runner;

    if (Values.activeSubject) {
        await progress.subtask("deactivating previous subject", deactivateSubject);
    }

    await progress.subtask("activating subject", async () => {
        await State.container.exec(["bash", "-c", "rm -rf /tmp/*"]);

        if (!Values.initializedSubjects.has(subject)) {
            await subject.initialize();
            State.onClose(subject.close.bind(subject));

            await subject.start();

            await test.initializeSubject(State.container, subject);

            const dir = storageDirFor(subject);

            // Capture state snapshot
            Values.snapshots.set(subject, await subject.snapshot());
            await State.container.exec(["bash", "-c", `mkdir -p "${dir}" && cp -a /tmp/* ${dir}`]);

            Values.initializedSubjects.add(subject);
        } else {
            const snapshot = Values.snapshots.get(subject);
            if (snapshot === undefined) {
                // Internal error
                throw new Error(`No snapshot captured for ${subject.id}`);
            }

            // Restore state snapshot
            await subject.restore(snapshot);
            await State.container.exec(["bash", "-c", `cp -a "/storage/${storageDirFor(subject)}" /tmp`]);

            await subject.start();
        }
    });

    Values.activeSubject = subject;
}

/**
 * Obtain a subject.  Subjects are qualified by factory and test domain.
 */
function loadSubject(factory: Subject.Factory, domain: string) {
    let forFactory = Values.subjects.get(factory);
    if (forFactory === undefined) {
        Values.subjects.set(factory, (forFactory = {}));
    }

    let subject = forFactory[domain];
    if (subject === undefined) {
        subject = forFactory[domain] = factory(domain);
    }

    return subject;
}

/**
 * Stop the current test subject, if any.
 *
 * This stops the subject but leaves it initialized (commissioned).  This allows us to quickly swap subjects depending
 * on the current test.
 *
 * Final teardown of subjects occurs once all tests complete.
 */
async function deactivateSubject() {
    if (Values.activeSubject === undefined) {
        return;
    }

    try {
        await Values.activeSubject.stop();
    } catch (e) {
        console.warn("Error stopping test subject", e);
    }

    Values.activeSubject = undefined;
}

/**
 * If you look in /connectedhomeip/src/platform/linux/CHIPLinuxStorage.h you will see default paths hard-coded to /tmp
 * (irregardless of TMPDIR).  AFAICT these "defaults" are not configurable.  This is not helpful when running multiple
 * DUTs commissioned simultaneously under different profiles.
 *
 * Further, there are various configuration options required to specify different storage pools across two different
 * CHIP certification test frameworks.
 *
 * So we don't bother even trying to specify a storage directory explicitly.  We instead make sure that /tmp is always
 * correctly configured for the active test subject.
 *
 * This works out fine because we also reset state to "first commissioned" whenever starting a new test.  Within the
 * container this means copying the files into /tmp.
 */
async function storageDirFor(subject: Subject) {
    return `/storage/${subject.id}`;
}
