/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FALLBACK_INTERACTIONMODEL_REVISION } from "#protocol";
import {
    AttributePath,
    ClusterType,
    DataVersionFilter,
    EventFilter,
    EventPath,
    GlobalAttributes,
    ReadRequest,
} from "#types";
import { camelize } from "@matter/general";
import { ActionRequest, MalformedActionError } from "./ActionRequest.js";
import { Specifier } from "./Specifier.js";

export interface Read extends ReadRequest {
    kind: "read";
}

export function Read<const C extends Specifier.Cluster>(definition: Read.Definition<C>): Read {
    const { selectors } = definition;
    let { attributes: attributeRequests, versionFilters, events: eventRequests, eventFilters } = definition;

    const result: Read = {
        kind: "read",
        isFabricFiltered: definition.fabricFilter ?? true,
        interactionModelRevision: definition.interactionModelRevision ?? FALLBACK_INTERACTIONMODEL_REVISION,
    };

    if (selectors) {
        if (Array.isArray(selectors)) {
            for (const selector of selectors) {
                reifySelector(selector);
            }
        } else {
            reifySelector(selectors);
        }
    }

    if (!attributeRequests?.length && !eventRequests?.length) {
        throw new MalformedActionError(`Read action designates no attributes or events`);
    }

    if (attributeRequests) {
        result.attributeRequests = attributeRequests;
    }

    if (versionFilters) {
        result.dataVersionFilters = versionFilters;
    }

    if (eventRequests) {
        result.eventRequests = eventRequests;
    }

    if (eventFilters !== undefined) {
        result.eventFilters = eventFilters;
    }

    return result;

    function reifySelector(selector: Read.Selector) {
        switch (selector.kind) {
            case "attribute":
                reifyAttributeSelector(selector);
                break;

            case "event":
                reifyEventSelector(selector);
                break;

            default:
                throw new MalformedActionError(`Invalid selector kind "${(selector as Read.Selector).kind}"`);
        }
    }

    /**
     * Update "real" ReadRequest fields from our convenience attribute "selector".
     */
    function reifyAttributeSelector(selector: Read.AttributeSelector) {
        const cluster = ActionRequest.clusterOf(selector);
        const { endpoint } = selector;

        // Install data version filter if the endpoint reports it has complete version information
        if (typeof endpoint === "object" && typeof endpoint.versions === "object" && typeof cluster === "object") {
            const version = endpoint.versions?.[camelize(cluster.name)];
            if (version !== undefined) {
                const filter = {
                    path: { endpointId: endpoint.number, clusterId: cluster.id },
                    dataVersion: version,
                };
                if (versionFilters === undefined) {
                    versionFilters = [filter];
                } else if (
                    versionFilters.find(
                        ({ path: { endpointId, clusterId } }) =>
                            endpointId === endpoint.number && clusterId === cluster.id,
                    ) === undefined
                ) {
                    versionFilters.push(filter);
                }
            }
        }

        // Configure base AttributePath
        if (attributeRequests === undefined) {
            attributeRequests = [];
        }
        const prototype: AttributePath = {};
        if (endpoint !== undefined) {
            prototype.endpointId = ActionRequest.endpointIdOf(selector);
        }
        if (cluster !== undefined) {
            prototype.clusterId = cluster.id;
        }

        // If the attribute is a wildcard we are done
        let { attributes } = selector;
        if (attributes === undefined) {
            attributeRequests.push(prototype);
            return;
        }

        // Add concrete attribute requests
        if (!Array.isArray(attributes)) {
            attributes = [attributes];
        }
        for (const specifier of attributes) {
            attributeRequests.push({ ...prototype, attributeId: Specifier.attributeFor(cluster, specifier).id });
        }
    }

    /**
     * Update "real" ReadRequest fields from our convenience event "selector"
     */
    function reifyEventSelector(selector: Read.EventSelector) {
        const cluster = ActionRequest.clusterOf(selector);
        const { endpoint } = selector;

        // Install event minimum if the endpoint reports ingested events
        if (typeof endpoint === "object" && endpoint.minEvent !== undefined) {
            if (eventFilters === undefined) {
                eventFilters = [{ eventMin: endpoint.minEvent }];
            }
        }

        // Configure base EventPath
        if (eventRequests === undefined) {
            eventRequests = [];
        }
        const prototype: EventPath = {};
        if (endpoint !== undefined) {
            prototype.endpointId = ActionRequest.endpointIdOf(selector);
        }
        if (cluster !== undefined) {
            prototype.clusterId = cluster.id;
        }

        // If the event is a wildcard we are done
        let { events } = selector;
        if (events === undefined) {
            eventRequests.push(prototype);
            return;
        }

        // Add concrete event requests
        if (!Array.isArray(events)) {
            events = [events];
        }
        for (const specifier of events) {
            eventRequests.push({ ...prototype, eventId: Specifier.eventFor(cluster, specifier).id });
        }
    }
}

