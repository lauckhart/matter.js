/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricIndex, NodeId } from "@matter.js/types";

/**
 * This is the "logical" address of a Matter node consisting of a fabric and node ID.
 */
export interface NodeAddress {
    fabricIndex: FabricIndex;
    nodeId: NodeId;
}

const interned = Symbol("interned-logical-address");

const internedAddresses = new Map<FabricIndex, Map<NodeId, NodeAddress>>();

/**
 * Obtain a canonical instance of a logical address.
 *
 * This allows for identification based on object comparison.  Interned addresses render to a string in the format
 * "@<fabric index>:<node id>"
 */
export function NodeAddress(address: NodeAddress): NodeAddress {
    if (interned in address) {
        return address;
    }

    let internedFabric = internedAddresses.get(address.fabricIndex);
    if (internedFabric === undefined) {
        internedAddresses.set(address.fabricIndex, (internedFabric = new Map()));
    }

    let internedAddress = internedFabric.get(address.nodeId);
    if (internedAddress) {
        return internedAddress;
    }

    internedFabric.set(
        address.nodeId,
        (internedAddress = {
            ...address,

            [interned]: true,

            toString() {
                const nodeStr = this.nodeId > 0xffff ? `0x${this.nodeId.toString(16)}` : this.nodeId;
                return `@${this.fabricIndex}:${nodeStr}`;
            },
        } as NodeAddress),
    );

    return internedAddress;
}

/**
 * A collection of items keyed by logical address.
 */
export class NodeAddressMap<T> extends Map<NodeAddress, T> {
    override delete(key: NodeAddress) {
        return super.delete(NodeAddress(key));
    }

    override has(key: NodeAddress) {
        return super.has(NodeAddress(key));
    }

    override set(key: NodeAddress, value: T) {
        return super.set(NodeAddress(key), value);
    }

    override get(key: NodeAddress) {
        return super.get(NodeAddress(key));
    }
}
