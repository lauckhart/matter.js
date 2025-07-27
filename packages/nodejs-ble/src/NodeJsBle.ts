/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, NetInterface } from "#general";
import { Ble, Scanner } from "#protocol";
import { BlenoPeripheralInterface } from "./BlenoPeripheralInterface.js";
import { BleScanner } from "./BleScanner.js";
import { BlenoBleServer } from "./BlenoBleServer.js";
import { NobleBleCentralInterface } from "./NobleBleChannel.js";
import { NobleBleClient } from "./NobleBleClient.js";

export type BleOptions = {
    hciId?: number;
    environment?: Environment;
};

export class NodeJsBle extends Ble {
    #options?: BleOptions;
    #blePeripheralInstance?: BlenoBleServer;
    #bleCentralInstance?: NobleBleClient;
    #bleScanner?: BleScanner;
    #bleCentralInterface?: NobleBleCentralInterface;
    #blePeripheralInterface?: BlenoPeripheralInterface;

    constructor(options?: BleOptions) {
        super();
        this.#options = options;
    }

    get #blePeripheralServer() {
        if (this.#blePeripheralInstance === undefined) {
            this.#blePeripheralInstance = new BlenoBleServer(this.#options);
        }
        return this.#blePeripheralInstance;
    }

    get #bleCentralClient() {
        if (this.#bleCentralInstance === undefined) {
            this.#bleCentralInstance = new NobleBleClient(this.#options);
        }
        return this.#bleCentralInstance;
    }

    getBlePeripheralInterface(): BlenoPeripheralInterface {
        if (this.#blePeripheralInterface === undefined) {
            this.#blePeripheralInterface = new BlenoPeripheralInterface(this.#blePeripheralServer);
        }
        return this.#blePeripheralInterface;
    }

    getBleCentralInterface(): NetInterface {
        if (this.#bleCentralInterface === undefined) {
            this.#bleCentralInterface = new NobleBleCentralInterface(this.getBleScanner() as BleScanner);
        }
        return this.#bleCentralInterface;
    }

    getBleScanner(): Scanner {
        if (this.#bleScanner === undefined) {
            this.#bleScanner = new BleScanner(this.#bleCentralClient);
        }
        return this.#bleScanner;
    }
}
