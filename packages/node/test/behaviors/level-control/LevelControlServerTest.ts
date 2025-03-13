/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DimmableLightDevice } from "#devices/dimmable-light";
import { Endpoint } from "#endpoint/Endpoint.js";
import { Time } from "#general";
import { MockServerNode } from "../../node/mock-server-node.js";

describe("LevelControlServer", () => {
    it("emits CurrentLevel and RemainingTime updates quietly", async () => {
        const { node, endpoint, events } = await setup();

        const complete = new Promise<void>(resolve =>
            endpoint.events.levelControl.remainingTime$Changed.online.on(value => {
                if (value === 0) {
                    resolve();
                }
            }),
        );

        await changeLevel(endpoint);

        await complete;

        expect(events).deep.equals([
            { kind: "time", ms: 0, value: 150 },
            { kind: "level", ms: 300, value: 2 },
            { kind: "level", ms: 1000, value: 14 },
            { kind: "level", ms: 1000, value: 24 },
            { kind: "level", ms: 1000, value: 46 },
            { kind: "level", ms: 1000, value: 68 },
            { kind: "level", ms: 1000, value: 78 },
            { kind: "level", ms: 1000, value: 102 },
            { kind: "level", ms: 1000, value: 112 },
            { kind: "level", ms: 1000, value: 136 },
            { kind: "level", ms: 1000, value: 146 },
            { kind: "level", ms: 1000, value: 170 },
            { kind: "level", ms: 1000, value: 180 },
            { kind: "level", ms: 1000, value: 204 },
            { kind: "level", ms: 1000, value: 214 },
            { kind: "level", ms: 1000, value: 238 },
            { kind: "level", ms: 1000, value: 248 },
            { kind: "level", ms: 500, value: 254 },
            { kind: "time", ms: 0, value: 0 },
        ]);

        await node.close();
    });

    it("transitions to off with correct events", async () => {
        const { node, endpoint, events } = await setup();

        await endpoint.set({
            levelControl: {
                currentLevel: 128,
            },

            onOff: {
                onOff: true,
            },
        });

        await node.online({ command: true }, async agent => {
            const endpointAgent = agent.context.agentFor(endpoint);

            await agent.context.transaction.addResources(endpointAgent.levelControl);

            await endpointAgent.levelControl.moveToLevelWithOnOff({
                level: 1,
                transitionTime: 50,
                optionsMask: {},
                optionsOverride: {},
            });
        });

        await MockTime.resolve(endpoint.events.onOff.onOff$Changed, { stepMs: 10 });

        // Need extra effort to receive the final events
        while (events[events.length - 1].kind !== "time") {
            await MockTime.yield();
        }

        expect(endpoint.state.levelControl.currentLevel).equals(1);

        expect(events).deep.equals([
            // Startup
            { kind: "level", value: 128, ms: 0 },

            // Initiate transition
            { kind: "time", value: 50, ms: 0 },

            // Transitioning
            { kind: "level", value: 101, ms: 1000 },
            { kind: "level", value: 71, ms: 1000 },
            { kind: "level", value: 41, ms: 1000 },
            { kind: "level", value: 11, ms: 1000 },

            // Transition complete
            { kind: "level", value: 1, ms: 330 },
            { kind: "time", value: 0, ms: 30 },
        ]);
    });

    it("emits RemainingTime with command changes", async () => {
        const { node, endpoint } = await initializeDimmableLight();

        const remainingTimeReports = Array<number>();

        const complete = new Promise<void>(resolve =>
            endpoint.events.levelControl.remainingTime$Changed.online.on(value => {
                remainingTimeReports.push(value);
                if (value === 0) {
                    resolve();
                }
            }),
        );

        // Partial steps so transition doesn't complete
        await changeLevel(endpoint, 50);

        await MockTime.yield();

        // Start new transition; should report because initiated by command
        await changeLevel(endpoint);

        await complete;

        expect(remainingTimeReports).deep.equals([150, 150, 0]);

        await node.close();
    });
});

async function setup() {
    MockTime.reset();

    const { node, endpoint } = await initializeDimmableLight();

    const events = Array<{
        kind: "level" | "time";
        value: number | null;
        ms: number;
    }>();

    let last = Time.nowMs();

    endpoint.events.levelControl.remainingTime$Changed.online.on(value => {
        events.push({ kind: "time", value, ms: Time.nowMs() - last });
        last = Time.nowMs();
    });

    endpoint.events.levelControl.currentLevel$Changed.online.on(value => {
        events.push({ kind: "level", value, ms: Time.nowMs() - last });
        last = Time.nowMs();
    });

    return { node, endpoint, events };
}

async function initializeDimmableLight() {
    const node = await MockServerNode.createOnline({
        device: undefined,
    });

    const endpoint = await node.add(DimmableLightDevice, {
        onOff: { onOff: true },
        levelControl: {
            managedTransitionTimeHandling: true,
            currentLevel: 0,
        },
    });

    return { node, endpoint };
}

async function changeLevel(endpoint: Endpoint<DimmableLightDevice>, steps = 200) {
    const node = endpoint.owner as MockServerNode;
    await node.online({ command: true }, async agent => {
        const endpointAgent = agent.context.agentFor(endpoint);

        await agent.context.transaction.addResources(endpointAgent.levelControl);

        await endpointAgent.levelControl.moveToLevel({
            level: 254,
            transitionTime: 150,
            optionsMask: {},
            optionsOverride: {},
        });
    });

    for (let i = 0; i < steps; i++) {
        await MockTime.advance(100);
    }
}
