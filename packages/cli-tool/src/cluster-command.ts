/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand, HelpRequest, UsageError } from "#cli-command.js";
import type { Domain } from "#domain.js";
import { DomainCommand } from "#globals.js";
import { Location } from "#location.js";
import { Directory, Stat } from "#stat.js";
import { camelize, decamelize, FormattedText, MaybePromise } from "@matter/general";
import { ClusterModel, CommandModel, ElementTag, Matter, Scope } from "@matter/model";
import type { ActionContext } from "@matter/node";
import { Behavior, Endpoint } from "@matter/node";
import colors from "ansi-colors";

/**
 * Symbol used to tag cluster command functions with their {@link ClusterModel}.
 */
const clusterModelSymbol = Symbol("cluster-model");

interface ClusterCommandFn extends DomainCommand {
    [clusterModelSymbol]: ClusterModel;
}

/**
 * Cache of cluster commands, keyed by cluster propertyName.
 */
const clusterCommandCache = new Map<string, DomainCommand>();

/**
 * Look up a cluster command by kebab-case name.  Returns `undefined` if the name doesn't match a standard cluster.
 */
export function clusterCommandFor(name: string): DomainCommand | undefined {
    const cached = clusterCommandCache.get(name);
    if (cached) {
        return cached;
    }

    const cluster = Matter.clusters(camelize(name));
    if (!cluster) {
        return;
    }

    const command = createClusterCommand(cluster);
    clusterCommandCache.set(name, command);
    return command;
}

/**
 * Create a top-level cluster command that dispatches subcommands.
 */
function createClusterCommand(cluster: ClusterModel): DomainCommand {
    const command = function clusterCommand(this: { domain?: Domain }, context: ActionContext, ...argv: unknown[]) {
        const domain = this?.domain;
        if (!domain?.isDomain) {
            throw new HelpRequest();
        }

        // First non-flag arg is the subcommand name
        const subIdx = argv.findIndex(a => typeof a === "string" && !a.startsWith("-"));
        if (subIdx === -1) {
            throw new HelpRequest();
        }

        const subcommandName = argv[subIdx] as string;
        const afterSub = [...argv.slice(0, subIdx), ...argv.slice(subIdx + 1)];

        // Second non-flag arg is the target
        const targetIdx = afterSub.findIndex(a => typeof a === "string" && !a.startsWith("-"));
        let target: string | undefined;
        let subArgv: unknown[];
        if (targetIdx !== -1) {
            target = afterSub[targetIdx] as string;
            subArgv = [...afterSub.slice(0, targetIdx), ...afterSub.slice(targetIdx + 1)];
        } else {
            subArgv = afterSub;
        }

        // Find the command model
        const cmdModel = findRequestCommand(cluster, subcommandName);
        if (!cmdModel) {
            const available = requestCommands(cluster)
                .map(c => decamelize(c.propertyName))
                .join(", ");
            throw new UsageError(`Unknown command "${subcommandName}". Available: ${available}`);
        }

        // Create a wrapper and invoke it; catch HelpRequest so domain.ts doesn't show cluster-level help
        const wrapper = createSubcommandWrapper(cluster, cmdModel, target);
        try {
            return wrapper.call(this, context, ...subArgv);
        } catch (e) {
            if (e instanceof HelpRequest) {
                wrapper.help(domain);
                return;
            }
            throw e;
        }
    } as ClusterCommandFn;

    command[clusterModelSymbol] = cluster;

    command.help = (domain: Domain) => {
        const cmds = requestCommands(cluster);
        const description = cluster.description ?? "";

        const cmdDetails = cmds.map(cmd => {
            const desc = cmd.description ?? "";
            return [decamelize(cmd.propertyName), desc] as [string, string];
        });

        const maxWidth = cmdDetails.length ? Math.max(...cmdDetails.map(([n]) => n.length)) : 0;
        const detailWidth = domain.terminalWidth - maxWidth - 4;

        const cmdHelp = cmdDetails.map(([name, desc]) => {
            name = colors.blue(name.padEnd(maxWidth));
            desc = FormattedText(desc, detailWidth)
                .join("\n")
                .replace(/\n/g, "".padEnd(maxWidth + 4));
            return `  ${name}  ${desc}`;
        });

        const clusterName = colors.blue(decamelize(cluster.propertyName));

        domain.out(
            [
                `\n${colors.bold("Usage:")} ${clusterName} COMMAND [TARGET] [OPTION]...`,
                "",
                ...FormattedText(description, domain.terminalWidth),
                "",
                colors.bold("Commands:"),
                ...cmdHelp,
            ].join("\n"),
            "\n\n",
        );
    };

    return command;
}

