/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsMessageType, DnsQuery, DnsRecord, DnsRecordClass, DnsRecordType } from "#codec/DnsCodec.js";
import { Logger } from "#log/Logger.js";
import { Time } from "#time/Time.js";
import { Abort } from "#util/Abort.js";
import { ObservableValue } from "#util/Observable.js";
import { DiscoveryName } from "./DiscoveryName.js";
import { MdnsSocket } from "./MdnsSocket.js";

const logger = new Logger("DiscoverySolicitor");

/**
 * Solicits DNS-SD records for specific names.
 */
export interface DiscoverySolicitor {
    solicit(solicitation: DiscoverySolicitor.Solicitation): void;
}

/**
 * Solicit one or more record types for a name.
 *
 * "Soliciting" consists of broadcasting a query for a DNS-SD name.  Groups multiple solicitations in the same
 * macrotask into a single packet.
 */
export namespace DiscoverySolicitor {
    /**
     * Configures solicitation of a single name.
     */
    export interface Solicitation {
        name: DiscoveryName;
        recordTypes: DnsRecordType[];
        associatedNames?: DiscoveryName[];
    }
}

/**
 * Concrete implementation of {@link DiscoverySolicitor} that sends DNS-SD queries via multicast.
 */
export class QueryMulticaster implements DiscoverySolicitor {
    #socket: MdnsSocket;
    #abort = new Abort();
    #toSolicit = new Map<DiscoveryName, DiscoverySolicitor.Solicitation>();
    #namesReady = new ObservableValue();
    #done: Promise<void>;

    constructor(socket: MdnsSocket) {
        this.#socket = socket;
        this.#done = this.#run();
    }

    solicit(solicitation: DiscoverySolicitor.Solicitation) {
        if (this.#abort.aborted) {
            return;
        }
        const entry = this.#toSolicit.get(solicitation.name);
        if (entry === undefined) {
            this.#toSolicit.set(solicitation.name, solicitation);
        } else {
            entry.recordTypes = [...new Set([...entry.recordTypes, ...solicitation.recordTypes])];
            if (solicitation.associatedNames) {
                if (!entry.associatedNames) {
                    entry.associatedNames = solicitation.associatedNames;
                } else {
                    entry.associatedNames = [...new Set([...entry.associatedNames, ...solicitation.associatedNames])];
                }
            }
        }
        this.#namesReady.emit(true);
    }

    async close() {
        this.#abort();
        await this.#done;
    }

    async #run() {
        while (true) {
            // Wait for names to solicit
            await this.#abort.race(this.#namesReady);
            if (this.#abort.aborted) {
                return;
            }

            // Delay using a macrotask so we coalesce names
            await this.#abort.race(Time.sleep("discovery solicitor delay", 0));
            if (this.#abort.aborted) {
                return;
            }

            // Gather names we will solicit in this iteration
            const entries = [...this.#toSolicit.values()];
            this.#namesReady.value = false;
            this.#toSolicit.clear();

            // Create sets for queries and known answers
            const queries = Array<DnsQuery>();
            const answers = Array<DnsRecord>();

            for (const {
                name: { qname: name, records },
                recordTypes,
            } of entries) {
                for (const recordType of recordTypes) {
                    queries.push({ name, recordClass: DnsRecordClass.IN, recordType });
                }

                answers.push(...records);
            }

            // Send the message
            try {
                await this.#abort.race(
                    this.#socket.send({
                        messageType: DnsMessageType.Query,
                        queries,
                        answers,
                    }),
                );
            } catch (e) {
                logger.error("Unhandled error soliciting DNS-SD names:", e);
            }
        }
    }
}
