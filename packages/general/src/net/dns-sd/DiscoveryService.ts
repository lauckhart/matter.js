/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsRecordType, SrvRecordValue } from "#codec/DnsCodec.js";
import { AddressLifespan, ServerAddressUdp } from "#net/ServerAddress.js";
import { Duration } from "#time/Duration.js";
import { Time } from "#time/Time.js";
import { AsyncObservable, ObserverGroup } from "#util/Observable.js";
import { DiscoveryName } from "./DiscoveryName.js";
import { DiscoveryNames } from "./DiscoveryNames.js";

/**
 * A service that updates as {@link DiscoveryNames} change.
 */
export class DiscoveryService {
    readonly #name: DiscoveryName;
    readonly #names: DiscoveryNames;
    readonly #observers = new ObserverGroup(this);
    readonly #services = new Map<string, Service>();
    readonly #changed = new AsyncObservable<[]>();
    readonly #addresses = new Map<string, ServerAddressUdp>();
    #notified?: Promise<void>;

    constructor(name: string, names: DiscoveryNames) {
        this.#name = names.get(name);
        this.#names = names;
        this.#observers.on(this.#name, this.#onServiceChanged);

        for (const record of this.#name.records) {
            const service = serviceOf(record);
            if (!service) {
                continue;
            }
        }
    }

    /**
     * Release resources.
     */
    async close() {
        this.#observers.close();
        if (this.#notified) {
            await this.#notified;
        }
    }

    /**
     * Known addresses.
     */
    get addresses() {
        return this.#addresses.values();
    }

    /**
     * Values from TXT records.
     */
    get kvs() {
        return this.#name.kvs;
    }

    /**
     * Emits when the service changes.
     */
    get changed() {
        return this.#changed;
    }

    #onServiceChanged = async ({ updated, deleted }: DiscoveryName.Changes) => {
        if (updated) {
            for (const record of updated) {
                const service = serviceOf(record);
                if (service) {
                    this.#updateService(record.ttl, service);
                }
            }
        }

        if (deleted) {
            for (const record of deleted) {
                const service = serviceOf(record);
                if (service) {
                    this.#deleteService(service);
                }
            }
        }
    };

    #updateService(ttl: Duration, { target, port, priority, weight }: SrvRecordValue) {
        const key = hostKeyOf(target, port);
        let service = this.#services.get(key);

        if (service) {
            service.discoveredAt = Time.nowMs;
            service.ttl = ttl;
            service.port = port;
            service.priority = priority;
            service.weight = weight;
            return;
        }

        service = {
            name: this.#names.get(target),
            discoveredAt: Time.nowMs,
            ttl,
            port,
            priority,
            weight,
            onChange: changes => this.#onAddressChanged(service!, changes),
        };

        this.#observers.on(service.name, service.onChange);

        this.#services.set(key, service);
    }

    #deleteService({ target, port }: SrvRecordValue) {
        const key = hostKeyOf(target, port);
        const service = this.#services.get(key);

        if (!service) {
            return;
        }

        this.#observers.off(service.name, service.onChange);

        return;
    }

    #onAddressChanged = (service: Service, { updated, deleted }: DiscoveryName.Changes) => {
        if (updated) {
            for (const record of updated) {
                const addr = addressOf(record);
                if (addr) {
                    this.#updateAddress(service, addr);
                }
            }
        }
        if (deleted) {
            for (const record of deleted) {
                const addr = addressOf(record);
                if (addr) {
                    this.#deleteAddress(service, addr);
                }
            }
        }
    };

    #updateAddress(service: Service, ip: string) {
        const key = ipKeyOf(ip, service.port);

        if (this.#addresses.has(key)) {
            return;
        }

        this.#addresses.set(key, {
            type: "udp",
            ip,
            port: service.port,
        });

        this.#notify();
    }

    #deleteAddress(service: Service, ip: string) {
        const key = ipKeyOf(ip, service.port);

        if (!this.#addresses.has(key)) {
            return;
        }

        this.#addresses.delete(key);

        this.#notify();
    }

    #notify = () => {
        if (this.#notified) {
            return;
        }

        // We notify asynchronously so changes coalesce
        this.#notified = this.#emitNotification();
    };

    async #emitNotification() {
        await this.changed.emit();
    }
}

interface Service extends AddressLifespan {
    name: DiscoveryName;
    priority: number;
    weight: number;
    port: number;
    onChange(changes: DiscoveryName.Changes): void;
}

function serviceOf(record: DiscoveryName.Record) {
    if (record.type !== DnsRecordType.SRV) {
        return;
    }

    return record.value;
}

function hostKeyOf(name: string, port: number) {
    return `${name}:${port}`;
}

function ipKeyOf(ip: string, port: number) {
    if (ip.includes(":")) {
        ip = `[${ip}]`;
    }
    return hostKeyOf(ip, port);
}

function addressOf(record: DiscoveryName.Record) {
    if (record.type !== DnsRecordType.A && record.type !== DnsRecordType.AAAA) {
        return;
    }
    return record.value;
}
