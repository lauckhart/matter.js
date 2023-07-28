import { esbuildPlugin } from "@web/dev-server-esbuild";
import { puppeteerLauncher } from "@web/test-runner-puppeteer";

export default {
    nodeResolve: true,
    coverage: true,
    files: ["test/**/*Test.ts"],
    browsers: [
        puppeteerLauncher()
    ],
    plugins: [
        esbuildPlugin({
            ts: true
        })
    ]
}
