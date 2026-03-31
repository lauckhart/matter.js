/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointSelector } from "#common/EndpointSelector.js";
import { ImplementationError } from "@matter/general";

describe("EndpointSelector", () => {
    describe("path detection", () => {
        it("detects relative path starting with dot", () => {
            const sel = EndpointSelector("./node0/1");
            expect(sel.isPath).true;
            expect(sel.path).equals("./node0/1");
        });

        it("detects absolute path", () => {
            const sel = EndpointSelector("/abs/path");
            expect(sel.isPath).true;
            expect(sel.path).equals("/abs/path");
        });

        it("detects path containing slash", () => {
            const sel = EndpointSelector("node0/1");
            expect(sel.isPath).true;
            expect(sel.path).equals("node0/1");
        });

        it("path toString returns raw path", () => {
            expect(EndpointSelector("./foo/bar").toString()).equals("./foo/bar");
        });
    });

    describe("basic parsing", () => {
        it("bare node name", () => {
            const sel = EndpointSelector("node0");
            expect(sel.isPath).false;
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).undefined;
            expect(sel.fabric).undefined;
        });

        it("node:endpoint numeric", () => {
            const sel = EndpointSelector("node0:1");
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).deep.equals(["1"]);
        });

        it("node:endpoint name", () => {
            const sel = EndpointSelector("node0:light");
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).deep.equals(["light"]);
        });

        it("node:endpoint with @ prefix", () => {
            const sel = EndpointSelector("node0:@light");
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).deep.equals(["@light"]);
        });

        it("empty node with endpoint", () => {
            const sel = EndpointSelector(":1");
            expect(sel.node).undefined;
            expect(sel.endpoint).deep.equals(["1"]);
        });

        it("fabric:node:endpoint", () => {
            const sel = EndpointSelector("1:node0:3");
            expect(sel.fabric).deep.equals(["1"]);
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).deep.equals(["3"]);
        });

        it("fabric:node with empty endpoint", () => {
            const sel = EndpointSelector("Home:node0:");
            expect(sel.fabric).deep.equals(["Home"]);
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).undefined;
        });
    });

    describe("multi-value", () => {
        it("multiple endpoints", () => {
            const sel = EndpointSelector("node0:1,2,3");
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).deep.equals(["1", "2", "3"]);
        });

        it("multiple nodes", () => {
            const sel = EndpointSelector("node0,node1:1");
            expect(sel.node).deep.equals(["node0", "node1"]);
            expect(sel.endpoint).deep.equals(["1"]);
        });

        it("all three fields with array endpoint", () => {
            const sel = EndpointSelector("1:node0:1,2");
            expect(sel.fabric).deep.equals(["1"]);
            expect(sel.node).deep.equals(["node0"]);
            expect(sel.endpoint).deep.equals(["1", "2"]);
        });
    });

    describe("wildcard", () => {
        it("wildcard node with device type endpoint", () => {
            const sel = EndpointSelector("*:@light");
            expect(sel.node).equals("*");
            expect(sel.endpoint).deep.equals(["@light"]);
        });

        it("wildcard node and endpoint", () => {
            const sel = EndpointSelector("*:*");
            expect(sel.node).equals("*");
            expect(sel.endpoint).equals("*");
        });

        it("all three wildcarded", () => {
            const sel = EndpointSelector("*:*:*");
            expect(sel.fabric).equals("*");
            expect(sel.node).equals("*");
            expect(sel.endpoint).equals("*");
        });

        it("wildcard node with bare string endpoint is ok", () => {
            const sel = EndpointSelector("*:light");
            expect(sel.node).equals("*");
            expect(sel.endpoint).deep.equals(["light"]);
        });
    });

    describe("wildcard scoping errors", () => {
        it("rejects wildcard fabric with specific node", () => {
            expect(() => EndpointSelector("*:node0:1")).throws(ImplementationError);
        });

        it("rejects wildcard node with numeric endpoint", () => {
            expect(() => EndpointSelector("*:1")).throws(ImplementationError);
        });
    });

    describe("escaping", () => {
        it("escaped colon in node name", () => {
            const sel = EndpointSelector("node\\:0:1");
            expect(sel.node).deep.equals(["node:0"]);
            expect(sel.endpoint).deep.equals(["1"]);
        });

        it("escaped comma in value", () => {
            const sel = EndpointSelector("a\\,b,c:1");
            expect(sel.node).deep.equals(["a,b", "c"]);
            expect(sel.endpoint).deep.equals(["1"]);
        });

        it("escaped slash does not trigger path detection", () => {
            const sel = EndpointSelector("node0\\/1");
            expect(sel.isPath).false;
            expect(sel.node).deep.equals(["node0/1"]);
        });

        it("escaped asterisk is literal", () => {
            const sel = EndpointSelector("\\*:1");
            expect(sel.node).deep.equals(["*"]);
            expect(sel.endpoint).deep.equals(["1"]);
        });

        it("escaped backslash", () => {
            const sel = EndpointSelector("node\\\\0");
            expect(sel.node).deep.equals(["node\\0"]);
        });

        it("escaped @ is literal, not device type prefix", () => {
            const sel = EndpointSelector("node0:\\@light");
            expect(sel.endpoint).deep.equals(["@light"]);
        });

        it("toString re-escapes special characters", () => {
            expect(EndpointSelector("node\\:0:1").toString()).equals("node\\:0:1");
            expect(EndpointSelector("a\\,b:1").toString()).equals("a\\,b:1");
            expect(EndpointSelector("node\\\\/0").toString()).equals("node\\\\/0");
        });
    });

    describe("other errors", () => {
        it("rejects too many colons", () => {
            expect(() => EndpointSelector("a:b:c:d")).throws(ImplementationError);
        });

        it("rejects empty string", () => {
            expect(() => EndpointSelector("")).throws(ImplementationError);
        });
    });

    describe("toString round-trip", () => {
        it("bare node", () => {
            expect(EndpointSelector("node0").toString()).equals("node0");
        });

        it("node:endpoint", () => {
            expect(EndpointSelector("node0:1").toString()).equals("node0:1");
        });

        it("fabric:node:endpoint", () => {
            expect(EndpointSelector("1:node0:3").toString()).equals("1:node0:3");
        });

        it("multi-value endpoint", () => {
            expect(EndpointSelector("node0:1,2,3").toString()).equals("node0:1,2,3");
        });

        it("empty components preserved", () => {
            expect(EndpointSelector(":1").toString()).equals(":1");
        });

        it("fabric with empty endpoint", () => {
            expect(EndpointSelector("Home:node0:").toString()).equals("Home:node0:");
        });
    });
});
