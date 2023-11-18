/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterServerBehaviorBacking } from "../../behavior/server/ClusterServerBehaviorBacking.js";
import { ServerBehaviorBacking } from "../../behavior/server/ServerBehaviorBacking.js";
import { DescriptorServer } from "../../behavior/server/definitions/DescriptorServer.js";
import { Attributes, Commands, Events } from "../../cluster/Cluster.js";
import { ClusterType } from "../../cluster/ClusterType.js";
import { ClusterClientObj } from "../../cluster/client/ClusterClientTypes.js";
import { ClusterServerObj } from "../../cluster/server/ClusterServerTypes.js";
import { ImplementationError, InternalError, NotImplementedError } from "../../common/MatterError.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EndpointInterface } from "../EndpointInterface.js";
import { Part } from "../Part.js";
import { LifecycleBehavior } from "../part/LifecycleBehavior.js";
import { PartOwner } from "../part/PartOwner.js";
import { PartsBehavior } from "../part/PartsBehavior.js";
import { UnmanagedClusterBehavior } from "./UnmanagedClusterBehavior.js";

const SERVER = Symbol("server");
interface ServerPart extends Part {
    [SERVER]?: PartServer;
}

/**
 * PartServer makes a {@link Part} available for remote access as an Endpoint
 * on a Matter network.
 */
export class PartServer implements EndpointInterface, PartOwner {
    #part: Part;
    #name = "";
    #structureChangedCallback?: () => void;
    readonly #clusterServers = new Map<ClusterId, ClusterServerObj<Attributes, Events>>();

    constructor(part: Part) {
        this.#part = part;

        part.behaviors.require(LifecycleBehavior);

        if (!part.behaviors.has(DescriptorServer)) {
            part.behaviors.require(DescriptorServer.set({
                deviceTypeList: [
                    {
                        deviceType: part.type.deviceType,
                        revision: part.type.deviceRevision,
                    }
                ]
            }));
        }

        this.#part.getAgent().get(LifecycleBehavior).events.structure$change(
            () => this.#structureChangedCallback?.()
        );
    }

    initializeBehavior(part: Part, behavior: Behavior.Type): BehaviorBacking {
        let backing;
        if (behavior.prototype instanceof ClusterBehavior) {
            const cluster = (behavior as ClusterBehavior.Type).cluster;
            if (this.#clusterServers.has(cluster.id)) {
                throw new InternalError(`${this.#part.description} behavior ${behavior.name} cluster ${cluster.id} initialized multiple times`);
            }
            backing = new ClusterServerBehaviorBacking(part, behavior as ClusterBehavior.Type);
            this.#clusterServers.set(cluster.id, backing.clusterServer);
        } else {
            backing = new ServerBehaviorBacking(part, behavior);
        }
        return backing;
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
    
    addClusterServer<A extends Attributes, E extends Events>(server: ClusterServerObj<A, E>): void {
        const behavior = UnmanagedClusterBehavior.for(server);

        // This will throw if there's a conflict with a managed behavior
        this.#part.behaviors.require(behavior);

        this.#clusterServers.set(server.id, server as any);
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

    addClusterClient(): void {
        throw new NotImplementedError("Cluster clients unavailable on PartServer");
    }

    getClusterClient(): any {
        throw new NotImplementedError("Cluster clients unavailable on PartServer");
    }

    addChildEndpoint(endpoint: EndpointInterface): void {
        if (endpoint instanceof PartServer) {
            this.#part.getAgent().get(PartsBehavior).add(endpoint.#part);
        } else {
            throw new ImplementationError("Attempt to add unmanaged endpoint as child of Part");
        }
    }

    getChildEndpoint(id: EndpointNumber): EndpointInterface | undefined {
        const parts = this.#part.getAgent().get(PartsBehavior).state.parts;
        for (const part of parts) {
            if (part.id === id) {
                return PartServer.forPart(part);
            }
        }
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
