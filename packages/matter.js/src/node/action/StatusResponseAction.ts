/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";

/**
 * Reports status for actions with no other response and errors for actions
 * that fail.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 8.3.1
 */
export type StatusResponseAction = {
    status: StatusCode;
};
