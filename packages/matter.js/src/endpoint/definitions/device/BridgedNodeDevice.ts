/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorServer } from "../../../behavior/server/definitions/DescriptorServer.js";
import {
    BridgedDeviceBasicInformationServer
} from "../../../behavior/server/definitions/BridgedDeviceBasicInformationServer.js";
import { PowerSourceConfigurationServer } from "../../../behavior/server/definitions/PowerSourceConfigurationServer.js";
import { PowerSourceServer } from "../../../behavior/server/definitions/PowerSourceServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const BridgedNodeRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            Descriptor: DescriptorServer.set({ deviceTypeList: [{ deviceType: 19, revision: 1 }] }),
            BridgedDeviceBasicInformation: BridgedDeviceBasicInformationServer
        },
        optional: { PowerSourceConfiguration: PowerSourceConfigurationServer, PowerSource: PowerSourceServer }
    }
};

export const BridgedNodeDeviceDefinition = MutableEndpoint({
    name: "BridgedNode",
    deviceType: 0x13,
    requirements: BridgedNodeRequirements,
    behaviors: SupportedBehaviors(
        BridgedNodeRequirements.server.mandatory.Descriptor,
        BridgedNodeRequirements.server.mandatory.BridgedDeviceBasicInformation
    )
});

/**
 * This defines conformance for a Bridged Node root endpoint. This endpoint is akin to a "read me first" endpoint that
 * describes itself and any other endpoints that make up the Bridged Node. A Bridged Node endpoint represents a device
 * on a foreign network, but is not the root endpoint of the bridge itself.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.6
 */
export interface BridgedNodeDevice extends Identity<typeof BridgedNodeDeviceDefinition> {}

export const BridgedNodeDevice: BridgedNodeDevice = BridgedNodeDeviceDefinition;
