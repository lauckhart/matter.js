/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync } from "fs";
import { readdir, stat } from "fs/promises";
import { globSync } from "glob";
import { dirname, join, relative, resolve } from "path";
import type { PackageJson } from "type-fest";
import { ignoreError, ignoreErrorSync } from "./errors.js";
import { isDirectory, isFile } from "./file.js";
import { Progress } from "./progress.js";
import { toolsPath } from "./tools-path.cjs";

export class JsonNotFoundError extends Error {}

function findJson(filename: string, path: string = ".", title?: string) {
    path = resolve(path);
    while (true) {
        const json = ignoreErrorSync(["ENOENT", "ENOTDIR"], () =>
            JSON.parse(readFileSync(resolve(path, filename)).toString()),
        );
        if (json) {
            if (title === undefined || json.name === title) {
                return { root: path, json };
            }
        }
        const parent = dirname(path);
        if (parent === path) {
            throw new JsonNotFoundError(`Could not locate ${title ?? filename}`);
        }
        path = parent;
    }
}

/**
 * Loads information about a specific package (in the NPM sense) and provides various tools for working with the
 * package.
 */
export class Package {
    path: string;
    json: PackageJson;
    esm: boolean;
    cjs: boolean;
    src: boolean;
    tests: boolean;

    constructor({
        path = ".",
        name,
    }: {
        path?: string;
        name?: string;
    } = {}) {
        const { root, json } = findJson("package.json", path, name);
        this.path = root;
        this.json = json;

        const { esm, cjs } = selectFormats(this.json);
        this.esm = esm;
        this.cjs = cjs;

        this.src = isDirectory(this.resolve("src"));
        this.tests = isDirectory(this.resolve("test"));
    }

    get name() {
        const name = this.json.name;
        if (name === undefined) {
            throw new Error(`Package at ${this.path} is unnamed`);
        }
        return name;
    }

    get version() {
        const version = this.json.version;
        if (version === undefined) {
            throw new Error(`Packasge ${this.name} is unversioned`);
        }
        return version;
    }

    get exports() {
        return this.json.exports;
    }

    resolve(path: string) {
        return resolve(this.path, path);
    }

    relative(path: string) {
        return relative(this.path, path);
    }

    start(what: string) {
        const progress = new Progress();
        progress.startup(what, this);
        return progress;
    }

    async lastModified(...paths: string[]) {
        return this.lastModifiedAbsolute(paths.map(p => this.resolve(p)));
    }

    private async lastModifiedAbsolute(paths: string[]) {
        let mtime = 0;
        await Promise.all(
            paths.map(async p => {
                const stats = await ignoreError("ENOENT", async () => await stat(p));
                if (!stats) {
                    return;
                }

                let thisMtime;
                if (stats.isDirectory()) {
                    const paths = (await readdir(p)).map(p2 => resolve(p, p2));
                    thisMtime = await this.lastModifiedAbsolute(paths);
                } else {
                    thisMtime = stats.mtimeMs;
                }
                if (thisMtime > mtime) {
                    mtime = thisMtime;
                }
            }),
        );
        return mtime;
    }

    get dependencies() {
        let result = Array<string>();
        for (const type of ["dependencies", "devDependencies", "peerDependencies"] as const) {
            if (typeof this.json[type] === "object" && this.json[type] !== null) {
                result = [...result, ...Object.keys(this.json[type])];
            }
        }
        return [...new Set(result)];
    }

    get workspace() {
        return Package.workspaceFor(this.path);
    }

    get isWorkspace() {
        return Array.isArray(this.json.workspaces);
    }

    get root(): Package {
        try {
            return this.workspace;
        } catch (e) {
            if (!(e instanceof JsonNotFoundError)) {
                throw e;
            }
        }
        return this;
    }

    static set workingDir(wd: string) {
        workingDir = wd;
    }

    static get workspace() {
        return this.workspaceFor(workingDir);
    }

    static workspaceFor(cwd: string) {
        if (!workspace) {
            workspace = find(cwd, pkg => pkg.isWorkspace);
        }
        return workspace;
    }

    static get tools() {
        if (!tools) {
            tools = new Package({ path: toolsPath });
        }
        return tools;
    }

    static findExport(name: string, type: "cjs" | "esm" = "esm") {
        return this.workspace.findExport(name, type);
    }

    // Note - supports limited subset of "exports", could change to use this.modules
    resolveExport(name: string, type: "cjs" | "esm" = "esm") {
        const exports = this.exports;
        if (typeof exports === "object" && exports !== null && !Array.isArray(exports)) {
            if (!name.startsWith(".")) {
                name = `./${name}`;
            }
            const exportDetail = exports[name];

            if (exportDetail) {
                const exp = findExportCondition(exportDetail, type);
                if (exp) {
                    return this.resolve(exp);
                }
            }

            if (name === ".") {
                if (type === "esm" && this.json.module) {
                    return this.resolve(this.json.module);
                }
                if (this.json.main) {
                    return this.resolve(this.json.main);
                }
            }
        }

        throw new Error(`Cannot resolve export ${name} in package ${this.name}`);
    }

