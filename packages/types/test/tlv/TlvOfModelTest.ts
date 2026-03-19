/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MATTER_EPOCH_OFFSET_S, MATTER_EPOCH_OFFSET_US } from "#tlv/TlvNumber.js";
import { TlvOfModel } from "#tlv/TlvOfModel.js";
import { ClusterModel, MatterModel, ValueModel } from "@matter/model";

const matter = MatterModel.standard;
const grpKeyMgmt = matter.get(ClusterModel, "GroupKeyManagement")!;
const groupKeySetStruct = grpKeyMgmt.datatypes.for("GroupKeySetStruct")!;

describe("TlvOfModel", () => {
    describe("epoch-us fields", () => {
        const epochStartTime0 = groupKeySetStruct.members.for("EpochStartTime0")!;

        it("applies epoch-us offset on round-trip", () => {
            const value = MATTER_EPOCH_OFFSET_US + 1n;
            expect(roundTrip(epochStartTime0, value)).equal(value);
        });
    });

    describe("epoch-s fields", () => {
        const smokeCOAlarm = matter.get(ClusterModel, "SmokeCoAlarm")!;
        const expiryDate = smokeCOAlarm.attributes.for("ExpiryDate")!;

        it("applies epoch-s offset on round-trip", () => {
            const value = MATTER_EPOCH_OFFSET_S + 1;
            expect(roundTrip(expiryDate, value)).equal(value);
        });
    });

    describe("struct round-trip", () => {
        it("preserves epoch-us fields in GroupKeySetStruct", () => {
            const decoded = roundTrip(groupKeySetStruct, groupKeySet()) as ReturnType<typeof groupKeySet>;
            expect(decoded.epochStartTime0).equal(MATTER_EPOCH_OFFSET_US + 1n);
            expect(decoded.epochStartTime1).equal(null);
        });
    });

    describe("command round-trip", () => {
        it("preserves epoch-us fields in KeySetWrite", () => {
            const keySetWrite = grpKeyMgmt.commands.for("KeySetWrite")!;
            const decoded = roundTrip(keySetWrite, { groupKeySet: groupKeySet() }) as {
                groupKeySet: ReturnType<typeof groupKeySet>;
            };
            expect(decoded.groupKeySet.epochStartTime0).equal(MATTER_EPOCH_OFFSET_US + 1n);
        });
    });
});

function roundTrip(model: ClusterModel | ValueModel, value: unknown) {
    const schema = TlvOfModel(model);
    return schema.decode(schema.encode(value));
}

function groupKeySet(epochStartTime0 = MATTER_EPOCH_OFFSET_US + 1n) {
    return {
        groupKeySetId: 1,
        groupKeySecurityPolicy: 0,
        epochKey0: new Uint8Array(16),
        epochStartTime0,
        epochKey1: null,
        epochStartTime1: null,
        epochKey2: null,
        epochStartTime2: null,
    };
}
