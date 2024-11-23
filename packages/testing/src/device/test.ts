/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "../docker/container.js";
import { Subject } from "./subject.js";

/**
 * Details of how to run a specific test.
 */
export interface Test {
    name: string;
    description?: string;
    timeout?: number;
    loadSubject(subject: Subject.Factory): Subject;
    initializeSubject(container: Container, subject: Subject): Promise<void>;
    invoke(container: Container, step: (title: string) => void): Promise<void>;
}
