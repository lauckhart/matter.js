/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsRecordType } from "#codec/DnsCodec.js";
import { RetrySchedule } from "#net/RetrySchedule.js";
import { Hours, Millis, Seconds } from "#time/TimeUnit.js";
import { Abort } from "#util/Abort.js";
import { ObserverGroup } from "#util/Observable.js";
import type { DiscoveryName } from "./DiscoveryName.js";
import type { DiscoveryNames } from "./DiscoveryNames.js";
import { DiscoverySolicitor } from "./DiscoverySolicitor.js";

/**
 * Resolves DNS-SD names.
 */
export class DiscoveryResolver implements DiscoverySolicitor {
    #names: DiscoveryNames;
    #retries: RetrySchedule;

    constructor(names: DiscoveryNames, retries?: RetrySchedule.Configuration) {
        this.#names = names;
        this.#retries = new RetrySchedule(
            this.#names.entropy,
            RetrySchedule.Configuration(DiscoveryResolver.DefaultRetries, retries),
        );
    }

    /**
     * Solicit records for a service until discovery of IP addresses.
     */
    async resolve(name: DiscoveryName, abort?: AbortSignal, ipv4?: boolean) {
        await this.query({
            qname: name.qname,
            queryRecordTypes: [DnsRecordType.SRV],
            awaitedRecordTypes: ipv4 ? [DnsRecordType.AAAA, DnsRecordType.A] : [DnsRecordType.AAAA],
            abort,
        });
    }

    /**
     * Solicit new records until discovery of one of the requested record types.
     */
    async query({ qname, queryRecordTypes, awaitedRecordTypes, abort }: DiscoveryResolver.Resolve) {
        const name = this.#names.get(qname);

        if (awaitedRecordTypes === undefined) {
            awaitedRecordTypes = queryRecordTypes;
        }

        if (this.#hasRecordType(name, awaitedRecordTypes)) {
            return;
        }

        // This controls whether we observe referenced SRV names
        const wantsIp = this.#wantsIp(awaitedRecordTypes);

        // Wait initially 20 - 120 ms per RFC 6762
        let timeout = Millis(20 + 100 * (this.#names.entropy.randomUint32 / Math.pow(2, 32)));

        for (const nextTimeout of this.#retries) {
            this.solicit(
                {
                    name,
                    recordTypes: queryRecordTypes,
                },
                awaitedRecordTypes,
            );

            using observers = new ObserverGroup();

            timeout = nextTimeout;

            const promise = new Promise<boolean>(resolve => {
                const resolveIfFound = () => {
                    if (this.#hasRecordType(name, awaitedRecordTypes)) {
                        resolve(true);
                    }
                };

                // Monitor name for updated records
                observers.on(name, resolveIfFound);

                // If looking for IPs, also monitor names referenced by SRV records
                if (wantsIp) {
                    for (const record of name.records) {
                        if (record.recordType !== DnsRecordType.SRV) {
                            continue;
                        }
                        observers.on(this.#names.get(record.value.target), resolveIfFound);
                    }
                }
            });

            // Note that we only abort if the input is aborted; if there is a timeout then we will query and iterate
            // again
            const value = await new Abort({ abort, timeout }).race(promise);
            if (value || Abort.is(abort)) {
                return;
            }
        }
    }

    /**
     * Standard solicitation with specialized support for discovering IPs.
     */
    solicit(solicitation: DiscoverySolicitor.Solicitation, awaitedRecordTypes?: DnsRecordType[]): void {
        let extra: undefined | Set<DiscoverySolicitor.Solicitation>;
        let associated: undefined | Set<DiscoveryName>;

        if (solicitation.associatedNames) {
            associated = new Set(solicitation.associatedNames);
        }

        // If the requested record has known SRV records, check whether we know addresses for the name.  If so, we
        // include them as associated so queries include their answers as known.  If not, explicitly solicit their
        // records as well
        if (awaitedRecordTypes && this.#wantsIp(awaitedRecordTypes)) {
            nextRecord: for (const record of solicitation.name.records) {
                if (record.recordType !== DnsRecordType.SRV) {
                    continue;
                }

                const srv = this.#names.get(record.value.target);
                for (const record of srv.records) {
                    if (record.recordType === DnsRecordType.A || record.recordType === DnsRecordType.AAAA) {
                        if (!associated) {
                            associated = new Set();
                        }
                        associated.add(srv);
                        continue nextRecord;
                    }
                }

                if (!extra) {
                    extra = new Set();
                }
                extra.add({
                    name: srv,
                    recordTypes: awaitedRecordTypes.filter(
                        type => type === DnsRecordType.A || type === DnsRecordType.AAAA,
                    ),
                });
            }
        }

        if (associated) {
            solicitation = { ...solicitation, associatedNames: [...associated] };
        }

        this.#names.solicit(solicitation);

        if (extra) {
            for (const solicitation of extra) {
                this.#names.solicit(solicitation);
            }
        }
    }

    #hasRecordType(name: DiscoveryName, recordTypes: DnsRecordType[]) {
        const wantsIp = this.#wantsIp(recordTypes);

        for (const record of name.records) {
            if (recordTypes.includes(record.recordType)) {
                return true;
            }

            if (wantsIp && record.recordType === DnsRecordType.SRV) {
                const referencedName = this.#names.maybeGet(record.value.target);
                if (referencedName && this.#hasRecordType(referencedName, recordTypes)) {
                    return true;
                }
            }
        }

        return false;
    }

    #wantsIp(recordTypes: DnsRecordType[]) {
        return !!recordTypes.find(type => type === DnsRecordType.A || type === DnsRecordType.AAAA);
    }
}

export namespace DiscoveryResolver {
    export interface Resolve {
        qname: string;
        queryRecordTypes: DnsRecordType[];
        awaitedRecordTypes?: DnsRecordType[];
        abort?: Abort.Signal;
    }

    /**
     * Default retry schedule per RFC 6762 (initial delay of 20-120ms. handled separately).
     */
    export const DefaultRetries: RetrySchedule.Configuration = {
        initialInterval: Seconds(1),
        jitterFactor: 0.2,
        backoffFactor: 2,
        maximumInterval: Hours(1),
    };
}
