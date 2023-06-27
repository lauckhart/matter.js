/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { TlvUInt32, TlvUInt16, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

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
    /**
     * Client Monitoring
     *
     * Client Monitoring allows for ensuring that listed clients meet the
     * required monitoring conditions on the server.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `ClientMonitoring.with()` and a list of
     * supported features.
     */
    export const Complete = Cluster({
        id: 0x1046,
        name: "ClientMonitoring",
        revision: 1,

        attributes: {
            idleModeInterval: Attribute(0, TlvUInt32, { default: 300 }),
            activeModeInterval: Attribute(1, TlvUInt32, { default: 300 }),
            activeModeThreshold: Attribute(2, TlvUInt16, { default: 4000 }),
            expectedClients: Attribute(3, TlvArray(MonitoringRegistration))
        },

        commands: {
            registerClientMonitoring: Command(0, RegisterClientMonitoringRequest, 0, TlvNoResponse),
            unregisterClientMonitoring: Command(1, UnregisterClientMonitoringRequest, 1, TlvNoResponse),
            stayAwakeRequest: OptionalCommand(2, TlvNoArguments, 2, TlvNoResponse)
        }
    });
};