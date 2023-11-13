/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Descriptor } from "../../../cluster/definitions/DescriptorCluster.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { Part } from "../../../endpoint/Part.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Behavior } from "../../Behavior.js";
import { DescriptorBehavior } from "../../definitions/DescriptorBehavior.js";

/**
 * This is the default server implementation of DescriptorBehavior.
 */
export class DescriptorServer extends DescriptorBehavior {
    declare endpointScope: DescriptorServer.EndpointScope;

    addDeviceTypes(...deviceTypes: DescriptorServer.DeviceType[]) {
        const list = this.state.deviceTypeList;
        nextInput: for (const newDeviceType of deviceTypes) {
            for (const existingDeviceType of this.state.deviceTypeList) {
                if (isDeepEqual(newDeviceType, existingDeviceType)) {
                    continue nextInput;
                }
            }
            list.push(newDeviceType);
        }
        this.state.deviceTypeList = list;
    }

    removeDeviceTypes(...deviceTypes: DescriptorServer.DeviceType[]) {
        const list = [ ...this.state.deviceTypeList ];
        nextInput: for (const newDeviceType of deviceTypes) {
            for (let i = 0; i < list.length; i++) {
                if (isDeepEqual(deviceTypes[i], newDeviceType)) {
                    list.splice(i, 1);
                    continue nextInput;
                }
            }
        }
        this.state.deviceTypeList = list;
    }

    addParts(...parts: Part[]) {
        this.state.partsList = this.addToList(
            this.state.partsList,
            this.defined(parts.map(part => part.id)),
        )
    }

    removeParts(...parts: Part[]) {
        this.state.partsList = this.removeFromList(
            this.state.partsList,
            parts.map(part => part.id)
        )
    }

    addServers(...types: Behavior.Type[]) {
        this.state.serverList = this.addToList(
            this.state.serverList,
            this.getClusterIds(types),
        );
    }

    removeServers(...types: Behavior.Type[]) {
        this.state.serverList = this.removeFromList(
            this.state.serverList,
            this.getClusterIds(types),
        )
    }

    addClients(...types: Behavior.Type[]) {
        this.state.clientList = this.addToList(
            this.state.clientList,
            this.getClusterIds(types),
        )
    }

    removeClients(...types: Behavior.Type[]) {
        this.state.clientList = this.removeFromList(
            this.state.clientList,
            this.getClusterIds(types),
        )
    }

    private addToList<I>(list: I[], items: I[]) {
        return [
            ...new Set([
                ...list,
                ...items,
            ])
        ]
    }

    private removeFromList<I>(list: I[], items: I[]) {
        const set = new Set(list);
        for (const item of items) {
            set.delete(item);
        }
        return [ ...set ] as Exclude<I, undefined>[];
    }

    private getClusterIds(types: Behavior.Type[]) {
        return this.defined(
            types.map(type => (type as { cluster?: { id?: ClusterId } }).cluster?.id)
        );
    }

    private defined<T>(items: (T | undefined)[]) {
        return items.filter(item => item !== undefined) as T[];
    }
}

export namespace DescriptorServer {
    export class EndpointScope extends DescriptorBehavior.EndpointScope {
        /**
         * The device name.
         */
        deviceName = "Unknown";
        
        /**
         * The device classification from the Matter specification.
         */
        deviceClass = DeviceClasses.Simple;
    }

    export type DeviceType = TypeFromSchema<typeof Descriptor.TlvDeviceTypeStruct>;
}
