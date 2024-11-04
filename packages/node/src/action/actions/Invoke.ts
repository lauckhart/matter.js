/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FALLBACK_INTERACTIONMODEL_REVISION } from "#protocol";
import { ClusterType, CommandData, InvokeRequest, TlvSchema, TypeFromSchema } from "#types";
import { ImplementationError } from "@matter/general";
import { Action } from "./Action.js";

export interface Invoke extends InvokeRequest {
    kind: "invoke";
}

export function Invoke(definition: Invoke.Definition): Invoke {
    let { interactionModelRevision, suppressResponse, timed: timedRequest } = definition;

    interactionModelRevision ??= FALLBACK_INTERACTIONMODEL_REVISION;
    suppressResponse ??= false;
    timedRequest ??= false;

    return {
        kind: "invoke",
        invokeRequests: definition.commands,
        interactionModelRevision,
        suppressResponse,
        timedRequest,
    };
}

export namespace Invoke {
    export interface Definition extends Action.Definition {
        commands: CommandData[];
        suppressResponse?: boolean;
        timed?: boolean;
    }

    export function Command<const C extends ClusterType>(request: Invoke.CommandRequest<C>): CommandData {
        const result: CommandData = {
            commandPath: {
                clusterId: Action.clusterFor(request.cluster).id,
                commandId: Invoke.commandOf(request).requestId,
            },
        };

        const endpointId = Action.endpointIdOf(request);
        if (endpointId !== undefined) {
            result.commandPath.endpointId = endpointId;
        }

        return result;
    }

    export type CommandIdentifier<C extends ClusterType = ClusterType> =
        | ClusterType.Command
        | (string & keyof C["commands"]);

    export type CommandRequest<
        C extends Action.ClusterSpecifier = Action.ClusterSpecifier,
        CMD extends CommandIdentifier<Action.ClusterFor<C>> = CommandIdentifier<Action.ClusterFor<C>>,
    > = {
        endpoint?: Action.EndpointSpecifier;
        cluster: C;
        command: CMD;
    } & Fields<CommandFor<Action.ClusterFor<C>, CMD>["requestSchema"]>;

    export type Fields<S extends TlvSchema<any>> =
        S extends TlvSchema<void>
            ? {}
            : S extends TlvSchema<null>
              ? { fields?: TypeFromSchema<S> }
              : { fields: TypeFromSchema<S> };

    export type CommandFor<C extends ClusterType, CMD extends CommandIdentifier<C>> = CMD extends string
        ? C["commands"][CMD]
        : CMD extends ClusterType.Command
          ? CMD
          : never;

    export function commandOf<const R extends CommandRequest>(request: R): ClusterType.Command {
        if (typeof request.command === "string") {
            const cluster = Action.clusterOf(request);
            if (cluster === undefined) {
                throw new ImplementationError(`Command named ${request.command} cannot be designated without cluster`);
            }
            const command = cluster.commands[request.command];
            if (command === undefined) {
                throw new ImplementationError(`Cluster ${cluster.name} does not support command ${request.command}`);
            }
            return command as CommandFor<Action.ClusterOf<R>, R["command"]>;
        }
        return request.command as CommandFor<Action.ClusterOf<R>, R["command"]>;
    }
}
