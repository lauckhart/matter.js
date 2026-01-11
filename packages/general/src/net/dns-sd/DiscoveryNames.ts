/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsRecord } from "#codec/DnsCodec.js";
import { Logger } from "#log/Logger.js";
import { Entropy } from "#util/Entropy.js";
import { Lifetime } from "#util/Lifetime.js";
import { Observable, ObserverGroup } from "#util/Observable.js";
import { Scheduler } from "#util/Scheduler.js";
import { DiscoveryName } from "./DiscoveryName.js";
import { DiscoverySolicitor, QueryMulticaster } from "./DiscoverySolicitor.js";
import { MdnsSocket } from "./MdnsSocket.js";

export const logger = Logger.get("DiscoveryNames");

/**
 * Names collected via DNS-SD.
 */
export class DiscoveryNames {
    readonly #socket: MdnsSocket;
    readonly #lifetime: Lifetime;
    readonly #entropy: Entropy;
    readonly #filter?: (record: DnsRecord) => boolean;
    readonly #solicitor: QueryMulticaster;
    readonly #observers = new ObserverGroup();
    readonly #names = new Map<string, DiscoveryName>();
    readonly #expiration: Scheduler<DiscoveryName.Record>;
    readonly #discovered = new Observable<[name: DiscoveryName]>();

    constructor({ socket, lifetime = Lifetime.process, entropy, filter }: DiscoveryNames.Context) {
        this.#socket = socket;
        this.#lifetime = lifetime.join("mdns client");
        this.#entropy = entropy;
        this.#filter = filter;
        this.#solicitor = new QueryMulticaster(socket);
        this.#observers.on(this.#socket.receipt, this.#handleMessage.bind(this));

        this.#expiration = new Scheduler({
            name: "expiration scheduler",
            lifetime: this.#lifetime,
            timeOf: a => {
                return a.expiresAt;
            },
            run: record => {
                const discoveryName = this.#names.get(record.name);
                if (discoveryName) {
                    discoveryName.deleteRecord(record);
                }
            },
        });
    }

    #handleMessage(message: MdnsSocket.Message) {
        for (const record of [...message.answers, ...message.additionalRecords]) {
            if (this.#filter && !this.#filter(record)) {
                continue;
            }

            const name = this.get(record.name);
            if (record.ttl > 0) {
                const wasDiscovered = name.isDiscovered;
                name.installRecord(record);
                if (!wasDiscovered && name.isDiscovered) {
                    this.#discovered.emit(name);
                }
            } else {
                name.deleteRecord(record);
            }
        }
    }

    /**
     * Test for existence of name.
     */
    has(name: string) {
        name = name.toLowerCase();
        return this.#names.has(name);
    }

    /**
     * Retrieve the {@link DiscoveryName} for {@link name}.
     *
     * This will create the name if it does not exist, and if you do not add an observer then it will not automatically
     * delete if there are no records.  So if you may not use the record test for existence with {@link has} first.
     */
    get(qname: string): DiscoveryName {
        let name = this.maybeGet(qname);
        if (name === undefined) {
            name = new DiscoveryName(qname, this.#nameContext);
            this.#names.set(qname, name);
        }
        return name;
    }

    /**
     * Retrieve the {@link DiscoveryName} if known.
     */
    maybeGet(name: string) {
        name = name.toLowerCase();
        return this.#names.get(name);
    }

    /**
     * Wait for all workers and close all names.
     */
    async close() {
        using _closing = this.#lifetime.closing();
        this.#observers.close();
        await this.#expiration.close();
        for (const name of this.#names.values()) {
            await name.close();
            this.#names.delete(name.qname);
        }
        await this.#solicitor.close();
    }

    /**
     * Emits when a {@link DiscoveryName} is first discovered.
     */
    get discovered() {
        return this.#discovered;
    }

    /**
     * Solicit new records for names.
     */
    solicit(solicitation: DiscoverySolicitor.Solicitation) {
        this.#solicitor.solicit(solicitation);
    }

    get entropy() {
        return this.#entropy;
    }

    #nameContext: DiscoveryName.Context = {
        delete: name => {
            const known = this.#names.get(name.qname);
            if (known === name) {
                this.#names.delete(name.qname);
            }
        },

        registerForExpiration: record => {
            this.#expiration.add(record);
        },

        unregisterForExpiration: record => {
            this.#expiration.delete(record);
        },
    };
}

export namespace DiscoveryNames {
    export interface Context {
        socket: MdnsSocket;
        lifetime?: Lifetime.Owner;
        entropy: Entropy;
        filter?: (record: DnsRecord) => boolean;
    }
}
