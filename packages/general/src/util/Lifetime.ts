/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "#log/Diagnostic.js";
import { DiagnosticPresentation } from "#log/DiagnosticPresentation.js";
import { DiagnosticSource } from "#log/DiagnosticSource.js";
import { Duration } from "#time/Duration.js";
import "#time/StandardTime.js";
import { Time } from "#time/Time.js";
import { Timestamp } from "#time/Timestamp.js";

/**
 * A "lifetime" represents the existence of an entity or ongoing task.
 *
 * This serves as a mechanism for tracking granular information about process state for diagnostic purposes.  A lifetime
 * is present in diagnostic reports until disposed.
 *
 * Lifetimes are hierarchical.  Create sublifetimes using join().
 */
export interface Lifetime extends Disposable, Diagnostic, Lifetime.Owner {
    /**
     * The name of the lifetime used for diagnostic presentation.
     *
     * Any diagnostic (so, any value) may serve as a name.
     */
    readonly name: unknown;

    /**
     * The time at which the lifetime began.
     */
    readonly startedAt: Timestamp;

    /**
     * A "span" is a sub-lifetime created via {@link join}.
     */
    readonly spans: Set<Lifetime>;

    /**
     * Arbitrary details presented as a dictionary with {@link name}.
     */
    readonly details: Record<string, unknown>;

    /**
     * Set if the lifetime is disposed prior to disposal of all {@link spans}.
     */
    readonly zombie: boolean;

    /**
     * Mark this lifetime as closing.
     *
     * Creates a sublifetime specifically for closing this lifetime.  This supports the common pattern of tracking the
     * close process associated with an active lifetime.
     *
     * Calling repeatedly returns the same sublifetime.  Disposing the returned lifetime disposes this lifetime.
     */
    closing(): Lifetime;
}

export function Lifetime(...name: unknown[]) {
    return Lifetime.process.join(...name);
}

class LifetimeImplementation implements Lifetime {
    #name: unknown[];
    #owner?: Lifetime;
    #startedAt: Timestamp;
    #details?: Record<string, unknown>;
    #spans?: Set<Lifetime>;
    #closing?: Lifetime;
    #zombie = false;

    declare [Diagnostic.presentation]: unknown;

    constructor(name: unknown[], owner?: Lifetime) {
        this.#name = name;
        this.#startedAt = Time.nowMs;
        this.#owner = owner;

        if (owner) {
            owner.spans.add(this);
        }
    }

    get spans() {
        if (!this.#spans) {
            this.#spans = new Set();
        }
        return this.#spans;
    }

    get name() {
        return this.#name;
    }

    get startedAt() {
        return this.#startedAt;
    }

    get details() {
        return this.#details ?? {};
    }

    get zombie() {
        return this.#zombie;
    }

    join(...name: unknown[]): Lifetime {
        return new LifetimeImplementation(name, this);
    }

    closing(): Lifetime {
        if (!this.#closing) {
            this.#closing = this.join("closing");

            const disposeClosing = this.#closing[Symbol.dispose].bind(this.#closing);

            this.#closing[Symbol.dispose] = () => {
                disposeClosing();

                this[Symbol.dispose]();
            };
        }

        return this.#closing;
    }

    get [DiagnosticPresentation.value]() {
        // Special case for process lifetime
        if (!this.#owner) {
            return Diagnostic.node("🛠", "Lifetimes", {
                children: this.spans,
            });
        }

        const header: unknown[] = [...this.#name];

        if (this.zombie) {
            header.push(Diagnostic.weak("(zombie)"));
        }

        const details: Record<string, unknown> = {
            up: Duration.format(Timestamp.delta(this.startedAt, Time.nowMs)),
            ...this.#details,
        };

        header.push(Diagnostic.dict(details));

        const result: unknown[] = [header];

        if (this.#spans?.size) {
            result.push(Diagnostic.list(this.spans));
        }

        return result;
    }

    [Symbol.dispose]() {
        if (!this.#owner) {
            // Can't dispose of process lifetime
            return;
        }

        // If we are disposed with active sublifetimess we become a zombie
        if (this.#spans?.size) {
            this.#zombie = true;
            return;
        }

        this.#owner.spans?.delete(this);
        if (this.#owner.zombie) {
            this.#owner[Symbol.dispose]();
        }
    }
}

export namespace Lifetime {
    /**
     * The lifetime of the system process.
     */
    export const process: Lifetime = new LifetimeImplementation(["process"]);

    /**
     * An object associated with a lifetime.
     */
    export interface Owner {
        /**
         * Create a sublifetime.
         */
        join(...name: unknown[]): Lifetime;
    }

    /**
     * A lifetime subject that exists for a portion of a larger timespan.
     */
    export interface Contributor {
        [owner]: Owner;
    }

    /**
     * Determine the lifetime of the owner of a component.
     */
    export function of(subject?: {}) {
        return (subject as Partial<Contributor> | undefined)?.[owner] ?? process;
    }

    export const owner = Symbol("owner");
}

DiagnosticSource.add(Lifetime.process);
