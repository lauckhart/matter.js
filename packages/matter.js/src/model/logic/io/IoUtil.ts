/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";
import { Io } from "./Io.js";

export function assertAuthorized(level: AccessLevel, auth?: Io.Authorization) {
    if (auth?.access !== undefined && auth.access >= level) {
        throw new StatusResponseError("Access denied", StatusCode.UnsupportedAccess);
    };
}
