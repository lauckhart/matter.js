/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, InternalError, StorageService, type ServerNode } from "@matter/main";
import { BackchannelCommand } from "@matter/testing";
import { TestInstance, log } from "./GenericTestApp.js";

/**
 * {@link serverNode}-based test subject.
 */
export abstract class NodeTestInstance extends TestInstance {
    #env?: Environment;
    #node?: ServerNode;

    get node() {
        if (this.#node === undefined) {
            throw new InternalError("Node is uninitialized");
        }
        return this.#node;
    }

    get env() {
        if (!this.#env) {
            this.#env = new Environment(`${this.appName}Environment`, Environment.default);
            this.#env.set(StorageService, new StorageService(this.#env, () => this.config.storage));
        }
        return this.#env;
    }

    protected abstract setupServer(): Promise<ServerNode>;

    /** Set up the test instance MatterServer. */
    async setup() {
        try {
            //await this.storageManager.initialize(); // hacky but works
            this.#node = await this.setupServer();
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            log.error(error);
            log.error((error as Error).stack);
            throw error;
        }
        log.directive(`======> ${this.appName}: Setup done`);
    }

    /** Start the test instance MatterServer with the included device. */
    async start() {
        if (!this.#node) throw new Error("serverNode not initialized on start");

        /*
        const env = Environment.default;
        env.vars.set("mdns.networkInterface", "en0");
         */
        try {
            await this.#node.start();
            const { qrPairingCode } = this.#node.state.commissioning.pairingCodes;
            // Magic logging chip testing waits for
            log.directive(`SetupQRCode: [${qrPairingCode}]`);
            log.directive();
            // Magic logging chip testing waits for
            log.directive("mDNS service published:");
            log.directive();

            log.directive(`======> ${this.appName}: Instance started`);
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            log.error(error);
        }
        log.directive("=====>>> STARTED");
    }

    /** Stop the test instance MatterServer and the device. */
    override async stop() {
        await super.stop();
        if (!this.#node) throw new Error("serverNode not initialized on stop");
        await this.#node.cancel();
    }

    override async close() {
        if (!this.#node) throw new Error("serverNode not initialized on close");
        await this.#node.close();
        this.#node = undefined;
        log.directive(`======> ${this.appName}: Instance stopped`);
    }

    override async backchannel(command: BackchannelCommand) {
        switch (command.name) {
            case "reboot":
                await this.close();
                await this.setup();
                await this.start();
                break;

            case "factoryReset":
                await this.node.reset();
                break;

            default:
                await super.backchannel(command);
                break;
        }
    }
}
