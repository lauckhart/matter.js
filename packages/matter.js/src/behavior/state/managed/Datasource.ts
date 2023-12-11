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
import { Resource } from "../transaction/Resource.js";

/**
 * Datasource manages the canonical root of a state tree.
 * 
 * The "state" property of a Behavior is a reference to a Datasource.
 */
export interface Datasource<T extends StateType = StateType> extends Resource {
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
    const internals = configure(options);

    return {
        description: internals.name,

        async initialize() {
            const persisted = await internals.persistence?.get(internals.name) as undefined | Val.Struct;

            if (typeof persisted === "object" && persisted !== null) {
                for (const key in persisted) {
                    const value = persisted[key];

                    if (value !== undefined && value !== internals.values[key]) {
                        internals.values[key] = value;
                    }
                }
            }
        },

        reference(session: Datasource.Session) {
            return options.manager.manage(
                createRootReference(this, internals, session),
                session
            ) as InstanceType<T>;
        },

        get version() {
            return internals.version;
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
         * Optional persistent value storage for non-volatile values.
         */
        persistence?: Persistence,
    }

    /**
     * Session information required for datasource management.
     */
    export interface Session extends AccessControl.Session {
        /**
         * An optional transaction.  If present writes will not be visible
         * outside the transaction until the transaction commits.
         */
        transaction?: Transaction;
    }

    export interface ValueObserver {
        (value: Val, oldValue: Val, context?: Datasource.Session): void;
    }
}

interface Internals extends Datasource.Options {
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

function configure(options: Datasource.Options): Internals {
    return {
        ...options,
        name: options.name ?? options.manager.schema.name,
        version: options.version ?? Crypto.getRandomUInt32(),
        values: new options.type,
    }
}

function createRootReference(resource: Resource, internals: Internals, session: Datasource.Session) {
    if (internals.version === undefined) {
        internals.version = Crypto.getRandomUInt32();
    }

    let values = internals.values;
    let version = internals.version;
    let changes: Changes | undefined;

    const participant = {
        description: internals.manager.schema.name,
        commit1,
        commit2,
        rollback,
    };

    const transaction = session.transaction;
    if (transaction) {
        transaction.promise.finally(reset);
    }

    const fields = new Set<string>;
    const persistentFields = new Set<string>;

    for (const field of internals.manager.schema.members) {
        const name = camelize(field.name);
        fields.add(name);
        if (field.effectiveQuality.nonvolatile) {
            persistentFields.add(name);
        }
    }

    const reference: Val.Reference<Val.Struct> = {
        get original() {
            return internals.values;
        },

        get value() {
            return values;
        },

        set value(_value) {
            throw new InternalError(`Cannot set root reference to ${internals.name}`);
        },

        change(mutator) {
            // If we are transactional ensure transaction is exclusive and we
            // are participating
            if (transaction) {
                transaction.addResourcesSync(resource);
                transaction.addParticipants(participant);
                transaction.beginSync();
            }

            // Clone values if we haven't already
            if (values === internals.values) {
                values = new internals.type;
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
            throw new InternalError(`Cannot refresh root reference to ${internals.name}`);
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

        if (internals.values === values) {
            return;
        }

        for (const name in values) {
            const oldval = internals.values[name];
            const newval = values[name];
            if (oldval !== newval && !isDeepEqual(values[name], internals.values[name])) {
                if (!changes) {
                    changes = { notifications: [] };
                }

                if (persistentFields.has(name)) {
                    if (changes.persistent === undefined) {
                        changes.persistent = {};
                    }
                    changes.persistent[name] = values[name];
                }

                const event = internals.events?.[name];
                if (event) {
                    changes.notifications.push({
                        event,
                        params: [ values[name], internals.values[name], session ]
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

            internals.persistence?.set(
                session.transaction,
                internals.name,
                changes.persistent
            );
        }
    }

    /**
     * For commit phase two we make the working values canonical and notify
     * listeners.
     */
    function commit2() {
        internals.values = values;

        if (!changes) {
            return;
        }

        if (internals.events) {
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
        ({ values, version} = internals);
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
        if (values !== internals.values) {
            rollback();
        }

        transaction?.promise.finally(reset);
    }
}
