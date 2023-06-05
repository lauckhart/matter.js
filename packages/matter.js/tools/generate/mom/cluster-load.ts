/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../src/log/Logger.js";
import { MatterElement } from "../../../src/model/index.js";
import { camelize } from "../../../src/util/String.js";
import { ClusterReference, DetailedReference, HtmlReference } from "./intermediate.js";
import { scanSection } from "./section-scan.js";

const logger = Logger.get("cluster-load");

type SubsectionCollector = {
    subsection: string,
    collector: ((ref: HtmlReference) => void)
}

// Modify incoming stream to workaround specific spec issues
function applyPatches(subref: HtmlReference, clusterRef: HtmlReference) {
    if (clusterRef.xref.document == MatterElement.Specification.Core && clusterRef.name == "General Commissioning") {
        if (subref.xref.section == "11.9.6" && subref.name == "Commands" && !subref.table) {
            // In 1.1 spec, command table is not here...
            subref.name = "Ignored";
        } if (subref.xref.section == "11.9.6.1" && subref.name == "Common fields in General Commissioning cluster responses" && subref.table) {
            // ...but here
            subref.name = "Commands";
        }
    }
}

// Collect the bits that define a cluster.  Here we are just building a tree
// of HTML nodes.  Conversion to Matter models happens in translate-cluster
export function clusterLoad(clusterRef: HtmlReference) {
    // The definition we are building
    const definition: ClusterReference = { ...clusterRef };

    // A stack of functions that ingest subsections
    const collectors = Array<SubsectionCollector>();

    function collectDetails(ref: HtmlReference, target: DetailedReference) {
        collectors.push({
            subsection: ref.xref.section,
            collector: (subref: HtmlReference) => {
                target.details.push(subref);
            }
        });
    }

    function defineElement(name: "ids" | "features" | "attributes" | "commands" | "events" | "revisions" | "classifications", ref: HtmlReference) {
        if (!ref.table) {
            // Sometimes there's a section with no table to indicate no
            // elements
            if (ref.firstParagraph?.textContent?.match(/(?:this cluster has no|no cluster specific)/i)) {
                return;
            }
            logger.warn("no defining table in definition of", name, "for", ref.name, `(${ref.path})`);
            return;
        }

        // Sometimes there's an empty table to indicate no elements
        if (!ref.table.rows.length) {
            return;
        }

        if (definition[name]?.table) {
            logger.warn("ignoring tertiary definition of", name, "for", ref.name);
            return;
        }

        logger.debug(`${name} § ${ref.xref.section}`);

        collectDetails(ref, definition[name] = { ...ref, details: [] });
    }

    for (const subref of scanSection(clusterRef)) {
        applyPatches(subref, clusterRef);

        if (subref.xref.section == clusterRef.xref.section) {
            definition.firstParagraph = clusterRef.firstParagraph;
        }

        const name = camelize(subref.name).toLowerCase();
        switch (name) {
            case "clusterid":
            case "clusteridentifiers":
                defineElement("ids", subref);
                break;

            case "features":
                defineElement("features", subref)
                break;

            case "revisionhistory":
                defineElement("revisions", subref);
                break;

            case "classification":
                defineElement("classifications", subref);
                break;
    
            case "attributes":
                defineElement("attributes", subref);
                break;

            case "commands":
                defineElement("commands", subref);
                break;

            case "events":
                defineElement("events", subref);
                break;

            case "datatypes":
                // Datatypes are different than everybody else.  The types
                // themselves are defined in subsections.  This is why
                // collectors are a stack
                collectors.push({
                    subsection: subref.xref.section,
                    collector: (dtRef) => {
                        if (!definition.datatypes) {
                            definition.datatypes = [];
                        }
                        const datatypeDef = { ...dtRef, details: [] };
                        logger.debug(`datatype ${dtRef.name} § ${dtRef.xref.section}`);
                        definition.datatypes.push(datatypeDef);
                        if (dtRef.table) {
                            // Probably a struct, enum or bitmap.  These are
                            // sometimes followed with sections that detail
                            // individual items
                            collectDetails(subref, datatypeDef);
                        }
                    }
                })
                break;

            default:
                // If we don't recognize the section name explicitly, pass to
                // collectors so long as we're still in the relevant section
                while (collectors.length && !subref.xref.section.startsWith(collectors[collectors.length - 1].subsection)) {
                    collectors.pop();
                }
                if (collectors.length) {
                    collectors[collectors.length - 1].collector(subref);
                }
                break;
        }
    }

    return definition;
}
