/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../../src/behavior/Behavior.js";
import { Reactor } from "../../../src/behavior/Reactor.js";
import { ActionContext } from "../../../src/behavior/context/ActionContext.js";
import { Contextual } from "../../../src/behavior/context/Contextual.js";
import { NodeActivity } from "../../../src/behavior/context/server/NodeActivity.js";
import { BehaviorBacking } from "../../../src/behavior/internal/BehaviorBacking.js";
import { Reactors } from "../../../src/behavior/internal/Reactors.js";
import { Agent } from "../../../src/endpoint/Agent.js";
import { Environment } from "../../../src/environment/Environment.js";
import { Observable } from "../../../src/util/Observable.js";
import { MaybePromise } from "../../../src/util/Promises.js";

function MockContext(offline = true) {
    const behavior = {} as Behavior;

    const agent = {
        get(this: Agent) {
            return behavior;
        },
    } as unknown as Agent;

    const context = {
        offline,

        agentFor() {
            return agent;
        },

        get [Contextual.context]() {
            return this;
        },

        get context() {
            return this;
        },
    } as unknown as ActionContext;

    Object.assign(behavior, { context });

    return context;
}

class MockEndpoint {
    event = new Observable<[value: string, context?: ActionContext], MaybePromise<string>>();
    env = new Environment("reactor-test");
    activity = new NodeActivity();
    backing = {
        type: {} as Behavior.Type,
        endpoint: this,
        datasource: {},
    } as unknown as BehaviorBacking;
    reactors: Reactors;
    results = new Array<string>();

    constructor() {
        this.env.set(NodeActivity, this.activity);
        this.reactors = new Reactors(this.backing);
    }

    act<T>(actor: (agent: Agent) => T) {
        const context = MockContext();

        return actor(context.agentFor({} as any));
    }

    reactTo(observable: Observable<any, any> = this.event, reactor: Reactor = this.reactor, options?: Reactor.Options) {
        this.reactors.add(observable, reactor, options);
    }

    reactAsync(options?: Reactor.Options) {
        this.reactTo(
            this.event,
            async (text: string) => await Promise.resolve().then(() => this.reactor(text)),
            options,
        );
    }

    emit(text: string, context?: ActionContext) {
        return this.event.emit(text, context);
    }

    reactor = (text: string) => {
        this.results.push(text);
    };

    expectActivity(active = 1) {
        expect(this.activity.isActive).equals(!!active);
        expect(this.activity.actors.length).equals(active);
    }
}

describe("Reactors", () => {
    it("reacts synchronously", () => {
        const endpoint = new MockEndpoint();

        endpoint.reactTo();

        void endpoint.emit("foo");
        void endpoint.emit("bar");

        endpoint.expectActivity(0);

        expect(endpoint.results).deep.equals(["foo", "bar"]);
    });

    it("reacts synchronously once", () => {
        const endpoint = new MockEndpoint();
        endpoint.reactTo(endpoint.event, endpoint.reactor, { once: true });

        void endpoint.emit("foo");
        void endpoint.emit("bar");

        endpoint.expectActivity(0);

        expect(endpoint.results).deep.equals(["foo"]);
    });

    it("reacts asynchronously", async () => {
        const endpoint = new MockEndpoint();
        endpoint.reactAsync();

        const promise1 = endpoint.emit("foo") as PromiseLike<string>;
        endpoint.expectActivity();
        expect(typeof promise1?.then).equals("function");

        const promise2 = endpoint.emit("bar") as PromiseLike<string>;
        endpoint.expectActivity();
        expect(typeof promise2?.then).equals("function");

        await promise1;
        endpoint.expectActivity();

        await promise2;
        endpoint.expectActivity(0);

        expect(endpoint.results).deep.equals(["foo", "bar"]);
    });

    it("reacts asynchronously once", async () => {
        const endpoint = new MockEndpoint();
        endpoint.reactAsync({ once: true });

        const promise1 = endpoint.emit("foo") as PromiseLike<string>;
        endpoint.expectActivity();
        expect(typeof promise1?.then).equals("function");

        const promise2 = endpoint.emit("bar") as PromiseLike<string>;
        endpoint.expectActivity();
        expect(promise2).undefined;

        await promise1;
        endpoint.expectActivity(0);

        await promise2;

        expect(endpoint.results).deep.equals(["foo"]);
    });

    it("waits for reaction on close", async () => {
        const endpoint = new MockEndpoint();
        endpoint.reactAsync();

        void endpoint.emit("foo");
        void endpoint.emit("bar");

        endpoint.expectActivity(1);
        expect(endpoint.results).deep.equals([]);

        await endpoint.reactors.close();

        endpoint.expectActivity(0);

        expect(endpoint.results).deep.equals(["foo", "bar"]);
    });

    it("waits for once reaction on close", async () => {
        const endpoint = new MockEndpoint();
        endpoint.reactAsync({ once: true });

        void endpoint.emit("foo");
        void endpoint.emit("bar");

        endpoint.expectActivity(1);
        expect(endpoint.results).deep.equals([]);

        await endpoint.reactors.close();

        endpoint.expectActivity(0);

        expect(endpoint.results).deep.equals(["foo"]);
    });

    it("reacts with online agent", async () => {
        const endpoint = new MockEndpoint();
        const context = MockContext(false);

        let reacted = false;

        endpoint.reactTo(endpoint.event, function (this: Behavior, text: string) {
            reacted = true;

            expect(text).equals("foo");
            expect(this.context.offline).false;
            expect(this.context).equals(context);
            expect(this).equals(context.agentFor({} as any).get({} as Behavior.Type));
        });

        void endpoint.emit("foo", context);

        expect(reacted).true;
    });

    it("reacts with offline agent when agent is unavailable", async () => {
        const endpoint = new MockEndpoint();

        let reacted = false;

        endpoint.reactTo(endpoint.event, function (this: Behavior, text: string) {
            reacted = true;

            expect(text).equals("foo");
            expect(this.context.offline).true;
        });

        void endpoint.emit("foo");

        expect(reacted).true;
    });

    it("reacts with offline agent in offline mode", async () => {
        const endpoint = new MockEndpoint();
        const context = MockContext(false);

        let reacted = false;

        endpoint.reactTo(
            endpoint.event,
            function (this: Behavior, text: string) {
                reacted = true;

                expect(text).equals("foo");
                expect(this.context.offline).true;
                expect(this.context).not.equals(context);
            },
            { offline: true },
        );

        void endpoint.emit("foo", context);

        expect(reacted).true;
    });
});
