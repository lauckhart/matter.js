/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ElementDefinition {
    new (): HTMLElement;
    tag: string;
}

/**
 * Define a custom element if this is a browser.
 */
export function define(element: ElementDefinition) {
    if (typeof globalThis.customElements?.define === "function") {
        globalThis.customElements.define(element.name, element);
    }
}
