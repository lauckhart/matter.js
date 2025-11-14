/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SessionManager } from "#session/SessionManager.js";
import type { PeerAddressStore } from "./PeerAddressStore.js";

export interface PeerContext {
    sessions: SessionManager;
    store: PeerAddressStore;
}
