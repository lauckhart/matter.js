/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This demonstrates bringing a "light" device online with matter.js.

import { OnOffServer } from "@project-chip/matter.js/behaviors/on-off";
import { OnOffLightDevice } from "@project-chip/matter.js/devices/OnOffLightDevice";
import { NodeServer } from "@project-chip/matter.js/node";

// Matter exposes functionality in groups called "clusters".  For this example
// device we override the matter.js "On/Off" cluster implementation to print
// status to the console.
//
// Each cluster has a corresponding "behavior" like the OnOffServer we extend
// here.
class ReportingOnOffServer extends OnOffServer {
    // Here we are intercepting the "on" command to the Matter On/Off cluster
    // to print a log message.  You could do this just using event handlers but
    // in a real device you would likely update local state here before state
    // in matter.js.
    override on() {
        console.log("Turning light ON");
        super.on();
    }

    // This is the functional inverse of on() above.  For demonstration
    // purposes we update state ourselves rather than deferring to matter.js's
    // default "off" handler via super.off().
    override off() {
        console.log("Turning light OFF");
        this.state.onOff = false;
    }

    // Here we use event handlers to log on/off state reactively, after it
    // changes.
    override initialize() {
        this.events.onOff$change.on(value => {
            console.log(`Light is now ${value ? "ON" : "OFF"}`);
        });
    }
}

// Devices are compositions of behaviors.  To extend an existing device you
// use builder methods.  In this case we are using with() to install our
// On/Off cluster behavior.
const ExampleLight = OnOffLightDevice.with(ReportingOnOffServer);

// Physical devices appear as "nodes" on a Matter network.  As a device
// implementer you use a NodeServer to bring a device online.
//
// Note there are a large number of options to NodeServer that we are allowing
// to take default values here.
//
// TODO - reference more verbose example
const server = new NodeServer();

// Nodes are a composition of endpoints.  In this case we add a single endpoint
// to the node, our example light device.
server.add(ExampleLight);

// Our application is now built and we can bring the node online.
//
// Note that you may serve multiple nodes from a single process.  We only have
// one, however, so we can use the run() method directly on the node.
await server.run();
