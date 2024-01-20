/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";
import { Logger } from "../log/Logger.js";
import type { Storage } from "../storage/Storage.js";
import { StorageManager } from "../storage/StorageManager.js";
import { Time } from "../time/Time.js";
import { BasicSet } from "../util/Set.js";
import { NoProviderError } from "../common/MatterError.js";
import { VariableService } from "./VariableService.js";

const logger = Logger.get("Environment");

/**
 * Access to general platform-dependent features.
 *
 * TODO - could remove global singletons by moving here
 */
export class Environment {
    #tasks?: BasicSet<Environment.Task>;
    #services?: Map<Environment.ServiceFactory<any>, Environment.Service>;
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    /**
     * Access an environmental service.
     */
    get<T extends Environment.Service>(type: Environment.ServiceFactory<T>): T {
        const instance = this.#services?.get(type);
        if (instance) {
            return instance as T;
        }
        return new type(this);
    }

    /**
     * Access an environmental service, waiting for any async initialization to complete.
     */
    async load<T extends Environment.Service>(type: Environment.ServiceFactory<T>) {
        const instance = this.get(type);
        await instance.construction;
        return instance;
    }

    /**
     * Install a preinitialized version of an environmental service.
     */
    set<T extends Environment.Service>(type: Environment.ServiceFactory<T>, instance: T) {
        if (!this.#services) {
            this.#services = new Map();
        }
        this.#services.set(type, instance);
    }

    /**
     * Startup announcement.
     */
    get announcement() {
        return [
            "Entering",
            Diagnostic.strong("Matter.js"),
            "environment",
            Diagnostic.strong(this.name),
            "in",
            this.location
        ];
    }

    /**
     * Name of the environment.
     */
    get name() {
        return this.#name;
    }

    /**
     * The default environment.
     */
    static get default() {
        return global;
    }

    /**
     * Set the default environment.
     */
    static set default(env: Environment) {
        global = env;

        Logger.level = env.vars.string("log.level");
        Logger.format = env.vars.string("format");

        if (global.variables.log?.stack?.limit) {
            Error.stackTraceLimit = Number.parseInt(global.variables?.log?.stack?.limit);
        }
    }

    /**
     * Shortcut for accessing {@link VariableService.vars}.
     */
    get vars() {
        return this.get(VariableService);
    }

    /**
     * Long-running tasks that should stop when the environment shuts down
     * gracefully.
     */
    get tasks() {
        if (!this.#tasks) {
            this.#tasks = new BasicSet;
            this.#tasks.added.on(task => DiagnosticSource.add(task));
            this.#tasks.deleted.on(task => DiagnosticSource.delete(task));
        }
        return this.#tasks;
    }

    /**
     * Create storage.  The environment initializes the storage but the caller must take ownership.
     *
     * @param namespace a unique namespace identifier such as a root node ID
     */
    async createStorage(namespace: string) {
        const storage = this.loadStorage(namespace);
        const manager = new StorageManager(storage);
        await manager.initialize();
        return manager;
    }

    /**
     * Abort tasks that are abortable.
     */
    interrupt() {
        if (this.#tasks) {
            for (const task of this.#tasks) {
                try {
                    task.cancel?.();
                } catch (e) {
                    logger.error(`Unhandled error aborting "${task.name}":`, e);
                }
            }
        }
    }

    /**
     * Display tasks that supply diagnostics.
     */
    diagnose() {
        Time.getTimer("Diagnostics", 0, () => {
            try {
                logger.notice("Diagnostics follow", DiagnosticSource);
            } catch (e) {
                logger.error(`Unhandled error gathering diagnostics:`, e);
            }
        }).start();
    }

    protected loadVariables(): Record<string, any> {
        return {};
    }

    protected loadStorage(_namespace: string): Storage {
        throw new NoProviderError("Environment not installed");
    }

    protected get location(): string {
        throw new NoProviderError("Environment not installed");
    }
}

export namespace Environment {
    export interface Task {
        name: string;
        cancel?: () => void;
        [Diagnostic.value]: {};
    }

    export interface Service {
        construction?: Promise<any>;
        [Symbol.asyncDispose]?: () => Promise<any>;
        [Diagnostic.presentation]?: Diagnostic.Presentation;
        [Diagnostic.value]?: unknown;
    }

    export interface ServiceFactory<T extends Service> {
        new (environment: Environment): T;
    }
}

let global: Environment = new Environment("default");
