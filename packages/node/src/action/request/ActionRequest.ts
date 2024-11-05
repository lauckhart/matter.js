/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "#general";
import { EndpointNumber } from "#types";
import type { Invoke } from "./Invoke.js";
import type { Read } from "./Read.js";
import { Specifier } from "./Specifier.js";
import type { Subscribe } from "./Subscribe.js";
import type { Write } from "./Write.js";

export class MalformedActionError extends MatterError {}

/**
 * An action is a message transmitted as part of a Matter interaction.
 */
export type ActionRequest = Invoke | Read | Subscribe | Write;

export namespace ActionRequest {
    export interface Definition {
        interactionModelRevision?: number;
    }

    export type Kind = ActionRequest["kind"];

    export interface ElementRequest {
        endpoint?: Specifier.Endpoint;
        cluster?: Specifier.Cluster;
    }

    /**
     * Extract the cluster type from an element request type.
     */
    export type ClusterOf<T extends ElementRequest> = T extends { cluster: Specifier.Cluster }
        ? Specifier.ClusterFor<T["cluster"]>
        : undefined;

    /**
     * Extract the cluster type from an element request.
     */
    export function clusterOf<const T extends ElementRequest>(request: T): ClusterOf<T> {
        if (request.cluster) {
            return Specifier.clusterFor(request.cluster) as ClusterOf<T>;
        }
        return undefined as ClusterOf<T>;
    }

    /**
     * Determine endpoint number for an element request.
     */
    export function endpointIdOf<const T extends ElementRequest>(request: T): EndpointNumber | undefined {
        if (typeof request.endpoint === "number") {
            return request.endpoint;
        }
        return request.endpoint?.number;
    }
}