/**
 * Create a {@link DomainCommand} for a specific cluster subcommand.
 *
 * When `target` is provided it's used directly; otherwise target resolution falls back to the current location
 * context.
 */
function createSubcommandWrapper(cluster: ClusterModel, cmdModel: CommandModel, target?: string): DomainCommand {
    return CliCommand.forModel({
        schema: cmdModel,
        name: decamelize(cmdModel.propertyName),
        description: cmdModel.description ?? "",

        resolveTarget(domain: Domain, context: ActionContext) {
            return resolveTarget(domain, cluster.propertyName, context, target);
        },
    });
}

/**
 * Resolve a target endpoint that has the given cluster behavior.
 */
function resolveTarget(
    domain: Domain,
    clusterPropertyName: string,
    context: ActionContext,
    targetPath?: string,
): MaybePromise<Behavior> {
    if (targetPath) {
        return resolveFromPath(domain, clusterPropertyName, targetPath, context);
    }

    // Walk up from current location looking for a behavior or endpoint with this cluster
    let location: Location | undefined = domain.location;
    while (location) {
        const def = location.definition;

        if (def instanceof Behavior) {
            const schema = (def.constructor as Behavior.Type).supervisor?.schema;
            if (schema?.propertyName === clusterPropertyName) {
                return def;
            }
        }

        if (def instanceof Endpoint) {
            const behaviorType = def.behaviors.supported[clusterPropertyName];
            if (behaviorType) {
                return def.agentFor(context).get(behaviorType);
            }
        }

        location = location.parent;
    }

    throw new UsageError(
        `No ${decamelize(clusterPropertyName)} behavior in scope. Specify a target path or cd into a node.`,
    );
}

/**
 * Navigate to a target path and find the cluster behavior on that endpoint.
 */
function resolveFromPath(
    domain: Domain,
    clusterPropertyName: string,
    targetPath: string,
    context: ActionContext,
): MaybePromise<Behavior> {
    const located = domain.location.at(targetPath, undefined, context);

    return MaybePromise.then(located, loc => {
        const def = loc.definition;

        if (def instanceof Behavior) {
            return def;
        }

        if (def instanceof Endpoint) {
            const behaviorType = def.behaviors.supported[clusterPropertyName];
            if (behaviorType) {
                return def.agentFor(context).get(behaviorType);
            }
            throw new UsageError(`Endpoint at "${targetPath}" does not support ${clusterPropertyName}`);
        }

        throw new UsageError(`"${targetPath}" is not an endpoint or behavior`);
    });
}

/**
 * Get request commands for a cluster, using the base (no-feature) conformance.
 */
function requestCommands(cluster: ClusterModel): CommandModel[] {
    const scope = Scope(cluster);
    const commands = scope.membersOf(cluster, {
        tags: [ElementTag.Command],
        conformance: "deconflicted",
    });

    const result = Array<CommandModel>();
    for (const cmd of commands) {
        if ((cmd as CommandModel).isRequest) {
            result.push(cmd as CommandModel);
        }
    }
    return result;
}

/**
 * Find a request command by propertyName within a cluster.
 */
function findRequestCommand(cluster: ClusterModel, name: string): CommandModel | undefined {
    const scope = Scope(cluster);
    const commands = scope.membersOf(cluster, {
        tags: [ElementTag.Command],
        conformance: "deconflicted",
    });

    const cmd = commands(name) as CommandModel | undefined;
    if (cmd?.isRequest) {
        return cmd;
    }
}

/**
 * Stat provider for cluster command functions.
 *
 * Makes cluster commands navigable as directories — `ls onOff` lists subcommands, `cd onOff; toggle` works.
 */
Stat.provide(definition => {
    if (typeof definition !== "function" || !(clusterModelSymbol in definition)) {
        return;
    }

    const cluster = (definition as ClusterCommandFn)[clusterModelSymbol];
    const cmds = requestCommands(cluster);
    const names = cmds.map(c => decamelize(c.propertyName));

    return Directory({
        tag: "cluster",
        name: cluster.description,
        summary: cluster.details,

        paths() {
            return names;
        },

        definitionAt(path: string, _context: ActionContext) {
            const cmdModel = findRequestCommand(cluster, path);
            if (!cmdModel) {
                return;
            }
            // Return a subcommand wrapper without a fixed target — it will resolve from context at invocation
            return createSubcommandWrapper(cluster, cmdModel);
        },
    });
});
