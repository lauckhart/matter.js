/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeepReadonly } from "#general";
import { CommissionableDevice, OperationalDevice, SessionParameters } from "#protocol";
import { DeviceTypeId, VendorId } from "#types";
import type { CommissioningClient } from "./CommissioningClient.js";

/**
 * Device descriptor used by lower-level components.
 */
export type RemoteDescriptor = Partial<OperationalDevice | CommissionableDevice>;

export namespace RemoteDescriptor {
    export function fromState(state: DeepReadonly<CommissioningClient.State>): RemoteDescriptor {
        const result: RemoteDescriptor = {};

        const {
            addresses,
            discriminator,
            commissioningMode,
            vendorId,
            productId,
            deviceType,
            deviceName,
            rotatingIdentifier,
            pairingHint,
            pairingInstructions,
            sessionParameters,
            tcpSupport,
            longIdleTimeOperatingMode,
        } = state;

        if (vendorId !== undefined) {
            if (productId !== undefined) {
                result.VP = `${vendorId}+${productId}`;
            } else {
                result.VP = `${vendorId}`;
            }
        }

        if (deviceType !== undefined) {
            result.DT = deviceType as DeviceTypeId;
        }

        if (deviceName !== undefined) {
            result.DN = deviceName;
        }

        if (rotatingIdentifier !== undefined) {
            result.RI = rotatingIdentifier;
        }

        if (pairingHint !== undefined) {
            result.PH = pairingHint;
        }

        if (pairingInstructions !== undefined) {
            result.PI = pairingInstructions;
        }

        if (sessionParameters !== undefined) {
            const { idleIntervalMs, activeIntervalMs, activeThresholdMs } = sessionParameters;

            if (idleIntervalMs !== undefined) {
                result.SII = idleIntervalMs;
            }

            if (activeIntervalMs !== undefined) {
                result.SAI = activeIntervalMs;
            }

            if (activeThresholdMs !== undefined) {
                result.SAT = activeThresholdMs;
            }
        }

        if (tcpSupport !== undefined) {
            result.T = tcpSupport;
        }

        if (longIdleTimeOperatingMode !== undefined) {
            result.ICD = 1;
        }

        const isOperational = state.peerAddress !== undefined;
        if (isOperational) {
            if (addresses !== undefined) {
                result.addresses = addresses?.filter(address => address.type === "udp");
            }
        } else {
            if (addresses !== undefined) {
                result.addresses = addresses.map(address => ({ ...address }));
            }

            if (discriminator !== undefined) {
                (result as CommissionableDevice).D = discriminator;
            }

            if (commissioningMode !== undefined) {
                (result as CommissionableDevice).CM = commissioningMode;
            }
        }

        return result;
    }

    export function toState(
        descriptor: CommissioningClient.NodeDescriptor | undefined,
        state: CommissioningClient.State,
    ) {
        if (!descriptor) {
            descriptor = {};
        }

        const { addresses, VP, DT, DN, RI, PH, PI, SII, SAI, SAT, T, ICD } = descriptor;

        if (addresses?.length) {
            state.addresses = addresses;
        }

        if (VP !== undefined) {
            const [vendor, product] = VP.split("+").map(Number.parseInt);

            state.vendorId = Number.isNaN(vendor) ? undefined : VendorId(vendor);
            state.productId = Number.isNaN(product) ? undefined : VendorId(vendor);
        }

        let sessionParameters: Partial<SessionParameters> | undefined;
        if (SII !== undefined) {
            (sessionParameters ??= {}).idleIntervalMs = SII;
        }
        if (SAI !== undefined) {
            (sessionParameters ??= {}).activeIntervalMs = SAI;
        }
        if (SAT !== undefined) {
            (sessionParameters ??= {}).activeThresholdMs = SAT;
        }
        state.sessionParameters = sessionParameters;

        state.deviceType = DT === undefined ? undefined : DeviceTypeId(DT);
        state.deviceName = DN;
        state.rotatingIdentifier = RI;
        state.pairingHint = PH;
        state.pairingInstructions = PI;
        state.tcpSupport = T;
        state.longIdleTimeOperatingMode = ICD === undefined ? undefined : ICD === 1;

        if ("D" in descriptor) {
            state.discriminator = descriptor.D;
        }

        if ("CM" in descriptor) {
            state.commissioningMode = descriptor.CM;
        }
    }
}
