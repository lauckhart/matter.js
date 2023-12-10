/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../../crypto/Crypto.js";
import { AccessControl } from "../../AccessControl.js";
import { Val } from "./Val.js";
import { Transaction } from "../transaction/Transaction.js";
import { ValueManager } from "./values/ValueManager.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Observable } from "../../../util/Observable.js";
import { Persistence } from "./Persistence.js";
import { camelize, describeList } from "../../../util/String.js";
import { StateType } from "../StateType.js";

/**
 * Datasource manages the canonical root of a state tree.
 * 
 * The "state" property of a Behavior is a reference to a Datasource.
 */
export interface Datasource<T extends StateType = StateType> {
    /**
     * Initialize from persisted state.
     */
    initialize(): Promise<void>;

    /**
     * Create a managed version of the source data.
     */
    reference(session: Datasource.Session): InstanceType<T>;

    /**
     * The data's version.
     */
    readonly version: number;
}

/**
 * Create a new datasource.
 */
export function Datasource<const T extends StateType = StateType>(options: Datasource.Options<T>): Datasource<T> {
    const config = configure(options);

    return {
        async initialize() {
            const persisted = await config.persistence?.get(config.name) as undefined | Val.Struct;

            if (typeof persisted === "object" && persisted !== null) {
                for (const key in persisted) {
                    const value = persisted[key];

                    if (value !== undefined && value !== config.values[key]) {
                        config.values[key] = value;
                    }
                }
            }
        },

        reference(session: Datasource.Session) {
            return options.manager.manage(
                createRootReference(config, session),
                session
            ) as InstanceType<T>;
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
    export interface Options<T extends StateType = StateType> {
        /**
         * The JS class for the root value.
         */
        type: T,

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
    export interface Session extends AccessControl.Session {
        transaction?: Transaction;
    }

    export interface ValueObserver {
        (value: Val, oldValue: Val, context?: Datasource.Session): void;
    }
}

interface Configuration extends Datasource.Options {
    values: Val.Struct;
    name: string;
    version: number;
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
        ...options,
        name: options.name ?? options.manager.schema.name,
        version: options.version ?? Crypto.getRandomUInt32(),
        values: new options.type,
    }
}

function createRootReference(config: Configuration, session: Datasource.Session) {
    if (config.version === undefined) {
        config.version = Crypto.getRandomUInt32();
    }

    let values = config.values;
    let version = config.version;
    let changes: Changes | undefined;

    const participant = {
        commit1,
        commit2,
        rollback,
        description: config.manager.schema.name,
    };

    const transaction = session.transaction;
    if (transaction) {
        transaction.promise.finally(reset);
    }

    const fields = new Set<string>;
    const persistentFields = new Set<string>;

    for (const field of config.manager.schema.members) {
        const name = camelize(field.name);
        fields.add(name);
        if (field.effectiveQuality.nonvolatile) {
            persistentFields.add(name);
        }
    }

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
            // If we are transactional ensure transaction is exclusive
            if (transaction) {
                transaction.beginSync();
                transaction.join(participant);
            }

            // Clone values if we haven't already
            if (values === config.values) {
                values = new config.type;
                for (const field in fields) {
                    values[field] = values[field];
                }
            }

            // Update version
            version++;
            if (version > 0xffff_ffff) {
                version = 0;
            }

            // Point subreferences to the new value
            refreshSubrefs();

            // Perform the mutation
            let autocommit = !transaction;
            try {
                mutator();
            } catch (e) {
                // If there is no transaction we roll back immediately on
                // failure
                if (autocommit) {
                    autocommit = false;
                    rollback();
                }

                throw e;
            } finally {
                // If there is no transaction we commit immediately on success
                // and roll back if the commit fails
                if (!autocommit) {
                    try {
                        commit1();
                        commit2();
                    } catch (e) {
                        rollback();
                        throw e;
                    } finally {
                        refreshSubrefs();
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

    /**
     * Whenever the transaction commits or rolls back we refresh to newest
     * values.
     * 
     * There should be no changes in this state so the rollback below is only
     * to update to the latest value.
     */
    function reset() {
        if (values !== config.values) {
            rollback();
        }

        transaction?.promise.finally(reset);
    }
}
