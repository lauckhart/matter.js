/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, ImplementationError, Logger, MatterAggregateError, Observable, camelize } from "@matter/general";
import { ClusterModel, Conformance, ElementTag, Schema, Scope, ValueModel } from "@matter/model";
import type { ClusterNamespace } from "@matter/types";
import { Behavior } from "../Behavior.js";
import { ClusterBehavior } from "./ClusterBehavior.js";
import { introspectionInstanceOf } from "./cluster-behavior-utils.js";

const logger = Logger.get("ValidatedElements");

/**
 * Thrown when a {@link ClusterBehavior} cannot be constructed due to fatal errors.
 */
export class ClusterImplementationError extends MatterAggregateError {
    constructor(name: string, errors: ClusterElementError[]) {
        super(
            errors,
            Diagnostic.upgrade(
                `Cluster behavior ${name} has fatal implementation errors`,
                Diagnostic.squash("Cluster behavior", Diagnostic.strong(name), "has fatal implementation errors"),
            ),
        );
    }
}

/**
 * Thrown when a {@link ClusterBehavior} element is implemented incorrectly.
 */
export class ClusterElementError extends ImplementationError {
    constructor(element: string, message: string) {
        super(
            Diagnostic.upgrade(
                `Error in ${element}: ${message}`,
                Diagnostic.squash("Error in ", Diagnostic.strong(element), ": ", message),
            ),
        );
    }
}

/**
 * Analyzes a ClusterBehavior implementation to ensure it conforms to the Matter specification.
 *
 * As this API is accessible via vanilla JavaScript, validation includes tests for errors that TypeScript otherwise
 * prevents.
 *
 * Records elements supported and a list of errors if validation fails.
 */
export class ValidatedElements {
    /**
     * Supported attributes.
     */
    attributes = new Set<string>();

    /**
     * Attribute name → ID mapping for all supported attributes (including globals).
     */
    attributeIds = new Map<string, number>();

    /**
     * Supported commands.
     */
    commands = new Set<string>();

    /**
     * Supported events.
     */
    events = new Set<string>();

    /**
     * A list of implementation errors, if any.
     */
    errors?: { element: string; message: string; fatal: boolean }[];

    #name: string;
    #type: Behavior.Type;
    #instance?: Behavior;
    #cluster: ClusterNamespace;
    #scope: Scope;

    /**
     * Obtain validation information.
     *
     * Validation may run against the type alone or with a specific instance of the behavior.  The latter option allows
     * for per-instance specialization.
     *
     * @param type the behavior type to analyze
     * @param instance optional concrete instance of the behavior
     */
    constructor(type: ClusterBehavior.Type, instance?: Behavior) {
        this.#type = type;
        this.#instance = instance;
        this.#name = type.name;
        this.#cluster = type.cluster;

        const schema = Schema(type) as ClusterModel;
        this.#scope = Scope(schema);

        if (typeof type !== "function") {
            this.error(undefined, "Is not a class", true);
        }
        if (this.#cluster === undefined) {
            this.error("cluster", "Property missing", true);
            return;
        }
        if (typeof this.#cluster !== "object") {
            this.error("cluster", "Property is not an object", true);
            return;
        }
        if (instance !== undefined && (instance === null || typeof instance !== "object")) {
            this.error("instance", "Is not an object", true);
        }

        this.#validateAttributes();
        this.#validateCommands();
        this.#validateEvents();
    }

