/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "#MatterError.js";
import { Diagnostic } from "./Diagnostic.js";
import { LogFormat } from "./LogFormat.js";
import { LogLevel } from "./LogLevel.js";

/**
 * Log messages to the console.  This is the default writer for new {@link LogDestination}s.
 */
export function logToConsole(text: string, message: Diagnostic.Message) {
    const console = (<any>consoleLogger).console;
    switch (message.level) {
        case LogLevel.DEBUG:
            console.debug(text);
            break;

        case LogLevel.INFO:
            console.info(text);
            break;

        case LogLevel.NOTICE:
            console.info(text);
            break;

        case LogLevel.WARN:
            console.warn(text);
            break;

        case LogLevel.ERROR:
            console.error(text);
            break;

        case LogLevel.FATAL:
            console.error(text);
            break;
    }
}

const globalConsole = console;
export namespace consoleLogger {
    /**
     * The target for consoleLogger.
     */
    // eslint-disable-next-line prefer-const
    export let console = globalConsole;
}

/**
 * An endpoint for log messages.
 *
 * You can replace the default destination or add additional destinations to control how log messages are stored.
 */
export interface LogDestination {
    /**
     * The name of the destination, used for configuration.
     */
    name: string;

    /**
     * Add an entry to the log.
     */
    add(message: Diagnostic.Message): void;

    /**
     * The maximum level to log if not set explicitly.
     */
    level: LogLevel;

    /**
     * The maximum level to log for specific facility IDs.
     */
    facilityLevels: Record<string, LogLevel>;

    /**
     * Contextual information used to optimize log output.
     */
    context?: Diagnostic.Context;
}

/**
 * A {@link LogDestination} with configurable formatting.
 */
export interface FormattingLogDestination extends LogDestination {
    /**
     * Format a log message.
     */
    format(message: Diagnostic.Message): string;

    /**
     * Write a formatted message to the log.
     */
    write(text: string, message: Diagnostic.Message): void;
}

/**
 * Create a new {@link LogDestination}.
 */
export function LogDestination<T extends Partial<FormattingLogDestination>>(
    config?: T,
): T extends { add: () => unknown } ? LogDestination : FormattingLogDestination {
    return {
        ...LogDestination.defaults,
        ...config,
    };
}

export namespace LogDestination {
    /**
     * Defaults for {@link LogDestination} fields.
     */
    export const defaults: FormattingLogDestination = {
        name: "default",

        level: LogLevel.DEBUG,

        facilityLevels: {},

        add(message: Diagnostic.Message) {
            this.write(this.format(message), message);
        },

        format: LogFormat.ansi as FormattingLogDestination["format"],

        write: logToConsole,
    };

    export function isFormatting(destination: LogDestination): destination is FormattingLogDestination {
        return (
            typeof (destination as FormattingLogDestination).format === "function" &&
            typeof (destination as FormattingLogDestination).write === "function"
        );
    }
}

/**
 * Create a collection of log destinations, keyed by configuration name.
 *
 * Automatically includes a default destination named "default".
 */
export function LogDestinations() {
    const destinations: Record<string, LogDestination> = {
        default: { ...LogDestination.defaults },
    };

    return new Proxy(destinations, {
        get(target, name, receiver) {
            if (typeof name === "string" && !(name in destinations)) {
                throw new ImplementationError(`Log destination "${name}" does not exist`);
            }

            return Reflect.get(target, name, receiver);
        },
    }) as unknown as Record<string, LogDestination>;
}
