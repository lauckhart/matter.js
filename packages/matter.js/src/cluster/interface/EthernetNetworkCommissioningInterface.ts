/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EthernetNetworkCommissioningCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { ByteArray } from "../../util/index.js";

type Networks = TypeFromSchema<typeof EthernetNetworkCommissioningCluster.attributes.networks.schema>;

namespace EthernetNetworkCommissioning {
    export type State = {
        maxNetworks: number;
        networks: Networks[];
        interfaceEnabled: boolean;
        lastNetworkingStatus: number | undefined;
        lastNetworkId: ByteArray | undefined;
        lastConnectErrorValue: number | undefined;
    }

    export interface Client {

        onMaxNetworksChange(value: number, previous: number): void;
        onNetworksChange(value: Networks[], previous: Networks[]): void;
        onInterfaceEnabledChange(value: boolean, previous: boolean): void;
        onLastNetworkingStatusChange(value: number | undefined, previous: number | undefined): void;
        onLastNetworkIdChange(value: ByteArray | undefined, previous: ByteArray | undefined): void;
        onLastConnectErrorValueChange(value: number | undefined, previous: number | undefined): void;
    }

    export interface Server {

        onMaxNetworksChange(value: number, previous: number): void;
        onNetworksChange(value: Networks[], previous: Networks[]): void;
        onInterfaceEnabledChange(value: boolean, previous: boolean): void;
        onLastNetworkingStatusChange(value: number | undefined, previous: number | undefined): void;
        onLastNetworkIdChange(value: ByteArray | undefined, previous: ByteArray | undefined): void;
        onLastConnectErrorValueChange(value: number | undefined, previous: number | undefined): void;
    }
}

export const EthernetNetworkCommissioning: ClusterInterface<EthernetNetworkCommissioning.State, EthernetNetworkCommissioning.Client, EthernetNetworkCommissioning.Server> = {
    definition: EthernetNetworkCommissioningCluster
}
