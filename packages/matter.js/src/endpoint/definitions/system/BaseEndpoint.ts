/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BindingServer } from "../../../behavior/server/definitions/BindingServer.js";
import { FixedLabelServer } from "../../../behavior/server/definitions/FixedLabelServer.js";
import { UserLabelServer } from "../../../behavior/server/definitions/UserLabelServer.js";

export const BaseRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { optional: { Binding: BindingServer, FixedLabel: FixedLabelServer, UserLabel: UserLabelServer } }
};

export namespace BaseEndpoint {
    export const requirements = BaseRequirements;
}
