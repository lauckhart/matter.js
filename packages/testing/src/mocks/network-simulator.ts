/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

interface NetworkSimulator {
    reset(): void;
}

let networkSimulator: undefined | NetworkSimulator;

export function networkSimulatorSetup(theNetworkSimulator?: { reset(): void }) {
    networkSimulator = theNetworkSimulator;
}

export function resetNetworkSimulator() {
    networkSimulator?.reset();
}
