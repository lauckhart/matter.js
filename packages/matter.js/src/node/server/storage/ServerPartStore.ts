import { Val } from "../../../behavior/state/managed/Val.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../../storage/StringifyTools.js";
import { PartStore } from "../../../endpoint/storage/PartStore.js";
import { logger } from "./ServerStore.js";
import { DatasourceStore } from "../../../endpoint/storage/DatasourceStore.js";
import { Datasource } from "../../../behavior/state/managed/Datasource.js";

const NUMBER_KEY = "__number__";

/**
 * The server implementation of {@link PartStore}.
 * 
 * Manages storage for a specific endpoint.
 */
export class ServerPartStore implements PartStore {
    #storage: StorageContext;
    #initialValues = {} as Record<string, Val.Struct>;
    #number: number | undefined;

    constructor(partId: string, storage: StorageContext, isNew: boolean) {
        this.#storage = storage.createContext(partId);

        for (const behaviorId of this.#storage.keys()) {
            const behaviorValues = this.#initialValues[behaviorId] = {} as Val.Struct;
            const behaviorStorage = this.#storage.createContext(behaviorId);

            for (const key of behaviorStorage.keys()) {
                behaviorValues[key] = behaviorStorage.get(key);
            }
        }

        const number = this.#storage.get(NUMBER_KEY, -1) as number | undefined;
        if (number !== -1) {
            this.#number = number;
        } else if (!isNew) {
            logger.warn(`No endpoint number persisted for part ${partId}`);
        }
    }

    get initialValues() {
        return this.#initialValues;
    }

    get number() {
        return this.#number;
    }

    storeForBehavior(behaviorId: string): Datasource.Store {
        return DatasourceStore(this, behaviorId);
    }

    async setNumber(number: number) {
        this.#storage.set(NUMBER_KEY, number);
    }

    async set(values: Record<string, Val.Struct>) {
        for (const behaviorId in values) {
            const behaviorValues = values[behaviorId];
            const behaviorStorage = this.#storage.createContext(behaviorId);

            for (const key in behaviorValues) {
                const value = behaviorValues[key];
                if (value === undefined) {
                    behaviorStorage.delete(key);
                } else {
                    behaviorStorage.set(key, behaviorValues[key] as SupportedStorageTypes);
                }
            }
        }

        // TODO - should probably wire support for immediate commit into
        // storage API
    }

    async delete() {
        this.#storage.clearAll();
    }
}
