/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { basename, parse } from "path";
import { Subject } from "../device/subject.js";
import { Test } from "../device/test.js";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import { deansify } from "../util/text.js";
import { ContainerPaths } from "./config.js";

export async function YamlTests(container: Container): Promise<Test[]> {
    const files = await container.resolveGlob(`${ContainerPaths.yamlTestDir}/Test_*.yaml`);

    return files.map(filename => new YamlTest(filename));
}

const subjects = new Map<Subject.Factory, Subject>();

let nextStorageDirectoryId = 0;
const storageDirectories = new Map<Subject, string>();

function storageDirectoryFor(subject: Subject) {
    let store = storageDirectories.get(subject);
    if (store === undefined) {
        storageDirectories.set(subject, (store = `/tmp/chip-storage-${nextStorageDirectoryId++}`));
    }
    return store;
}

class YamlTest implements Test {
    name: string;
    #filename: string;
    #storageDirectory?: string;

    constructor(filename: string) {
        this.name = parse(filename).base;
        this.#filename = filename;
    }

    loadSubject(factory: Subject.Factory) {
        let subject = subjects.get(factory);
        if (subject === undefined) {
            subject = factory();
            subjects.set(factory, subject);
        }
        return subject;
    }

    /**
     * Python commissioning logic is cleverly hidden in:
     *
     *     connectedhomeip/src/python_testing/chip/testing/matter_testing.py
     */
    async initializeSubject(container: Container, subject: Subject) {
        this.#storageDirectory = storageDirectoryFor(subject);
        await container.exec(["mkdir", "-p", this.#storageDirectory]);

        const terminal = await container.exec(
            [
                "chip-tool",
                "pairing",
                "onnetwork-long",
                "0x12344321",
                "20202021",
                "1234",
                "--storage-directory",
                this.#storageDirectory,
            ],
            Terminal.Line,
        );

        let passed = false;
        try {
            for await (const line of terminal) {
                if (deansify(line).match(/Test finished.+ 0 errors .+/)) {
                    passed = true;
                }
                MockLogger.injectExternalMessage("PAIR", line);
            }
        } catch (e) {
            throw new Error("Error pairing test app", { cause: e });
        }

        if (!passed) {
            throw new Error("Yaml test exited without error but did not indicate successful test");
        }
    }

    async invoke(container: Container) {
        const terminal = await container.exec(
            [
                "python3",
                ContainerPaths.yamlRunner,
                "tests",
                basename(this.#filename),
                "--PICS",
                ContainerPaths.matterJsPics,
                "--server_arguments",
                `interactive server --storage-directory ${this.#storageDirectory}`,
            ],
            Terminal.Line,
            { cwd: "/" },
        );
        for await (const line of terminal) {
            MockLogger.injectExternalMessage("CHIP Y", line);
        }
    }
}
