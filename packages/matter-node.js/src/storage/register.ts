/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage } from "@project-chip/matter.js/storage";
import { isAbsolute, resolve } from "path";
import { StorageBackendDisk } from "./StorageBackendDisk.js";

if (!Storage.registered) {
    Storage.create = (name: string, clear = false) => {
        let appDataDir;

        if (isAbsolute(name)) {
            appDataDir = name;
        } else {
            let userDataDir;

            switch (process.platform) {
                case "win32":
                    userDataDir = process.env.APPDATA ?? ".";
                    break;

                case "darwin":
                    userDataDir = process.env.HOME ? `${process.env.HOME}/Library/Preferences` : ".";
                    break;

                default:
                    userDataDir = process.env.HOME ? `${process.env.HOME}/.local/share` : ".";
                    break;
            }

            appDataDir = resolve(userDataDir, `matter/${name}`);
        }

        return new StorageBackendDisk(appDataDir, clear);
    };
}
