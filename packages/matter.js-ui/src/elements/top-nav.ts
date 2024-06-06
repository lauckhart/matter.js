/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { define } from "../util/elements.js";
import { render } from "../util/render.js";

class TopNav extends HTMLElement {
    static tag = "top-nav";

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.firstElementChild === undefined) {
            render({ url: "top-nav.md" })
                .then(html => (this.innerHTML = html))
                .catch(console.error);
        }
    }
}

define(TopNav);
