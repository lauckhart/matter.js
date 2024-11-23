/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
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

let nextStorageDirId = 0;
const storageDirs = new Map<Subject, string>();

function storageDirFor(subject: Subject) {
    let store = storageDirs.get(subject);
    if (store === undefined) {
        storageDirs.set(subject, (store = `/tmp/yaml-storage-${nextStorageDirId++}`));
    }
    return store;
}

class YamlTest implements Test {
    name: string;
    #filename: string;
    #storageDirectory = "";

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
        this.#storageDirectory = storageDirFor(subject);
        await container.exec(["mkdir", "-p", this.#storageDirectory]);

        const terminal = await container.exec(
            ["chip-tool", "pairing", "onnetwork-long", "0x12344321", "20202021", "1234"],
            Terminal.Line,
            {
                env: {
                    TMPDIR: this.#storageDirectory,
                },
            },
        );

        try {
            for await (const line of terminal) {
                MockLogger.injectExternalMessage("PAIR", line);
            }
        } catch (e) {
            throw new Error("Error pairing test app", { cause: e });
        }
    }

    async invoke(container: Container, step: (title: string) => void) {
        const terminal = await container.exec(
            [
                "python3",
                ContainerPaths.yamlRunner,
                "tests",
                basename(this.#filename),
                "--PICS",
                ContainerPaths.matterJsPics,
                "--configuration_directory",
                "/src/app/tests/suites/",
            ],
            Terminal.Line,
            {
                env: {
                    TMPDIR: this.#storageDirectory,
                },
            },
        );

        let passed = false;

        for await (let line of terminal) {
            line = line.replaceAll("\r\n", "\n").replaceAll("\t", "  ");

            const text = deansify(line);
            const stepMatch = text.match(/^\s*\*{5} Test Step \d+ : (.*)$/);
            if (stepMatch) {
                const [, stepName] = stepMatch;
                step(stepName);
                line = line.replace(/( Test Step \d+ )/, colors.greenBright.bold("$1"));
            } else if (text.match(/Test finished.+ 0 errors .+/)) {
                passed = true;
            }
            let first = true;
            for (let part of line.split("\r")) {
                if (first) {
                    first = false;
                } else {
                    part = `    ${part}`;
                }
                MockLogger.injectExternalMessage("CHIP", part);
            }
        }

        if (!passed) {
            throw new Error("Yaml test exited without error but did not indicate successful test");
        }
    }
}
