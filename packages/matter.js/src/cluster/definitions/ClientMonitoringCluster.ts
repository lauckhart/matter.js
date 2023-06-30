/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { TlvUInt32, TlvUInt16, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

export const MonitoringRegistration = TlvObject({
    ClientNodeId: TlvField(0, TlvUInt64),
    ICid: TlvField(1, TlvUInt64)
});

export const RegisterClientMonitoringRequest = TlvObject({
    ClientNodeId: TlvField(0, TlvUInt64),
    ICid: TlvField(1, TlvUInt64)
});

export const UnregisterClientMonitoringRequest = TlvObject({
    ClientNodeId: TlvField(0, TlvUInt64),
    ICid: TlvField(1, TlvUInt64)
});

export namespace ClientMonitoringCluster {
    export const id = 4166;
    export const name = "ClientMonitoring";
    export const revision = 1;

    const Base = {
        attributes: {
            idleModeInterval: Attribute(0, TlvUInt32, { default: 18 }),
            activeModeInterval: Attribute(1, TlvUInt32, { default: 18 }),
            activeModeThreshold: Attribute(2, TlvUInt16),
            expectedClients: Attribute(3, TlvArray(MonitoringRegistration))
        },

        commands: {
            registerClientMonitoring: Command(0, RegisterClientMonitoringRequest, 0, TlvNoResponse),
            unregisterClientMonitoring: Command(1, UnregisterClientMonitoringRequest, 1, TlvNoResponse),
            stayAwakeRequest: OptionalCommand(2, TlvNoArguments, 2, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};