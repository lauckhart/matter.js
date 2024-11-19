/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "#tools";
import { resolve } from "path";

/**
 * Significant locations within the test container.
 *
 * The container generally adheres to file layout within connectedhomeip.  This avoids various obscure path
 * configuration options for build tooling and test frameworks, plus at least one place where the path is hard-coded.
 */
export namespace ContainerPaths {
    export const yamlRunner = `/scripts/tests/chipyaml/chiptool.py`;
    export const yamlTestDir = `/src/app/tests/suites/certification`;
    export const pythonTestDir = `/src/python_testing`;
    export const pythonCommissioner = `${pythonTestDir}/hello_test.py`;
    export const chipPics = "/src/app/tests/suites/certification/ci-pics-values";
    export const matterJsPics = "/matter.js/packages/testing/build/pics.properties";
}

/**
 * Other misc configuration.
 */
export namespace Constants {
    export const initTimeout = 60_000;
    export const defaultTimeout = 60_000;
    export const imageName = "ghcr.io/matter-js/chip";
    export const containerName = "matter.js-chip-test";

    export const matterJsRoot = Package.workspace.path;
    export const inputPicsFile = resolve(matterJsRoot, "packages/testing/chip/pics.properties");
    export const outputPicsFile = resolve(matterJsRoot, "packages/testing/build/pics.properties");
}
