/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../../crypto/Crypto.js";
import { AccessEnforcer } from "../../AccessEnforcer.js";
import { Val } from "./Val.js";
import { Transaction } from "../transaction/Transaction.js";
import { ValueManager } from "./ValueManager.js";
import { InternalError } from "../../../common/MatterError.js";
import { PersistenceParticipant } from "../transaction/PersistenceParticipant.js";

/**
 * Datasource manages the canonical root of a state tree.
 */
export interface Datasource {
    /**
     * Create a managed version of the source data.
     */
    reference(session: Datasource.Session): Val.Struct;

    /**
     * The data's version.
     */
    readonly version: number;
}

/**
 * Create a new datasource.
 */
export function Datasource(
    manager: ValueManager,
    values: Val.Struct,
    version?: number
): Datasource {
    const data: Data = {
        values,
        version: version ?? Crypto.getRandomUInt32(),
    };

    return {
        reference(session: Datasource.Session) {
            return manager.manage(
                createRootReference(data, manager.schema.name, session),
                session
            ) as Val.Struct;
        },

        get version() {
            return data.version;
        }
    }
}

export namespace Datasource {
    export interface Session extends AccessEnforcer.Session {
        transaction: Transaction;
        persistence: PersistenceParticipant;
    }
}

interface Data {
    values: Val.Struct;
    version: number;
}

function createRootReference(data: Data, description: string, session: Datasource.Session): Val.Reference<Val.Struct> {
    let values = data.values;
    let publishedVersion = data.version;

    return {
        original: values,

        get value() {
            return values;
        },

        set value(_value) {
            throw new InternalError("Cannot set root reference");
        },

        change() {
            if (values !== this.original) {
                return;
            }

            session.transaction.beginSync();
            session.transaction.addParticipant({
                async commit1() {
                    session.persistence.set(this.description, values);
                },

                async commit2() {
                    data.values = values;
                    publishedVersion = ++data.version;
                },

                async rollback() {
                    values = data.values;
                    data.version = publishedVersion;
                },

                description
            });

            values = { ...this.original };

            const subrefs = this.subreferences;
            if (subrefs) {
                for (const key in subrefs) {
                    subrefs[key].refresh();
                }
            }
        },

        refresh() {
            throw new InternalError("Cannot refresh root reference");
        }
    }
}
