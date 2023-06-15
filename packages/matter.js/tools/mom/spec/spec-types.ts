/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Specification } from "../../../src/model/index.js";

// An HTML table
export type Table = {
    // Column name -> defining HTML element
    rows: { [name: string ]: HTMLElement | undefined }[],

    // Single-cell rows, tend to be informational
    notes: HTMLElement[]
};

// A reference to a specific portion of the specification.  Captures details
// as raw HTML DOM nodes from the Matter specification
export type HtmlReference = {
    xref: Specification.CrossReference,
    name: string,
    path: string,
    table?: Table,
    firstParagraph?: HTMLParagraphElement
}

// A reference with details on sub-elements
export type DetailedReference = HtmlReference & {
    details: HtmlReference[]
}

// Intermediate representation of a cluster.  Has all the bits we think we'll
// need but still encoded as ugly HTML
export type ClusterReference = HtmlReference & {
    ids?: DetailedReference,
    revisions?: DetailedReference,
    classifications?: DetailedReference,
    features?: DetailedReference,
    attributes?: DetailedReference,
    commands?: DetailedReference,
    events?: DetailedReference,
    datatypes?: DetailedReference[]
}
