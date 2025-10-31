/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkCommissioningBehavior } from "#behaviors/network-commissioning";
import { PowerSourceBehavior } from "#behaviors/power-source";
import { Endpoint } from "#endpoint/index.js";
import { ClusterModel } from "#model";
import { Node } from "#node/Node.js";
import { PhysicalDeviceProperties } from "#protocol";

export function NodePhysicalProperties(node: Node): PhysicalDeviceProperties {
    const networkFeatures = (
        node.behaviors.supported[NetworkCommissioningBehavior.id].schema as ClusterModel | undefined
    )?.supportedFeatures;
    const powerSourceState = node.stateOf(PowerSourceBehavior.id);

    return {
        threadConnected: hasNetworkFeature(node, "TH"),
        wifiConnected: hasNetworkFeature(node, "WI"),
        ethernetConnected: hasNetworkFeature(node, "ET"),
        rootEndpointServerList: node.state.descriptor.serverList,
        isBatteryPowered: isBatteryPowered(node),
        isIntermittentlyConnected: boolean,
        isThreadSleepyEndDevice: boolean,
    };
}

function hasNetworkFeature(endpoint: Endpoint, name: string) {
    const network = endpoint.behaviors.supported[NetworkCommissioningBehavior.id];
    if (!network) {
        return false;
    }
    const networkFeatures = (network.schema as ClusterModel | undefined)?.supportedFeatures;

    return !!networkFeatures?.has(name);
}

function isBatteryPowered(endpoint: Endpoint) {
    const powerSource = endpoint.behaviors.supported[PowerSourceBehavior.id];
    if (!powerSource) {
        return false;
    }

    const schema = powerSource.schema;
    if (!schema) {
        return;
    }

    const powerSourceFeatures = (schema as ClusterModel)?.supportedFeatures;
    if (
        powerSourceFeatures?.has("BAT") ||
        !powerSourceFeatures?.has("WIRED") ||
        schema.conformant.properties.for("BatChargeLevel")?.isEna
    ) {
    }
}
