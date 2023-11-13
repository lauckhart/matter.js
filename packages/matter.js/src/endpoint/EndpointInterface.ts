/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { ClusterClientObj } from "../cluster/client/ClusterClientTypes.js";
import { ClusterServerObj } from "../cluster/server/ClusterServerTypes.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";

/**
 * Metadata about endpoint structure.
 * 
 * TODO - this interface represents a wad of deferred architectural decisions,
 * a quick way to redirect to endpoint-generated cluster management
 */
export interface EndpointInterface {
    id: EndpointNumber | undefined;
    name: string;
    getId(): EndpointNumber;
    removeFromStructure(): void;
    updatePartsList(): EndpointNumber[];
    getChildEndpoints(): EndpointInterface[];
    determineUniqueID(): string | undefined;
    verifyRequiredClusters(): void;
    destroy(): void;

    setStructureChangedCallback(callback: () => void): void;
    hasClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): boolean;
    getClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): ClusterServerObj<A, E> | undefined;
    getClusterServerById(clusterId: ClusterId): ClusterServerObj<Attributes, Events> | undefined;
    getAllClusterServers(): ClusterServerObj<Attributes, Events>[];

    getAllClusterClients(): ClusterClientObj<any, Attributes, Commands, Events>[];
}
