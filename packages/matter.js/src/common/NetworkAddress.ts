/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NetworkAddress {
    protocol: "ipv4" | "ipv6" | "ble";
}

export namespace NetworkAddress {
    export enum Protocol {
        "ipv4",
        "ipv6",
        "ble",
    }
}
