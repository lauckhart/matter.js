/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import "@virtualstate/navigation/polyfill";
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
                .then(html => {
                    this.innerHTML = html;
                    this.#initializeNavigation();
                })
                .catch(console.error);
        } else {
            this.#initializeNavigation();
        }
    }

    #initializeNavigation() {
        navigation.addEventListener("navigate");
        this.#updateCurrent();
    }

    #updateCurrent() {}
}

define(TopNav);
