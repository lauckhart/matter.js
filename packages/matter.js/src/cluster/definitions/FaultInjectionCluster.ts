/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";

export const enum FaultType {
    Unspecified = 0,
    SystemFault = 1,
    InetFault = 2,
    ChipFault = 3,
    CertFault = 4
};

export const FailAtFaultRequest = TlvObject({
    Type: TlvField(0, TlvEnum<FaultType>()),
    Id: TlvField(1, TlvUInt32),
    NumCallsToSkip: TlvField(2, TlvUInt32),
    NumCallsToFail: TlvField(3, TlvUInt32),
    TakeMutex: TlvField(4, TlvBoolean)
});

export const FailRandomlyAtFaultRequest = TlvObject({
    Type: TlvField(0, TlvEnum<FaultType>()),
    Id: TlvField(1, TlvUInt32),
    Percentage: TlvField(2, TlvUInt8)
});

export namespace FaultInjectionCluster {
    /**
     * Fault Injection
     *
     * The Fault Injection Cluster provide a means for a test harness to
     * configure faults(for example triggering a fault in the system).
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `FaultInjection.with()` and a list of
     * supported features.
     */
    export const Complete = Cluster({
        id: 0xfff1fc06,
        name: "FaultInjection",
        revision: 1,
        commands: {
            failAtFault: Command(0, FailAtFaultRequest, 0, TlvNoResponse),
            failRandomlyAtFault: Command(1, FailRandomlyAtFaultRequest, 1, TlvNoResponse)
        }
    });
};