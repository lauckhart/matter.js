/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductDescription } from "../behavior/system/product-description/ProductDescription.js";
import { InstanceBroadcaster } from "../common/InstanceBroadcaster.js";
import { ImplementationError } from "../common/MatterError.js";
import { Fabric } from "../fabric/Fabric.js";
import { NetworkAddress } from "../net/NetworkAddress.js";
import { DEFAULT_SESSION_PARAMETERS, SessionParameterOptions, SessionParameters } from "../session/Session.js";
import type { MdnsBroadcaster } from "./MdnsBroadcaster.js";
import { PairingHint } from "./PairingHint.js";

/**
 * Handles MDNS Announcements for a single node.
 *
 * Obtain an instance via {@link MdnsBroadcaster.createInstanceBroadcaster}.
 */
export class MdnsInstanceBroadcaster implements InstanceBroadcaster {
    readonly #id: string;
    readonly #addresses: NetworkAddress[];
    readonly #product: ProductDescription;
    readonly #defaultSessionParameters: SessionParameters;
    readonly #discriminator: number;
    readonly #pairingHint?: PairingHint;
    readonly #pairingInstructions?: string;
    #fabrics: Fabric[] = Array<Fabric>();
    readonly #mdnsBroadcaster: MdnsBroadcaster;
    readonly #onclose: () => void;
    #isClosed = false;

    constructor(mdnsBroadcaster: MdnsBroadcaster, config: MdnsInstanceBroadcaster.Configuration, onclose: () => void) {
        this.#id = config.id;
        this.#addresses = config.addresses;
        this.#discriminator = config.discriminator;
        this.#product = config.product;
        this.#pairingHint = config.pairingHint;
        this.#pairingInstructions = config.pairingInstructions;
        this.#mdnsBroadcaster = mdnsBroadcaster;
        this.#onclose = onclose;
        this.#defaultSessionParameters = { ...DEFAULT_SESSION_PARAMETERS, ...config.defaultSessionParameters };
    }

    get id() {
        return this.#id;
    }

    get addresses() {
        return this.#addresses;
    }

    get fabrics() {
        return this.#fabrics;
    }

    get product() {
        return this.#product;
    }

    get discriminator() {
        return this.#discriminator;
    }

    get pairingHint() {
        return this.#pairingHint;
    }

    get pairingInstructions() {
        return this.#pairingInstructions;
    }

    get defaultSessionParameters() {
        return this.#defaultSessionParameters;
    }

    async close() {
        if (this.#isClosed) {
            return;
        }
        this.#isClosed = true;

        await this.#mdnsBroadcaster.expireAllAnnouncements(this);
        this.#onclose();
    }

    async enterCommissioningMode(mode: number) {
        this.#assertOpen();
        await this.#mdnsBroadcaster.enterCommissioningMode(this, mode);
    }

    /** Set the Broadcaster Data to announce a device for operative discovery (aka "already paired") */
    async enterOperationalMode(fabrics: Fabric[], expireCommissioningAnnouncements = false) {
        this.#assertOpen();
        const oldFabrics = this.#fabrics;
        this.#fabrics = fabrics;
        if (expireCommissioningAnnouncements) {
            await this.#mdnsBroadcaster.expireCommissioningAnnouncement(this);
        }
        await this.#mdnsBroadcaster.enterOperationalMode(this, oldFabrics);
    }

    /** Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery) */
    async enterCommissionerDiscoveryMode() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.enterCommissionerDiscoveryMode(this);
    }

    async announce() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.announce(this);
    }

    async expireFabricAnnouncement() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.expireFabricAnnouncement(this);
    }

    async expireCommissioningAnnouncement() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.expireCommissioningAnnouncement(this);
    }

    async expireAllAnnouncements() {
        this.#assertOpen();
        await this.#mdnsBroadcaster.expireAllAnnouncements(this);
    }

    #assertOpen() {
        if (this.#isClosed) {
            throw new ImplementationError("Illegal operation on closed MdnsInstanceBroadcaster");
        }
    }
}

export namespace MdnsInstanceBroadcaster {
    export interface Configuration {
        /** Unique identifier for the advertised node */
        id: string;

        /** The network addresses advertised */
        addresses: NetworkAddress[];

        /** Description of advertised product */
        product: ProductDescription;

        /** Device discriminator for commissionable announcements. */
        discriminator: number;

        /** Overrides of session parameter defaults */
        defaultSessionParameters?: SessionParameterOptions;

        /** Pairing Hint of the device for commissionable announcements. */
        pairingHint?: PairingHint;

        /** Pairing Instruction of the device for commissionable announcements. */
        pairingInstructions?: string;
    }
}
