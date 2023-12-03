/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeElement } from "./AttributeElement.js";
import { CommandElement } from "./CommandElement.js";
import { FieldElement } from "./FieldElement.js";
import { EventElement } from "./EventElement.js";
import { DatatypeElement } from "./DatatypeElement.js";

/**
 * All Matter data elements.
 */
export type AnyValueElement = AttributeElement | CommandElement | EventElement | FieldElement | DatatypeElement;
