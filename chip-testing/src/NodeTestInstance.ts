/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CloneableStorage,
    Environment,
    InternalError,
    RuntimeService,
    StorageService,
    type ServerNode,
} from "@matter/main";
import { BackchannelCommand, Subject } from "@matter/testing";
import { TestInstance, TestInstanceConfig, log } from "./GenericTestApp.js";

/**
 * {@link serverNode}-based test subject.
 */
export abstract class NodeTestInstance extends TestInstance implements Subject {
    #env = new Environment(`${this.id}-env`, Environment.default);
    #node?: ServerNode;

    constructor(config: TestInstanceConfig) {
        super(config);
    }

    get node() {
        if (this.#node === undefined) {
            throw new InternalError("Test subject node accessed before initialization");
        }
        return this.#node;
    }

    get env() {
        if (!this.#env) {
            throw new InternalError("Test subject environment accessed before initialization");
        }
        return this.#env;
    }

    protected abstract setupServer(): Promise<ServerNode>;

    async initialize() {
        if (this.#node) {
            throw new InternalError("Already initialized");
        }

        try {
            this.#env.set(StorageService, new StorageService(this.#env, () => this.config.storage));
            this.#node = await this.setupServer();
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            log.error(error);
            log.error((error as Error).stack);
            throw error;
        }
        log.directive(`======> ${this.appName}: Setup done`);
    }

    async start() {
        if (!this.#node) {
            this.#node = await this.setupServer();
        }

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
        if (this.#node) {
            await this.#node.close();
            this.#node = undefined;
        }
    }

    override async close() {
        await this.stop();

        // Terminate and/or wait for any long-running services.  We do this for the default environment in support() but
        // this is for our local environment
        const runtime = Environment.default.maybeGet(RuntimeService);
        if (runtime) {
            await runtime.close();
            Environment.default.delete(RuntimeService, runtime);
        }

        log.directive(`======> ${this.appName}: Instance stopped`);
    }

    async snapshot() {
        CloneableStorage.assert(this.config.storage);
        return this.config.storage.clone();
    }

    async restore(snapshot: {}) {
        CloneableStorage.assert(snapshot);
        this.config.storage = await snapshot.clone();
    }

    override async backchannel(command: BackchannelCommand) {
        switch (command.name) {
            case "reboot":
                await this.close();
                await this.initialize();
                await this.start();
                break;

            case "factoryReset":
                // Factory reset makes the node unusable from the test suite.  Should we restore a snapshot from "newly
                // commissioned" state?  Somehow reset then recommission?  For now just ignoring
                // await this.node.reset();
                break;

            default:
                await super.backchannel(command);
                break;
        }
    }
}
