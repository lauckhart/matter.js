/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PairingHintBitmapSchema } from "#advertisement/PairingHintBitmap.js";
import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { ImplementationError, PtrRecord } from "#general";
import {
    DEFAULT_PAIRING_HINT,
    getCommissionableDeviceQname,
    getCommissioningModeQname,
    getDeviceTypeQname,
    getLongDiscriminatorQname,
    getShortDiscriminatorQname,
    getVendorQname,
    MATTER_COMMISSION_SERVICE_QNAME,
    MATTER_COMMISSIONER_SERVICE_QNAME,
    PAIRING_HINTS_REQUIRING_INSTRUCTION,
    SERVICE_DISCOVERY_QNAME,
} from "#mdns/MdnsConsts.js";
import { MdnsAdvertisement } from "./MdnsAdvertisement.js";
import { MdnsAdvertiser } from "./MdnsAdvertiser.js";

/**
 * Advertise a node as commissionable.
 */
export class CommissionableMdnsAdvertisement extends MdnsAdvertisement<ServiceDescription.Commissionable> {
    instanceId: string;

    constructor(advertiser: MdnsAdvertiser, description: ServiceDescription.Commissionable) {
        const instanceId = advertiser.createInstanceId();
        const qname = getCommissionableDeviceQname(instanceId);

        super(advertiser, qname, description);

        this.instanceId = instanceId;

        this.#validatePairingInstructions();
    }

    override get ptrRecords() {
        const { discriminator, deviceType, vendorId } = this.description;

        const shortDiscriminator = (discriminator >> 8) & 0x0f;
        const instanceId = this.advertiser.createInstanceId();
        const vendorQname = getVendorQname(vendorId);
        const deviceTypeQname = getDeviceTypeQname(deviceType);
        const shortDiscriminatorQname = getShortDiscriminatorQname(shortDiscriminator);
        const longDiscriminatorQname = getLongDiscriminatorQname(discriminator);
        const commissionModeQname = getCommissioningModeQname();
        const deviceQname = getCommissionableDeviceQname(instanceId);

        const records = [
            PtrRecord(SERVICE_DISCOVERY_QNAME, MATTER_COMMISSION_SERVICE_QNAME),
            PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname),
            PtrRecord(SERVICE_DISCOVERY_QNAME, shortDiscriminatorQname),
            PtrRecord(SERVICE_DISCOVERY_QNAME, longDiscriminatorQname),
            PtrRecord(SERVICE_DISCOVERY_QNAME, commissionModeQname),
            PtrRecord(MATTER_COMMISSION_SERVICE_QNAME, deviceQname),
            PtrRecord(deviceTypeQname, deviceQname),
            PtrRecord(shortDiscriminatorQname, deviceQname),
            PtrRecord(longDiscriminatorQname, deviceQname),
            PtrRecord(commissionModeQname, deviceQname),
        ];

        if (!this.isExtendedAnnouncement) {
            records.push(PtrRecord(SERVICE_DISCOVERY_QNAME, vendorQname), PtrRecord(vendorQname, deviceQname));
        }

        if (deviceType !== undefined) {
            const deviceTypeQname = `_T${deviceType}._sub.${MATTER_COMMISSIONER_SERVICE_QNAME}`;

            records.push(PtrRecord(SERVICE_DISCOVERY_QNAME, deviceTypeQname));
            records.push(PtrRecord(deviceTypeQname, this.qname));
        }

        return records;
    }

    override get txtValues() {
        const {
            vendorId,
            productId,
            deviceType,
            name,
            discriminator,
            mode,
            pairingHint = DEFAULT_PAIRING_HINT,
            pairingInstructions,
        } = this.description;

        const values: Record<string, unknown> = {
            DN: name /* Device Name */,
            DT: deviceType /* Device Type */,
            D: discriminator /* Discriminator */,
            CM: mode /* Commission Mode */,
            PH: PairingHintBitmapSchema.encode(pairingHint) /* Pairing Hint */,
            PI: pairingInstructions /* Pairing Instruction */,
        };

        if (!this.isExtendedAnnouncement) {
            values.VP = `${vendorId}+${productId}`; /* Vendor / Product */
        }

        return values;
    }

    #validatePairingInstructions() {
        const { pairingHint, pairingInstructions } = this.description;

        const needsInstructions = PAIRING_HINTS_REQUIRING_INSTRUCTION.find(hint => (pairingHint as any)[hint] === true);

        if (needsInstructions && !pairingInstructions) {
            throw new ImplementationError(
                `Pairing instructions required for pairing hint of type "${needsInstructions}"`,
            );
        }
    }
}
