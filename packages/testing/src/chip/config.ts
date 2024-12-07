/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "#tools";
import { resolve } from "path";
import { env } from "process";

/**
 * Significant locations within the test container.
 *
 * The container generally adheres to file layout within connectedhomeip.  This avoids various obscure path
 * configuration options for build tooling and test frameworks, plus at least one place where the path is hard-coded.
 */
export namespace ContainerPaths {
    export const yamlRunner = `/scripts/tests/chipyaml/chiptool.py`;
    export const yamlTestDir = `/src/app/tests/suites`;
    export const yamlCertTestDir = `${yamlTestDir}/certification`;
    export const pythonTestDir = `/src/python_testing`;
    export const pythonCommissioner = `${pythonTestDir}/hello_test.py`;
    export const chipPics = "/src/app/tests/suites/certification/ci-pics-values";
    export const matterJsPics = "/matter-js-pics.properties";
    export const accessoryClient =
        "/scripts/py_matter_yamltests/matter_yamltests/pseudo_clusters/clusters/accessory_server_bridge.py";
}

/**
 * Specify the base filename to use for a test.  This specifies a "winner" in the case of conflicts.
 */
export interface TestConflictResolutions {
    [name: string]: string;
}

/**
 * Other misc configuration.
 */
export namespace Constants {
    /**
     * We only publish for x86.  This is appropriate for GH CI and runs fine under emulation on MacOS
     */
    export const platform = env.MATTER_CHIP_PLATFORM || "linux/amd64";

    export const networkName = "matter.js-chip";

    /**
     * We only have one container.  We use it both for MDNS (dbus + avahi) and CHIP
     */
    export const containerName = env.MATTER_CHIP_IMAGE || "ghcr.io/matter-js/chip:latest";

    export const mdnsContainerName = env.MATTER_MDNS_CONTAINER || "matter.js-mdns";
    export const mdnsVolumeName = env.MATTER_MDNS_VOLUME || "matter.js-mdns";

    export const chipContainerName = env.MATTER_CHIP_CONTAINER || "matter.js-chip-test";

    export const initTimeout = 60_000;
    export const defaultTimeout = 60_000;

    export const matterJsRoot = Package.workspace.path;
    export const inputPicsFile = resolve(matterJsRoot, "packages/testing/src/chip/matter-js-pics.properties");
    export const outputPicsFile = resolve(matterJsRoot, "packages/testing/build/pics.properties");

    /**
     * Resolves know conflicts in test definitions.
     *
     * Currently there is exactly one test name that conflicts between YAML and python.
     */
    export const conflictResolutions: TestConflictResolutions = {
        DGSW_2_1: "TC_DGSW_2_1.py",
    };

    /**
     * We set the commissioning timeout value very low because this timeout is tested and waiting the default 180s.
     * sucks.  The timeout must be high enough for actual commissioning to succeed.
     */
    const subjectCommissioningTimeoutS = 3;

    /**
     * The test harness sits around a bit after opening commissioning window.  Doesn't mention why, but I reeeally hate
     * sitting around.  So aggressively tune from default 5s. to 500ms.
     */
    const delayAfterOpeningCommissioningWindowMs = 500;

    /**
     * Arguments provided to the YAML runner.
     */
    export const YamlRunnerArgs = [
        "--PICS",
        ContainerPaths.matterJsPics,
        // "--show_adapter_logs",
        // "true",
        "--PIXIT.CADMIN.CwDuration",
        `${subjectCommissioningTimeoutS}`,
        "--waitAfterCommissioning",
        `${delayAfterOpeningCommissioningWindowMs}`,
    ];
}
