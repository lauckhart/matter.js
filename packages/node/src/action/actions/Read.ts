/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FALLBACK_INTERACTIONMODEL_REVISION } from "#protocol";
import { AttributePath, DataVersionFilter, EventPath, ReadRequest } from "#types";
import { Action } from "./Action.js";

export interface Read extends ReadRequest {
    kind: "read";
}

// TODO

export function Read(definition: Read.Definition): Read {
    const { attributes, versions, events, eventMin } = definition;

    const result: Read = {
        kind: "read",
        isFabricFiltered: definition.isFabricFiltered ?? true,
        interactionModelRevision: definition.interactionModelRevision ?? FALLBACK_INTERACTIONMODEL_REVISION,
    };

    if (attributes) {
        result.attributeRequests = attributes;
    }

    if (versions) {
        result.dataVersionFilters = versions;
    }

    if (events) {
        result.eventRequests = events;
    }

    if (eventMin !== undefined) {
        result.eventFilters = [
            {
                eventMin,
            },
        ];
    }

    return result;
}

export namespace Read {
    export interface Definition extends Action.Definition {
        attributes?: AttributePath[];
        versions?: DataVersionFilter[];
        events?: EventPath[];
        eventMin?: number | bigint;
        isFabricFiltered?: boolean;
    }

    export interface Attribute<C extends Action.ClusterSpecifier = Action.ClusterSpecifier>
        extends Action.ElementRequest<C> {
        attribute?: keyof Action.ClusterFor<C>["attributes"];
    }

    export interface Event<C extends Action.ClusterSpecifier = Action.ClusterSpecifier>
        extends Action.ElementRequest<C> {
        event?: keyof Action.ClusterFor<C>["commands"];
    }
}
