/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BasicInformationServer } from "../../../behavior/server/definitions/BasicInformationServer.js";
import { AccessControlServer } from "../../../behavior/server/definitions/AccessControlServer.js";
import { GroupKeyManagementServer } from "../../../behavior/server/definitions/GroupKeyManagementServer.js";
import { GeneralCommissioningServer } from "../../../behavior/server/definitions/GeneralCommissioningServer.js";
import { AdministratorCommissioningServer } from "../../../behavior/server/definitions/AdministratorCommissioningServer.js";
import { OperationalCredentialsServer } from "../../../behavior/server/definitions/OperationalCredentialsServer.js";
import { GeneralDiagnosticsServer } from "../../../behavior/server/definitions/GeneralDiagnosticsServer.js";
import { PowerSourceConfigurationServer } from "../../../behavior/server/definitions/PowerSourceConfigurationServer.js";
import { TimeSyncServer } from "../../../behavior/server/definitions/TimeSyncServer.js";
import { NetworkCommissioningServer } from "../../../behavior/server/definitions/NetworkCommissioningServer.js";
import { LocalizationConfigurationServer } from "../../../behavior/server/definitions/LocalizationConfigurationServer.js";
import { TimeFormatLocalizationServer } from "../../../behavior/server/definitions/TimeFormatLocalizationServer.js";
import { UnitLocalizationServer } from "../../../behavior/server/definitions/UnitLocalizationServer.js";
import { DiagnosticLogsServer } from "../../../behavior/server/definitions/DiagnosticLogsServer.js";
import { SoftwareDiagnosticsServer } from "../../../behavior/server/definitions/SoftwareDiagnosticsServer.js";
import { EthernetNetworkDiagnosticsServer } from "../../../behavior/server/definitions/EthernetNetworkDiagnosticsServer.js";
import { WiFiNetworkDiagnosticsServer } from "../../../behavior/server/definitions/WiFiNetworkDiagnosticsServer.js";
import { ThreadNetworkDiagnosticsServer } from "../../../behavior/server/definitions/ThreadNetworkDiagnosticsServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const RootRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            BasicInformation: BasicInformationServer,
            AccessControl: AccessControlServer,
            GroupKeyManagement: GroupKeyManagementServer,
            GeneralCommissioning: GeneralCommissioningServer,
            AdministratorCommissioning: AdministratorCommissioningServer,
            OperationalCredentials: OperationalCredentialsServer,
            GeneralDiagnostics: GeneralDiagnosticsServer
        },

        optional: {
            PowerSourceConfiguration: PowerSourceConfigurationServer,
            TimeSync: TimeSyncServer,
            NetworkCommissioning: NetworkCommissioningServer,
            LocalizationConfiguration: LocalizationConfigurationServer,
            TimeFormatLocalization: TimeFormatLocalizationServer,
            UnitLocalization: UnitLocalizationServer,
            DiagnosticLogs: DiagnosticLogsServer,
            SoftwareDiagnostics: SoftwareDiagnosticsServer,
            EthernetNetworkDiagnostics: EthernetNetworkDiagnosticsServer,
            WiFiNetworkDiagnostics: WiFiNetworkDiagnosticsServer,
            ThreadNetworkDiagnostics: ThreadNetworkDiagnosticsServer
        }
    }
};

export const RootEndpointDefinition = MutableEndpoint({
    name: "RootNode",
    deviceType: 0x16,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Node,
    requirements: RootRequirements,

    behaviors: SupportedBehaviors(
        RootRequirements.server.mandatory.BasicInformation,
        RootRequirements.server.mandatory.AccessControl,
        RootRequirements.server.mandatory.GroupKeyManagement,
        RootRequirements.server.mandatory.GeneralCommissioning,
        RootRequirements.server.mandatory.AdministratorCommissioning,
        RootRequirements.server.mandatory.OperationalCredentials,
        RootRequirements.server.mandatory.GeneralDiagnostics
    )
});

/**
 * This defines conformance for a root node endpoint (see System Model specification). This endpoint is akin to a "read
 * me first" endpoint that describes itself and the other endpoints that make up the node.
 *
 *   • Device types with Endpoint scope shall NOT be supported on the same endpoint as this device type.
 *
 *   • Clusters with an Application role shall NOT be supported on the same endpoint as this device type.
 *
 *   • Other device types with Node scope may be supported on the same endpoint as this device type.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.1
 */
export interface RootEndpoint extends Identity<typeof RootEndpointDefinition> {}

export const RootEndpoint: RootEndpoint = RootEndpointDefinition;
