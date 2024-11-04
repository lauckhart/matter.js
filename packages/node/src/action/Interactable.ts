/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#action/context/ActionContext.js";
import { MaybePromise } from "#general";
import { Action } from "./actions/Action.js";

/**
 * Objects implementing this interface can participate in Matter interactions.
 */
export interface Interactable {
    interact(request: Action, context?: ActionContext): MaybePromise<void>;
}
