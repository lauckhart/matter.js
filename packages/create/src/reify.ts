/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { mkdir, readdir } from "fs/promises";
import { error } from "./messages.js";
import { Template } from "./template.js";

export async function reify(path: string, template: Template) {
    try {
        await mkdir(path, { recursive: true });
    } catch (e) {
        error(`Could not create "${path}":`, e);
    }

    const existingFiles = await readdir(path);
    if (existingFiles.length) {
        error(`Files exist in "${path}", please run in an empty directory`);
    }

    template;
}
