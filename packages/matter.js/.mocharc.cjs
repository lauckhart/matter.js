module.exports = {
    "loader": "ts-node/esm",
    "extensions": [ "ts" ],

    // Test suite time is almost entirely TS compilation so progress isn't
    // particularly useful
    //"reporter": "progress",

    "require": "mocha-suppress-logs"
}

if (typeof process !== "undefined" && process?.argv?.length === 2) {
    module.exports.spec = [ "test/**/*Test.ts" ];
}
