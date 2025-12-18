/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsRecord } from "#codec/DnsCodec.js";
import { Logger } from "#log/Logger.js";
import { Lifetime } from "#util/Lifetime.js";
import { Observable, ObserverGroup } from "#util/Observable.js";
import { Scheduler } from "#util/Scheduler.js";
import { MdnsSocket } from "./MdnsSocket.js";
import { SdName } from "./SdName.js";

export const logger = Logger.get("SdNames");

/**
 * Names collected via DNS-SD.
 */
export class SdNames {
    readonly #socket: MdnsSocket;
    readonly #lifetime: Lifetime;
    readonly #filter?: (record: DnsRecord) => boolean;
    readonly #observers = new ObserverGroup();
    readonly #names = new Map<string, SdName>();
    readonly #expiration: Scheduler<SdName.Record>;
    readonly #discovered = new Observable<[name: SdName]>();

    constructor({ socket, filter, lifetime = Lifetime.process }: SdNames.Context) {
        this.#socket = socket;
        this.#lifetime = lifetime.join("mdns client");
        this.#filter = filter;
        this.#observers.on(this.#socket.receipt, this.#handleMessage.bind(this));

        this.#expiration = new Scheduler({
            name: "expiration scheduler",
            lifetime: this.#lifetime,
            timeOf: a => a.expiresAt,
            run: record => {
                const sdName = this.#names.get(record.name);
                if (sdName) {
                    sdName.deleteRecord(record);
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
     * Retrieve the {@link SdName} for {@link name}.
     *
     * This will create the name if it does not exist, and if you do not add an observer then it will not automatically
     * delete if there are no records.  So if you may not use the record test for existence with {@link has} first.
     */
    get(name: string): SdName {
        name = name.toLowerCase();
        let sdn = this.#names.get(name);
        if (sdn === undefined) {
            sdn = new SdName(name, this.#nameContext);
            this.#names.set(name, sdn);
        }
        return sdn;
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
            this.#names.delete(name.name);
        }
    }

    /**
     * Emits when a {@link SdName} is first discovered.
     */
    get discovered() {
        return this.#discovered;
    }

    #nameContext: SdName.Context = {
        delete: name => {
            const known = this.#names.get(name.name);
            if (known === name) {
                this.#names.delete(name.name);
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

export namespace SdNames {
    export interface Context {
        socket: MdnsSocket;
        filter?: (record: DnsRecord) => boolean;
        lifetime?: Lifetime.Owner;
    }
}
