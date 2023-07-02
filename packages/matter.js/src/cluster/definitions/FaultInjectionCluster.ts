/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

export const enum TlvFaultType {
    Unspecified = 0,
    SystemFault = 1,
    InetFault = 2,
    ChipFault = 3,
    CertFault = 4
};

export const TlvFailAtFaultRequest = TlvObject({
    type: TlvField(0, TlvEnum<TlvFaultType>()),
    id: TlvField(1, TlvUInt32),
    numCallsToSkip: TlvField(2, TlvUInt32),
    numCallsToFail: TlvField(3, TlvUInt32),
    takeMutex: TlvField(4, TlvBoolean)
});

export const TlvFailRandomlyAtFaultRequest = TlvObject({
    type: TlvField(0, TlvEnum<TlvFaultType>()),
    id: TlvField(1, TlvUInt32),
    percentage: TlvField(2, TlvUInt8)
});

export namespace FaultInjectionCluster {
    export const id = 0xfff1fc06;
    export const name = "FaultInjection";
    export const revision = 1;
    const Base = { commands: {
        failAtFault: Command(0, TlvFailAtFaultRequest, 0, TlvNoResponse),
        failRandomlyAtFault: Command(1, TlvFailRandomlyAtFaultRequest, 1, TlvNoResponse)
    } };
    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};