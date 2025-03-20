/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot } from "#util/Boot.js";
import { CancelablePromise } from "#util/Cancelable.js";
import { ImplementationError, NotImplementedError } from "../MatterError.js";
import { Time } from "../time/Time.js";
import { Bytes } from "../util/Bytes.js";
import { Diagnostic } from "./Diagnostic.js";
import { LogDestination, LogDestinations } from "./LogDestination.js";
import { LogFormat } from "./LogFormat.js";
import { LogLevel } from "./LogLevel.js";

/**
 * Create a log formatter for a given format.
 */
function logFormatterFor(formatName: string): LoggerDefinition["logFormatter"] {
    const format = LogFormat(formatName);

    return (now, level, facility, prefix, ...values) =>
        format(Diagnostic.message({ now, level, facility, prefix, values }));
}

/**
 * Definition of one registered Logger.
 */
type LoggerDefinition = {
    logIdentifier: string;
    logFormatter: (now: Date, level: LogLevel, facility: string, prefix: string, ...values: any[]) => string;
    log: (level: LogLevel, formattedLog: string, facility?: string) => void;
    defaultLogLevel: LogLevel;
    logLevels: { [facility: string]: LogLevel };
    context?: Diagnostic.Context;
};

function adaptDestinationToLegacy(destination: LogDestination): LoggerDefinition {
    if (!LogDestination.isFormatting(destination)) {
        throw new ImplementationError("Non-formatting destinations cannot be adapted to legacy API");
    }

    return {
        get logIdentifier() {
            return destination.name;
        },

        get logFormatter() {
            return (now: Date, level: LogLevel, facility: string, prefix: string, ...values: any[]) =>
                destination.format(Diagnostic.message({ now, level, facility, prefix, values }));
        },

        set logFormatter(logFormatter: LoggerDefinition["logFormatter"]) {
            destination.format = (message: Diagnostic.Message) =>
                logFormatter(message.now, message.level, message.facility, message.prefix, ...message.values);
        },

        get log() {
            return (level: LogLevel, formattedLog: string, facility?: string) =>
                destination.write(formattedLog, Diagnostic.message({ level, facility }));
        },

        set log(log: LoggerDefinition["log"]) {
            destination.write = (text: string, message: Diagnostic.Message) =>
                log(message.level, text, message.facility);
        },

        get defaultLogLevel() {
            return destination.level;
        },

        set defaultLogLevel(level: LogLevel) {
            destination.level = level;
        },

        get logLevels() {
            return destination.facilityLevels;
        },

        set logLevels(levels: Record<string, LogLevel>) {
            destination.facilityLevels = levels;
        },
    };
}

/**
 * Logger that can be used to emit traces.
 *
 * The class supports adding multiple loggers for different targets. A default logger (identifier "default") is added on
 * startup which logs to "console".
 *
 * Usage:
 *
 *   const facility = Logger.get("loggerName");
 *   facility.debug("My debug message", "my extra value to log");
 *
 * The configuration of the default logger can be adjusted by using the static properties of the Logger class:
 *
 *   - Logger.defaultLogLevel sets the default log level for all the facility
 *   - Logger.logLevels = { loggerName: Level.DEBUG } can set the level for the specific loggers
 *   - Logger.format = Format.ANSI enables colorization via ANSI escape sequences in default formatter
 *
 * For additional loggers, use Logger.addLogger() to add a new logger with a specific identifier. Afterwards the
 * configuration of these can be adjusted using static methods with the identifier as first parameter:
 *
 *   - Logger.setFormatForLogger("loggerName", Format.ANSI)
 *   - Logger.setLogLevelsForLogger("loggerName", { loggerName: Level.DEBUG })
 *   - Logger.setDefaultLoglevelForLogger("loggerName", Level.DEBUG)
 */
export class Logger {
    /**
     * Log destinations.
     *
     * By default there is a single destination named "default".  You may add or remove destinations.
     *
     * Throws an error if you access a destination that doesn't exist.
     */
    static destinations = LogDestinations();

    /**
     * The number of indents to print with messages.
     */
    static nestingLevel: number;

    readonly #name: string;

    /**
     * Create a new facility.
     *
     * @param name the name of the facility
     * @returns a new facility
     */
    static get(name: string) {
        return new Logger(name);
    }

    /**
     * Stringify a value (BigInt aware) as JSON.
     *
     * @param data the value to stringify
     * @returns the stringified value
     */
    static toJSON(data: any) {
        return JSON.stringify(data, (_, value) => {
            if (typeof value === "bigint") {
                return value.toString();
            }
            if (value instanceof Uint8Array) {
                return Bytes.toHex(value);
            }
            if (value === undefined) {
                return "undefined";
            }
            return value;
        });
    }

