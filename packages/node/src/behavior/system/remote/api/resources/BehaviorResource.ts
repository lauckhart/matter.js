/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { RootSupervisor } from "#behavior/supervision/RootSupervisor.js";
import { camelize, InternalError } from "@matter/general";
import { ClusterModel, CommandModel } from "@matter/model";
import { ApiResource } from "../ApiResource.js";
import { Envelope } from "../Envelope.js";
import { CommandResource } from "./CommandResource.js";
import { PropertyResource } from "./PropertyResource.js";

/**
 * API item for behaviors.
 */
export class BehaviorResource extends PropertyResource {
    #behavior: Behavior;

    override get valueKind(): ApiResource.Kind {
        return "cluster";
    }

    constructor(behavior: Behavior, parent: ApiResource) {
        const { id, supervisor } = behavior.type;
        if (supervisor === undefined) {
            throw new InternalError(`API behavior reference has no value supervisor`);
        }

        super(parent, id, supervisor, behavior.endpoint.path.at(id));
        this.#behavior = behavior;
    }

    override get value() {
        return this.#behavior.state;
    }

    override write(request: Envelope.Data) {
        const requestEnv = new Envelope({ supervisor: this.supervisor, ...request });
        requestEnv.validate();
        Object.assign(this.#behavior.state, requestEnv.js as Record<string, unknown>);
    }

    override async childFor(id: string) {
        // "state" is a view of the cluster without commands; adds consistency w/ JS API and useful for handling name
        // collision
        if (id === "state") {
            return new PropertyResource(this, "state", this.supervisor, this.dataModelPath.at("state"));
        }

        // For direct children, commands take precedence should there be a name collision
        if (this.schema instanceof ClusterModel) {
            const command = this.schema.conformant.commands.for(id, CommandModel);
            if (command) {
                return new CommandResource(this, this.#behavior, command);
            }
        } else {
            const command = this.schema.get(CommandModel, camelize(id));
            if (command) {
                return new CommandResource(this, this.#behavior, command);
            }
        }

        // Now attributes (or fields in case of non-Matter properties)
        return super.childFor(id);
    }

    override get rootSupervisor() {
        return this.supervisor as RootSupervisor;
    }
}
