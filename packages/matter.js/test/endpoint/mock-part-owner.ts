import { Behavior } from "../../src/behavior/Behavior.js";
import { ServerBehaviorBacking } from "../../src/behavior/server/ServerBehaviorBacking.js";
import { Part } from "../../src/endpoint/Part.js";
import { PartOwner } from "../../src/endpoint/part/PartOwner.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { ImplementationError, InternalError } from "../../src/common/MatterError.js";
import { BehaviorInitializer } from "../../src/endpoint/part/BehaviorInitializer.js";
import { MockPartStore } from "../behavior/mock-behavior.js";
import { IndexBehavior } from "../../src/behavior/definitions/index/IndexBehavior.js";

export class MockBehaviorInitializer extends BehaviorInitializer {
    #nextId = 1;
    initializeDescendent(part: Part) {
        if (!part.lifecycle.hasNumber) {
            part.number = EndpointNumber(this.#nextId++);
        }
        if (!part.lifecycle.hasId) {
            part.id = part.number.toString();
        }
    }

    createBacking(part: Part, behavior: Behavior.Type) {
        return new ServerBehaviorBacking(part, behavior);
    }
}

export class MockOwner implements PartOwner {
    #stores = new Map<Part, MockPartStore>();
    #root?: Part;
    #behaviorInitializer = new MockBehaviorInitializer();

    get owner() {
        return undefined;
    }

    adoptChild(part: Part) {
        if (this.#root !== undefined) {
            throw new InternalError("Multiple roots disallowed");
        }
        this.#root = part;
    }

    storeFor(part: Part) {
        let store = this.#stores.get(part);
        if (!store) {
            this.#stores.set(part, store = new MockPartStore());
        }
        return store;
    }

    serviceFor<T>(type: abstract new (...args: any[]) => T): T {
        switch (type as unknown) {
            case BehaviorInitializer:
                return this.#behaviorInitializer as T;

            case IndexBehavior:
                if (!this.#root) {
                    throw new ImplementationError(`No root so can't provice IndexBehavior`);
                }
                this.#root.agent.require(IndexBehavior);
                return this.#root.agent.get(IndexBehavior) as T;
        }

        throw new ImplementationError(`Unsupported service ${type.name}`);
    }
}
