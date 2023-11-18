/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BasicInformationServer } from "../../../behavior/definitions/basic-information/Server.js";
import { AccessControlServer } from "../../../behavior/definitions/access-control/Server.js";
import { GroupKeyManagementServer } from "../../../behavior/definitions/group-key-management/Server.js";
import { GeneralCommissioningServer } from "../../../behavior/definitions/general-commissioning/Server.js";
import { AdministratorCommissioningServer } from "../../../behavior/definitions/administrator-commissioning/Server.js";
import { OperationalCredentialsServer } from "../../../behavior/definitions/operational-credentials/Server.js";
import { GeneralDiagnosticsServer } from "../../../behavior/definitions/general-diagnostics/Server.js";
import { PowerSourceConfigurationServer } from "../../../behavior/definitions/power-source-configuration/Server.js";
import { TimeSyncServer } from "../../../behavior/definitions/time-sync/Server.js";
import { NetworkCommissioningServer } from "../../../behavior/definitions/network-commissioning/Server.js";
import { LocalizationConfigurationServer } from "../../../behavior/definitions/localization-configuration/Server.js";
import { TimeFormatLocalizationServer } from "../../../behavior/definitions/time-format-localization/Server.js";
import { UnitLocalizationServer } from "../../../behavior/definitions/unit-localization/Server.js";
import { DiagnosticLogsServer } from "../../../behavior/definitions/diagnostic-logs/Server.js";
import { SoftwareDiagnosticsServer } from "../../../behavior/definitions/software-diagnostics/Server.js";
import { EthernetNetworkDiagnosticsServer } from "../../../behavior/definitions/ethernet-network-diagnostics/Server.js";
import { WiFiNetworkDiagnosticsServer } from "../../../behavior/definitions/wi-fi-network-diagnostics/Server.js";
import { ThreadNetworkDiagnosticsServer } from "../../../behavior/definitions/thread-network-diagnostics/Server.js";
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
