/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer, CommissioningServerOptions } from "../../CommissioningServer.js";
import { MatterServer } from "../../MatterServer.js";
import { Crypto } from "../../crypto/Crypto.js";
import { DeviceTypeId } from "../../datatype/DeviceTypeId.js";
import { AggregatorEndpoint } from "../../endpoint/definitions/system/AggregatorEndpoint.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Logger } from "../../log/Logger.js";
import { Storage } from "../../storage/Storage.js";
import { StorageManager } from "../../storage/StorageManager.js";
import { ServerOptions } from "./ServerOptions.js";

const logger = Logger.get("ServerContext");

// TODO

type CompleteServerOptions = ServerOptions & {
    root: typeof RootEndpoint;

    network: {
        port: number;
    };

    commissioning: {
        passcode: number;
        discriminator: number;
        deviceType: DeviceTypeId;
        deviceName: string;
    };

    subscription: {};
};

/**
 * This is ServerNode's interface into lower levels of matter.js.
 */
export class ServerContext {
    constructor(
        public server: CommissioningServer,
        public root: typeof RootEndpoint,
        private destroy?: () => Promise<void>,
    ) {}

    static async create(options: ServerOptions) {
        options = { ...options };

        this.setDefaults(options);

        const { server, destroy } = await this.createServer(options);

        return new ServerContext(server, options.root, destroy);
    }

    private static setDefaults(options: ServerOptions): asserts options is CompleteServerOptions {
        this.configureRootEndpoint(options);

        if (!options.network) {
            options.network = {};
        }
        if (!options.network.port) {
            options.network.port = 5540;
        }

        if (!options.commissioning) {
            options.commissioning = {};
        }
        if (!options.commissioning.passcode) {
            while (true) {
                const passcode = Crypto.getRandomUInt32() & 0x7ffffff;
                if (passcode > 0 && passcode < 99999999) {
                    options.commissioning.passcode = passcode;
                    break;
                }
            }
            logger.info("Commissioning with random passcode", options.commissioning.passcode);
        }
        if (!options.commissioning.discriminator) {
            options.commissioning.discriminator = Crypto.getRandomUInt16() & 0xfff;
            logger.info("Commissioning with random discriminator", options.commissioning.discriminator);
        }

        if (!options.commissioning.deviceName) {
            options.commissioning.deviceName = options.root?.defaults.basicInformation.productName ?? "Unknown Device";
        }
        if (!options.commissioning.deviceType) {
            logger.warn(
                "Defaulting to Aggregator device type for commissioning announcements which is likely incorrect.  " +
                    "Set the commissioning device type to remove this warning",
            );
            options.commissioning.deviceType = AggregatorEndpoint.deviceType;
        }

        if (!options.subscription) {
            options.subscription = {};
        }
    }

    private static configureRootEndpoint(options: ServerOptions) {
        if (!options.root) {
            options.root = RootEndpoint;
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
                options.root = options.root?.set(defaults as any);
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

            options.root = options.root.set(defaults as any);
        }

        defaults = {};

        const bi = options.root.defaults.basicInformation;
        addDefault("basicInformation", "productLabel", bi.productName);
        addDefault("basicInformation", "nodeLabel", bi.productName);
        addDefault("basicInformation", "dataModelRevision", 1);
        addDefault("basicInformation", "hardwareVersionString", bi.hardwareVersion.toString());
        addDefault("basicInformation", "softwareVersionString", bi.softwareVersion.toString());

        setDefaults();
    }

    static async createServer(options: CompleteServerOptions) {
        let storage: Storage, destroyStorage: boolean;
        if (options.storage) {
            storage = options.storage;
        } else {
            storage = Storage.create(options.commissioning.deviceName, false);
            destroyStorage = true;
        }
        const storageManager = new StorageManager(storage);

        const matterServer = new MatterServer(storageManager, {
            mdnsAnnounceInterface: options.network?.announceInterface,
            disableIpv4: options.network?.disableIpv4,
        });

        const commissioningServerOptions: CommissioningServerOptions = {
            ...options.network,
            ...options.commissioning,

            subscriptionMaxIntervalSeconds: options.subscription.maxIntervalSeconds,
            subscriptionMinIntervalSeconds: options.subscription.maxIntervalSeconds,
            subscriptionRandomizationWindowSeconds: options.subscription.randomizationWindowSeconds,

            certificates: options.certification,
            nextEndpointId: options.nextEndpointId,

            basicInformation: undefined,
        };

        const server = new CommissioningServer(commissioningServerOptions);

        return {
            server: new CommissioningServer(commissioningServerOptions),
            destroy: async () => {
                await server.close();
                await matterServer.close();
                if (destroyStorage) {
                    await storage.close();
                }
            },
        };
    }

    async [Symbol.asyncDispose]() {
        await this.destroy?.();
    }
}
