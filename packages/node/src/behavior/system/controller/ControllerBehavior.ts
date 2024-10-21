/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { BasicInformationBehavior } from "#behaviors/basic-information";
import {
    Ble,
    FabricAuthority,
    FabricAuthorityConfigurationProvider,
    FabricManager,
    MdnsService,
    ScannerSet,
} from "#protocol";
import { CommissioningServer } from "../commissioning/CommissioningServer.js";
import { NetworkServer } from "../network/NetworkServer.js";
import { ActiveDiscoveries } from "./discovery/ActiveDiscoveries.js";

/**
 * Node controller functionality.
 *
 * For our purposes, a "controller" is a node that supports commissioning of remote devices.
 */
export class ControllerBehavior extends Behavior {
    declare state: ControllerBehavior.State;

    static override id = "controller";

    override async initialize() {
        // Configure discovery transports
        if (this.state.ip === undefined) {
            this.state.ip = true;
        }
        if (this.state.ip !== false) {
            this.env.get(ScannerSet).add(this.env.get(MdnsService).scanner);
        }

        if (this.state.ble === undefined) {
            this.state.ble = (await this.agent.load(NetworkServer)).state.ble;
        }
        if (this.state.ble !== false) {
            this.env.get(ScannerSet).add(Ble.get().getBleScanner());
        }

        // Configure management of controlled fabrics
        if (!this.env.has(FabricAuthorityConfigurationProvider)) {
            const biState = this.endpoint.stateOf(BasicInformationBehavior);
            this.env.set(
                FabricAuthorityConfigurationProvider,
                new (class extends FabricAuthorityConfigurationProvider {
                    get vendorId() {
                        return biState.vendorId;
                    }
                })(),
            );
        }

        // "Automatic" controller mode - disable commissioning if node is not otherwise configured as a commissionable
        // device
        const commissioning = this.agent.get(CommissioningServer);
        if (commissioning.state.enabled === undefined) {
            const controlledFabrics = this.env.get(FabricAuthority).fabrics.length;
            const totalFabrics = this.env.get(FabricManager).length;
            if (controlledFabrics === totalFabrics) {
                commissioning.state.enabled = false;
            }
        }
    }

    override async [Symbol.asyncDispose]() {
        const discoveries = this.env.get(ActiveDiscoveries);
        while (discoveries.size) {
            for (const discovery of discoveries) {
                discovery.cancel();
            }

            await Promise.allSettled([...discoveries]);
        }
    }
}

export namespace ControllerBehavior {
    export class State {
        /**
         * Set to false to disable scanning on BLE.
         *
         * By default the controller scans via BLE if BLE is available.
         */
        ble?: boolean = undefined;

        /**
         * Set to false to disable scanning on IP networks.
         *
         * By default the controller always scans on IP networks.
         */
        ip?: boolean = undefined;
    }
}
