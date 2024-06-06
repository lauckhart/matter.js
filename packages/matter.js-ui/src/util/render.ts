/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

/**
 * Load Markdown from a URL and render to HTML.
 */
export function render(options: { url: string }): Promise<string>;

/**
 * Render a Markdown string to HTML
 */
export function render(options: { markdown: string }): string;

export function render(
    options: { markdown: string; url?: undefined } | { markdown?: undefined; url: string },
): string | Promise<string> {
    if (options.markdown !== undefined) {
        return renderMarkdown(options.markdown);
    }

    return fetchAndRender(options.url);
}

const marked = new Marked(
    markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, language) {
            language = hljs.getLanguage(language) ? language : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    }),
);

function renderMarkdown(markdown: string) {
    return marked.parse(markdown);
}

async function fetchAndRender(url: string) {
    return fetch(url).then(async response => renderMarkdown(await response.text()));
}
