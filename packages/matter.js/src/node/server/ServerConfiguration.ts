/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../crypto/Crypto.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Logger } from "../../log/Logger.js";
import { ServerOptions } from "./ServerOptions.js";
import { StorageManager } from "../../storage/StorageManager.js";
import { ProductDescription } from "../../common/InstanceBroadcaster.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import { BridgedRootEndpoint } from "../../endpoint/definitions/system/BridgedRootEndpoint.js";
import { AggregatorEndpoint } from "../../endpoint/definitions/system/AggregatorEndpoint.js";
import { VendorId } from "../../datatype/VendorId.js";
import type { Node } from "../Node.js";
import { PartsBehavior } from "../../behavior/definitions/parts/PartsBehavior.js";
import { DeviceTypeId } from "../../datatype/DeviceTypeId.js";
import { Part } from "../../endpoint/Part.js";

const logger = Logger.get("ServerConfiguration");

/**
 * This class manages configuration for a server.
 */
export class ServerConfiguration {
    #owner?: Node;
    #root: Part;
    #network: ServerConfiguration.NetworkOptions;
    #commissioning: ServerConfiguration.CommissioningOptions;
    #subscription: Exclude<ServerOptions["subscription"], undefined>;
    #certification?: ServerOptions["certification"];
    #nextEndpointId?: ServerOptions["nextEndpointId"];
    #storageManager?: StorageManager;

    get root() {
        return this.#root;
    }

    get network() {
        return this.#network;
    }

    get commissioning() {
        return this.#commissioning;
    }

    get subscription() {
        return this.#subscription;
    }

    get certification() {
        return this.#certification;
    }

    get nextEndpointId() {
        return this.#nextEndpointId;
    }

    get storageManager() {
        return this.#storageManager;
    }

    set owner(owner: Node) {
        this.#owner = owner;
    }

    constructor(options?: ServerOptions) {
        if (!options) {
            options = {};
        }

        const { root, productDescription } = this.configureNode(options);
        this.#root = root;

        this.#network = {
            ...options.network,

            port: options.network?.port ?? 5540
        }

        this.#commissioning = this.configureCommissioning(options, productDescription);

        this.#subscription = options.subscription ?? {};

