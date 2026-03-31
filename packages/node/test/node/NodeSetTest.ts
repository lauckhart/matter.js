/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LightSensorDevice } from "#devices/light-sensor";
import { OnOffLightDevice } from "#devices/on-off-light";
import { OnOffPlugInUnitDevice } from "#devices/on-off-plug-in-unit";
import { Endpoint } from "#endpoint/Endpoint.js";
import { Node } from "#node/Node.js";
import { NodeSet } from "#node/NodeSet.js";
import { ImplementationError } from "@matter/general";
import { EndpointSelector } from "@matter/protocol";
import { MockServerNode } from "./mock-server-node.js";

async function createNode(id: string, ...devices: Endpoint.Definition[]) {
    const node = new MockServerNode({ id });
    for (const device of devices) {
        await node.add(device);
    }
    await node.construction;
    return node;
}

function nodeSetFor(...nodes: Node[]) {
    const map = new Map<string, Node>();
    for (const node of nodes) {
        map.set(node.id, node);
    }
    return new NodeSet({
        get(id: string) {
            const node = map.get(id);
            if (node === undefined) {
                throw new ImplementationError(`Node "${id}" not found`);
            }
            return node;
        },
        ids() {
            return [...map.keys()];
        },
    });
}

describe("NodeSet", () => {
    let node1: MockServerNode;
    let node2: MockServerNode;

    beforeEach(async () => {
        node1 = (await createNode("node1", OnOffLightDevice, OnOffPlugInUnitDevice)) as MockServerNode;
        node2 = (await createNode("node2", LightSensorDevice)) as MockServerNode;
    });

    afterEach(async () => {
        await node1?.close();
        await node2?.close();
    });

    describe("node resolution", () => {
        it("resolves by name", async () => {
            const ns = nodeSetFor(node1, node2);
            const result = await ns.select(EndpointSelector("node1"));
            expect(result).length(1);
            expect(result[0]).equals(node1);
        });

        it("resolves wildcard", async () => {
            const ns = nodeSetFor(node1, node2);
            const result = await ns.select(EndpointSelector("*"));
            expect(result).length(2);
        });

        it("resolves multiple names", async () => {
            const ns = nodeSetFor(node1, node2);
            const result = await ns.select(EndpointSelector("node1,node2"));
            expect(result).length(2);
        });

        it("throws for missing name", () => {
            const ns = nodeSetFor(node1);
            expect(() => ns.select(EndpointSelector("nonexistent"))).throws(ImplementationError);
        });

        it("uses single node when none specified", async () => {
            const ns2 = new NodeSet({
                get(id) {
                    if (id === "node1") return node1;
                    throw new ImplementationError(`Not found: ${id}`);
                },
                ids() {
                    return ["node1"];
                },
            });
            // Selector with no node but endpoint → uses the single available node
            const result2 = await ns2.select(EndpointSelector(":@OnOffLight"));
            expect(result2.length).greaterThan(0);
            expect(result2[0].type.name).equals("OnOffLight");
        });

        it("throws for ambiguous when multiple nodes and no selector", () => {
            const ns = nodeSetFor(node1, node2);
            expect(() => ns.select(EndpointSelector(":@OnOffLight"))).throws("ambiguous");
        });

        it("uses context node when set", async () => {
            const ns = new NodeSet({
                get(id) {
                    throw new ImplementationError(`Not found: ${id}`);
                },
                ids() {
                    return ["node1", "node2"];
                },
                context: node1,
            });
            const result = await ns.select(EndpointSelector(":@OnOffLight"));
            expect(result.length).greaterThan(0);
            expect(result[0].type.name).equals("OnOffLight");
        });
    });

    describe("endpoint resolution", () => {
        it("returns root when endpoint is undefined", async () => {
            const ns = nodeSetFor(node1);
            const result = await ns.select(EndpointSelector("node1"));
            expect(result).length(1);
            expect(result[0]).equals(node1);
        });

        it("finds by device type with @ prefix", async () => {
            const ns = nodeSetFor(node1);
            const result = await ns.select(EndpointSelector("node1:@OnOffLight"));
            expect(result).length(1);
            expect(result[0].type.name).equals("OnOffLight");
        });

        it("finds by device type case-insensitively", async () => {
            const ns = nodeSetFor(node1);
            const result = await ns.select(EndpointSelector("node1:@onofflight"));
            expect(result).length(1);
            expect(result[0].type.name).equals("OnOffLight");
        });

        it("finds by endpoint number", async () => {
            const ns = nodeSetFor(node1);
            // Endpoint 0 is the root
            const result = await ns.select(EndpointSelector("node1:0"));
            expect(result).length(1);
            expect(result[0].maybeNumber).equals(0);
        });

        it("finds all endpoints with wildcard", async () => {
            const ns = nodeSetFor(node1);
            const result = await ns.select(EndpointSelector("node1:*"));
            // Root + 2 devices
            expect(result.length).greaterThanOrEqual(3);
        });

        it("finds by bare string (tries ID then device type)", async () => {
            const ns = nodeSetFor(node1);
            // Bare string should match device type name on specific node
            const result = await ns.select(EndpointSelector("node1:OnOffLight"));
            expect(result).length(1);
            expect(result[0].type.name).equals("OnOffLight");
        });

        it("throws for not-found endpoint on specific node", () => {
            const ns = nodeSetFor(node1);
            expect(() => ns.select(EndpointSelector("node1:@Nonexistent"))).throws(ImplementationError);
        });

        it("silently skips non-matching on wildcard node", async () => {
            const ns = nodeSetFor(node1, node2);
            const result = await ns.select(EndpointSelector("*:@OnOffLight"));
            // Only node1 has OnOffLight; node2 doesn't → silently skip
            expect(result).length(1);
            expect(result[0].type.name).equals("OnOffLight");
        });
    });

    describe("behavior filtering", () => {
        it("filters by behavior on wildcard", async () => {
            const ns = nodeSetFor(node1);
            const result = await ns.select(EndpointSelector("node1:*"), { behavior: "onOff" });
            // Only endpoints with onOff behavior
            for (const ep of result) {
                expect(ep.behaviors.supported["onOff"]).exist;
            }
            expect(result.length).greaterThan(0);
        });

        it("silently excludes non-matching on wildcard node", async () => {
            const ns = nodeSetFor(node1, node2);
            const result = await ns.select(EndpointSelector("*:*"), { behavior: "onOff" });
            for (const ep of result) {
                expect(ep.behaviors.supported["onOff"]).exist;
            }
        });

        it("throws when specific selector has no behavior match", () => {
            const ns = nodeSetFor(node2);
            // node2 has LightSensor which doesn't have onOff
            expect(() => ns.select(EndpointSelector("node2:*"), { behavior: "onOff" })).throws(ImplementationError);
        });
    });

    describe("integration with EndpointSelector", () => {
        it("full round-trip: *:@OnOffLight with behavior filter", async () => {
            const ns = nodeSetFor(node1, node2);
            const selector = EndpointSelector("*:@OnOffLight");
            const result = await ns.select(selector, { behavior: "onOff" });
            expect(result).length(1);
            expect(result[0].type.name).equals("OnOffLight");
        });

        it("rejects path selectors", () => {
            const ns = nodeSetFor(node1);
            expect(() => ns.select(EndpointSelector("./foo"))).throws("Path selectors require CLI context");
        });
    });
});
