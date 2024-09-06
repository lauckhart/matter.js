/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globals } from "./Globals.js";
import { MatterModel } from "./models/MatterModel.js";

/**
 * The canonical instance of the Matter Object Model.
 */
export const Matter = MatterModel.standard;

// Populate the global model
Matter.children.push(...Object.values(Globals));
