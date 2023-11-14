/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../crypto/Crypto.js";
import { DeviceTypeId } from "../../datatype/DeviceTypeId.js";
import { AggregatorEndpoint } from "../../endpoint/definitions/system/AggregatorEndpoint.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Logger } from "../../log/Logger.js";
import { ServerOptions } from "./ServerOptions.js";
import { StorageManager } from "../../storage/StorageManager.js";

const logger = Logger.get("ServerConfiguration");

/**
 * This class manages server configuration.
 */
export class ServerConfiguration implements ServerOptions {
    #root: RootEndpoint;
    #network: ServerConfiguration.CompleteNetworkOptions;
    #commissioning: ServerConfiguration.CompleteCommissioningOptions;
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

    static for(options?: ServerOptions) {
        if (options instanceof ServerConfiguration) {
            return options;
        }

        return new ServerConfiguration(options);
    }

    constructor(options?: ServerOptions) {
        if (!options) {
            options = {};
        }

        this.#root = this.configureRootEndpoint(options);

        this.#network = {
            ...options.network,

            port: options.network?.port ?? 5540
        }

        this.#commissioning = this.configureCommissioning(options);

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

    private configureRootEndpoint(options: ServerOptions) {
        let root = options.root;

        if (!root) {
            root = RootEndpoint;
        }

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
                    dict[`${cluster}.${attr}`] = defaults[cluster][attr];
                }
            }
            logger.warn("Using development values for some cluster attributes:", Logger.dict(dict));

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

        return root;
    }

    private configureCommissioning(options: ServerOptions) {
        const commissioning = { ...options.commissioning };
        if (!commissioning.passcode) {
            while (true) {
                const passcode = Crypto.getRandomUInt32() & 0x7ffffff;
                if (passcode > 0 && passcode < 99999999) {
                    commissioning.passcode = passcode;
                    break;
                }
            }
            logger.info("Commissioning with random passcode", commissioning.passcode);
        }
        if (!commissioning.discriminator) {
            commissioning.discriminator = Crypto.getRandomUInt16() & 0xfff;
            logger.info("Commissioning with random discriminator", commissioning.discriminator);
        }

        if (!commissioning.deviceName) {
            commissioning.deviceName = options.root?.defaults.basicInformation.productName ?? "Unknown Device";
        }
        if (!commissioning.deviceType) {
            logger.warn(
                "Defaulting to Aggregator device type for commissioning announcements which is likely incorrect.  " +
                    "Set the commissioning device type to remove this warning",
            );
            commissioning.deviceType = AggregatorEndpoint.deviceType;
        }
        return commissioning as ServerConfiguration.CompleteCommissioningOptions;
    }
}

export namespace ServerConfiguration {
    export type CompleteNetworkOptions = ServerOptions["network"] & {
        port: number;
    }

    export type CompleteCommissioningOptions = ServerOptions["commissioning"] & {
        passcode: number;
        discriminator: number;
        deviceType: DeviceTypeId;
        deviceName: string;
    }
}
