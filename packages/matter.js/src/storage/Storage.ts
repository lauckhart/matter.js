/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterError, NoProviderError } from "../common/MatterError.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageError extends MatterError {}

function NoFactory(): Storage {
    throw new NoProviderError("No default storage provider registered");
}

export type StorageFactory = (name: string, clear: undefined | boolean) => Storage;

/**
 * API used by matter.js for managing persistent state.
 */
export abstract class Storage {
    abstract initialize(): Promise<void>;
    abstract close(): Promise<void>;
    abstract get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined;
    abstract set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void;
    abstract delete(contexts: string[], key: string): void;
    abstract keys(contexts: string[]): string[];
    abstract clearAll(contexts: string[]): void;

    /**
     * Register a storage implementation as the system default when storage is
     * not initialized manually,
     */
    static create: StorageFactory = NoFactory;

    static get registered() {
        return this.create !== NoFactory;
    }
}
