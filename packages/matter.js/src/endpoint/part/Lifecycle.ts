/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Part } from "../Part.js";
import { EventEmitter, Observable } from "../../util/Observable.js";
import type { Node } from "../../node/Node.js";

/**
 * State related to a {@link Part}'s lifecycle.
 */
export class Lifecycle {
    #part: Part;
    #events = new Lifecycle.Events;
    #installed = false;
    #hasId = false;
    #hasNumber = false;

    constructor(part: Part) {
        this.#part = part;
    }

    /**
     * Events emitted for changes in {@link Part} lifecycle.
     */
    get events() {
        return this.#events;
    }

    /**
     * Is the {@link Part} installed in a {@link Node}?
     */
    get installed() {
        return this.#installed;
    }

    /**
     * Does the part have an ID?
     */
    get hasId() {
        return this.#hasId;
    }

    /**
     * Does the part have an endpoint number?
     */
    get hasNumber() {
        return this.#hasNumber;
    }

    /**
     * Inform the Lifecycle of a change in lifecycle.
     */
    change(type: Lifecycle.Change, part = this.#part) {
        switch (type) {
            case Lifecycle.Change.Installed:
                this.#installed = true;
                this.events.installed.emit(this.#part);

                // We do not bubble installation as this becomes true for all
                // parts simultaneously
                return;

            case Lifecycle.Change.Destroyed:
                this.events.destroyed.emit(this.#part);

                // We do not bubble destruction as it is redundant with
                // PartDeleted and at this point the part is no longer part of
                // a hierarchy
                return;

            case Lifecycle.Change.IdAssigned:
                this.#hasId = true;
                break;

            case Lifecycle.Change.NumberAssigned:
                this.#hasNumber = true;
                break;
        }

        this.events.change.emit(type, part);
    }
}

export namespace Lifecycle {
    export class Events extends EventEmitter {
        /**
         * Emitted when a part is installed into a Node.
         */
        installed = new Observable<[part: Part]>();

        /**
         * Emitted when the part is destroyed.
         */
        destroyed = new Observable<[part: Part]>();

        /**
         * Bubbling event indicating changes to part structure.
         */
        change = new Observable<[type: Lifecycle.Change, part: Part]>();
    }

    export enum Change {
        Installed = "installed",
        Destroyed = "destroyed",
        PartAdded = "added",
        PartDeleted = "removed",
        ServersChanged = "servers-changed",
        ClientsChanged = "clients-changed",
        IdAssigned = "id-assigned",
        NumberAssigned = "number-assigned",
    }
}
