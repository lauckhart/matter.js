/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const RootNodeDt = DeviceType(
    { name: "RootNode", id: 0x16 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 22, revision: 3 } ] })
    ),
    Requirement({ name: "BasicInformation", id: 0x28, element: "serverCluster", conformance: "M", quality: "I" }),
    Requirement(
        { name: "AccessControl", id: 0x1f, element: "serverCluster", conformance: "M", quality: "I" },
        Requirement({ name: "MNGD", element: "feature", constraint: "desc", conformance: "[ManagedAclAllowed]" })
    ),
    Requirement(
        { name: "PowerSourceConfiguration", id: 0x2e, element: "serverCluster", conformance: "O, D", quality: "I" }
    ),
    Requirement({ name: "TimeSynchronization", id: 0x38, element: "serverCluster", conformance: "O", quality: "I" }),
    Requirement({ name: "GroupKeyManagement", id: 0x3f, element: "serverCluster", conformance: "M", quality: "I" }),
    Requirement({ name: "GeneralCommissioning", id: 0x30, element: "serverCluster", conformance: "M", quality: "I" }),
    Requirement({ name: "NetworkCommissioning", id: 0x31, element: "serverCluster", conformance: "!CustomNetworkConfig" }),
    Requirement({ name: "AdministratorCommissioning", id: 0x3c, element: "serverCluster", conformance: "M", quality: "I" }),
    Requirement({ name: "OperationalCredentials", id: 0x3e, element: "serverCluster", conformance: "M", quality: "I" }),
    Requirement({
        name: "LocalizationConfiguration", id: 0x2b,
        element: "serverCluster", conformance: "LanguageLocale", quality: "I"
    }),
    Requirement(
        { name: "TimeFormatLocalization", id: 0x2c, element: "serverCluster", conformance: "TimeLocale", quality: "I" }
    ),
    Requirement({ name: "UnitLocalization", id: 0x2d, element: "serverCluster", conformance: "UnitLocale", quality: "I" }),
    Requirement({ name: "GeneralDiagnostics", id: 0x33, element: "serverCluster", conformance: "M", quality: "I" }),
    Requirement({ name: "DiagnosticLogs", id: 0x32, element: "serverCluster", conformance: "O", quality: "I" }),
    Requirement({ name: "SoftwareDiagnostics", id: 0x34, element: "serverCluster", conformance: "O", quality: "I" }),
    Requirement({ name: "EthernetNetworkDiagnostics", id: 0x37, element: "serverCluster", conformance: "[Ethernet]" }),
    Requirement({ name: "WiFiNetworkDiagnostics", id: 0x36, element: "serverCluster", conformance: "[Wi, Fi]" }),
    Requirement({ name: "ThreadNetworkDiagnostics", id: 0x35, element: "serverCluster", conformance: "[Thread]" }),
    Requirement(
        { name: "IcdManagement", id: 0x46, element: "serverCluster", conformance: "SIT | LIT", quality: "I" },
        Requirement({ name: "LONGIDLETIMESUPPORT", element: "feature", conformance: "LIT" })
    ),
    Field(
        { name: "conditions", type: "enum8" },
        Field({ name: "CustomNetworkConfig" }),
        Field({ name: "ManagedAclAllowed" })
    )
);

MatterDefinition.children.push(RootNodeDt);
