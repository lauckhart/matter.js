/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RootEndpoint } from "#endpoints/root";
import { ImplementationError } from "#general";
import { DatatypeModel, FieldElement } from "#model";
import { SubscribeRequestAction } from "#node/action/SubscribeAction.js";
import { Node } from "#node/Node.js";
import { InteractionClient } from "#protocol";
import { ClientNetworkRuntime } from "./ClientNetworkRuntime.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

const DEFAULT_MIN_INTERVAL_FLOOR_SECONDS = 1;

export class NetworkClient extends NetworkBehavior {
    declare internal: NetworkClient.Internal;
    declare state: NetworkClient.State;

    override initialize() {
        const node = this.endpoint.ownerOfType(RootEndpoint) as unknown as Node;
        this.reactTo(node.lifecycle.online, this.startup);
    }

    interact<T>(interactor: (client: InteractionClient) => Promise<T>) {
        const { runtime } = this.internal;
        if (!runtime) {
            throw new ImplementationError("Cannot advertise offline server");
        }
        return runtime.interact(interactor);
    }

    protected async startup() {
        const { startupSubscription } = this.state;
        if (startupSubscription === null) {
            return;
        }

        const subscription = {
            keepSubscriptions: false,
            minIntervalFloorSeconds: DEFAULT_MIN_INTERVAL_FLOOR_SECONDS,
            maxIntervalCeilingSeconds: 0,
            ...startupSubscription,
            ...this.#(startupSubscription),
        };
    }

    /**
     * Define logical schema for fields that should persist.
     */
    static override readonly schema = new DatatypeModel({
        name: "NetworkState",
        type: "struct",

        children: [
            FieldElement({
                name: "startupSubscription",
                type: "any",
                default: { type: "properties", properties: {} },
                quality: "XN",
            }),
        ],
    });

    #defineSubscription(subscription: Partial<SubscribeRequestAction>) {

    }
}

export namespace NetworkClient {
    export class Internal extends NetworkBehavior.Internal {
        declare runtime?: ClientNetworkRuntime;
    }

    export class State extends NetworkBehavior.State {
        /**
         * A subscription installed when the node is first commissioned and when the service is restarted.
         *
         * The default subscription is a wildcard for all attributes and events of the node.  You can set to undefined
         * or filter the fields and values but this will prevent the relevant state values from loading.
         *
         * If this subscription does not include appropriate BasicInformation and Descriptor attributes then the
         * endpoint structure may not initialize fully.
         *
         * Set to null to disable.
         */
        startupSubscription?: Partial<SubscribeRequestAction> | null;
    }
}
