/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { build as esbuild, Format } from "esbuild";
import { cp, mkdir, readFile, rm, symlink, writeFile } from "fs/promises";
import { glob } from "glob";
import { platform } from "os";
import { dirname, join, relative } from "path";
import { ignoreError } from "../util/errors.js";
import { CODEGEN_PATH, CONFIG_PATH, Package } from "../util/package.js";
import { Progress } from "../util/progress.js";
import { Typescript, TypescriptContext } from "./typescript.js";

export class Project {
    pkg: Package;

    constructor(source: Package | string = ".") {
        if (typeof source === "string") {
            this.pkg = new Package({ path: source });
        } else {
            this.pkg = source;
        }

        if (!this.pkg.hasSrc) {
            throw new Error(`Found package ${this.pkg.json.name} but no src directory is present`);
        }
    }

    async buildSource(format: Format) {
        await this.#build(format, "src", `dist/${format}`);
        if (this.pkg.hasCodegen) {
            await this.#build(format, CODEGEN_PATH, `dist/${format}`);
        }
        await this.#configureFormat("dist", format, true);
    }

    async buildTests(format: Format) {
        if (this.pkg.hasDirectory("test")) {
            await this.#build(format, "test", `build/${format}/test`);
        }

        const src = `dist/${format}`;
        const dest = `build/${format}/src`;

        try {
            const destPath = this.pkg.resolve(dest);
            await mkdir(dirname(destPath), { recursive: true });
            await ignoreError("EEXIST", async () => await symlink(this.pkg.resolve(src), destPath));
        } catch (e) {
            if ((e as any).code === "EPERM" && platform() === "win32") {
                // If developer mode is not enabled, we can't create a symlink
                // on Windows.  Copy instead
                await cp(this.pkg.resolve(src), this.pkg.resolve(dest), {
                    recursive: true,
                    force: true,
                });
            } else {
                throw e;
            }
        }
        await this.#configureFormat("build", format, false);
    }

    async clean() {
        for (const dir of ["build", "dist"]) {
            await rm(this.pkg.resolve(dir), { recursive: true, force: true });
        }
    }

    async buildDeclarations(context: TypescriptContext, path: string) {
        Typescript.emitDeclarations(this.pkg, context, path);
    }

    async validateTypes(context: TypescriptContext, path: string) {
        Typescript.validateTypes(this.pkg, context, path);
    }

    async installDeclarationFormats(formats: Iterable<string>) {
        const srcMaps = Array<string>();
        let needSrcMaps = true;

        const src = this.pkg.resolve("build/types/src");

        for (const format of formats) {
            await cp(src, this.pkg.resolve(`dist/${format}`), {
                recursive: true,
                force: true,

                filter: filename => {
                    // We process source maps below
                    if (filename.endsWith(".d.ts.map")) {
                        if (needSrcMaps) {
                            srcMaps.push(filename);
                        }
                        return false;
                    }
                    return true;
                },
            });

            // Only need to collect source maps on a single pass
            needSrcMaps = false;

            if (this.pkg.hasCodegen) {
                await cp(this.pkg.resolve("build/types/build/src"), this.pkg.resolve(`dist/${format}`), {
                    recursive: true,
                    force: true,

                    filter: source => {
                        // Ignore source maps
                        return !source.endsWith(".d.ts.map");
                    },
                });
            }
        }

        // If you specify --sourceRoot, tsc just sticks whatever the string is directly into the file.  Not very useful
        // unless you have no hierarchy or use absolute paths...
        //
        // We distribute types for src one level higher than we generate them (dist/esm vs build/types/src) so the paths
        // end up incorrect.
        //
        // The source maps for codegen files are off by two levels but we don't bother installing those since we don't
        // distribute the source anyway.
        //
        // So...  Rewrite the paths in all source maps under src/.  Do this directly on buffer for marginal performance
        // win.
        for (const filename of srcMaps) {
            // Load map as binary
            let map = await readFile(filename);

            // Find key text
            let pos = map.indexOf('"sources":["../');
            if (pos === -1) {
                throw new Error(
                    `Could not find sources position in declaration map ${filename}, format may have changed`,
                );
            }

            // move to ../
            pos += 12;

            // Shift everything left by three
            map = map.copyWithin(pos, pos + 3).subarray(0, map.length - 3);

            // Write to new location
            const pathRelativeToDest = relative(src, filename);
            for (const format of formats) {
                await writeFile(join(join(this.pkg.resolve(`dist/${format}`), pathRelativeToDest)), map);
            }
        }
    }

