/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { PartServer } from "../../../endpoint/PartServer.js";
import { RootBehavior } from "./RootBehavior.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { UdpInterface } from "../../../net/UdpInterface.js";
import { Observable } from "../../../util/Observable.js";
import { TransactionalInteractionServer } from "../../../node/server/TransactionalInteractionServer.js";

const logger = Logger.get("ServerRuntime");

/**
 * Brings a root {@link Part} online as a matter Node.
 */
export class RootServer extends RootBehavior {
    static override id = "root";

    #offline = Promise.resolve();
    #cancel = () => {};
    #started = Observable<[]>();
    #uptime?: Diagnostic.Elapsed;
    #rootServer?: PartServer;
    #device?: MatterDevice;
    #primaryNetInterface?: UdpInterface;
    #interactionServer?: TransactionalInteractionServer;

    get started() {
        return this.#started;
    }

    override async run() {
        if (this.#uptime !== undefined) {
            throw new ImplementationError("Already started");
        }
        this.#uptime = Diagnostic.elapsed();

        const { listeningAddressIpv6: address, port } = this.#server.configuration.network;


        this.#primaryNetInterface = await UdpInterface.create("udp6", port, address);

        // TODO

        logger.notice(Diagnostic.strong(this.#server.toString()), "is online");

        this.#cancel?.();
        if (this.#uptime === undefined) {
            return;
        }

        logger.notice("Node", Diagnostic.strong(this.#server.toString()), "going offline");

        if (this.#primaryNetInterface && !this.#device) {
            this.#primaryNetInterface.close();
        }

        await this.#device?.stop();
        this.#device = undefined;
        this.#primaryNetInterface = undefined;
        this.#uptime = undefined;
    }

    override cancel() {
        this.#cancel();        
    }

    async [Symbol.asyncDispose]() {
        this.#cancel();
        await this.#offline;

        await this.#interactionServer?.[Symbol.asyncDispose]();
        await this.#rootServer?.[Symbol.asyncDispose]();
    }

    get [Diagnostic.value]() {
        const diagnostics = [
            [
                "Server activity",
                Diagnostic.dict({
                    uptime: this.#uptime ?? Diagnostic.weak("(offline)"),
                    port: this.#primaryNetInterface?.port ?? this.#server.configuration.network.port
                }),
            ]
        ];

        const sessions = this.#device?.getActiveSessionInformation() ?? [];
        for (const session of sessions) {
            const detail = { ...session } as Record<string, unknown>;
            delete detail.name;
            delete detail.secure;
            diagnostics.push([ `Session ${session.name}`, Diagnostic.dict(session) ]);
        }

        return diagnostics;
    }

    protected override async clearStorage() {
        await this.serviceFor(ServerResetService).factoryReset();
    }

    protected override async createMatterDevice() {
        this.#interactionServer = new TransactionalInteractionServer(
            this.rootPart,
            this.#initializedStore,
            this.#configuration.subscription
        );

        return (await super.createMatterDevice())
            .addProtocolHandler(this.#interactionServer);
    }
}
