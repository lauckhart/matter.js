/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

type TimerCallback = () => any;

// Must match matter.js Timer interface
class MockTimer {
    isRunning = false;
    private readonly callback: TimerCallback;

    constructor(
        private readonly timeFake: MockTime,
        private readonly durationMs: number,
        callback: TimerCallback,
    ) {
        if (this instanceof MockInterval) {
            this.callback = callback;
        } else {
            this.callback = () => {
                this.isRunning = false;
                callback();
            };
        }
    }

    start() {
        this.timeFake.callbackAtTime(this.timeFake.nowMs() + this.durationMs, this.callback);
        this.isRunning = true;
        return this;
    }

    stop() {
        this.timeFake.removeCallback(this.callback);
        this.isRunning = false;
        return this;
    }
}

class MockInterval extends MockTimer {
    constructor(timeFake: MockTime, durationMs: number, callback: TimerCallback) {
        const intervalCallback = async () => {
            timeFake.callbackAtTime(timeFake.nowMs() + durationMs, intervalCallback);
            await callback();
        };
        super(timeFake, durationMs, intervalCallback);
    }
}

// Must match matter.js Time interface
export class MockTime {
    private readonly callbacks = new Array<{ atMs: number; callback: TimerCallback }>();
    private timeMs: number;

    constructor(private startTimeMs: number) {
        this.timeMs = this.startTimeMs
    }

    reset(time = this.startTimeMs) {
        this.timeMs = time
    }

    now(): Date {
        return new Date(this.timeMs);
    }

    nowMs(): number {
        return this.timeMs;
    }

    getTimer(durationMs: number, callback: TimerCallback): MockTimer {
        return new MockTimer(this, durationMs, callback);
    }

    getPeriodicTimer(intervalMs: number, callback: TimerCallback): MockTimer {
        return new MockInterval(this, intervalMs, callback);
    }

    async advanceTime(ms: number) {
        const newTimeMs = this.timeMs + ms;

        while (true) {
            if (this.callbacks.length === 0) break;
            const { atMs, callback } = this.callbacks[0];
            if (atMs > newTimeMs) break;
            this.callbacks.shift();
            this.timeMs = atMs;
            await callback();
        }

        this.timeMs = newTimeMs;
    }

    async yield() {
        await new Promise<void>(resolve => setTimeout(resolve, 0));
    }

    callbackAtTime(atMs: number, callback: TimerCallback) {
        this.callbacks.push({ atMs, callback });
        this.callbacks.sort(({ atMs: atMsA }, { atMs: atMsB }) => atMsA - atMsB);
    }

    removeCallback(callbackToRemove: TimerCallback) {
        const index = this.callbacks.findIndex(({ callback }) => callbackToRemove === callback);
        if (index === -1) return;
        this.callbacks.splice(index, 1);
    }
}

export const TheMockTime = new MockTime(0);
export function timeSetup(Time: { get: () => MockTime }) {
    Time.get = () => TheMockTime;
}
