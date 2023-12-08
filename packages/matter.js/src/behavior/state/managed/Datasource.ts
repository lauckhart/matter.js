/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../../crypto/Crypto.js";
import { AccessController } from "../../AccessController.js";
import { Val } from "./Val.js";
import { Transaction } from "../transaction/Transaction.js";
import { ValueManager } from "./values/ValueManager.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Observable } from "../../../util/Observable.js";
import { Persistence } from "./Persistence.js";
import { camelize, describeList } from "../../../util/String.js";

/**
 * Datasource manages the canonical root of a state tree.
 * 
 * The "state" property of a Behavior is a reference to a Datasource.
 */
export interface Datasource {
    /**
     * Initialize from persisted state.
     */
    initialize(): Promise<void>;

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
        async initialize() {
            let cloned = false;

            const persisted = await config.persistence?.get(config.name) as undefined | Val.Struct;

            if (typeof persisted === "object" && persisted !== null) {
                for (const key in persisted) {
                    const value = persisted[key];

                    if (value !== undefined && value !== config.values[key]) {
                        if (!cloned) {
                            config.values = { ...config.values };
                            cloned = true;
                        }

                        config.values[key] = value;
                    }
                }
            }
        },

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
     * Datasource events.
     */
    export interface Events extends Record<
        string,
        Observable<Parameters<ValueObserver>>
    > {};

    /**
     * Datasource configuration options.
     */
    export interface Options {

        /**
         * The manager used to manage and validate values.
         */
        manager: ValueManager,

        /**
         * Name used in persistence and error messages.  Defaults to
         * {@link manager}'s root schema name.
         */
        name?: string,

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
        events?: Events,

        /**
         * Used for value persistence.
         */
        persistence?: Persistence;
    }

    /**
     * Session information required for datasource management.
     */
    export interface Session extends AccessController.Session {
        transaction?: Transaction;
    }

    export interface ValueObserver {
        (value: Val, oldValue: Val, context?: Datasource.Session): void;
    }
}

interface Configuration extends Datasource.Options {
    name: string;
    version: number;
    values: Val.Struct;
}

interface Changes {
    persistent?: Val.Struct;
    notifications: Array<{
        event: Observable,
        params: Parameters<Datasource.ValueObserver>
    }>;
}

function configure(options: Datasource.Options): Configuration {
    return {
        values: {},
        ...options,
        name: options.name ?? options.manager.schema.name,
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
    
    const persistentFields = new Set(
        config.manager.schema.members.filter(
            field => field.effectiveQuality.nonvolatile
        ).map(
            field => camelize(field.name, false)
        ));

    const reference: Val.Reference<Val.Struct> = {
        get original() {
            return config.values;
        },

        get value() {
            return values;
        },

        set value(_value) {
            throw new InternalError(`Cannot set root reference to ${config.name}`);
        },

        change(mutator) {
            const transaction = session.transaction;

            // If we are transactional ensure transaction is exclusive
            if (transaction) {
                transaction.beginSync();
                transaction.join({
                    commit1,
                    commit2,
                    rollback,
                    description: config.manager.schema.name,
                });
            }

            // Clone values and update version
            values = { ...this.original };
            version++;
            if (version > 0xffffffff) {
                version = 0;
            }

            // If there is a transaction, we must update subreferences now as
            // we won't roll back on (very unlikely) mutation error
            refreshSubrefs();

            // Perform the mutation
            let aborted = false;
            try {
                mutator();
            } catch (e) {
                // If there is no transaction we roll back immediately on
                // failure
                aborted = true;
                if (!transaction) {
                    rollback();
                }
                throw e;
            } finally {
                // If there is no transaction we commit immediately on success
                // and roll back if the commit fails
                if (!aborted && !transaction) {
                    try {
                        commit1();
                        commit2();
                        refreshSubrefs();
                    } catch (e) {
                        rollback();
                        throw e;
                    }
                }
            }
        },

        refresh() {
            throw new InternalError(`Cannot refresh root reference to ${config.name}`);
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
                    changes = { notifications: [] };
                }

                if (persistentFields.has(name)) {
                    if (changes.persistent === undefined) {
                        changes.persistent = {};
                    }
                    changes.persistent[name] = values[name];
                }

                const event = config.events?.[name];
                if (event) {
                    changes.notifications.push({
                        event,
                        params: [ values[name], config.values[name], session ]
                    });
                }
            }
        }

        if (changes) {
            if (changes.persistent === undefined) {
                changes.persistent = {};
            }
            changes.persistent._version = version;
        }
    }

    /**
     * For commit phase one we pass values to the persistence layer if present.
     */
    function commit1() {
        computeChanges();
        if (changes?.persistent) {
            if (!session.transaction) {
                throw new ImplementationError(
                    `Cannot update nonvolatile values ${
                        describeList("and", ...Object.keys(changes.persistent))
                    } because there is no active transaction to perform persistence`
                );
            }

            config.persistence?.set(
                session.transaction,
                config.name,
                changes.persistent
            );
        }
    }

    /**
     * For commit phase two we make the working values canonical and notify
     * listeners.
     */
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

    /**
     * On rollback with just replace values and version with the canonical
     * versions.
     */
    function rollback() {
        ({ values, version} = config);
        refreshSubrefs();
    }
}