    /**
     * Mask a string with a given character. If unmaskedLength is provided then these number of characters will be
     * shown unmasked.
     *
     * @param str String to mask
     * @param maskChar character to mask with
     * @param unmaskedLength number of characters to show unmasked in the beginning
     */
    static maskString(str: string, maskChar = "*", unmaskedLength?: number) {
        return str.substring(0, unmaskedLength ?? 0) + str.substring(unmaskedLength ?? 0).replace(/./g, maskChar);
    }

    /**
     * Perform operations in a nested logging context.  Messages will be
     * indented while the context executes.
     */
    static nest<T>(context: () => T): T {
        this.nestingLevel++;
        try {
            return context();
        } finally {
            this.nestingLevel--;
        }
    }

    /**
     * Async version of nest().
     */
    static async nestAsync(context: () => Promise<any>) {
        this.nestingLevel++;
        try {
            return await context();
        } finally {
            this.nestingLevel--;
        }
    }

    /**
     * Unhandled error reporter.
     *
     * Some environments do not report full error details such as {@link Error#cause} and {@link AggregateError#errors}.
     *
     * To ensure these details are always recorded somewhere, unhandled errors may be reported here.
     *
     * To disable this behavior replace this function.
     */
    static reportUnhandledError(error: Error) {
        try {
            Logger.get("Logger").fatal("Unhandled error detected:", error);
        } catch (e) {
            // We do not want to cause yet another error so if logging fails for any reason it goes unreported
        }
    }

    constructor(name: string) {
        this.#name = name;
    }

    debug = (...values: any[]) => this.#log(LogLevel.DEBUG, values);
    info = (...values: any[]) => this.#log(LogLevel.INFO, values);
    notice = (...values: any[]) => this.#log(LogLevel.NOTICE, values);
    warn = (...values: any[]) => this.#log(LogLevel.WARN, values);
    error = (...values: any[]) => this.#log(LogLevel.ERROR, values);
    fatal = (...values: any[]) => this.#log(LogLevel.FATAL, values);
    log = (level: LogLevel, ...values: any[]) => this.#log(level, values);

