/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioningClient } from "#behaviors/network-commissioning";
import { PowerSourceClient } from "#behaviors/power-source";
import { ThreadNetworkDiagnosticsClient } from "#behaviors/thread-network-diagnostics";
import { PowerSource } from "#clusters/power-source";
import { ThreadNetworkDiagnostics } from "#clusters/thread-network-diagnostics";
import { Endpoint } from "#endpoint/index.js";
import { ClusterModel, DeviceClassification, IcdManagement } from "#model";
import { Node } from "#node/Node.js";
import { PhysicalDeviceProperties } from "#protocol";
import { ClusterId } from "#types";

/**
 * Inspects a node to generate {@link PhysicalDeviceProperties}.
 */
export function NodePhysicalProperties(node: Node) {
    const rootEndpointServerList = [...node.state.descriptor.serverList];

    const properties: PhysicalDeviceProperties = {
        threadConnected: false,
        wifiConnected: false,
        ethernetConnected: false,
        rootEndpointServerList,
        isBatteryPowered: false,
        isIntermittentlyConnected: rootEndpointServerList.includes(IcdManagement.id as ClusterId),
        isThreadSleepyEndDevice: false,
    };

    inspectEndpoint(node, properties);

    return properties;
}

function inspectEndpoint(endpoint: Endpoint, properties: PhysicalDeviceProperties) {
    // Network interface support
    const network = endpoint.behaviors.typeFor(NetworkCommissioningClient);
    if (network) {
        const features = (network.schema as ClusterModel).supportedFeatures;
        if (features.has("WI")) {
            properties.wifiConnected = true;
        }
        if (features.has("TH")) {
            properties.threadConnected = true;
        }
        if (features.has("ET")) {
            properties.ethernetConnected = true;
        }
    }

    // Battery power
    const powerSource = endpoint.behaviors.typeFor(PowerSourceClient);
    if (powerSource) {
        const features = (powerSource.schema as ClusterModel).supportedFeatures;
        if (
            features.has("BAT") ||
            // Perform additional checks because we've encountered devices with incorrect features
            !features.has("WIRED") ||
            endpoint.behaviors.elementsOf(powerSource).attributes.has("batChargeLevel")
        ) {
            if (endpoint.stateOf(PowerSourceClient).status === PowerSource.PowerSourceStatus.Active) {
                properties.isBatteryPowered = true;
            }
        }
    }

    // Sleepy thread device
    const threadNetworkDiagnostics = endpoint.behaviors.typeFor(ThreadNetworkDiagnosticsClient);
    if (
        threadNetworkDiagnostics &&
        endpoint.stateOf(threadNetworkDiagnostics).routingRole === ThreadNetworkDiagnostics.RoutingRole.SleepyEndDevice
    ) {
        properties.isThreadSleepyEndDevice = true;
    }

    // Recurse into children
    //
    // Only consider the root endpoint and utility endpoints.  Clusters on application endpoints or sub-endpoints refer
    // to a different device
    for (const part of endpoint.parts) {
        if (part.number !== 0 && part.type.deviceClass !== DeviceClassification.Utility) {
            continue;
        }
        inspectEndpoint(endpoint, properties);
    }
}
