/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandPayload } from "../payloads/CommandPayload.js";

/**
 * Initiates command execution.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.8.2
 */
export type InvokeAction = {
    commands: CommandPayload.Request[];
    suppressResponse?: boolean;
    timedRequest?: boolean;
};
