/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimedRequest } from "#types";
import { FALLBACK_INTERACTIONMODEL_REVISION } from "@matter/protocol";
import { Action } from "./Action.js";

export interface Timed extends TimedRequest {
    kind: "timed";
}

export function Timed(definition: Timed.Definition): Timed {
    return {
        kind: "timed",
        timeout: definition.timeout,
        interactionModelRevision: FALLBACK_INTERACTIONMODEL_REVISION,
    };
}

export namespace Timed {
    export interface Definition extends Action.Definition {
        timeout: number;
    }
}
