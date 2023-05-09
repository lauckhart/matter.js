import type { Config } from 'jest';

const config: Config = {
    testMatch: ["<rootDir>/test/**/*Test.ts"],
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*Test.ts'],
    coverageDirectory: "out/coverage",
    moduleNameMapper: {
        // Tell jest where to find sjcl
        'sjcl': '<rootDir>/dist/cjs/sjcl.js',

        '^(\\.{1,2}/.*)\\.[jt]s$': '$1',
    },
    maxWorkers: "50%", // to make sure jest is not using all available resources
};

export default config;
