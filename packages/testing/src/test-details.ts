/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const suiteKind = Symbol("suite-kind");

function isSuite(member: TestDetails.Suite | TestDetails.Test): member is TestDetails.Suite {
    return suiteKind in member;
}

function createSuite(breadcrumb: string[]): TestDetails.Suite {
    const members = {} as Record<string, TestDetails.Suite | TestDetails.Test>;

    return {
        [suiteKind]: true,

        list(prefix = "") {
            for (const key in members) {
                const member = members[key];
                if (isSuite(member)) {
                    console.log(key, " ➡");
                    member.list(prefix + "    ");
                } else {
                    console.log(key, " ", member.toString());
                }
            }
        },

        suite(name: string) {
            const existing = members[name];
            if (!existing) {
                return (members.name = createSuite([...breadcrumb, name]));
            }
            if (!isSuite(existing)) {
                throw new Error(`Suite definition ${formatPath(breadcrumb)} conflicts with existing test`);
            }
            return existing;
        },

        test(test: TestDetails.Test) {
            const existing = members[test.name];
            if (!existing) {
                return (members.name = { ...test });
            }
            if (isSuite(existing)) {
                throw new Error(`Test definition ${formatPath(breadcrumb)} conflicts with existing suite`);
            }
            for (const key in test) {
                const value = test[key as keyof TestDetails.Test];
                if (value !== undefined) {
                    (existing as any)[key] = value;
                }
            }
            return existing;
        },
    };
}

export const TestDetails = createSuite([]);

export namespace TestDetails {
    export interface Test {
        name: string;
        type: "js" | "ts" | "py" | "yaml";
        disabled?: boolean;
        manual?: boolean;
        applies?: boolean;
        pics?: string[];
    }

    export interface Suite {
        [suiteKind]: true;

        suite(name: string): Suite;
        test(test: Test): Test;
        list(prefix?: string): void;
    }
}

function formatPath(breadcrumb: string[]) {
    return breadcrumb.join(" ➡ ");
}
