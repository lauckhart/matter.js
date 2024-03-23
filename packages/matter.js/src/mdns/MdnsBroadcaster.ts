/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AAAARecord, ARecord, DnsRecord, PtrRecord, SrvRecord, TxtRecord } from "../codec/DnsCodec.js";
import { ImplementationError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { Network } from "../net/Network.js";
import { isIPv4, isIPv6 } from "../util/Ip.js";
import { BasicSet } from "../util/Set.js";
import { BroadcastHostGenerator } from "./BroadcastHostGenerator.js";
import {
    MATTER_COMMISSIONER_SERVICE_QNAME,
    MATTER_COMMISSION_SERVICE_QNAME,
    MATTER_SERVICE_QNAME,
    SERVICE_DISCOVERY_QNAME,
    getCommissioningModeQname,
    getDeviceInstanceQname,
    getDeviceMatterQname,
    getDeviceTypeQname,
    getFabricQname,
    getLongDiscriminatorQname,
    getShortDiscriminatorQname,
    getVendorQname,
} from "./MdnsConsts.js";
import { MdnsInstanceBroadcaster } from "./MdnsInstanceBroadcaster.js";
import { AnnouncementType, MdnsServer } from "./MdnsServer.js";
import { PairingHint, PairingHintBitmapSchema } from "./PairingHint.js";

const logger = Logger.get("MdnsBroadcaster");

const TCP_SUPPORTED = 0;
const ICD_SUPPORTED = 0; // TODO: Implement ICD later
const DEFAULT_PAIRING_HINT = {
    powerCycle: true,
    deviceManual: true,
};

/**
 * Handle MDNS announcement for multiple instances/devices
 */
export class MdnsBroadcaster {
    readonly #activeCommissioningInstances = new Set<MdnsInstanceBroadcaster>();
    readonly #activeOperationalInstances = new Set<MdnsInstanceBroadcaster>();
    readonly #network: Network;
    readonly #mdnsServer: MdnsServer;
    readonly #instances = new BasicSet<MdnsInstanceBroadcaster>();
    readonly #hostGenerator: BroadcastHostGenerator;

    static async create(network: Network, options?: { enableIpv4?: boolean; interfaces?: string[] }) {
        const { enableIpv4, interfaces } = options ?? {};
        return new MdnsBroadcaster(network, await MdnsServer.create(network, { enableIpv4, interfaces }));
    }

    constructor(network: Network, mdnsServer: MdnsServer) {
        this.#network = network;
        this.#mdnsServer = mdnsServer;
        this.#hostGenerator = new BroadcastHostGenerator(network);
    }

    createInstanceBroadcaster(configuration: MdnsInstanceBroadcaster.Configuration) {
        const instance = new MdnsInstanceBroadcaster(this, configuration, () => {
            this.#instances.delete(instance);
        });
        this.#instances.add(instance);

        return instance;
    }

    validatePairingInstructions(pairingHint: PairingHint, pairingInstructions: string) {
        const needsInstructions = [
            "customInstruction",
            "pressRestButtonForNumberOfSeconds",
            "pressResetButtonUntilLightBlinks",
            "pressResetButtonForNumberOfSecondsWithApplicationOfPower",
            "pressResetButtonUntilLightBlinksWithApplicationOfPower",
            "pressResetButtonNumberOfTimes",
            "pressSetupButtonForNumberOfSeconds",
            "pressSetupButtonUntilLightBlinks",
            "pressSetupButtonForNumberOfSecondsWithApplicationOfPower",
            "pressSetupButtonUntilLightBlinksWithApplicationOfPower",
            "pressSetupButtonNumberOfTimes",
        ].find(hint => (pairingHint as any)[hint] === true);
        if (needsInstructions && pairingInstructions.length === 0) {
            throw new ImplementationError(
                `Pairing instructions required for Pairing Hint of type "${needsInstructions}"`,
            );
        }
    }

    /** Set the Broadcaster data to announce a device ready for commissioning in a special mode */
    async enterCommissioningMode(instance: MdnsInstanceBroadcaster, mode: number) {
        const { product, defaultSessionParameters } = instance;

        // When doing a commission announcement, we need to expire any previous commissioning announcements
        await this.expireCommissioningAnnouncement(instance);

        logger.debug(
            `Announce commissioning mode ${mode} ${product.name} ${product.deviceType} ${product.vendorId} ${product.productId} ${instance.discriminator} ${instance.id}`,
        );
        this.#activeCommissioningInstances.add(instance);

        const shortDiscriminator = (instance.discriminator >> 8) & 0x0f;
        const instanceId = Crypto.getRandomData(8).toHex().toUpperCase();
        const vendorQname = getVendorQname(product.vendorId);
        const deviceTypeQname = getDeviceTypeQname(product.deviceType);
        const shortDiscriminatorQname = getShortDiscriminatorQname(shortDiscriminator);
        const longDiscriminatorQname = getLongDiscriminatorQname(instance.discriminator);
        const commissionModeQname = getCommissioningModeQname();
        const deviceQname = getDeviceInstanceQname(instanceId);

        const pairingHint = instance.pairingHint ?? DEFAULT_PAIRING_HINT;
        const pairingInstructions = instance.pairingInstructions ?? "";

        this.validatePairingInstructions(pairingHint, pairingInstructions); // Throws error if invalid!

        await this.#mdnsServer.setRecordsGenerator(instance.id, AnnouncementType.Commissionable, netInterface => {
            const ipMac = this.#network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";

            logger.debug(
                "Announcement Generator: Commission mode ",
                Diagnostic.dict({
                    mode,
                    qname: deviceQname,
                    instance: instance.id,
                    interface: netInterface,
                }),
            );

            const records = [
                PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_COMMISSION_SERVICE_QNAME),
                PtrRecord(SERVICE_DISCOVERY_QNAME, vendorQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, shortDiscriminatorQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, longDiscriminatorQname),
                PtrRecord(SERVICE_DISCOVERY_QNAME, commissionModeQname),
                PtrRecord(MATTER_COMMISSION_SERVICE_QNAME, deviceQname),
                PtrRecord(vendorQname, deviceQname),
                PtrRecord(deviceTypeQname, deviceQname),
                PtrRecord(shortDiscriminatorQname, deviceQname),
                PtrRecord(longDiscriminatorQname, deviceQname),
                PtrRecord(commissionModeQname, deviceQname),
                SrvRecord(deviceQname, { priority: 0, weight: 0, port: announcedNetPort, target: hostname }),
                TxtRecord(deviceQname, [
                    `VP=${product.vendorId}+${product.productId}` /* Vendor / Product */,
                    `DT=${product.deviceType}` /* Device Type */,
                    `DN=${product.name}` /* Device Name */,
                    `SII=${defaultSessionParameters.idleIntervalMs}` /* Session Idle Interval */,
                    `SAI=${defaultSessionParameters.activeIntervalMs}` /* Session Active Interval */,
                    `SAT=${defaultSessionParameters.activeThresholdMs}` /* Session Active Threshold */,
                    `T=${TCP_SUPPORTED}` /* TCP not supported */,
                    `D=${instance.discriminator}` /* Discriminator */,
                    `CM=${mode}` /* Commission Mode */,
                    `PH=${PairingHintBitmapSchema.encode(pairingHint)}` /* Pairing Hint */,
                    `PI=${pairingInstructions}` /* Pairing Instruction */,
                    `ICD=${ICD_SUPPORTED}` /* ICD not supported */,
                ]),
            ];
            records.push(...this.getIpRecords(hostname, ips));
            return records;
        });
    }

    async #setRecordsGenerator(
        instance: MdnsInstanceBroadcaster,
        deviceQname: string,
        announcementType: AnnouncementType,
        ptrs: Record<string, string>,
        txt: Record<string, string>,
    ) {
        const intfToHosts = await this.#hostGenerator.generate(instance);

        await this.#mdnsServer.setRecordsGenerator(instance.id, announcementType, intf => {
            const records = Array<DnsRecord<any>>();

            // Compute hosts
            const hosts = intfToHosts[intf];
            if (Object.keys(hosts).length === 0) {
                return records;
            }

            // Add PTR records
            for (const name in ptrs) {
                records.push(PtrRecord(name, ptrs[name]));
            }

            // Add TXT record
            records.push(
                TxtRecord(
                    deviceQname,
                    Object.entries(txt).map(([k, v]) => `${k}=${v}`),
                ),
            );

            for (const host of hosts) {
                // Add SRV records
                for (const port of host.ports) {
                    records.push(SrvRecord(deviceQname, { priority: 0, weight: 0, port, target: host.qname }));
                }

                // Add A/AAAA records
                host.ips.forEach(ip => {
                    if (isIPv6(ip)) {
                        records.push(AAAARecord(host.qname, ip));
                    } else if (isIPv4(ip)) {
                        records.push(ARecord(host.qname, ip));
                    } else {
                        logger.warn(`Unknown IP address type: ${ip}`);
                    }
                });
            }

            return records;
        });
    }

    /** Set the Broadcaster Data to announce a device for operative discovery (aka "already paired") */
    async enterOperationalMode(instance: MdnsInstanceBroadcaster, oldFabrics: Fabric[]) {
        const { defaultSessionParameters } = instance;

        if (oldFabrics !== undefined) {
            const fabricIndexesSet = new Set(instance.fabrics.map(f => f.fabricIndex));

            // Expire Fabric announcements if any entry got removed
            if (!instance.fabrics.every(({ fabricIndex }) => fabricIndexesSet.has(fabricIndex))) {
                await this.expireFabricAnnouncement(instance);
            }
        }

        this.#activeOperationalInstances.add(instance);

        await this.#mdnsServer.setRecordsGenerator(instance.id, AnnouncementType.Operative, netInterface => {
            const ipMac = this.#network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";

            const records: DnsRecord<any>[] = [PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_SERVICE_QNAME)];
            instance.fabrics.forEach(fabric => {
                const { operationalId, nodeId } = fabric;
                const operationalIdString = operationalId.toHex().toUpperCase();
                const fabricQname = getFabricQname(operationalIdString);
                const deviceMatterQname = getDeviceMatterQname(operationalIdString, NodeId.toHexString(nodeId));

                logger.debug(
                    "Announcement Generator: Fabric",
                    Diagnostic.dict({
                        id: `${operationalId.toHex()}/${nodeId}`,
                        qname: deviceMatterQname,
                        port: announcedNetPort,
                        interface: netInterface,
                    }),
                );
                const fabricRecords = [
                    PtrRecord(SERVICE_DISCOVERY_QNAME, fabricQname),
                    PtrRecord(MATTER_SERVICE_QNAME, deviceMatterQname),
                    PtrRecord(fabricQname, deviceMatterQname),
                    SrvRecord(deviceMatterQname, { priority: 0, weight: 0, port: announcedNetPort, target: hostname }),
                    TxtRecord(deviceMatterQname, [
                        `SII=${defaultSessionParameters.idleIntervalMs}` /* Session Idle Interval */,
                        `SAI=${defaultSessionParameters.activeIntervalMs}` /* Session Active Interval */,
                        `SAT=${defaultSessionParameters.activeThresholdMs}` /* Session Active Threshold */,
                        `T=${TCP_SUPPORTED}` /* TCP not supported */,
                        `ICD=${ICD_SUPPORTED}` /* ICD not supported */,
                    ]),
                ];
                records.push(...fabricRecords);
            });
            records.push(...this.getIpRecords(hostname, ips));
            return records;
        });
    }

    /** Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery) */
    async enterCommissionerDiscoveryMode(instance: MdnsInstanceBroadcaster) {
        const { product, defaultSessionParameters } = instance;

        logger.debug(
            "Announcement: Commissioner",
            Diagnostic.dict({
                instance: instance.id,
                deviceType: product.deviceType,
            }),
        );

        const instanceId = Crypto.getRandomData(8).toHex().toUpperCase();
        const deviceTypeQname = `_T${product.deviceType}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;
        const vendorQname = `_V${product.vendorId}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;
        const deviceQname = `${instanceId}.${MATTER_COMMISSIONER_SERVICE_QNAME}`;

        this.#activeCommissioningInstances.add(instance);

        await this.#mdnsServer.setRecordsGenerator(instance.id, AnnouncementType.Commissionable, netInterface => {
            const ipMac = this.#network.getIpMac(netInterface);
            if (ipMac === undefined) return [];
            const { mac, ips } = ipMac;
            const hostname = mac.replace(/:/g, "").toUpperCase() + "0000.local";
            const records = [
                PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_COMMISSIONER_SERVICE_QNAME),
                PtrRecord(MATTER_COMMISSIONER_SERVICE_QNAME, vendorQname),
                PtrRecord(vendorQname, deviceQname),
                SrvRecord(deviceQname, { priority: 0, weight: 0, port: announcedNetPort, target: hostname }),
                TxtRecord(deviceQname, [
                    `VP=${product.vendorId}+${product.productId}` /* Vendor / Product */,
                    `DT=${product.deviceType}` /* Device Type */,
                    `DN=${product.name}` /* Device Name */,
                    `SII=${defaultSessionParameters.idleIntervalMs}` /* Session Idle Interval */,
                    `SAI=${defaultSessionParameters.idleIntervalMs}` /* Session Active Interval */,
                    `SAT=${defaultSessionParameters.activeThresholdMs}` /* Session Active Threshold */,
                    `T=${TCP_SUPPORTED}` /* TCP not supported */,
                    `ICD=${ICD_SUPPORTED}` /* ICD not supported */,
                ]),
            ];
            if (product.deviceType !== -1) {
                records.push(PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname));
                records.push(PtrRecord(deviceTypeQname, deviceQname));
            }

            records.push(...this.getIpRecords(hostname, ips));
            return records;
        });
    }

    async announce(instance: MdnsInstanceBroadcaster) {
        this.#mdnsServer.announce(instance.id).catch(error => logger.error(error));
    }

    async expireFabricAnnouncement(instance: MdnsInstanceBroadcaster) {
        if (this.#activeOperationalInstances.has(instance)) {
            await this.#mdnsServer.expireAnnouncements(instance.id, AnnouncementType.Operative);
            this.#activeOperationalInstances.delete(instance);
        }
    }

    async expireCommissioningAnnouncement(instance: MdnsInstanceBroadcaster) {
        if (this.#activeCommissioningInstances.has(instance)) {
            await this.#mdnsServer.expireAnnouncements(instance.id, AnnouncementType.Commissionable);
            this.#activeCommissioningInstances.delete(instance);
        }
    }

    async expireAllAnnouncements(instance: MdnsInstanceBroadcaster) {
        if (!this.#activeCommissioningInstances.has(instance) && !this.#activeOperationalInstances.has(instance))
            return;
        await this.#mdnsServer.expireAnnouncements(instance.id);
        this.#activeCommissioningInstances.delete(instance);
        this.#activeOperationalInstances.delete(instance);
    }

    async close() {
        while (this.#instances.size) {
            await this.#instances.deleted;
        }

        await this.#mdnsServer.expireAnnouncements();
        this.#activeCommissioningInstances.clear();
        this.#activeOperationalInstances.clear();
        await this.#mdnsServer.close();
    }
}