    #log(level: LogLevel, values: any[]) {
        for (const dest of Object.values(Logger.destinations)) {
            if (level < (dest.facilityLevels?.[this.#name] ?? dest.level)) {
                return;
            }

            if (!dest.context) {
                dest.context = Diagnostic.Context();
            }

            dest.context.run(() =>
                dest.add(
                    Diagnostic.message({
                        now: Time.now(),
                        facility: this.#name,
                        level,
                        prefix: nestingPrefix(),
                        values,
                    }),
                ),
            );
        }
    }

    //
    // DEPRECATED API SURFACE FOLLOWS
    //

    /**
     * Add additional logger to the list of loggers including the default configuration.
     *
     * @deprecated use {@link destinations}
     */
    public static addLogger(
        identifier: string,
        logger: (level: LogLevel, formattedLog: string) => void,
        options?: {
            defaultLogLevel?: LogLevel;
            logLevels?: { [facility: string]: LogLevel };
            logFormat?: string;
        },
    ) {
        if (identifier in this.destinations) {
            throw new ImplementationError(`Logger "${identifier}" already exists`);
        }
        const dest = LogDestination({ name: identifier });
        const legacy = adaptDestinationToLegacy(dest);
        legacy.log = logger;
        if (options?.defaultLogLevel !== undefined) {
            legacy.defaultLogLevel = options.defaultLogLevel;
        }
        if (options?.logLevels !== undefined) {
            legacy.logLevels = options.logLevels;
        }
        if (options?.logFormat !== undefined) {
            legacy.logFormatter = logFormatterFor(options.logFormat);
        }
        this.destinations[identifier] = dest;
    }

    /**
     * @deprecated use {@link destinations}
     */
    public static removeLogger(identifier: string) {
        if (!(identifier in this.destinations)) {
            throw new NotImplementedError(`Logger "${identifier}" does not exist`);
        }
        delete this.destinations[identifier];
    }

    /**
     * Check if a logger with the matching identifier exists.
     * @param identifier The identifier of the logger
     *
     * @deprecated use {@link destinations}
     */
    public static hasLoggerForIdentifier(identifier: string) {
        return identifier in this.destinations;
    }

    /**
     * Get the logger with the matching identifier.
     * @param identifier The identifier of the logger
     *
     * @deprecated use {@link destinations}
     */
    public static getLoggerForIdentifier(identifier: string) {
        const dest = this.destinations[identifier];
        if (dest === undefined) {
            throw new NotImplementedError(`Unknown logger "${identifier}"`);
        }
        return adaptDestinationToLegacy(dest);
    }

    /**
     * Set log level using configuration-style level name for the default destination.
     *
     * @deprecated map level names using {@link LogLevel}
     */
    static set level(level: LogLevel | string) {
        if (level === undefined) {
            level = LogLevel.DEBUG;
        }

        let levelNum;
        if (typeof level === "string") {
            if (level.match(/^\d+$/)) {
                levelNum = Number.parseInt(level) as LogLevel;
            } else {
                levelNum = (LogLevel as unknown as Record<string, number | undefined>)[level.toUpperCase()] as
                    | LogLevel
                    | undefined;
                if (typeof levelNum !== "number") {
                    throw new ImplementationError(`Unsupported log level "${level}"`);
                }
            }
        } else {
            levelNum = level;
        }

        if (LogLevel[levelNum] === undefined) {
            throw new ImplementationError(`Unsupported log level "${level}"`);
        }

        this.destinations.default.level = levelNum;
    }

    /**
     * Set logFormatter using configuration-style format name.
     *
     * @param format the name of the formatter (see Format enum)
     *
     * @deprecated map format names using {@link LogFormat}
     */
    static set format(format: string) {
        Logger.setLogFormatterForLogger("default", logFormatterFor(format));
    }

    /**
     * Set facility loglevels for the default logger.
     * @param levels The levels to set
     *
     * @deprecated use {@link destinations}
     */
    public static set logLevels(levels: { [facility: string]: LogLevel }) {
        Logger.setLogLevelsForLogger("default", levels);
    }

    /**
     * Get facility loglevels for the default logger.
     *
     * @deprecated use {@link destinations}
     */
    public static get logLevels() {
        return Logger.getLoggerForIdentifier("default").logLevels;
    }

    /**
     * Set default loglevel for the default logger.
     *
     * @param level The level to set
     *
     * @deprecated use {@link destinations}
     */
    public static set defaultLogLevel(level: LogLevel) {
        Logger.setDefaultLoglevelForLogger("default", level);
    }

    /**
     * Get default loglevel for the default logger.
     *
     * @deprecated use {@link destinations}
     */
    public static get defaultLogLevel() {
        return Logger.getLoggerForIdentifier("default").defaultLogLevel;
    }

    /**
     * Set the log function for the default logger.
     *
     * @param log The log function to set
     *
     * @deprecated use {@link destinations}
     */
    public static set log(log: (level: LogLevel, formattedLog: string, facility?: string) => void) {
        Logger.setLogger("default", log);
    }

    /**
     * Get the log function for the default logger.
     *
     * @deprecated use {@link destinations}
     */
    public static get log() {
        return Logger.getLoggerForIdentifier("default").log;
    }

    /**
     * Set the log formatter for the default logger.
     *
     * @param logFormatter
     *
     * @deprecated use {@link destinations}
     */
    public static set logFormatter(
        logFormatter: (now: Date, level: LogLevel, facility: string, nestingPrefix: string, values: any[]) => string,
    ) {
        Logger.setLogFormatterForLogger("default", logFormatter);
    }

    /**
     * Get the log formatter for the default logger.
     *
     * @deprecated use {@link destinations}
     */
    public static get logFormatter() {
        return Logger.getLoggerForIdentifier("default").logFormatter;
    }

    /**
     * Set logFormatter using configuration-style format name for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param format the name of the formatter (see Format enum)
     *
     * @deprecated use {@link destinations}
     */
    public static setFormatForLogger(identifier: string, format: string) {
        this.getLoggerForIdentifier(identifier).logFormatter = logFormatterFor(format);
    }

    /**
     * Set default loglevel for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param level The level to set
     *
     * @deprecated use {@link destinations}
     */
    public static setDefaultLoglevelForLogger(identifier: string, level: LogLevel) {
        this.getLoggerForIdentifier(identifier).defaultLogLevel = level;
    }

    /**
     * Set facility loglevels for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param levels The levels to set
     *
     * @deprecated use {@link destinations}
     */
    public static setLogLevelsForLogger(identifier: string, levels: { [facility: string]: LogLevel }) {
        this.getLoggerForIdentifier(identifier).logLevels = levels;
    }

    /**
     * Set the log function for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param log The log function to set
     *
     * @deprecated use {@link destinations}
     */
    public static setLogger(
        identifier: string,
        log: (level: LogLevel, formattedLog: string, facility?: string) => void,
    ) {
        this.getLoggerForIdentifier(identifier).log = log;
    }

    /**
     * Set the log formatter for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param logFormatter The log formatter to set
     *
     * @deprecated use {@link destinations}
     */
    static setLogFormatterForLogger(
        identifier: string,
        logFormatter: (now: Date, level: LogLevel, facility: string, nestingPrefix: string, values: any[]) => string,
    ) {
        this.getLoggerForIdentifier(identifier).logFormatter = logFormatter;
    }
}

function nestingPrefix() {
    if (Logger.nestingLevel) {
        return "⎸".padEnd(Logger.nestingLevel * 2);
    }
    return "";
}

Boot.init(() => {
    Logger.destinations = LogDestinations();
    Logger.nestingLevel = 0;

    // Hook for testing frameworks
    if (typeof MatterHooks !== "undefined") {
        MatterHooks.loggerSetup?.(Logger);
    }
});

CancelablePromise.logger = Logger.get("CancelablePromise");
