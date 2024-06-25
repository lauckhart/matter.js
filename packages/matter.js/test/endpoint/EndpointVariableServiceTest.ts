/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "../../src/environment/Environment.js";
import { MockServerNode } from "../node/mock-server-node.js";

describe("EndpointVariableService", () => {
    describe("root endpoint", () => {
        it("sets property from environment", async () => {
            const environment = new Environment("test");
            environment.vars.addUnixEnvStyle({ MATTER_NODES_NODE0_BASICINFORMATION_VENDORNAME: "Foopers" });
            const node = await MockServerNode.create(MockServerNode.RootEndpoint, { environment });
            expect(node.state.basicInformation.vendorName).equals("Foopers");
        });

        it("sets property from command line", async () => {
            const environment = new Environment("test");
            environment.vars.addArgvStyle(["--nodes-node0-basicInformation-vendorName=Foopers"]);
            const node = await MockServerNode.create(MockServerNode.RootEndpoint, { environment });
            expect(node.state.basicInformation.vendorName).equals("Foopers");
        });

        it("sets property from config", async () => {
            const environment = new Environment("test");
            environment.vars.addConfigStyle({ nodes: { node0: { basicInformation: { vendorName: "Foopers" } } } });
            const node = await MockServerNode.create(MockServerNode.RootEndpoint, { environment });
            expect(node.state.basicInformation.vendorName).equals("Foopers");
        });

        it.only("rejects unknown property", async () => {
            const environment = new Environment("test");
            environment.vars.addUnixEnvStyle({ MATTER_NODES_NODE0_BASICINFORMATION_VENDORSPECIES: "Frog" });
            await expect(MockServerNode.create(MockServerNode.RootEndpoint, { environment })).rejected;
        });
    });

    describe("child endpoint", () => {
        it("sets property from environment", async () => {});

        it("sets property from command line", async () => {});

        it("sets property from config", async () => {});
    });
});
