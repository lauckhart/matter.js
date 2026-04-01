/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Domain } from "#domain.js";
import { Matter as matter } from "@matter/model";
import type { ActionContext } from "@matter/node";

export interface DomainCommand {
    (context: ActionContext, ...args: unknown[]): unknown;
    description: string;
    help(domain: Domain): void;
}

export const bin: Record<string, DomainCommand> = {};

export const globals: Record<string, unknown> = {
    matter,
    bin,
};
