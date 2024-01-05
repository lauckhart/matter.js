/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import { Logger } from "../../../log/Logger.js";
import { EventHandler } from "../../../protocol/interaction/EventHandler.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { StorageManager } from "../../../storage/StorageManager.js";
import { ServerOptions } from "../../options/ServerOptions.js";
import { Environment } from "../../../common/Environment.js";
import { AsyncConstruction, asyncNew } from "../../../util/AsyncConstruction.js";
import type { NodeServer } from "../NodeServer.js";
import { ServerPartStores } from "./ServerPartStores.js";

export const logger = Logger.get("NodeStore");

/**
 * Non-volatile state management for a {@link NodeServer}.
 * 
 * The default implementation for matter.js uses synchronous APIs for storage.
 * However, this will change in the future, and other implementations may be
 * backed by asynchronous storage.  So the public API is asynchronous.
 */
export class ServerStore {
    #environment: Environment;
    #nextNumber: number;
    #allocatedNumbers = new Set<number>;
    #storage?: StorageManager;
    #eventHandler?: EventHandler;
    #sessionStorage?: StorageContext;
    #fabricStorage?: StorageContext;
    #endpointStorage?: StorageContext;
    #parameterStorage?: StorageContext;
    #partStores?: ServerPartStores;
    #construction: AsyncConstruction<ServerStore>;

    get construction() {
        return this.#construction;
    }

    constructor(configuration: ServerOptions.Configuration) {
        this.#environment = configuration.environment;
        this.#nextNumber = (configuration.nextEndpointNumber ?? 1) % 0xffff;

        this.#construction = AsyncConstruction(
            this,
            () => this.#initialize(),
        )
    }

    static async create(configuration: ServerOptions.Configuration) {
        return await asyncNew(this, configuration);
    }

    /**
     * Initialize the store.
     * 
     * TODO - implement conversion from 0.7 format so people can change API
     * seamlessly
     */
    async #initialize() {
        this.#storage = await this.#environment.createStorage();

        this.#nextNumber = this.parameterStorage.get("nextEndpointNumber", this.#nextNumber);

        this.#partStores = new ServerPartStores(this.#storage.createContext("endpoints"));

        for (const partId in this.#endpointStorage) {
            const partStore = await this.#partStores.loadFromStorage(partId);

            const number = partStore.number;
            if (number !== undefined) {
                this.#allocatedNumbers.add(number);
                if (number < this.#nextNumber) {
                    this.#nextNumber = number + 1;
                }
            }
        }
    }

    allocateNumber() {
        const startNumber = this.#nextNumber;
        
        while (this.#nextNumber < 2 || this.#allocatedNumbers.has(this.#nextNumber)) {
            this.#nextNumber = (this.#nextNumber + 1) % 0xffff;
            if (this.#nextNumber === startNumber) {
                throw new ImplementationError("Cannot add additional parts because part numbers are exhausted");
            }
        }

        const number = this.#nextNumber++;
        this.#allocatedNumbers.add(number);
        this.#endpointStorage?.set("nextEndpointNumber", this.#nextNumber);
        return number;
    }

    async [Symbol.asyncDispose]() {
        this.#storage?.close();
    }

    get eventHandler() {
        if (!this.#eventHandler) {
            this.#eventHandler = new EventHandler(this.#initializedStorage.createContext("events"));
        }
        return this.#eventHandler;
    }

    get sessionStorage() {
        if (!this.#sessionStorage) {
            this.#sessionStorage = this.#initializedStorage.createContext("sessions");
        }
        return this.#sessionStorage;
    }

    get fabricStorage() {
        if (!this.#fabricStorage) {
            this.#fabricStorage = this.#initializedStorage.createContext("fabrics");
        }
        return this.#fabricStorage;
    }

    get parameterStorage() {
        if (!this.#parameterStorage) {
            this.#parameterStorage = this.#initializedStorage.createContext("parameters");
        }
        return this.#parameterStorage;
    }

    get partStores() {
        if (this.#partStores === undefined) {
            throw new ImplementationError("Part storage accessed prior to initialization");
        }
        return this.#partStores;
    }

    get #initializedStorage() {
        if (this.#storage === undefined) {
            throw new ImplementationError("Node storage accessed prior to initialization");
        }
        return this.#storage;
    }
}
