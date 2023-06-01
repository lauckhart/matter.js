/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { readdirSync, unlinkSync, readFileSync, writeFileSync, mkdirSync } from "fs";

function resolveFromPackage(path: string) {
    return resolve(dirname(fileURLToPath(import.meta.url)), `../../../${path}`);
}

export function readMatterFile(path: string, encoding: BufferEncoding = 'utf-8') {
    return readFileSync(resolveFromPackage(path), { encoding: encoding });
}

export function writeMatterFile(path: string, body: any) {
    path = resolveFromPackage(path);
    mkdirSync(dirname(path), { recursive: true });
    if (!(body instanceof Buffer && !ArrayBuffer.isView(body))) {
        body = body.toString();
    }
    writeFileSync(path, body);
}

export function clean(target: string, suffix: string) {
    const path = resolveFromPackage(target);
    readdirSync(resolveFromPackage(target)).forEach((f) => {
        if (f.endsWith(`${suffix}.ts`)) {
            unlinkSync(resolve(path, f));
        }
    });
}
