/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Matter } from "./Matter.js";
import * as Globals from "./standard/elements/models.js";

export {
    /**
     * Global elements in the standard Matter Object Model.
     *
     * These elements are models parented by {@link Matter}.  We also export the models in this index by directly by
     * name, and they are parented by the {@link Matter}.
     *
     * This means, depending on you use case you may also access these elements directly:
     *
     * ```typescript
     * import uint16 from "@project-chip/matter.js-model";
     * ```
     *
     * Or operationally:
     *
     * ```typescript
     * import { Matter } from "@project-chip/matter.js-model";
     *
     * const uint16 = Matter.get(DatatypeModel, "uint16");
     * ```
     *
     * Note that for purposes of disambiguation we suffix device types with "DT" and semantic namespaces with "NS" in
     * this index.
     */
    Globals,
};

// TS should accept the import as "used" because we reference it in the comment but this is not working in TS 5.5
({}) as typeof Matter;
