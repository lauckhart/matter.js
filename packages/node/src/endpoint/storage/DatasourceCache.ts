/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datasource } from "#behavior/state/managed/Datasource.js";
import { InternalError } from "#general";
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
    let version = initialValues?.[DatasourceCache.VERSION_KEY] as number;
    if (typeof version !== "number") {
        version = Datasource.UNKNOWN_VERSION;
    }

    return {
        ...DatasourceStore(endpointStore, behaviorId, initialValues),

        async externalSet(values: Val.Struct) {
            if (typeof values[DatasourceCache.VERSION_KEY] === "number") {
                version = values[DatasourceCache.VERSION_KEY];
            }

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

        get version() {
            return version;
        },

        set version(_version: number) {
            throw new InternalError("Datasource version must be set via externalSet");
        },
    };
}

DatasourceCache satisfies DatasourceStore.Type;

export namespace DatasourceCache {
    /**
     * Standard key for storing the version.
     *
     * This conveys the version to the {@link Datasource}.
     */
    export const VERSION_KEY = "__version__";
}
