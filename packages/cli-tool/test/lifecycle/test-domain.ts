/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain, DomainContext, TextWriter } from "#domain.js";
import { Crypto, Entropy, Environment, Filesystem, WebSocketClient } from "@matter/general";
import { NodeJsFilesystem } from "@matter/nodejs";
import "@matter/nodejs-ws";

export interface TestDomain {
    domain: Domain;
    output: string[];
    errors: string[];
    reset(): void;
}

/**
 * Create a {@link Domain} backed by a temporary storage directory.
 *
 * Output and error streams are captured into arrays for assertion.
 */
export async function createTestDomain(tmpDir: string): Promise<TestDomain> {
    const env = new Environment("test");

    // Install platform services from the default environment (installed by @matter/nodejs and @matter/nodejs-ws)
    env.set(Entropy, Environment.default.get(Entropy));
    env.set(Crypto, Environment.default.get(Crypto));
    env.set(WebSocketClient, Environment.default.get(WebSocketClient));

    env.set(Filesystem, new NodeJsFilesystem(tmpDir));

    const output = Array<string>();
    const errors = Array<string>();

    const out: TextWriter = (...text: string[]) => {
        output.push(text.join(""));
    };

    const err: TextWriter = (...text: string[]) => {
        errors.push(text.join(""));
    };

    const cx: DomainContext = {
        description: "test",
        env,
        out,
        err,
        terminalWidth: 120,
        colorize: false,
    };

    const domain = await Domain(cx);

    env.vars.bootstrapped = true;

    return {
        domain,
        output,
        errors,
        reset() {
            output.length = 0;
            errors.length = 0;
        },
    };
}
