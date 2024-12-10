/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const isSuite = Symbol("is-suite");

interface SuiteDetails extends Record<string, SuiteDetails | TestDetails> {
    [isSuite]: true;
}

const root = {} as SuiteDetails;

export interface TestDetails {
    name: string;
    type: "js" | "ts" | "py" | "yaml";
    disabled?: boolean;
    manual?: boolean;
    applies?: boolean;
    pics?: string[];
}

export namespace TestDetails {
    export function list() {
        // TODO
    }

    export function add(path: string[], test: TestDetails) {
        let suite = root;
        const breadcrumb = Array<string>();
        for (const name of path) {
            let local = suite[name];
            if (!local) {
                local = { [isSuite]: true };
                suite[name] = local;
                suite = local;
                continue;
            }

            breadcrumb.push(name);

            if (!(isSuite in suite)) {
                throw new Error(`Suite ${formatPath(breadcrumb)} conflicts with a test definition`);
            }

            suite = local as SuiteDetails;
        }

        breadcrumb.push(test.name);

        const existing: TestDetails | undefined = suite[test.name];
        if (existing === undefined) {
            suite[test.name] = test;
            return;
        } else if (isSuite in suite) {
            throw new Error(`Suite ${formatPath(breadcrumb)} conflicts with a test definition`);
        }
    }
}

function formatPath(breadcrumb: string[]) {
    return breadcrumb.join(" ➡ ");
}
