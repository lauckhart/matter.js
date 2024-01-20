/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RootBehavior } from "../behavior/definitions/root/RootBehavior.js";
import { Environment } from "../environment/Environment.js";
import { ImplementationError, InternalError } from "../common/MatterError.js";
import { Part } from "../endpoint/Part.js";
import { RootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { MdnsBroadcaster } from "../mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "../mdns/MdnsScanner.js";
import { Observable } from "../util/Observable.js";
import { BasicSet } from "../util/Set.js";

const logger = Logger.get("Host");

enum Status {
    INACTIVE,
    ACTIVE,
    CANCELLING,
}

/**
 * Host exposes one or more root {@link Part} instances to a Matter network as Matter nodes.
 */
export class Host implements Environment.Task {
    #options: Host.Options;
    #environment: Environment;    
    #nodes = new Set<Part>();
    #active = new BasicSet();
    #status = Status.INACTIVE;
    #mdnsBroadcaster?: MdnsBroadcaster;
    #mdnsScanner?: MdnsScanner;
    #started = Observable<[ started: (part: Part) => void, stopped: (part: Part) => void ]>();
    #canceled = Observable<[]>();
    #stopped = Observable<[]>();

    /**
     * Display name for diagnostics.
     */
    get name() {
        return "Active nodes";
    }

    /**
     * Is the environment running?
     */
    get isActive() {
        return this.#status === Status.ACTIVE;
    }

    /**
     * The host emits this event when it starts.
     */
    get started() {
        return this.#started;
    }

    /**
     * The host emits this event when it aborts.
     */
    get canceled() {
        return this.#canceled;
    }

    /**
     * The host emits this event when it stops.
     */
    get stopped() {
        return this.#stopped;
    }

    constructor(options?: Host.Options) {
        this.#options = options ?? {};
        this.#environment = options?.environment ?? Environment.default;
    }

    /**
     * Add a node to host.
     */
    add(part: Part.Definition<RootEndpoint>) {
        part = Part.from(part);
        for (const other of this.#nodes) {
            if (other.id === part.id) {
                throw new ImplementationError(
                    `An installed node already has ID "${part.id}"; nodes must have unique IDs`
                );
            }
        }

        const agent = part.agent;        
        if (!agent.has(RootBehavior)) {
            throw new ImplementationError(`Node ${part} does not support RootBehavior`)
        }

        agent.get(RootBehavior).host = this;
        
        this.#nodes.add(part);
    }

    /**
     * Bring the server online.
     *
     * This method only returns if startup fails or the host is aborted. After return nodes are destroyed.
     *
     * TODO - wire abort logic into lower levels where applicable
     */
    async run() {
        if (this.#status !== Status.INACTIVE) {
            throw new ImplementationError("Server is already running");
        }

        this.#status = Status.ACTIVE;

        try {
            this.announce(this.#environment);

            this.#environment.tasks.add(this);

            const mdnsVars = this.#options.mdns ?? {} as any;

            let enableIpv4;
            if (mdnsVars.ipv4 === "off") {
                enableIpv4 = false;
            } else {
                enableIpv4 = this.#options.mdns?.ipv4 ?? true;
            }

            this.#mdnsBroadcaster = await MdnsBroadcaster.create({
                enableIpv4,
                multicastInterface: mdnsVars?.announceinterface ?? this.#options.mdns?.discoverInterface,
            });

            if (this.#abort) {
                return;
            }

            this.#mdnsScanner = await MdnsScanner.create({
                enableIpv4,
                netInterface: mdnsVars?.discoverinterface ?? this.#options.mdns?.discoverInterface,
            });

            if (this.#abort) {
                return;
            }

            this.#started.emit(
                part => this.#active.add(part),
                part => this.#active.delete(part),
            );

            await new Promise<void>(resolve => {
                const nodeDeleted = () => {
                    if (this.#active.size) {
                        resolve();
                    }
                    this.#active.deleted.off(nodeDeleted);
                }

                if (!this.#active.size) {
                    nodeDeleted();
                } else {
                    this.#active.deleted.on(nodeDeleted);
                }
            })
        } finally {
            await this.#mdnsBroadcaster?.close();
            await this.#mdnsScanner?.close();
        }
    }

    /**
     * Stop the server.
     */
    cancel() {
        if (this.#status !== Status.ACTIVE) {
            return;
        }

        this.#status = Status.CANCELLING;

        this.#canceled.emit();
    }

    get mdnsBroadcaster() {
        if (!this.#mdnsBroadcaster) {
            throw new InternalError("MDNS broadcaster unavailable while inactive");
        }
        return this.#mdnsBroadcaster;
    }

    get mdnsScanner() {
        if (!this.#mdnsScanner) {
            throw new InternalError("MDNS scanner unavailable while inactive");
        }
        return this.#mdnsScanner;
    }

    protected announce(environment: Environment) {
        logger.notice(environment.announcement)
    }

    get [Diagnostic.presentation]() {
        return Diagnostic.Presentation.List;
    }

    get [Diagnostic.value]() {
        return this.#nodes;
    }

    get #abort() {
        return this.#status === Status.CANCELLING;
    }
}

export namespace Host {
    export interface MdnsOptions {
        discoverInterface?: string;
        announceInterface?: string;
        ipv4?: boolean;
    }

    export interface Options {
        nodes?: Part.Definition<RootEndpoint>[];
        environment?: Environment;
        mdns?: MdnsOptions;
   }
}
