/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { statSync } from "fs";
import { readdir } from "fs/promises";
import { resolve } from "path";

const TEMPLATE_PATH = resolve(import.meta.dirname, "../templates");

export class TemplateNotFoundError extends Error {}

export interface Template {
    name: string;
    path: string;
}

export function Template(name: string): Template {
    const path = resolve(TEMPLATE_PATH, name);

    let valid = false;
    try {
        valid = statSync(path).isDirectory();
    } catch (e) {
        if ((e as any)?.code !== "ENOENT" && (e as any)?.code !== "ENOTDIR") {
            throw e;
        }
    }
    if (!valid) {
        throw new TemplateNotFoundError(`"${name}" is not a valid template name`);
    }

    return {
        name,
        path,
    };
}

export namespace Template {
    export async function all() {
        const names = await readdir(TEMPLATE_PATH);
        return names.map(Template);
    }
}
