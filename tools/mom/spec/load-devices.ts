/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavigateViaNav, scanSection } from "./scan-section.js";
import { DeviceReference, HtmlReference } from "./spec-types.js";

export function* loadDevices(devices: HtmlReference) {
    let category: string | undefined;
    let device: DeviceReference | undefined;

    function* emit() {
        if (device) {
            yield device;
            device = undefined;
        }
    }

    function add(ref: HtmlReference) {
        // TODO
        ref;
    }

    for (const section of scanSection(devices, NavigateViaNav)) {
        const depth = section.xref.section.split(".").length;
        
        switch (depth) {
            case 1:
                yield* emit();
                category = section.xref.section.replace(/\s+device types?/i, "");
                break;

            case 2:
                yield* emit();
                
                if (section.name.match(/\s+architecture$/i)) {
                    break;
                }

                device = {
                    ...section,
                    name: section.name.replace(/\s+device type/i, ""),
                    category
                }
                break;

            default:
                add(section);
                break;
        }
    }
}
