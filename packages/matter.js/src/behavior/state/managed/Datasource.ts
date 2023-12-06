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
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Observable } from "../../../util/Observable.js";

/**
 * Datasource manages the canonical root of a state tree.
 * 
 * The "state" property of a Behavior is a reference to a Datasource.
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
export function Datasource(options: Datasource.Options): Datasource {
    const config = configure(options);

    return {
        reference(session: Datasource.Session) {
            return options.manager.manage(
                createRootReference(config, session),
                session
            ) as Val.Struct;
        },

        get version() {
            return config.version;
        }
    }
}

export namespace Datasource {
    /**
     * Datasource configuration options.
     */
    export interface Options {
        /**
         * The manager used to manage and validate values.
         */
        manager: ValueManager,

        /**
         * Default values for the datasource.  These may be overridden if there
         * is persistent state present.
         */
        values?: Val.Struct,

        /**
         * The version of the data.
         */
        version?: number,

        /**
         * Events of the form "fieldName$change", if present, emit after
         * field changes commit.
         */
        events?: Record<
            string,
            Observable<Parameters<ValueObserver>>
        >,

        /**
         * An optional third parameter for change notifications.
         */
        eventContext?: unknown,
    }

    /**
     * Session information required for datasource management.
     */
    export interface Session extends AccessEnforcer.Session {
        transaction: Transaction;
        persistence?: PersistenceParticipant;
    }

    export interface ValueObserver {
        (value: Val, oldValue: Val, context?: unknown): void;
    }
}

interface Configuration extends Datasource.Options {
    version: number;
    values: Val.Struct;
}

interface Changes {
    persistent: Record<string, Val>;
    notifications: Array<{
        event: Observable,
        params: Parameters<Datasource.ValueObserver>
    }>;
}

function configure(options: Datasource.Options): Configuration {
    return {
        values: {},
        ...options,
        version: options.version ?? Crypto.getRandomUInt32(),
    }
}

function createRootReference(config: Configuration, session: Datasource.Session) {
    if (config.version === undefined) {
        config.version = Crypto.getRandomUInt32();
    }

    let values = config.values;
    let version = config.version;
    let changes: Changes | undefined;

    const reference: Val.Reference<Val.Struct> = {
        get original() {
            return config.values;
        },

        get value() {
            return values;
        },

        set value(_value) {
            throw new InternalError("Cannot set root reference");
        },

        change() {
            session.transaction.beginSync();
            session.transaction.addParticipant({
                commit1,
                commit2,
                rollback,
                description: config.manager.schema.name,
            });

            values = { ...this.original };
            version++;
            if (version > 0xffffffff) {
                version = 0;
            }

            refreshSubrefs();
        },

        refresh() {
            throw new InternalError("Cannot refresh root reference");
        }
    }

    return reference;

    // Need to invoke this anytime we change values
    function refreshSubrefs() {
        const subrefs = reference.subreferences;
        if (subrefs) {
            for (const key in subrefs) {
                subrefs[key].refresh();
            }
        }
    }

    // In "changed" state, values !== data.values, but here we identify
    // logical changes on a per-property basis
    function computeChanges() {
        changes = undefined;

        if (config.values === values) {
            return;
        }

        for (const name in values) {
            const oldval = config.values[name];
            const newval = values[name];
            if (oldval !== newval && !isDeepEqual(values[name], config.values[name])) {
                if (!changes) {
                    changes = { persistent: {}, notifications: [] };
                }

                // Currently we persist all values unconditionally
                changes.persistent[name] = values[name];

                const event = config.events?.[name];
                if (event) {
                    changes.notifications.push({
                        event,
                        params: [ values[name], config.values[name], config.eventContext ]
                    });
                }
            }
        }

        if (changes) {
            changes.persistent._version = version;
        }
    }

    // For commit phase one we pass values to the persistence layer
    function commit1() {
        computeChanges();
        if (changes) {
            session.persistence?.set(
                config.manager.schema.name,
                changes
            );
        }
    }

    // For commit phase two we make the working values canonical and notify
    // listeners
    function commit2() {
        config.values = values;

        if (!changes) {
            return;
        }

        if (config.events) {
            for (const notification of changes.notifications) {
                notification.event.emit(...notification.params);
            }
        }
    }

    function rollback() {
        ({ values, version} = config);
        refreshSubrefs();
    }
}
