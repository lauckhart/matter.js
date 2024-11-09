/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { spawnSync, SpawnSyncOptions } from "child_process";
import { readdir, readFile } from "fs/promises";
import { homedir } from "os";
import { join, resolve } from "path";
import { createInterface } from "readline/promises";
import { Config } from "./config.js";
import { blue, bold, dim, fittedTextOf } from "./formatting.js";
import { error, info, notice } from "./messages.js";
import { build, createAndValidateDest, createVsCodeProject, LaunchOptions, ProjectError } from "./new-project.js";

const DEFAULT_DEV_PATH = "./matter.js";
const DEFAULT_GIT_REPO = "git@github.com:project-chip/matter.js.git";
const FORK_LINK = "https://github.com/project-chip/matter.js/fork";
const MANUAL_INSTRUCTIONS = `You can fork at ${blue(FORK_LINK)}, clone yourself and run ${bold("npm install")}`;

export interface NewContributorProject {
    kind: "contributor";
    template: { name: string };
    dest: string;
    origin: string;

    setup(): Promise<void>;
}

export function NewContributorProject(dest: string): NewContributorProject {
    return {
        kind: "contributor",
        template: { name: "contributor" },
        dest,
        origin: DEFAULT_GIT_REPO,

        setup,
    };
}

interface UI {
    ask(text: string, defaultAnswer: string): Promise<string>;
    close(): void;
}

function UI(): UI {
    const readline = createInterface(process.stdin, process.stdout);

    readline.on("close", () => {
        process.stdout.write("\n\n");
        process.exit(-1);
    });

    return {
        async ask(text: string, defaultAnswer: string) {
            const lines = text.split("\n");
            lines[0] = bold(lines[0]);
            text = lines.join("\n");

            const answer = await readline.question("\n" + fittedTextOf(text) + "\n\n" + dim(`(${defaultAnswer}) `));
            process.stdout.write("\n");
            return answer === "" ? defaultAnswer : answer;
        },

        close() {
            readline.close();
        },
    };
}

async function setup(this: NewContributorProject) {
    getStarted();

    const ui = UI();
    try {
        await chooseDest(this, ui);
        await chooseOrigin(this, ui);
        await cloneGitRepo(this, ui);
    } finally {
        ui.close();
    }

    await createContributorVsCodeProject(this);
    build.apply(this, true);
    finishUp(this);
}

function git(args: string[], options: SpawnSyncOptions) {
    spawnSync("git", args, { ...options, shell: true });
}

function getStarted() {
    notice("Hello and 😍 contributor!");

    try {
        git(["--version"], { stdio: "ignore" });
    } catch (e) {
        throw new ProjectError(
            `Unfortunately we can't seem to run git.  If you don't have it installed please install and try again.\n\nOtherwise, no worries!  ${MANUAL_INSTRUCTIONS}.`,
        );
    }

    info(
        `We're going to ask a few questions and configure your project as we go.  Hit ${bold("enter")} to accept the default value.`,
    );
}

async function chooseDest(project: NewContributorProject, ui: UI) {
    let badDir = false;
    while (true) {
        if (badDir || project.dest === ".") {
            project.dest = await ui.ask("Where do you want to install?", DEFAULT_DEV_PATH);

            // Kind of half-assed but allow for "~/" expansion as home directory.  Even on windows because why not...
            if (project.dest.match(/^~[\\/]/)) {
                project.dest = join(homedir(), project.dest.substring(2));
            }
        }

        try {
            await createAndValidateDest(project);
            break;
        } catch (e) {
            if (!(e instanceof ProjectError)) {
                throw e;
            }

            badDir = true;
            error(e);
        }
    }
}

async function chooseOrigin(project: NewContributorProject, ui: UI) {
    project.origin = await ui.ask(
        `What git repository do you want to use as your git origin?\n\nIdeally this is your own fork of the matter.js GitHub repo.  Then you can push new branches to your fork using ${bold("git push --set-upstream origin new-branch-name")}.\n\nTo create a fork now go to ${blue(FORK_LINK)}`,
        project.origin,
    );
}

