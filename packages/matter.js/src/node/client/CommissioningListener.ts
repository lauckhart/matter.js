/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ble } from "../../ble/Ble.js";
import { MatterError, NoProviderError } from "../../common/MatterError.js";
import { Scanner } from "../../common/Scanner.js";
import { Environment } from "../../environment/Environment.js";
import { MdnsService } from "../../environment/MdnsService.js";
import { Logger } from "../../log/Logger.js";
import { Construction } from "../../util/Construction.js";
import { NodeSet } from "../NodeSet.js";

const DEFAULT_SCAN_INTERVAL = 5;

const logger = Logger.get("CommissioningListener");

/**
 * Thrown when scan initialization fails.
 */
export class CommissioningListenerStartupError extends MatterError {
    constructor(cause: unknown) {
        super("Error initiating scan for commissionable nodes");
        this.cause = cause;
    }
}

/**
 * Listens for commissionable devices and adds them to a {@link NodeSet}.
 */
export class CommissioningListener {
    #env: Environment;
    #nodes: NodeSet;
    #ip: boolean;
    #ble: boolean;
    #scanIntervalS: number;
    #workers = new Set<Promise<unknown>>();
    #closed = false;
    #aborted: Promise<void>;
    #abort?: () => void;
    #construction: Construction<CommissioningListener>;

    get construction() {
        return this.#construction;
    }

    constructor(options?: CommissioningListener.Options) {
        const bleAvailable = Ble.enabled;

        this.#env = options?.environment ?? Environment.default;
        this.#nodes = options?.nodes ?? this.#env.get(NodeSet);
        this.#ip = options?.ip ?? true;
        this.#ble = options?.ble ?? bleAvailable;
        this.#scanIntervalS = options?.scanIntervalS ?? DEFAULT_SCAN_INTERVAL;

        if (this.#ble && !bleAvailable) {
            throw new NoProviderError("Cannot perform BLE discovery because no BLE implementation is installed");
        }

        this.#aborted = new Promise(resolve => {
            this.#abort = resolve;
        });

        this.#construction = Construction(this, this.#startScanning.bind(this));
    }

    /**
     * Terminate scanning and release resources.
     *
     * The underlying scanner APIs do (yet) have an abort interface so close may be delayed until scan interval elapses.
     */
    async close() {
        return this.#construction.close(async () => {
            this.#abort?.();

            while (this.#workers.size) {
                await Promise.allSettled(this.#workers);
            }
        });
    }

    /**
     * Initiate scanning.
     */
    async #startScanning() {
        try {
            if (this.#ip) {
                const mdns = this.#env.get(MdnsService);
                await mdns.construction;
                this.#workers.add(this.#operateScanner(mdns.scanner));
            }

            if (this.#ble) {
                const ble = Ble.get();
                this.#workers.add(this.#operateScanner(ble.getBleScanner()));
            }
        } catch (e) {
            throw new CommissioningListenerStartupError(e);
        }
    }

    /**
     * Initiate scans on scan interval and record discovered nodes until close.
     */
    async #operateScanner(scanner: Scanner) {
        // TODO
        scanner;
        logger;
        this.#nodes;
        this.#scanIntervalS;
        this.#closed;
        await this.#aborted;
        this.#abort;
    }
}

export namespace CommissioningListener {
    export interface Options {
        environment?: Environment;
        nodes?: NodeSet;
        ip?: boolean;
        ble?: boolean;
        scanIntervalS?: number;
    }
}
