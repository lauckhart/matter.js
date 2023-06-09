/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This script builds cluster elements from the connectedhomeip XML cluster
// definitions.

import "../util/setup.js";
import { loadChip } from "./chip/load-chip.js";
import { generateModel } from "./common/generate-model.js";

const elements = await loadChip();
generateModel("chip", elements);
