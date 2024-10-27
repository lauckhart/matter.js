/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { execSync } from "child_process";
import { cp, mkdir, readdir, writeFile } from "fs/promises";
import { resolve } from "path";
import { Config, Template, TEMPLATE_DIR } from "./config.js";

const PACKAGE_JSON = {
    dependencies: {
        "@matter/main": "*",
    },
    devDependencies: {
        typescript: "*",
    },
    name: "matter-app",
    version: "0.1.0",
    type: "module",
    scripts: {
        build: "tsc",
        run: "node --enable-source-maps dist/index.js",
        test: 'echo "Error: no test specified" && exit 1',
    },
};

const TSCONFIG = {
    compilerOptions: {
        strict: true,
        target: "es2022",
        module: "node16",
        moduleResolution: "node16",
        noImplicitAny: true,
        noImplicitOverride: true,
        outDir: "./dist",
    },
    include: ["./src/**/*.ts"],
};

export class TemplateNotFoundError extends Error {}

export interface NewProject {
    template: Template;
    source: string;
    dest: string;

    create(): Promise<void>;
    build(): void;
}

export async function NewProject(name: string, dest: string): Promise<NewProject> {
    const template = (await Config()).templates.find(template => template.name === name);

    if (template === undefined) {
        throw new TemplateNotFoundError(`"${name}" is not a valid template name`);
    }

    return {
        template,
        source: resolve(TEMPLATE_DIR, template.name),
        dest,
        create,
        build,
    };
}

export class ProjectError extends Error {}

export async function create(this: NewProject) {
    try {
        await mkdir(this.source, { recursive: true });
    } catch (e) {
        throw new ProjectError(`Could not create "${this.source}": ${e}`);
    }

    const existingFiles = await readdir(this.source);
    if (existingFiles.length) {
        throw new ProjectError(
            `Files exist in "${this.source}". Please run in an empty directory or specify new directory with "--prefix=" option`,
        );
    }

    await createPackageJson(this);
    await createTsconfig(this);
    await installSources(this);
}

async function createPackageJson(project: NewProject) {
    const pkg = PACKAGE_JSON;

    const config = await Config();

    pkg.dependencies["@matter/main"] = config.matterJsVersion;
    pkg.devDependencies["typescript"] = config.typescriptVersion;

    (pkg as any).description = project.template.description;

    let author, authorEmail;
    try {
        for (const line of execSync("git config --list", { encoding: "utf-8" }).split("\n")) {
            if (line.startsWith("user.name=")) {
                author = line.replace(/^[^=]=/, "");
            } else if (line.startsWith("user.email=")) {
                authorEmail = line.replace(/^[^=]=/, "");
            }
        }
    } catch (e) {
        // Non-fatal error if git isn't available; we just don't set the author
    }

    if (authorEmail) {
        if (author) {
            author = `${author} <${authorEmail}>`;
        } else {
            author = `<${authorEmail}>`;
        }
    }

    if (author) {
        (pkg as any).author = author;
    }

    await writeFile(resolve(project.dest, "package.json"), JSON.stringify(pkg, undefined, 4));
}

async function createTsconfig(project: NewProject) {
    await writeFile(resolve(project.dest, "tsconfig.json"), JSON.stringify(TSCONFIG, undefined, 4));
}

async function installSources(project: NewProject) {
    await cp(project.source, resolve(project.dest, "src"), {
        recursive: true,
        filter: source => source.endsWith(".ts"),
    });
}

function build(this: NewProject) {
    execSync(`npm -q install`, { stdio: "inherit", cwd: this.source });
}