    get hasDeclarations() {
        return this.pkg.hasDirectory("build/types");
    }

    async installDeclarations() {
        await mkdir(this.pkg.resolve("dist"), { recursive: true });
        const formats = new Set<string>();
        if (this.pkg.supportsEsm) {
            formats.add("esm");
        }
        if (this.pkg.supportsCjs) {
            formats.add("cjs");
        }
        await this.installDeclarationFormats(formats);
    }

    async recordBuildTime() {
        await mkdir(this.pkg.resolve("build"), { recursive: true });
        await writeFile(this.pkg.resolve("build/timestamp"), "");
    }

    async loadConfig() {
        if (!this.pkg.hasConfig) {
            return {};
        }

        const configPath = this.pkg.resolve(CONFIG_PATH);

        const outfile = configPath.replace(/\\/g, "/").replace("/src/", "/build/").replace(/\.ts$/, ".js");
        await esbuild({
            entryPoints: [configPath],
            outfile,
            sourcemap: true,
        });

        return (await import(`file://${outfile}`)) as Project.Config;
    }

    async #build(format: Format, indir: string, outdir: string) {
        const entryPoints = await this.#targetsOf(indir, outdir, "ts", "js");

        const configPath = this.pkg.resolve(CONFIG_PATH);
        for (const entry of entryPoints) {
            if (entry.in === configPath) {
                continue;
            }
            entry.out = entry.out.replace(/\.[jt]s$/, "");
        }

        await esbuild({
            entryPoints,
            outdir: this.pkg.path,
            format,
            sourcemap: true,
            sourcesContent: false,
            absWorkingDir: dirname(this.pkg.resolve(indir)),

            // This is necessary to downlevel "using"
            target: "es2022",

            logOverride: {
                "direct-eval": "silent",
            },
        });

        for (const entry of await this.#targetsOf(indir, outdir, "cjs", "mjs", "d.cts", "d.mts")) {
            await cp(entry.in, entry.out);
        }
    }

    async #configureFormat(dir: string, format: Format, isDist: boolean) {
        // Build import map
        let { imports } = this.pkg.json;
        if (isDist && typeof imports === "object") {
            imports = { ...imports } as Record<string, unknown>;
            for (const key in imports) {
                const value = imports[key];
                if (typeof value === "string") {
                    imports[key] = value.replace(/^\.\/src\//, "./");
                }
            }
        }

        // Write package.json
        const path = this.pkg.resolve(`${dir}/${format}/package.json`);
        const json: Record<string, unknown> = {
            type: format === "cjs" ? "commonjs" : "module",
            imports,
        };
        await writeFile(path, JSON.stringify(json, undefined, 4));
    }

    async #targetsOf(indir: string, outdir: string, ...extensions: string[]) {
        indir = this.pkg.resolve(indir).replace(/\\/g, "/");
        outdir = this.pkg.resolve(outdir).replace(/\\/g, "/");

        return (await glob(extensions.map(ext => `${indir}/**/*.${ext}`))).map(file => ({
            in: file,
            out: `${outdir}/${file.slice(indir.length + 1)}`,
        }));
    }
}

export namespace Project {
    export interface Context {
        project: Project;
        progress: Progress;
    }

    export interface Config {
        before?: (context: Context) => Promise<void>;
        after?: (context: Context) => Promise<void>;
    }
}