    /**
     * If there are errors, log and throw an exception.
     */
    report() {
        if (!this.errors) {
            return;
        }

        let fatalErrors: undefined | ClusterElementError[];

        for (const { element, message, fatal } of this.errors) {
            const error = new ClusterElementError(element, message);

            if (fatal) {
                if (!fatalErrors) {
                    fatalErrors = [];
                }
                fatalErrors.push(error);
            } else {
                logger.warn(error.message);
            }
        }

        if (fatalErrors) {
            throw new ClusterImplementationError(this.#type.name, fatalErrors);
        }
    }

    #validateAttributes() {
        let state;

        if (this.#instance) {
            state = this.#instance.state;
        } else {
            const constructor = this.#type.State;
            if (!constructor) {
                this.error("State", "Property missing", true);
                return;
            }

            try {
                state = new constructor();
            } catch (e) {
                this.error("State", "Not constructable", true);
                return;
            }
        }

        // Enumerate from scope members which includes global attributes
        for (const member of this.#scope.membersOf(this.#scope.owner, { tags: [ElementTag.Attribute] })) {
            if (member.id === undefined) {
                continue;
            }
            const name = camelize(member.name);

            if ((state as Record<string, unknown>)[name] === undefined) {
                // Check if the attribute is optional via schema conformance
                if (!this.#isOptionalElement(name, ElementTag.Attribute)) {
                    this.error(`State.${name}`, "Mandatory element unsupported", false);
                }
                continue;
            }

            this.attributes.add(name);
            this.attributeIds.set(name, member.id);
        }
    }

    #validateCommands() {
        const nsCommands = this.#cluster.commands as
            | Record<string, ClusterNamespace.Command>
            | undefined;
        if (!nsCommands) {
            // No commands in namespace — nothing to validate
            return;
        }

        let implementations;

        if (this.#instance) {
            implementations = this.#instance;
        } else {
            try {
                implementations = introspectionInstanceOf(this.#type);
            } catch (e) {
                this.error("constructor", "Not constructable", true);
                return;
            }
        }

        for (const name in nsCommands) {
            const implementation = (implementations as Record<string, unknown>)[name];
            const isOptional = this.#isOptionalElement(name, ElementTag.Command);

            if (!(name in implementations) || implementation === undefined) {
                if (!isOptional) {
                    this.error(name, `Implementation missing`, true);
                }
                continue;
            }

            if (typeof implementation !== "function") {
                this.error(name, `Implementation is not a function`, true);
                continue;
            }

            if (implementation === Behavior.unimplemented) {
                if (!isOptional) {
                    // TODO - do not pollute the logs with these as Matter spec is in flux (should this include groups
                    //  or just scenes?)
                    if (this.#name.match(/^(?:Groups|Scenes|GroupKeyManagement)(?:Server|Behavior)/)) {
                        continue;
                    }

                    // We treat this error as a warning
                    this.error(name, `Throws unimplemented exception`, false);
                }
                continue;
            }

            this.commands.add(name);
        }
    }

    #validateEvents() {
        const nsEvents = this.#cluster.events as
            | Record<string, ClusterNamespace.Event>
            | undefined;
        if (!nsEvents || Object.keys(nsEvents).length === 0) {
            return;
        }

        const constructor = this.#type.Events;
        if (!constructor) {
            this.error("Events", "Implementation missing", true);
            return;
        }

        let emitters;

        if (this.#instance) {
            emitters = this.#instance.events;
        } else {
            try {
                emitters = new constructor() as unknown as Record<string, Observable>;
            } catch (e) {
                this.error("Events", "Not constructable", true);
                return;
            }
        }

        for (const name in nsEvents) {
            if (!(name in emitters)) {
                if (!this.#isOptionalElement(name, ElementTag.Event)) {
                    this.error(`cluster.events.${name}`, "Implementation missing", true);
                }
                continue;
            }

            this.events.add(name);
        }
    }

    /**
     * Check if an element is optional by consulting the schema conformance.
     */
    #isOptionalElement(name: string, tag: ElementTag): boolean {
        for (const member of this.#scope.membersOf(this.#scope.owner, { tags: [tag] })) {
            if (camelize(member.name) === name) {
                const applicability = (member as ValueModel).effectiveConformance.applicabilityFor(this.#scope);
                return applicability !== Conformance.Applicability.Mandatory;
            }
        }
        // Element not found in schema — treat as optional
        return true;
    }

    private error(element: string | undefined, message: string, fatal: boolean) {
        if (!this.errors) {
            this.errors = [];
        }
        const name = element === undefined ? this.#name : `${this.#name}.${element}`;

        this.errors?.push({ element: name, message, fatal });
    }
}
