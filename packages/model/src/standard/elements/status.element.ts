/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const status = Datatype(
    { name: "status", type: "enum8", isSeed: true, metatype: "enum" },
    Field({ id: 0x0, name: "Success" }),
    Field({ id: 0x1, name: "Failure" }),
    Field({ id: 0x7d, name: "InvalidSubscription" }),
    Field({ id: 0x7e, name: "UnsupportedAccess" }),
    Field({ id: 0x7f, name: "UnsupportedEndpoint" }),
    Field({ id: 0x80, name: "InvalidAction" }),
    Field({ id: 0x81, name: "UnsupportedCommand" }),
    Field({ id: 0x85, name: "InvalidCommand" }),
    Field({ id: 0x86, name: "UnsupportedAttribute" }),
    Field({ id: 0x87, name: "ConstraintError" }),
    Field({ id: 0x88, name: "UnsupportedWrite" }),
    Field({ id: 0x89, name: "ResourceExhausted" }),
    Field({ id: 0x8b, name: "NotFound" }),
    Field({ id: 0x8c, name: "UnreportableAttribute" }),
    Field({ id: 0x8d, name: "InvalidDataType" }),
    Field({ id: 0x8f, name: "UnsupportedRead" }),
    Field({ id: 0x92, name: "DataVersionMismatch" }),
    Field({ id: 0x94, name: "Timeout" }),
    Field({ id: 0x9b, name: "UnsupportedNode" }),
    Field({ id: 0x9c, name: "Busy" }),
    Field({ id: 0x9d, name: "AccessRestricted" }),
    Field({ id: 0xc3, name: "UnsupportedCluster" }),
    Field({ id: 0xc5, name: "NoUpstreamSubscription" }),
    Field({ id: 0xc6, name: "NeedsTimedInteraction" }),
    Field({ id: 0xc7, name: "UnsupportedEvent" }),
    Field({ id: 0xc8, name: "PathsExhausted" }),
    Field({ id: 0xc9, name: "TimedRequestMismatch" }),
    Field({ id: 0xca, name: "FailsafeRequired" }),
    Field({ id: 0xcb, name: "InvalidInState" }),
    Field({ id: 0xcc, name: "NoCommandResponse" }),
    Field({ id: 0xcd, name: "TermsAndConditionsChanged" }),
    Field({ id: 0xce, name: "MaintenanceRequired" })
);

MatterDefinition.children.push(status);
