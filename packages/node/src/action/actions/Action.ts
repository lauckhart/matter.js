/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "#general";
import { ClusterType, EndpointNumber } from "#types";
import type { Invoke } from "./Invoke.js";
import type { Read } from "./Read.js";
import type { Subscribe } from "./Subscribe.js";
import type { Timed } from "./Timed.js";
import type { Write } from "./Write.js";

export class MalformedActionError extends MatterError {}

/**
 * An action is a message transmitted as part of a Matter interaction.
 */
export type Action = Invoke | Read | Subscribe | Timed | Write;

export namespace Action {
    export interface Definition {
        interactionModelRevision?: number;
    }

    export type Kind = Action["kind"];

    export type ClusterSpecifier = ClusterType | { cluster: ClusterType };

    export type EndpointSpecifier =
        | EndpointNumber
        | { number: EndpointNumber; versions?: Record<string, number>; minEvent?: number };

    export interface ElementRequest {
        endpoint?: EndpointSpecifier;
        cluster?: ClusterSpecifier;
    }

    /**
     * Extract a cluster type from a cluster specifier type.
     */
    export type ClusterFor<T extends ClusterSpecifier> = T extends ClusterType
        ? T
        : T extends { cluster: ClusterType }
          ? T["cluster"]
          : never;

    /**
     * Extract a cluster type from a cluster specifier.
     */
    export function clusterFor<const T extends ClusterSpecifier>(specifier: T) {
        if ("cluster" in specifier) {
            return specifier["cluster"] as ClusterFor<T>;
        }
        return specifier as ClusterFor<T>;
    }

    /**
     * Extract the cluster type from an element request type.
     */
    export type ClusterOf<T extends ElementRequest> = T extends { cluster: ClusterSpecifier }
        ? ClusterFor<T["cluster"]>
        : undefined;

    /**
     * Extract the cluster type from an element request.
     */
    export function clusterOf<const T extends ElementRequest>(request: T): ClusterOf<T> {
        if (request.cluster) {
            return clusterFor(request.cluster) as ClusterOf<T>;
        }
        return undefined as ClusterOf<T>;
    }

    export function endpointIdOf<const T extends ElementRequest>(request: T): EndpointNumber | undefined {
        if (typeof request.endpoint === "number") {
            return request.endpoint;
        }
        return request.endpoint?.number;
    }
}
