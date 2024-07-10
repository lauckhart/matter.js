/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lifecycle } from "../../common/Lifecycle.js";
import { ImplementationError, MatterError } from "../../common/MatterError.js";
import { IdentityConflictError, IdentityService } from "../../node/server/IdentityService.js";
import { AsyncConstruction } from "../../util/AsyncConstruction.js";
import { BasicSet, MutableSet, ObservableSet } from "../../util/Set.js";
import { Agent } from "../Agent.js";
import { Endpoint } from "../Endpoint.js";
import { EndpointPartsError } from "../errors.js";
import { EndpointType } from "../type/EndpointType.js";
import { EndpointLifecycle } from "./EndpointLifecycle.js";

/**
 * Thrown when a requested child {@link Endpoint} does not exist.
 */
class PartNotFoundError extends MatterError {}

/**
 * Manages parent-child relationship between endpoints.
 *
 * You can manipulate child parts using {@link MutableSet} interface.
 *
 * Notifications of structural change bubble via {@link Endpoint.lifecycle.changed}.
 */
export class Parts implements MutableSet<Endpoint, Endpoint | Agent>, ObservableSet<Endpoint> {
    #bubbleChange: (type: EndpointLifecycle.Change, endpoint: Endpoint) => void;
    #children = new BasicSet<Endpoint>();
    #endpoint: Endpoint;

    constructor(endpoint: Endpoint) {
        this.#endpoint = endpoint;
        const lifecycle = this.#endpoint.lifecycle;
        this.#bubbleChange = (type, endpoint) => lifecycle.bubble(type, endpoint);

        // Update state in response to mutation of state.parts
        this.#children.added.on(child => this.#adoptPart(child));
    }

    add(child: Endpoint.Definition | Agent) {
        const endpoint = this.#endpointFor(child);
        this.#children.add(endpoint);
        return endpoint;
    }

    delete(child: Endpoint | Agent) {
        return this.#children.delete(this.#endpointFor(child));
    }

    clear() {
        this.#children.clear();
    }

    get(id: string) {
        for (const child of this.#children) {
            if (child.maybeId === id) {
                return child;
            }
        }
    }

    require(id: string) {
        const part = this.get(id);

        if (part === undefined) {
            throw new PartNotFoundError(`Endpoint ${this.#endpoint} has no part ${id}`);
        }

        return part;
    }

    #get(id: string) {
        for (const child of this.#children) {
            if (child.maybeId === id) {
                return child;
            }
        }
    }

    has(identity: string | Endpoint | Agent) {
        if (typeof identity === "string") {
            for (const child of this.#children) {
                if (child.maybeId === identity) {
                    return true;
                }
            }
            return false;
        }

        return this.#children.has(this.#endpointFor(identity));
    }

    get areReady() {
        return [...this.#children].findIndex(child => !child.lifecycle.isTreeReady) === -1;
    }

    indexOf(child: Endpoint | Agent) {
        const endpoint = this.#endpointFor(child);
        let index = 0;

        for (const other of this.#children) {
            if (endpoint === other) {
                return index;
            }
            index++;
        }

        return -1;
    }

    get added() {
        return this.#children.added;
    }

    get deleted() {
        return this.#children.deleted;
    }

    get size() {
        return this.#children.size;
    }

    [Symbol.iterator]() {
        return this.#children[Symbol.iterator]();
    }

    /**
     * Confirm availability of an ID amongst the endpoint's children.
     */
    assertIdAvailable(id: string, endpoint: Endpoint) {
        const other = this.#get(id);
        if (other && other !== endpoint) {
            throw new IdentityConflictError(`${other} is already defined; endpoint IDs must be unique within parent`);
        }
    }

    /**
     * Initialize all uninitialized Parts.
     *
     * Invoked automatically by the owner after behaviors initialize.
     */
    initialize() {
        // Sanity check
        if (!this.#endpoint.owner) {
            throw new ImplementationError(`Cannot initialize ${this.#endpoint} parts because endpoint`);
        }
        if (!this.#endpoint.owner.lifecycle.isReady) {
            throw new ImplementationError(`Cannot initialize ${this.#endpoint} parts because its owner is not ready`);
        }

        for (const endpoint of this) {
            if (endpoint.construction.status === Lifecycle.Status.Inactive) {
                endpoint.construction.start();
            }
        }

        return AsyncConstruction.all(this, errored => {
            const essential = [...errored].filter(endpoint => endpoint.lifecycle.isEssential);
            if (essential.length) {
                return new EndpointPartsError(essential);
            }
        });
    }

    /**
     * Soft-reset all parts.  Invoked automatically by the owner on reset.
     */
    async reset() {
        for (const endpoint of this) {
            await endpoint.reset();
        }
    }

    /**
     * Destroy all parts.  Invoked automatically by the owner on destroy.
     */
    async close() {
        for (const endpoint of this) {
            await endpoint.close();
        }
    }

    /**
     * Take ownership of an endpoint.  Invoked when an endpoint is added.
     */
    #adoptPart(child: Endpoint) {
        if (child.lifecycle.hasId) {
            this.assertIdAvailable(child.id, child);
        }

        // Insertion validation is only possible in a fully configured node. If we are not yet installed then an
        // ancestor will handle validation when we are installed
        if (this.#endpoint.lifecycle.isReady) {
            this.#validateInsertion(child, child);
        }

        child.owner = this.#endpoint;

        child.lifecycle.changed.on((type, endpoint) => this.#bubbleChange(type, endpoint));
        child.lifecycle.destroyed.once(() => this.#disownPart(child));

        if (this.#endpoint.lifecycle.isReady) {
            child.lifecycle.change(EndpointLifecycle.Change.Installed);
        }
    }

    /**
     * Terminate ownership of an endpoint.  Invoked when an endpoint is destroyed or removed from state.parts.
     */
    #disownPart(child: Endpoint) {
        const childLifeCycle = child.lifecycle;
        childLifeCycle.changed.off(this.#bubbleChange);

        this.#children.delete(child);
    }

    #validateInsertion(forefather: Endpoint, endpoint: Endpoint, usedNumbers?: Set<number>) {
        if (endpoint.lifecycle.hasNumber) {
            this.#endpoint.env.get(IdentityService).assertNumberAvailable(endpoint.number, endpoint);
            if (usedNumbers?.has(endpoint.number)) {
                throw new IdentityConflictError(
                    `Cannot add endpoint ${forefather} because descendents have conflicting definitions for endpoint number ${endpoint.number}`,
                );
            }
        }

        if (!endpoint.hasParts) {
            return;
        }

        const children = endpoint.parts;
        if (!children.size) {
            return;
        }

        // We cannot rely on index to track identity of incoming endopint hierarchy because the entries are not yet
        // present in the index
        if (!usedNumbers) {
            usedNumbers = new Set();
        }
        if (endpoint.lifecycle.hasNumber) {
            usedNumbers.add(endpoint.number);
        }

        for (const child of children) {
            this.#validateInsertion(forefather, child, usedNumbers);
        }
    }

    #endpointFor(child: Endpoint.Definition | Agent) {
        if (child instanceof Agent) {
            child = child.endpoint;
        }

        if (!(child instanceof Endpoint)) {
            if ((child as any).type) {
                (child as any).owner = this.#endpoint;
            } else {
                child = {
                    type: child as EndpointType,
                    owner: this.#endpoint,
                };
            }
        }

        return Endpoint.partFor(child);
    }
}
