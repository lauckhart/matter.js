/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValueModel } from "../../index.js";
import { IoWriter } from "./IoWriter.js";
import { Io } from "./Io.js";
import { IoReader } from "./IoReader.js";
import { IoUpdater } from "./IoUpdater.js";
import { InternalError } from "../../../common/MatterError.js";

/**
 * IoFactory manages I/O implementations.
 */
export class IoFactory {
    #generating = new Set<ValueModel>();
    #cache = new WeakMap<ValueModel, Io>();

    /**
     * Obtain an I/O implementation for a specific schema.
     * 
     * @param schema the model describing the record type
     * @returns the I/O implementation
     */
    get(schema: ValueModel): Io {
        let io = this.#cache.get(schema);
        if (io === undefined) {
            if (this.isGenerating(schema)) {
                throw new InternalError(`Recursive structure generation requires lazy loading of ${schema.name}`);
            }
            this.#generating.add(schema);
            io = {
                read: IoReader(schema, this),
                create: IoWriter(schema, this),
                update: IoUpdater(schema, this),
            }
            this.#generating.delete(schema);
            this.#cache.set(schema, io);
        }
        return io;
    }

    isGenerating(schema: ValueModel) {
        return this.#generating.has(schema);
    }
}