async function cloneGitRepo(project: NewContributorProject, ui: UI) {
    // Create local clone
    while (true) {
        const mainUrl = await ui.ask(
            `What git repository do you want to use for your main branch?\n\nIf you use our repository you can pull new changes without syncing your fork.`,
            DEFAULT_GIT_REPO,
        );

        info(`Cloning to ${bold(resolve(project.dest))}...`);

        try {
            process.stdout.write("\n");
            git(
                [
                    "clone",
                    mainUrl,
                    project.dest,
                    "-o",
                    "main",
                    "-c",
                    `remote.origin.url=${project.origin}`,
                    "-c",
                    "remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*",
                ],
                {
                    stdio: "inherit",
                },
            );
            process.stdout.write("\n");
        } catch (e) {
            process.stdout.write("\n");
            if (typeof e === "object" && e !== null && "code" in e) {
                error(
                    `Hmm, we couldn't clone ${bold(mainUrl)}.\n\nIf that's the right URL we're stuck.  You probably want to control-C now.  ${MANUAL_INSTRUCTIONS}`,
                );
            }
            throw e;
        }

        break;
    }
}

const DEFAULT_LAUNCH_OPTIONS: Partial<LaunchOptions> = {
    env: {
        MATTER_LOG_STACK_LIMIT: "50",
        MATTER_TRACE_ENABLE: "true",
    },
    presentation: { clear: true },
};

function TestLaunch(options: Partial<LaunchOptions> & { name: string }): LaunchOptions {
    return {
        ...DEFAULT_LAUNCH_OPTIONS,
        ...options,
        program: "node_modules/.bin/matter-test",
    };
}

function RunLaunch(options: Partial<LaunchOptions> & { name: string; args: string[] }): LaunchOptions {
    const result: LaunchOptions = {
        ...DEFAULT_LAUNCH_OPTIONS,
        ...options,
        program: "node_modules/.bin/matter-run",
    };

    delete (result as any).file;

    return result;
}

async function createContributorVsCodeProject(project: NewContributorProject) {
    async function* launchGenerator() {
        // Generate launches that are not project specific
        yield TestLaunch({ name: "All tests" });
        yield TestLaunch({ name: "Current test", args: ["--spec", "${input:testFile}", "--all-logs", "esm"] });
        yield RunLaunch({ name: "Current file", args: ["${file}"] });

        // Generate launches for each project that has tests
        for (const source of ["packages", "compat"]) {
            const sourceDir = resolve(project.dest, source);
            for (const dir of await readdir(sourceDir)) {
                const packageJson = resolve(sourceDir, dir, "package.json");
                const pkg = JSON.parse(await readFile(packageJson, "utf-8"));
                const name = pkg.name;
                if (pkg?.scripts?.test !== undefined && pkg.name !== undefined) {
                    yield TestLaunch({
                        name: `Test ${name}`,
                        cwd: join(source, dir),
                    });
                }
            }
        }

        // Generate launches for each example
        for (const source of (await Config()).templates) {
            yield RunLaunch({
                name: `Run ${source.name} example`,
                args: [join(`packages/examples/src/${source.name}/${source.entrypoint}`)],
            });
        }
    }

    await createVsCodeProject(project, launchGenerator);
}

function finishUp(project: NewContributorProject) {
    notice("You're all set!");

    info(
        `If you're a ${bold("VS Code")} user, we've created a project with launch configurations for matter.js tests and examples.  To open, run:`,
    );

    info(`    ${bold(`code ${resolve(project.dest)}`)}`);

    info(
        `In other environments you can run our tests using Mocha integration.  So you'll be fine with ${bold("WebStorm")}, ${bold("Visual Studio")}, ${bold("Vim")} and ${bold("Emacs")}. 😉`,
    );
}
