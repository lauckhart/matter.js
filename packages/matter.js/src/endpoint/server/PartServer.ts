/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "../../behavior/server/definitions/DescriptorServer.js";
import { Attributes, Commands, Events } from "../../cluster/Cluster.js";
import { ClusterType } from "../../cluster/ClusterType.js";
import { ClusterClientObj } from "../../cluster/client/ClusterClientTypes.js";
import { ClusterServerObj } from "../../cluster/server/ClusterServerTypes.js";
import { InternalError } from "../../common/MatterError.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EndpointInterface } from "../EndpointInterface.js";
import { Part } from "../Part.js";
import { LifecycleBehavior } from "../part/LifecycleBehavior.js";
import { PartsBehavior } from "../part/PartsBehavior.js";

const SERVER = Symbol("server");
interface ServerPart extends Part {
    [SERVER]?: PartServer;
}

/**
 * PartServer makes a {@link Part} available for remote access as an Endpoint
 * on a Matter network.
 */
export class PartServer implements EndpointInterface {
    #part: Part;
    #name = "";
    #structureChangedCallback?: () => void;

    readonly #clusterServers = new Map<ClusterId, ClusterServerObj<Attributes, Events>>();

    constructor(part: Part) {
        this.#part = part;

        this.#part.getAgent().get(LifecycleBehavior).events.structure$change(
            () => this.#structureChangedCallback?.()
        );
    }

    get id() {
        return this.#part.id;
    }

    set id(value: EndpointNumber | undefined) {
        this.#part.id = value;
    }

    get name() {
        return this.#name;
    }

    getId(): EndpointNumber {
        if (this.id === undefined) {
            throw new InternalError("Endpoint ID has not been assigned yet");
        }
        return this.id;
    }

    removeFromStructure(): void {
        this.destroy();
        this.#structureChangedCallback = undefined;
    }

    updatePartsList(): EndpointNumber[] {
        // No actual update, parts list is maintained by PartsBehavior
        const descriptor = this.#part.getAgent().get(DescriptorServer);
        return descriptor.state.partsList;
    }

    getChildEndpoints(): EndpointInterface[] {
        const agent = this.#part.getAgent();
        if (agent.has(PartsBehavior)) {
            const parts = agent.get(PartsBehavior);
            return [ ...parts ].map(part => PartServer.forPart(part));
        }
        return [];
    }

    determineUniqueID(): string | undefined {
        return this.#part.uniqueId;
    }

    verifyRequiredClusters(): void {
        this.#part.behaviors.validateRequirements(this.#part.type.requirements.server?.mandatory);
    }

    destroy(): void {
        this.#part.destroy();
    }

    setStructureChangedCallback(callback: () => void): void {
        this.#structureChangedCallback = callback;
    }

    hasClusterServer(cluster: ClusterType): boolean {
        return this.#clusterServers.has(cluster.id);
    }

    getClusterServer<
        const T extends ClusterType
    >(cluster: T): ClusterServerObj<T["attributes"], T["events"]> | undefined {
        const server = this.#clusterServers.get(cluster.id);
        if (server !== undefined) {
            return server as unknown as ClusterServerObj<T["attributes"], T["events"]>;
        }
    }

    getClusterServerById(clusterId: ClusterId): ClusterServerObj<Attributes, Events> | undefined {
        return this.#clusterServers.get(clusterId);
    }

    getAllClusterServers(): ClusterServerObj<Attributes, Events>[] {
        return [ ...this.#clusterServers.values() ];
    }

    getAllClusterClients(): ClusterClientObj<any, Attributes, Commands, Events>[] {
        // TODO -- no binding support yet (or client behaviors)
        return [];
    }

    static forPart(part: Part) {
        let server = (part as ServerPart)[SERVER];
        if (server) {
            return server;
        }

        server = new PartServer(part);

        (part as ServerPart)[SERVER] = server;
        return server;
    }
}
