/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { deepCopy, StorageManager } from "#general";
import { DatatypeModel, FieldElement } from "#model";
import { NonvolatileEventStore, OccurrenceManager, VolatileEventStore } from "#protocol";
import { Behavior } from "../../Behavior.js";

/**
 * Event handling configuration.
 */
export class EventsBehavior extends Behavior {
    static override readonly id = "events";
    static override early = true;

    declare state: EventsBehavior.State;

    override initialize() {
        const storage = this.env.get(StorageManager).createContext("events");
        let store;
        if (this.state.nonvolatile) {
            store = new NonvolatileEventStore(storage);
        } else {
            store = new VolatileEventStore(storage, this.state.numberBlockSize);
        }

        this.env.set(OccurrenceManager, new OccurrenceManager({ store, bufferConfig: this.state.buffers }));
    }

    static override schema = new DatatypeModel(
        {
            name: "EventsState",
            type: "struct",
        },
        FieldElement({ name: "nonvolatile", type: "bool" }),
        FieldElement({ name: "numberBlockSize", type: "uint16" }),
        FieldElement(
            { name: "buffer", type: "struct" },
            FieldElement({ name: "minEventAllowance", type: "number" }),
            FieldElement({ name: "maxEventAllowance", type: "number" }),
            FieldElement(
                { name: "minPriorityEventAllowance", type: "struct" },
                FieldElement({ name: "critical", type: "number" }),
                FieldElement({ name: "info", type: "number" }),
                FieldElement({ name: "debug", type: "number" }),
            ),
        ),
    );
}

export namespace EventsBehavior {
    export class State {
        nonvolatile = false;
        numberBlockSize = 1_000;
        buffers = deepCopy(OccurrenceManager.DefaultBufferConfig);
    }
}
