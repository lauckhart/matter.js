/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "../../../src/util/String.js";
import { scanSection } from "./html-scanner.js";
import { ClusterDom, ElementDom, Reference } from "./intermediate.js";

type SubsectionCollector = {
    subsection: string,
    collector: ((ref: Reference) => void)
}

export function clusterWarn(...args: any) {
    console.warn(`      ⚠️ ${args.join(' ')}`);
}

// Modify incoming stream to workaround specific spec issues
function applyPatches(subref: Reference, clusterRef: Reference) {
    if (clusterRef.spec == "core" && clusterRef.name == "General Commissioning") {
        if (subref.section == "11.9.6" && subref.name == "Commands" && !subref.table) {
            // In 1.1 spec, command table is not here...
            subref.name = "Ignored";
        } if (subref.section == "11.9.6.1" && subref.name == "Common fields in General Commissioning cluster responses" && subref.table) {
            // ...but here
            subref.name = "Commands";
        }
    }
}

// Normalize table fields that are defined differently in different places
function normalizeField(ref: Reference, from: string, to: string) {
    if (ref.table) {
        for (const r of ref.table) {
            if (r[from]) {
                r[to] = r[from];
                delete r[from];
            }
        }
    }
}

function setFieldDefault(ref: Reference, name: string) {
    if (ref.table) {
        for (const r of ref.table) {
            if (r[name] == undefined) {
                r[name] = undefined;
            }
        }
    }
}

// Collect the bits that define a cluster
export function loadClusterDefinition(clusterRef: Reference) {
    console.log("    ingest");

    // The definition we are building
    const definition: ClusterDom = { ...clusterRef };

    // A stack of functions that ingest subsections
    const collectors = Array<SubsectionCollector>();

    function collectDetails(ref: Reference, target: ElementDom) {
        collectors.push({
            subsection: ref.section,
            collector: (subref: Reference) => {
                target.details.push(subref);
            }
        });
    }

    function defineElement(name: "ids" | "features" | "attributes" | "commands" | "events" | "revisions" | "classifications", ref: Reference) {
        if (!ref.table) {
            // Sometimes there's a section with no table to indicate no
            // elements
            if (ref.firstParagraph?.textContent?.match(/(?:this cluster has no|no cluster specific)/i)) {
                return;
            }
            clusterWarn("no defining table in definition of", name, "for", ref.name, `(${ref.path})`);
            return;
        }

        // Sometimes there's an empty table to indicate no elements
        if (!ref.table.length) {
            return;
        }

        if (definition[name]?.table) {
            clusterWarn("ignoring tertiary definition of", name, "for", ref.name);
            return;
        }

        console.info(`      ${name} § ${ref.section}`);

        collectDetails(ref, definition[name] = { ...ref, details: [] });
    }

    for (const subref of scanSection(clusterRef)) {
        applyPatches(subref, clusterRef);

        if (subref.section == clusterRef.section) {
            definition.firstParagraph = clusterRef.firstParagraph;
        }

        const name = camelize(subref.name).toLowerCase();
        switch (name) {
            case "clusterid":
            case "clusteridentifiers":
                // Load IDs from defining table
                //
                // Core spec uses "identifier", cluster spec uses "id".
                // Because why would you to conform to a standard when you're
                // defining a standard?  Normalize to "ID".
                normalizeField(subref, "identifier", "id");
                defineElement("ids", subref);
                break;

            case "features":
                // Load features from defining table
                defineElement("features", subref)
                break;

            case "revisionhistory":
                normalizeField(subref, "rev", "revision");
                defineElement("revisions", subref);
                break;

            case "classification":
                normalizeField(subref, "context", "scope");
                setFieldDefault(subref, "scope");
                defineElement("classifications", subref);
                break;
    
            case "attributes":
                // Load attributes from defining table and collect details
                defineElement("attributes", subref);
                break;

            case "commands":
                // Load commands from defining table and collect details
                defineElement("commands", subref);
                break;

            case "events":
                // Load events from defining table and collect details
                defineElement("events", subref);
                break;

            case "datatypes":
                // Datatypes are different than everybody else.  The types
                // themselves are defined in subsections.  This is why
                // collectors are a stack
                collectors.push({
                    subsection: subref.section,
                    collector: (ref) => {
                        if (!definition.datatypes) {
                            definition.datatypes = [];
                        }
                        const datatypeDef = { ...ref, details: [] };
                        definition.datatypes.push(datatypeDef);
                        if (ref.table) {
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
                while (collectors.length && !subref.section.startsWith(collectors[collectors.length - 1].subsection)) {
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
