/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";

export namespace WiFiNetworkDiagnosticsInterface {
    export interface ErrorCounts {
        /**
         * Reception of this command shall reset the following attributes to 0:
         *
         *   • BeaconLostCount
         *
         *   • BeaconRxCount
         *
         *   • PacketMulticastRxCount
         *
         *   • PacketMulticastTxCount
         *
         *   • PacketUnicastRxCount
         *
         *   • PacketUnicastTxCount
         *
         * This command has no associated data.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.14.7.1
         */
        resetCounts(): MaybePromise;
    }
}

export type WiFiNetworkDiagnosticsInterface = {
    components: [{ flags: { errorCounts: true }, methods: WiFiNetworkDiagnosticsInterface.ErrorCounts }]
};
