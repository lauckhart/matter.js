/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, Environmental, MatterError, Observable } from "#general";
import { ClientNode } from "#node/ClientNode.js";
import { CommissionableDeviceIdentifiers, Scanner } from "#protocol";

export class DiscoveryError extends MatterError {}

export interface CommissioningDiscovery<T = unknown> extends Promise<T> {
    discovered: Observable<[ClientNode]>;
    cancel(): void;
}

export namespace CommissioningDiscovery {
    export type DiscoveryFilter = CommissionableDeviceIdentifiers;

    export interface Options {
        filter?: DiscoveryFilter;
        timeoutSeconds?: number;
    }
}

/**
 * Performs discovery of commissionable nodes.
 */
export class CommissioningDiscoveryService {
    #env: Environment;
    #discoveries = new Set<CommissioningDiscovery>();

    constructor(env: Environment) {
        this.#env = env;
    }

    static [Environmental.create](env: Environment) {
        const instance = new CommissioningDiscoveryService(env);
        env.set(CommissioningDiscoveryService, instance);
        return instance;
    }

    async close() {
        while (this.#discoveries.size) {
            for (const discovery of this.#discoveries) {
                discovery.cancel();
            }

            await Promise.allSettled([...this.#discoveries]);
        }
    }

    /**
     * Find a specific commissionable node.  Throws an error if discovery fails.
     */
    find(options: CommissioningDiscovery.Options): CommissioningDiscovery<ClientNode> {
        let result: ClientNode | undefined;

        const discovery = new ActiveCommissioningDiscovery(
            this.#env,
            options,
            node => {
                result = node;
                discovery.cancel();
            },
            () => {
                this.#discoveries.delete(discovery);
                if (result === undefined) {
                    throw new DiscoveryError("Remote node not found");
                }
                return result;
            },
        );

        return discovery;
    }

    /**
     * Employ discovery to find a set of commissionable nodes.
     */
    discover(options: CommissioningDiscovery.Options): CommissioningDiscovery<ClientNode[]> {
        const result = Array<ClientNode>();

        const discovery = new ActiveCommissioningDiscovery(
            this.#env,
            options,
            node => result.push(node),
            () => {
                this.#discoveries.delete(discovery);
                return result;
            },
        );

        return discovery;
    }
}

class ActiveCommissioningDiscovery<T> extends Promise<T> implements CommissioningDiscovery<T> {
    canceled = false;
    discovered = Observable<[ClientNode]>();
    scanners: Scanner[];

    constructor(
        env: Environment,
        options: CommissioningDiscovery.Options,
        onDiscovered: (node: ClientNode) => void,
        onComplete: () => T,
    ) {
        let resolve: (result: T) => void;
        let reject: (cause: any) => void;
        super((doResolve, doReject) => {
            resolve = doResolve;
            reject = doReject;
        });
    }

    cancel() {
        this.canceled = true;
    }
}
