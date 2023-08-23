import { fromRollup } from "@web/dev-server-rollup";
import commonjs from "@rollup/plugin-commonjs";
//import { puppeteerLauncher } from "@web/test-runner-puppeteer";

const commonjsPlugin = fromRollup(commonjs);

export default {
    // Uncomment to run test server for access from a real browser
    //manual: true,

    // Uncomment to load index page in browser window automatically
    //open: true,
    
    nodeResolve: true,
    coverage: true,
    files: ["build/esm/test/**/*Test.js"],

    testRunnerHtml: testFramework => 
        `<html><body>
            <script type="module" src="build/esm/test/support/define-globals.js"></script>
            <script type="module" src="${testFramework}"></script>
        </body></html>`,

    // browsers: [
    //     puppeteerLauncher()
    // ],

    plugins: [
        commonjsPlugin({
            include: [
                "**/node_modules/mocha/**/*",
                "**/node_modules/bn/**/*",
                "**/node_modules/ec/**/*",
                "**/node_modules/chalk/**/*",
                "**/node_modules/ansi-styles/**/*",
                "**/node_modules/color-convert/**/*",
                "**/node_modules/color-name/**/*"
            ],

            esmExternals: true,

            // jest-utils has these requires in a method
            ignore: (path) => path === "path" || path === "url"
        })
    ]
}
