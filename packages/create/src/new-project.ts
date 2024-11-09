/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { execSync } from "child_process";
import { mkdir, readdir, writeFile } from "fs/promises";
import { resolve } from "path";
import { warning } from "./messages.js";
import { NewConsumerProject } from "./new-consumer-project.js";
import { NewContributorProject } from "./new-contributor-project.js";

const VS_CODE_LAUNCH_CONFIG = {
    type: "node",
    request: "launch",
    skipFiles: ["<node_internals>/**"],

    // Never gotten it to work without this as of VS Code 1.94.2
    console: "integratedTerminal",

    internalConsoleOptions: "neverOpen",

    // Doesn't seem to work as of VS Code 1.94.2 so we just set the runtimeArgs ourselves
    //sourceMaps: true,

    runtimeArgs: ["--enable-source-maps"],
    preLaunchTask: "tsc: build - tsconfig.json",
    outFiles: ["${workspaceFolder}/dist/**/*.js"],
};

export type LaunchOptions = {
    name: string;
    program: string;
    cwd?: string;
    args?: string[];
    env?: Record<string, string>;
    presentation?: { clear: true };
};

export type LaunchConfig = LaunchOptions & typeof VS_CODE_LAUNCH_CONFIG;

const VS_CODE_LAUNCH = {
    version: "0.2.0",
    configurations: Array<LaunchConfig>(),
};

export class TemplateNotFoundError extends Error {}

export type NewProject = NewConsumerProject | NewContributorProject;

export class ProjectError extends Error {}

export async function createAndValidateDest(project: NewProject) {
    try {
        await mkdir(project.dest, { recursive: true });
    } catch (e) {
        throw new ProjectError(`Could not create "${project.dest}": ${e}`);
    }

    const existingFiles = await readdir(project.dest);
    if (existingFiles.length) {
        throw new ProjectError(
            `Files exist in "${project.dest}". Please run in an empty directory or specify new directory with "--prefix=" option`,
        );
    }
}

export async function createVsCodeProject(project: NewProject, launchLoader: () => AsyncIterable<LaunchOptions>) {
    try {
        const root = resolve(project.dest, ".vscode");
        await mkdir(root);
        for await (const launch of launchLoader()) {
            const config = {
                ...VS_CODE_LAUNCH_CONFIG,
                ...launch,
                program: `\${workspaceFolder}/${launch.program}`,
            };

            if (config.cwd) {
                config.cwd = `\${workspaceFolder}/${launch.cwd}`;
            }
        }
        await writeFile(resolve(root, "launch.json"), JSON.stringify(VS_CODE_LAUNCH, undefined, 4));
    } catch (e) {
        warning(`Sorry, we couldn't configure VS Code for you: ${e}`);
    }
}

export function build(this: NewProject, showInstall: boolean) {
    const args = showInstall ? "" : " --silent";
    execSync(`npm install${args}`, { stdio: "inherit", cwd: this.dest });
}
