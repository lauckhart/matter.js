/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement, DeviceTypeElement } from "./index.js"

/**
 * This is the entry to a model of application-level Matter constructs referred
 * to as the "Matter Object Model".  The model aligns closely with the matter
 * specification.
 * 
 * The Matter Object Model architecture attempts to offer:
 * 
 *   - Comprehensive expression of semantics in the Matter Core Specification
 *   - Simultaneous modeling of multiple Matter implementations
 *   - Reasoning about Matter implementations and specifications
 *   - Manipulation of Matter implementations
 *   - Runtime validation of Matter data and interactions
 * 
 * Other representations of the Matter data model in this library offer similar
 * representations with a different focus.  The TLV API models data with a
 * focus on serialization and manipulation of instance values.  The Cluster
 * API models clusters in a form optimized for correct implementation.
 * 
 * All references to "Matter Specification" in the object model corpus refer
 * to Matter Core Specification 1.1.
 */
export type MatterObjectModel = {
    clusters: ClusterElement,
    devices: DeviceTypeElement
}
