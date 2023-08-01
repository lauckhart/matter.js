/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendMemory } from "../../../src/storage/StorageBackendMemory.js";
import { expect } from "expect";

describe("StorageInMemory", () => {

    it("write and read success", () => {
        const storage = new StorageBackendMemory();

        storage.set(["context"], "key", "value");

        const value = storage.get(["context"], "key");
        expect(value).toBe("value")
    });

    it("write and read success with multiple context levels", () => {
        const storage = new StorageBackendMemory();

        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = storage.get(["context", "subcontext", "subsubcontext"], "key");
        expect(value).toBe("value")
    });

    it("Throws error when context is empty on set", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.set([], "key", "value");
        }).toThrow("Context and key must not be empty!");
    });

    it("Throws error when context is empty on set", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.set([""], "key", "value");
        }).toThrow("Context must not be an empty string!" );
    });

    it("Throws error when key is empty on set", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.set(["context"], "", "value");
        }).toThrow("Context and key must not be empty!");
    });

    it("Throws error when context is empty on get with subcontext", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.get(["ok", ""], "key");
        }).toThrow("Context must not be an empty string!");
    });

    it("Throws error when key is empty on get", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.get(["context", "subcontext"], "");
        }).toThrow("Context and key must not be empty!");
    });
});
