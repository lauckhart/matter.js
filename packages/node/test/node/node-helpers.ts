/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationBehavior } from "#behaviors/basic-information";
import { GeneralCommissioning } from "#clusters/general-commissioning";
import { Bytes, Crypto, Key, PrivateKey } from "#general";
import { CommissioningServer } from "#index.js";
import { FabricManager } from "#protocol";
import { NodeId, VendorId } from "#types";
import { MockServerNode } from "./mock-server-node.js";
import { Fixtures } from "./ServerNodeTest.js";

let activeCommissioning: undefined | ReturnType<typeof CommissioningHelper>;

Crypto.get().createKeyPair = () => {
    const DEFAULT_SEC1_KEY = Bytes.fromHex(
        "30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba",
    );

    const sec1Key =
        activeCommissioning?.fabricNumber !== undefined
            ? Fixtures.fabrics[activeCommissioning.fabricNumber]?.sec1Key
            : DEFAULT_SEC1_KEY;

    return Key({ sec1: sec1Key }) as PrivateKey;
};

export async function testFactoryReset(mode: "online" | "offline-after-commission" | "offline") {
    let node: MockServerNode;
    if (mode !== "offline") {
        ({ node } = await CommissioningHelper().commission());
    } else {
        node = await MockServerNode.createOnline({ online: false });
    }

    if (mode === "offline-after-commission") {
        await node.cancel();
    }

    // We want to confirm unique ID is reset but the ID is not random in testing.  So set to something known we can
    // compare after reset
    const oldUniqueId = "asdf";
    await node.set({ basicInformation: { uniqueId: oldUniqueId } });

    await MockTime.resolve(node.erase());

    // Confirm previous online state is resumed
    expect(node.lifecycle.isOnline).equals(mode === "online");

    // Confirm basic state information is present
    expect(node.stateOf(BasicInformationBehavior).vendorName).equals("Matter.js Test Vendor");

    // Confirm unique ID did not persist
    expect(node.state.basicInformation.uniqueId).not.equals(oldUniqueId);

    // Confirm pairing codes are available
    const pairingCodes = node.stateOf(CommissioningServer).pairingCodes;
    expect(typeof pairingCodes).equals("object");
    expect(typeof pairingCodes.manualPairingCode).equals("string");

    await node.close();
}

export function CommissioningHelper() {
    return {
        fabricNumber: undefined as number | undefined,

        async almostCommission(node?: MockServerNode, number = 0) {
            activeCommissioning = this;

            try {
                if (!node) {
                    node = await MockServerNode.createOnline();
                }

                const params = Fixtures.fabrics[number];
                this.fabricNumber = number;

                const exchange = await node.createExchange();

                const context = { exchange, command: true };

                await node.online(context, async agent => {
                    await agent.generalCommissioning.armFailSafe({
                        expiryLengthSeconds: Fixtures.failsafeLengthS,
                        breadcrumb: 4,
                    });
                });

                await node.online(context, async agent => {
                    await agent.generalCommissioning.setRegulatoryConfig({
                        newRegulatoryConfig: 2,
                        countryCode: "XX",
                        breadcrumb: 5,
                    });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.certificateChainRequest({ certificateType: 2 });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.certificateChainRequest({ certificateType: 1 });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.attestationRequest({
                        attestationNonce: params.attestationNonce,
                    });
                });

                await node.online(context, async agent => {
                    await agent.operationalCredentials.csrRequest({ csrNonce: params.csrNonce });
                });

                await node.online(context, async agent => {
                    agent.operationalCredentials.addTrustedRootCertificate({ rootCaCertificate: params.caCert });
                });

                await node.online(context, async agent => {
                    const result = await agent.operationalCredentials.addNoc({
                        nocValue: params.nocValue,
                        icacValue: params.icacValue,
                        ipkValue: params.ipkValue,
                        caseAdminSubject: NodeId((number + 1) * 100),
                        adminVendorId: VendorId(65521),
                    });
                    expect(result.statusCode).deep.equals(0);
                });

                return { node, context };
            } finally {
                activeCommissioning = undefined;
            }
        },

        async commission(existingNode?: MockServerNode, number = 0) {
            try {
                activeCommissioning = this;

                const { node } = await this.almostCommission(existingNode, number);

                // Do not reuse session from initial commissioning because we must now move from CASE to PASE
                const fabric = node.env.get(FabricManager).fabrics[number];
                const contextOptions = {
                    exchange: await node.createExchange({
                        fabric,
                        peerNodeId: NodeId(number + 1),
                    }),
                    command: true,
                };

                await node.online(contextOptions, async agent => {
                    // Use MockTime.resolve to wait for broadcaster cleanup
                    const result = await MockTime.resolve(agent.generalCommissioning.commissioningComplete());
                    expect(result).deep.equals({
                        errorCode: GeneralCommissioning.CommissioningError.Ok,
                        debugText: "",
                    });
                });

                if (!node.lifecycle.isCommissioned) {
                    await node.lifecycle.commissioned;
                }

                return { node, contextOptions };
            } finally {
                activeCommissioning = undefined;
            }
        },
    };
}
