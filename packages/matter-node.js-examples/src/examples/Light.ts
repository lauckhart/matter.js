/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This demonstrates the simplest method for bringing a "light" online with
// matter.js.

import { OnOffLightDevice } from "@project-chip/matter.js/devices/OnOffLightDevice";
import { OnOffServer } from "@project-chip/matter.js/behaviors/on-off";
import { NodeServer } from "@project-chip/matter.js/node";

// Matter exposes functionality in groups called "clusters".  For this example
// device we override the "On/Off" cluster to print status to the console.
class ReportingOnOffServer extends OnOffServer {
    override on() {
        console.log("Device is ON");
        super.on();
    }

    override off() {
        console.log("Device is OFF");
        super.off();
    }
}

// Physical devices appear as "nodes" on a Matter network.  A NodeServer
// exposes nodes to a network.
const node = new NodeServer();

// An "endpoint" on a node is an individually addressable entity.  Add an
// "On/Off Light" endpoint to the node with our custom on/off implementation.
node.add(OnOffLightDevice.with(ReportingOnOffServer));

// Clean shutdown on first SIGINT.  Subsequent SIGINT is hard abort.
process.once("SIGINT", () => node.abort());

// Bring the node online.  This method will exit when we invoke node.abort()
// above.
await node.run();
