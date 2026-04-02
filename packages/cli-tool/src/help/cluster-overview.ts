/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { decamelize } from "@matter/general";
import {
    ClusterModel,
    ClusterVariance,
    CommandModel,
    ElementTag,
    type ValueModel,
    type VarianceCondition,
} from "@matter/model";
import { DefinitionList, Markdown, Printer, type TextBuilder } from "@matter/tools/ansi-text";
import { editorialSummary } from "./editorial.js";
import { MatterStyles } from "./matter-styles.js";

/**
 * Render a cluster overview help page.
 */
export function ClusterOverview(cluster: ClusterModel): Printer.Renderable {
    return {
        renderTo(printer: Printer) {
            const variance = ClusterVariance(cluster);
            const clusterName = decamelize(cluster.propertyName);

            // Header and description
            printer.write(Markdown(`# ${cluster.name}`), "\n");

            const details = cluster.details;
            if (details) {
                printer.write(Markdown(details), "\n");
            }

            // Usage and target
            printer.write(
                Markdown(
                    `**Usage:** \`${clusterName}\` COMMAND [TARGET] [OPTION]...\n\n` +
                        "**Target:** a path (node0/1/onOff), node name, or selector " +
                        "(*:@light, node0,node1:@OnOffLight)",
                ),
                "\n",
            );

            // Base component
            const base = partitionACE(variance.base.mandatory.concat(variance.base.optional));

            // Commands section — always show, prepend get/set
            const cmdEntries = Array<DefinitionList.Entry>();
            cmdEntries.push({ name: MatterStyles.command("get").toString(), description: "Read attribute values" });
            cmdEntries.push({ name: MatterStyles.command("set").toString(), description: "Write attribute values" });
            cmdEntries.push(...commandEntries(base.commands));
            printer.write("\n", Markdown("## Commands"), "\n");
            printer.write(DefinitionList(cmdEntries), "\n");

            // Base attributes
            if (base.attributes.length) {
                printer.write(Markdown("## Attributes"), "\n");
                printer.write(DefinitionList(aceEntries(base.attributes, MatterStyles.attribute)), "\n");
            }

            // Base events
            if (base.events.length) {
                printer.write(Markdown("## Events"), "\n");
                printer.write(DefinitionList(aceEntries(base.events, MatterStyles.event)), "\n");
            }

            // Feature title lookup: abbreviation → human-readable title
            const featureTitles = new Map<string, string>();
            for (const f of cluster.features) {
                featureTitles.set(f.name, f.title || f.name);
            }

            // Feature components
            for (const component of variance.components) {
                const ace = partitionACE(component.mandatory.concat(component.optional));
                if (!ace.commands.length && !ace.attributes.length && !ace.events.length) {
                    continue;
                }

                printer.write(Markdown(`# Feature: ${conditionHeading(component.condition, featureTitles)}`), "\n");

                // Count how many non-empty ACE sections to decide if sub-labels are needed
                const sectionCount =
                    (ace.commands.length ? 1 : 0) + (ace.attributes.length ? 1 : 0) + (ace.events.length ? 1 : 0);

                if (ace.commands.length) {
                    if (sectionCount > 1) {
                        printer.write(Markdown("## Commands"), "\n");
                    }
                    printer.write(DefinitionList(commandEntries(ace.commands)), "\n");
                }

                if (ace.attributes.length) {
                    if (sectionCount > 1) {
                        printer.write(Markdown("## Attributes"), "\n");
                    }
                    printer.write(DefinitionList(aceEntries(ace.attributes, MatterStyles.attribute)), "\n");
                }

                if (ace.events.length) {
                    if (sectionCount > 1) {
                        printer.write(Markdown("## Events"), "\n");
                    }
                    printer.write(DefinitionList(aceEntries(ace.events, MatterStyles.event)), "\n");
                }
            }
        },
    };
}

interface PartitionedACE {
    commands: CommandModel[];
    attributes: ValueModel[];
    events: ValueModel[];
}

function partitionACE(elements: ValueModel[]): PartitionedACE {
    const commands = Array<CommandModel>();
    const attributes = Array<ValueModel>();
    const events = Array<ValueModel>();

    for (const el of elements) {
        switch (el.tag) {
            case ElementTag.Command:
                if ((el as CommandModel).isRequest) {
                    commands.push(el as CommandModel);
                }
                break;
            case ElementTag.Attribute:
                attributes.push(el);
                break;
            case ElementTag.Event:
                events.push(el);
                break;
        }
    }

    return { commands, attributes, events };
}

function aceEntries(elements: ValueModel[], style: TextBuilder): DefinitionList.Entry[] {
    return elements.map(el => ({
        name: style(decamelize(el.propertyName)).toString(),
        description: editorialSummary(el.details),
    }));
}

function commandEntries(commands: CommandModel[]): DefinitionList.Entry[] {
    return commands.map(cmd => ({
        name: MatterStyles.command(decamelize(cmd.propertyName)).toString(),
        description: editorialSummary(cmd.details),
    }));
}

/**
 * Build a human-readable heading from a component's feature condition.
 *
 * Uses the cluster's feature titles rather than reversing the programmatic component name.
 */
function conditionHeading(condition: VarianceCondition | undefined, titles: Map<string, string>): string {
    const title = (abbrev: string) => titles.get(abbrev) ?? abbrev;

    const parts = Array<string>();

    if (condition?.allOf) {
        parts.push(condition.allOf.map(title).join(" + "));
    }
    if (condition?.anyOf) {
        parts.push(condition.anyOf.map(title).join(" or "));
    }
    if (condition?.not) {
        parts.push(`without ${title(condition.not)}`);
    }

    return parts.join(", ") || "Base";
}
