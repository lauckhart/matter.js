import { esbuildPlugin } from "@web/dev-server-esbuild";
import { puppeteerLauncher } from "@web/test-runner-puppeteer";

export default {
    nodeResolve: true,
    coverage: true,
    files: ["test/**/*Test.ts"],
    //debug: true,
    browsers: [
        puppeteerLauncher()
    ],
    plugins: [
        esbuildPlugin({
            ts: true,
            tsconfig: "tsconfig.test-web.json"
        })
    ],
    testRunnerHtml: testFramework =>
        `<html><body>
            <script type="application/javascript" src="/test/web-setup.js"></script>
            <script type="module" src="${testFramework}"></script>
        </body></html>`
}