    findExport(name: string, type: "cjs" | "esm" = "esm") {
        const segments = name.split("/");
        let subdir = segments.shift() as string;
        if (subdir.startsWith("@") && segments.length) {
            subdir = `${subdir}/${segments.shift()}`;
        }

        let resolveIn = this.path;
        while (true) {
            if (isDirectory(resolve(resolveIn, "node_modules", subdir))) {
                break;
            }
            const nextResolveIn = dirname(resolveIn);
            if (nextResolveIn === resolveIn) {
                throw new Error(`Cannot find module ${subdir} from ${this.path}`);
            }
            resolveIn = nextResolveIn;
        }

        const pkg = new Package({ path: resolve(resolveIn, "node_modules", subdir) });
        return pkg.resolveExport(segments.length ? segments.join("/") : ".", type);
    }

    get isLibrary() {
        return !!(this.exports && Object.keys(this.exports).length);
    }

    get modules() {
        return this.listModules(false);
    }

    get sourceModules() {
        return this.listModules(true);
    }

    /**
     * Create a map of module name -> implementation file.  If "source" is true, searches source files rather than
     * transpiled files.  We do this rather than finding transpilation files then mapping to source files so this works
     * even if there isn't a build.
     */
    listModules(source: boolean, ...conditions: string[]) {
        if (!conditions.length) {
            conditions = [this.esm ? "import" : "require", "default"];
        }

        const modules = {} as Record<string, string>;

        const exports = this.exports;
        if (typeof exports === "object" && exports !== null) {
            findModules(source, new Set(conditions), modules, this.name, this.path, exports);
        }

        return modules;
    }
}

let workingDir = ".";
let workspace: Package | undefined;
let tools: Package | undefined;

function find(startDir: string, selector: (pkg: Package) => boolean): Package {
    let pkg = new Package({ path: startDir });
    while (!selector(pkg)) {
        pkg = new Package({ path: dirname(pkg.path) });
    }
    return pkg;
}

function selectFormats(json: any) {
    let esm: boolean, cjs: boolean;

    if (json.type === "module") {
        esm = true;
        cjs =
            (json.main !== undefined && json.module !== undefined) ||
            !!Object.values(json.exports ?? {}).find((exp: any) => exp.require);
    } else {
        cjs = true;
        esm = !!json.module || !!Object.values(json.exports ?? {}).find((exp: any) => exp.import);
    }

    return { esm, cjs };
}

function findExportCondition(exports: PackageJson.Exports, type: "esm" | "cjs"): string | undefined {
    if (typeof exports !== "object" || exports === null || Array.isArray(exports)) {
        return;
    }

    if (type === "esm" && exports.import) {
        let exp = exports.import as PackageJson.Exports | undefined;
        if (exp && typeof exp !== "string") {
            exp = findExportCondition(exp, type);
        }
        if (exp) {
            return exp;
        }
    }

    let exp = exports.require ?? exports.node ?? (exports.default as PackageJson.Exports | undefined);
    if (exp && typeof exp !== "string") {
        exp = findExportCondition(exp, type);
    }

    if (typeof exp === "string") {
        return exp;
    }
}

function findModules(
    source: boolean,
    conditions: Set<string>,
    target: Record<string, string>,
    prefix: string,
    path: string,
    exports: PackageJson.Exports,
) {
    if (typeof exports === "string") {
        addModuleGlobs(source, target, prefix, path, exports);
    } else if (Array.isArray(exports)) {
        for (const entry of exports) {
            findModules(source, conditions, target, prefix, path, entry);
        }
    } else if (typeof exports === "object" && exports !== null) {
        for (const key in exports) {
            let selectedCondition = false;
            if (key.startsWith(".")) {
                findModules(source, conditions, target, join(prefix, key), path, exports[key]);
            } else if (!selectedCondition && conditions.has(key)) {
                findModules(source, conditions, target, prefix, path, exports[key]);
                selectedCondition = true;
            }
        }
    } else {
        throw new Error("Malformed exports field in package.json");
    }
}

function addModuleGlobs(source: boolean, target: Record<string, string>, name: string, base: string, pattern: string) {
    let path = join(base, pattern);
    if (source) {
        path = path.replace(/\/dist\/(?:esm|cjs)\//, "/src/");
    }

    if (name.includes("*")) {
        // Wildcard
        if (!name.endsWith("/*")) {
            throw new Error(`Wildcard in module ${name} does not appear as final path segment`);
        }

        name = name.substring(0, name.length - 2);
        const paths = globSync(source ? path.replace(/\.js$/, ".{ts,js}") : path);
        if (!paths.length) {
            throw new Error(`No match for module ${name} pattern ${pattern}`);
        }

        const [prefix, suffix] = path.split(/\*+/);
        const prefixLength = prefix === undefined ? 0 : prefix.length;
        const suffixLength = suffix === undefined ? 0 : suffix.length;

        for (const thisPath of paths) {
            const qualifier = thisPath.substring(prefixLength, thisPath.length - suffixLength);
            const thisName = join(name, qualifier);
            target[thisName] = thisPath;
        }
    } else if (path.includes("*")) {
        // A wildcard path is only valid with wildcard name
        throw new Error(`Wildcard in module path "${path}" but not in module "${name}"`);
    } else {
        // No wildcard -- remove directory
        name = name.replace(/\/(?:export|index)$/, "");

        // Look for source if file isn't present
        let found = false;
        if (isFile(path)) {
            found = true;
        } else if (source && path.endsWith(".js")) {
            path = path.replace(/\.js$/, ".ts");
            if (isFile(path)) {
                found = true;
            }
        }

        if (!found) {
            throw new Error(`Module "${name}" path "${path}" not found`);
        }

        target[name] = path;
    }
}
