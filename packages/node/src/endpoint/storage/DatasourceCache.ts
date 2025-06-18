/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datasource } from "#behavior/state/managed/Datasource.js";
import { Val } from "#protocol";
import { DatasourceStore } from "./DatasourceStore.js";
import { EndpointStore } from "./EndpointStore.js";

/**
 * Factory function for the default implementation of {@link Datasource.ExternallyMutableStore}.
 */
export function DatasourceCache(
    endpointStore: EndpointStore,
    behaviorId: string,
    initialValues: Val.Struct | undefined,
): Datasource.ExternallyMutableStore {
    return {
        ...DatasourceStore(endpointStore, behaviorId, initialValues),

        async externalSet(values: Val.Struct) {
            await endpointStore.set({ [behaviorId]: values });

            if (this.externalChangeListener) {
                await this.externalChangeListener(values);
            } else {
                if (!this.initialValues) {
                    this.initialValues = {};
                }
                Object.assign(this.initialValues, values);
            }
        },

        externalChangeListener: undefined,
    };
}

DatasourceCache satisfies DatasourceStore.Type;
