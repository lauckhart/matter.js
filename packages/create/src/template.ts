/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "@matter/tools";

export class TemplateNotFoundError extends Error {}

export interface Template {
    name: string;
    path: string;
}

export function Template(name: string): Template {
    const examples = Package.tools.findPackage("@matter/examples");

    const path = `src/examples/${name}`;
    if (!examples.hasDirectory(path)) {
        throw new TemplateNotFoundError(`"${name}" is not a valid template name`);
    }

    return {
        name,
        path: examples.resolve(path),
    };
}

export namespace Template {
    export async function all() {
        const examples = Package.tools.findPackage("@matter/examples");
        const paths = await examples.glob("src/examples/*");
        const names = paths.map(path => path.replace(/.*[\\/]/, "")).sort();
        return names.map(Template);
    }
}
