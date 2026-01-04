/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsRecordType, SrvRecordValue } from "#codec/DnsCodec.js";
import { RetrySchedule } from "#net/RetrySchedule.js";
import { Hours, Millis, Seconds } from "#time/TimeUnit.js";
import { Abort } from "#util/Abort.js";
import { Entropy } from "#util/Entropy.js";
import { ObserverGroup } from "#util/Observable.js";
import { DiscoveryName } from "./DiscoveryName.js";
import type { DiscoveryNames } from "./DiscoveryNames.js";
import { DiscoverySolicitor } from "./DiscoverySolicitor.js";

/**
 * Resolves DNS-SD names.
 */
export class DiscoveryResolver implements DiscoverySolicitor {
    #names: DiscoveryNames;
    #retries: RetrySchedule;
    #entropy: Entropy;

    constructor(names: DiscoveryNames, entropy: Entropy, retries?: RetrySchedule.Configuration) {
        this.#names = names;
        this.#entropy = entropy;
        this.#retries = new RetrySchedule(
            entropy,
            RetrySchedule.Configuration(DiscoveryResolver.DefaultRetries, retries),
        );
    }

    /**
     * Solicit new records until discovery of one of the requested record types.
     *
     * Includes specialized support for locating A and AAAA records via SRV records.
     */
    async resolve({ qname, recordTypes, abort }: DiscoveryResolver.Resolve) {
        const name = this.#names.get(qname);

        if (this.#hasRecordType(name, recordTypes)) {
            return;
        }

        // This controls whether we observe referenced SRV names
        const wantsIp = this.#wantsIp(recordTypes);

        // Wait initially 20 - 120 ms per RFC 6762
        let timeout = Millis(20 + 100 * (this.#entropy.randomUint32 / Math.pow(2, 32)));

        for (const nextTimeout of this.#retries) {
            using observers = new ObserverGroup();

            timeout = nextTimeout;

            const promise = new Promise<boolean>(resolve => {
                const resolveIfFound = () => {
                    if (this.#hasRecordType(name, recordTypes)) {
                        resolve(true);
                    }
                };

                // Monitor name for updated records
                observers.on(name, resolveIfFound);

                // If looking for IPs, also monitor referenced SRV records
                if (wantsIp) {
                    for (const record of name.records) {
                        if (record.type !== DnsRecordType.SRV) {
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

            this.solicit({
                name,
                recordTypes,
            });
        }
    }

    /**
     * Standard solicitation with specialized support for SRV records.
     */
    solicit(solicitation: DiscoverySolicitor.Solicitation): void {
        let extra: undefined | Set<DiscoverySolicitor.Solicitation>;
        let associated: undefined | Set<DiscoveryName>;

        if (solicitation.associatedNames) {
            associated = new Set(solicitation.associatedNames);
        }

        // If the requested record has known SRV records, check whether we know addresses for the name.  If so, we
        // include them as associated so queries include their answers as known.  If not, also explicitly solicit their
        // records as well
        if (this.#wantsIp(solicitation.recordTypes)) {
            nextRecord: for (const record of solicitation.name.records) {
                if (record.recordType !== DnsRecordType.SRV) {
                    continue;
                }

                const srv = this.#names.get((record.value as SrvRecordValue).target);
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
                    recordTypes: solicitation.recordTypes.filter(
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
                const referencedName = this.#names.maybeGet((record.value as SrvRecordValue).target);
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
        recordTypes: DnsRecordType[];
        abort?: Abort.Signal;
        retries?: RetrySchedule;
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