        this.#storageManager = options.storageManager;
    }

    get commissioningServerOptions() {
        return {
            ...this.#network,
            ...this.#commissioning,

            subscriptionMaxIntervalSeconds: this.#subscription.maxIntervalSeconds,
            subscriptionMinIntervalSeconds: this.#subscription.maxIntervalSeconds,
            subscriptionRandomizationWindowSeconds: this.#subscription.randomizationWindowSeconds,

            certificates: this.#certification,
            nextEndpointId: this.#nextEndpointId,
        };
    }

    private configureNode(options: ServerOptions) {
        const endpoints = options.endpoints ?? [];

        let root: Part | undefined;
        let children: Part[];

        function add(part: Part) {
            switch (part.type.deviceType) {
                case RootEndpoint.deviceType:
                case BridgedRootEndpoint.deviceType:
                    if (root !== undefined) {
                        throw new ImplementationError("Node may not have more than one root endpoint");
                    }
                    if (part.id !== undefined && part.id !== 0) {
                        throw new ImplementationError(`Root endpoint ID must be 0 (was ${part.id})`);
                    }
                    root = part;
                    break;

                default:
                    children.push(part);
                    break;
            }
        }

        for (const endpoint of endpoints) {
            if (endpoint instanceof Part) {
                add(endpoint);
            } else {
                add(new Part(endpoint));
            }
        }

        if (!root) {
            root = new Part(RootEndpoint);
        }

        let productDescription;
        if (root.type.deviceType === RootEndpoint.deviceType) {
            productDescription = this.configureNativeNode(root as Part<RootEndpoint>);
        } else if (root.type.deviceType === BridgedRootEndpoint.deviceType) {
            productDescription = this.configureBridgedNode(root as Part<BridgedRootEndpoint>);
        } else {
            throw new ImplementationError(`Root node type must be ${RootEndpoint.name} or ${BridgedRootEndpoint.name}`);
        }

        return { root, productDescription };
    }

    private configureNativeNode(root: Part<RootEndpoint>) {
        // Greg: TODO - Need to convert from configuring EndpointType to configuring Part
        const agent = root.agent;
        let defaults = {} as Record<string, Record<string, any>>;

        function addDefault(cluster: string, attr: string, value: any) {
            if (!defaults[cluster]) {
                defaults[cluster] = {};
            }
            if (defaults[cluster][attr] === undefined) {
                defaults[cluster][attr] = value;
            }
        }

        function setDefaults() {
            if (Object.keys(defaults).length) {
                root = root?.set(defaults as any);
                return true;
            }
        }

        addDefault("basicInformation", "vendorId", 0xfff1);
        addDefault("basicInformation", "vendorName", "Matter.js Test Vendor");
        addDefault("basicInformation", "productId", 0x8000);
        addDefault("basicInformation", "productName", "Matter.js Test Product");

        if (setDefaults()) {
            const dict = {} as Record<string, any>;
            for (const cluster in defaults) {
                for (const attr in defaults[cluster]) {
                    dict[`${cluster}.state.${attr}`] = defaults[cluster][attr];
                }
            }
            logger.warn("Using development values for some attributes:", Logger.dict(dict));

            root = root.set(defaults as any);
        }

        defaults = {};

        const bi = root.defaults.basicInformation;
        addDefault("basicInformation", "productLabel", bi.productName);
        addDefault("basicInformation", "nodeLabel", bi.productName);
        addDefault("basicInformation", "dataModelRevision", 1);
        addDefault("basicInformation", "hardwareVersionString", bi.hardwareVersion.toString());
        addDefault("basicInformation", "softwareVersionString", bi.softwareVersion.toString());

        setDefaults();

        return {
            name: bi.productName,
            productId: bi.productId,
            vendorId: bi.vendorId,
        };
    }

    private configureBridgedNode(root: Part<BridgedRootEndpoint>) {
        const bi = root.agent.bridgedDeviceBasicInformation;

        return {
            name: bi.state.productName ?? "Matter.js Bridge",
            deviceType: AggregatorEndpoint.deviceType,

            // TODO - These are optional or don't exist in BDBI but we require
            // them for commissioning broadcast.  I'm guessing they aren't
            // really required so setting to -1 rather than developmental
            // values but need to confirm
            vendorId: bi.state.vendorId ?? VendorId(-1),
            productId: -1,
        }
    }

    private configureCommissioning(options: ServerOptions, productDefaults: Partial<ProductDescription>) {
        const commissioning = { ...options.commissioning };
        if (!commissioning.passcode) {
            while (true) {
                const passcode = Crypto.getRandomUInt32() & 0x7ffffff;
                if (passcode > 0 && passcode < 99999999) {
                    commissioning.passcode = passcode;
                    break;
                }
            }
            logger.info("Commissioning with generated passcode:", commissioning.passcode);
        }
        if (!commissioning.discriminator) {
            commissioning.discriminator = Crypto.getRandomUInt16() & 0xfff;
            logger.info("Commissioning with generated discriminator:", commissioning.discriminator);
        }

        const productDescription = {
            ...productDefaults,
            ...commissioning.productDescription,
        };

        // These should have default values set in configureNode()
        if (productDescription.name === undefined) {
            throw new InternalError("No commissioning product description name set");
        }
        if (productDescription.productId === undefined) {
            throw new InternalError("No commissioning product ID set");
        }
        if (productDescription.vendorId === undefined) {
            throw new InternalError("No commissioning vendor ID set");
        }

        // If device type is not set we attempt to infer by inspecting
        // endpoints.  We do this lazily so we can inspect parts present when
        // commissioning commences
        if (productDescription.deviceType === undefined) {
            Object.defineProperty(productDescription, "deviceType", {
                enumerable: true,
                get: () => this.inferDeviceType()
            });
        }

        return commissioning as ServerConfiguration.CommissioningOptions;
    }

    private inferDeviceType() {
        if (!this.#owner) {
            throw new InternalError("Cannot infer device type because configuration owner is not set");
        }

        const parts = this.#owner.root.agent.get(PartsBehavior);

        let type: DeviceTypeId | undefined;
        let name: string | undefined;
        for (const part of parts) {
            switch (part.type.deviceType) {
                case RootEndpoint.deviceType:
                case BridgedRootEndpoint.deviceType:
                    continue;
            }

            // If there are multiple parts, fall back to aggregator
            if (type !== undefined) {
                type = AggregatorEndpoint.deviceType;
                break;
            }

            type = part.type.deviceType;
        }

        if (type === undefined) {
            throw new ImplementationError("Cannot infer commissioning device type because no device parts are present");
        } else {
            logger.info(`Commissioning as device type "${name}" (#${type})`);
        }
    }
}

export namespace ServerConfiguration {
    export type NetworkOptions = ServerOptions["network"] & {
        port: number;
    }

    export type CommissioningOptions = ServerOptions["commissioning"] & {
        productDescription: ProductDescription;
        passcode: number;
        discriminator: number;
    }
}
