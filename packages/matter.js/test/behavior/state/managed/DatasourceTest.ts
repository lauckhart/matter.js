/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../../../../src/behavior/AccessControl.js";
import { BehaviorSchema } from "../../../../src/behavior/schema/BehaviorSchema.js";
import { Datasource } from "../../../../src/behavior/state/managed/Datasource.js";
import { Observable } from "../../../../src/util/Observable.js";

class MyState {
    foo = "bar";
}

const schema = BehaviorSchema({ State: MyState });

describe("Datasource", () => {
    it("reference is a MyState", () => {
        const datasource = Datasource({ type: MyState, manager: schema });
        const state = datasource.reference(AccessControl.OfflineSession);
        state satisfies MyState;
        expect(state.foo).equals("bar");
    });

    it("caches state implementations", () => {
        const ds1 = Datasource({ type: MyState, manager: schema });
        const ds2 = Datasource({ type: MyState, manager: schema });

        const constructor1 = ds1.reference(AccessControl.OfflineSession).constructor;
        const constructor2 = ds2.reference(AccessControl.OfflineSession).constructor;

        expect(constructor1).equals(constructor2);
    });

    it("sets and gets immediately without transaction", () => {
        const datasource = Datasource({ type: MyState, manager: schema });
        const state = datasource.reference(AccessControl.OfflineSession);

        state.foo = "BAR";
        expect(state.foo).equals("BAR");

        const state2 = datasource.reference(AccessControl.OfflineSession);
        expect(state2.foo).equals("BAR");
    });

    it("triggers events immediately without transaction", async () => {
        const events = {
            foo$change: Observable(),
        };

        const result = new Promise(resolve => events.foo$change.on((...args: any[]) => resolve(args)));

        const datasource = Datasource({ type: MyState, manager: schema, events });
        const state = datasource.reference(AccessControl.OfflineSession);

        state.foo = "BAR";

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        expect(result).eventually.deep.equal(["BAR", "bar", context]);
    });

    it("handles rejection well", () => {
        class State {
            get foo() {
                return "foo";
            }

            set foo(value) {
                throw new Error(`Bad value "${value}"`);
            }
        }
        
        const schema = BehaviorSchema({ State });
        
        const datasource = Datasource({
            manager: schema,
            type: State
        });
        
        const state = datasource.reference(AccessControl.OfflineSession);

        expect(() => state.foo = "bar").throws(`Bad values "bar"`);
        expect(state.foo).equals("foo");
    });
});
