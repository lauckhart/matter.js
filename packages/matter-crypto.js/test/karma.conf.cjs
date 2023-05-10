window.jest = require("jest-mock");
window.expect = require("expect");

module.exports = function(config) {
    config.set({
        basePath: "..",
        frameworks: ["jasmine", "karma-typescript"],
        client: {
            jasmine: {
                random: false
            }
        },
        files: [
          'dist/cjs/sjcl.js',
          'src/**/*.ts',
          'test/**/*Test.ts'
        ],
        exclude: [
          'test/implementations/CryptoNodeTest.ts'
        ],
        preprocessors: {
            "src/**/*.ts": ["karma-typescript", "coverage"],
            "test/**/*Test.ts": ["karma-typescript"]
        },
        reporters: ["progress", "coverage", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        karmaTypescriptConfig: {
            tsconfig: "tsconfig.karma.json"
        },
        singleRun: true
    });
};
