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
    { id: 0x16, name: "RootNode", classification: "node" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 22, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x28, name: "BasicInformation", conformance: "M", element: "serverCluster", quality: "I" }),
    Requirement(
        { id: 0x1f, name: "AccessControl", conformance: "M", element: "serverCluster", quality: "I" },
        Requirement({ name: "MNGD", conformance: "[ManagedAclAllowed]", constraint: "desc", element: "feature" })
    ),
    Requirement(
        { id: 0x2e, name: "PowerSourceConfiguration", conformance: "O, D", element: "serverCluster", quality: "I" }
    ),
    Requirement({ id: 0x38, name: "TimeSynchronization", conformance: "O", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x3f, name: "GroupKeyManagement", conformance: "M", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x30, name: "GeneralCommissioning", conformance: "M", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x31, name: "NetworkCommissioning", conformance: "!CustomNetworkConfig", element: "serverCluster" }),
    Requirement({ id: 0x3c, name: "AdministratorCommissioning", conformance: "M", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x3e, name: "OperationalCredentials", conformance: "M", element: "serverCluster", quality: "I" }),
    Requirement({
        id: 0x2b, name: "LocalizationConfiguration",
        conformance: "LanguageLocale", element: "serverCluster", quality: "I"
    }),
    Requirement(
        { id: 0x2c, name: "TimeFormatLocalization", conformance: "TimeLocale", element: "serverCluster", quality: "I" }
    ),
    Requirement({ id: 0x2d, name: "UnitLocalization", conformance: "UnitLocale", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x33, name: "GeneralDiagnostics", conformance: "M", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x32, name: "DiagnosticLogs", conformance: "O", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x34, name: "SoftwareDiagnostics", conformance: "O", element: "serverCluster", quality: "I" }),
    Requirement({ id: 0x37, name: "EthernetNetworkDiagnostics", conformance: "[Ethernet]", element: "serverCluster" }),
    Requirement({ id: 0x36, name: "WiFiNetworkDiagnostics", conformance: "[Wi, Fi]", element: "serverCluster" }),
    Requirement({ id: 0x35, name: "ThreadNetworkDiagnostics", conformance: "[Thread]", element: "serverCluster" }),
    Requirement(
        { id: 0x46, name: "IcdManagement", conformance: "SIT | LIT", element: "serverCluster", quality: "I" },
        Requirement({ name: "LONGIDLETIMESUPPORT", conformance: "LIT", element: "feature" })
    ),
    Field(
        { name: "conditions", type: "enum8" },
        Field({ name: "CustomNetworkConfig" }),
        Field({ name: "ManagedAclAllowed" })
    )
);

MatterDefinition.children.push(RootNodeDt);