export namespace Read {
    export interface Definition<C extends Specifier.Cluster> extends ActionRequest.Definition {
        selectors?: Selector<C> | Selector<C>[];
        attributes?: AttributePath[];
        versionFilters?: DataVersionFilter[];
        events?: EventPath[];
        eventFilters?: EventFilter[];
        fabricFilter?: boolean;
    }

    /**
     * Selects attributes or events to read.
     */
    export type Selector<C extends Specifier.Cluster = Specifier.Cluster> =
        | ({ kind: "attribute" } & AttributeSelector<C>)
        | ({ kind: "event" } & EventSelector<C>);

    /**
     * Selects attributes to read.  Limits fields to legal permutations per the Matter specification.
     */
    export type AttributeSelector<C extends Specifier.Cluster = Specifier.Cluster> =
        | AttributeSelector.Concrete<C>
        | AttributeSelector.FullWildcard
        | AttributeSelector.Global
        | AttributeSelector.WildcardEndpoint<C>
        | AttributeSelector.WildcardAttribute
        | AttributeSelector.Endpoint;

    /**
     * Selects events to read.  Limits fields to legal permutations per the Matter specification.
     */
    export type EventSelector<C extends Specifier.Cluster = Specifier.Cluster> =
        | EventSelector.Concrete<C>
        | EventSelector.FullWildcard
        | EventSelector.WildcardEndpoint<C>
        | EventSelector.WildcardAttribute
        | EventSelector.Endpoint;

    export function Attribute<const T extends AttributeSelector>(selector: T): { kind: "attribute" } & T {
        return {
            kind: "attribute",
            ...selector,
        };
    }

    export function Event<const T extends EventSelector>(selector: T): { kind: "event" } & T {
        return {
            kind: "event",
            ...selector,
        };
    }

    export interface WildcardFlags {
        skipRoot?: boolean;
        skipCustom?: boolean;
        skipDiagnostics?: boolean;
        skipGlobals?: boolean;
        skipAttributeList?: boolean;
        skipCommandList?: boolean;
        skipFixed?: boolean;
        skipChangesOmitted?: boolean;
    }

    export type GlobalAttributeSpecifier = ClusterType.Attribute | keyof GlobalAttributes<any>;

    export namespace AttributeSelector {
        export interface Concrete<C extends Specifier.Cluster> {
            endpoint: Specifier.Endpoint;
            cluster: Specifier.Cluster;
            attributes: Specifier.Attribute<Specifier.ClusterFor<C>> | Specifier.Attribute<Specifier.ClusterFor<C>>[];
        }

        export interface Wildcard {
            flags?: WildcardFlags;
        }

        export interface FullWildcard extends Wildcard {
            endpoint?: undefined;
            cluster?: undefined;
            attributes?: undefined;
        }

        export interface Global extends Wildcard {
            endpoint?: Specifier.Endpoint;
            cluster?: undefined;
            attributes: GlobalAttributeSpecifier | GlobalAttributeSpecifier[];
        }

        export interface WildcardEndpoint<C extends Specifier.Cluster> extends Wildcard {
            endpoint?: undefined;
            cluster: Specifier.Cluster;
            attributes: Specifier.Attribute<Specifier.ClusterFor<C>> | Specifier.Attribute<Specifier.ClusterFor<C>>[];
        }

        export interface WildcardAttribute extends Wildcard {
            endpoint: Specifier.Endpoint;
            cluster: Specifier.Cluster;
            attributes?: undefined;
        }

        export interface Endpoint extends Wildcard {
            endpoint: Specifier.Endpoint;
            cluster?: undefined;
            attributes?: undefined;
        }
    }

    export namespace EventSelector {
        export interface Concrete<C extends Specifier.Cluster> {
            endpoint: Specifier.Endpoint;
            cluster: Specifier.Cluster;
            events: Specifier.Event<Specifier.ClusterFor<C>> | Specifier.Event<Specifier.ClusterFor<C>>[];
        }

        export interface Wildcard {
            flags?: WildcardFlags;
        }

        export interface FullWildcard extends Wildcard {
            endpoint?: undefined;
            cluster?: undefined;
            events?: undefined;
        }

        export interface WildcardEndpoint<C extends Specifier.Cluster> extends Wildcard {
            endpoint?: undefined;
            cluster: Specifier.Cluster;
            events: Specifier.Event<Specifier.ClusterFor<C>> | Specifier.Event<Specifier.ClusterFor<C>>[];
        }

        export interface WildcardAttribute extends Wildcard {
            endpoint: Specifier.Endpoint;
            cluster: Specifier.Cluster;
            events?: undefined;
        }

        export interface Endpoint extends Wildcard {
            endpoint: Specifier.Endpoint;
            cluster?: undefined;
            events?: undefined;
        }
    }
}
