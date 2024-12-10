/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { basename, parse } from "path";
import { Test } from "../device/test.js";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import { deansify } from "../util/text.js";
import { parseStep } from "./chip-test-common.js";
import { Constants, ContainerPaths } from "./config.js";
import type { PicsFile } from "./pics-file.js";

export async function YamlTests(container: Container, pics: PicsFile): Promise<Test[]> {
    // Read YAML tests
    const files1 = await container.resolveGlob(`${ContainerPaths.yamlTestDir}/Test*.yaml`);
    const files2 = await container.resolveGlob(`${ContainerPaths.yamlCertTestDir}/Test_*.yaml`);

    // Filter tests.  To do this as quickly as possible we use yq to isolate PICS and count of non-disabled steps from
    // YAML.  Manual steps appear to be marked as disabled
    const rawFilePics = await container.execAndRead([
        "/usr/bin/yq",
        "[filename, .tests | map(select(.disabled != true)) | length, .PICS]",
        "-o=json",
        "-I=0",
        ...files1,
        ...files2,
    ]);

    // Pics come in lines, each of the format ["filename.yaml",n,["pics1",...]].  Turn this into an object
    const filenameToPics = Object.fromEntries(
        rawFilePics
            .trim()
            .split("\n")
            .map(line => {
                const [filename, stepCount, pics] = JSON.parse(line) as [string, number, string[]];
                return [filename, { stepCount, pics }];
            }),
    );

    // Now select all files with applicable PICS
    const files = Array<string>();
    nextFile: for (const file of [...files1, ...files2]) {
        const details = filenameToPics[file];

        if (!details.stepCount) {
            continue;
        }

        if (Array.isArray(details.pics)) {
            for (const entry of details.pics) {
                // Pics may be logical disjunction in form "key1 | key2".  Support this
                const names = entry.split(/\s*\|\s*/);
                if (!names.map(name => pics.values[name]).includes("1")) {
                    // None of the required PICS values is present
                    continue nextFile;
                }
            }
        }

        files.push(file);
    }

    return files.map(filename => new YamlTest(filename));
}

class YamlTest implements Test {
    name: string;
    domain = "yaml";
    #filename: string;

    constructor(filename: string) {
        this.name = parse(filename).base;
        this.#filename = filename;
    }

    async initializeSubject(container: Container) {
        const terminal = await container.exec(
            ["chip-tool", "pairing", "onnetwork-long", "0x12344321", "20202021", "3840"],
            Terminal.Line,
        );

        try {
            for await (const line of terminal) {
                MockLogger.injectExternalMessage("PAIR", line);
            }
        } catch (e) {
            throw new Error("Error pairing test app", { cause: e });
        }
    }

    async invoke(container: Container, step: (title: string) => void, args: string[]) {
        const terminal = await container.exec(
            [
                "python3",
                ContainerPaths.yamlRunner,
                "tests",
                basename(this.#filename),
                ...Constants.YamlRunnerArgs,
                ...args,
            ],
            Terminal.Line,
        );

        let passed = false;

        for await (let line of terminal) {
            line = line.replaceAll("\r\n", "\n").replaceAll("\t", "  ");

            line = parseStep(line, step);

            if (deansify(line).match(/Test finished.+ 0 errors .+/)) {
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
