/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DiscoveryError } from "#behavior/system/controller/discovery/DiscoveryError.js";
import { serializeToJs } from "@matter/general";
import { MockSite } from "./mock-site.js";

describe("ClientNode", () => {
    before(() => {
        MockTime.init();

        // Required for crypto to succeed
        MockTime.macrotasks = true;
    });

    it("times out commissioning discovery", async () => {
        await using site = new MockSite();
        const controller = await site.addNode(undefined, { online: false, device: undefined });
        await MockTime.resolve(
            expect(
                controller.nodes.commission({ passcode: 12341234, discriminator: 1234, timeoutSeconds: 90 }),
            ).rejectedWith(DiscoveryError),
        );
    });

    it("times out continuous discovery", async () => {
        await using site = new MockSite();

        const controller = await site.addNode(undefined, { online: false, device: undefined });
        const discovered = await MockTime.resolve(
            controller.nodes.discover({ longDiscriminator: 1234, timeoutSeconds: 90 }),
        );

        expect(discovered.length).equals(0);
    });

    it("discovers", async () => {
        await using site = new MockSite();
        const { controller, device } = await site.addUncommissionedPair();

        const { discriminator } = device.state.commissioning;
        const discovered = await MockTime.resolve(
            controller.nodes.discover({ longDiscriminator: discriminator, timeoutSeconds: 90 }),
            { macrotasks: true },
        );

        expect(discovered.length).equals(1);
        expect(discovered[0].state.commissioning.discriminator === device.state.commissioning.discriminator);
    });

    it("commissions and initializes endpoints", async () => {
        await using site = new MockSite();
        const { controller, device } = await site.addCommissionedPair();

        expect(device.state.commissioning.commissioned).equals(true);
        expect(controller.nodes.size).equals(1);

        // Obtain client view of the device
        const peer1 = controller.nodes.get("peer1")!;

        // Validate the root endpoint
        expect(peer1).not.undefined;
        expect(peer1.state).deep.equals(PEER1_STATE);

        // Validate the light endpoint
        expect(peer1.parts.size).equals(1);
        const ep1 = peer1.parts.get("ep1")!;
        console.log(serializeToJs(ep1.state));
        expect(ep1).not.undefined;
        expect(ep1.state).deep.equals(EP1_STATE);
    });
});

const PEER1_STATE = {
    parts: {},
    index: {},
    commissioning: {
        longIdleTimeOperatingMode: false,
        peerAddress: { fabricIndex: 1, nodeId: expect.IGNORE },
        addresses: [
            { type: "udp", ip: "10.10.10.2", port: 0x15a4, peripheralAddress: undefined },
            { type: "udp", ip: "10.10.10.2", port: 0x15a4, peripheralAddress: undefined },
        ],
        discoveredAt: expect.IGNORE,
        onlineAt: undefined,
        offlineAt: undefined,
        ttl: undefined,
        deviceIdentifier: expect.IGNORE,
        discriminator: 0x202,
        commissioningMode: 1,
        vendorId: 0xfff1,
        productId: undefined,
        deviceType: 0x100,
        deviceName: "Matter.js Test Product",
        rotatingIdentifier: undefined,
        pairingHint: 0x21,
        pairingInstructions: "",
        sessionParameters: { idleIntervalMs: 0x1f4, activeIntervalMs: 0x12c, activeThresholdMs: 0xfa0 },
        tcpSupport: 0,
        longIdleOperatingMode: undefined,
    },
    network: { port: 0x15a4, operationalPort: -1, startupSubscription: undefined },
    basicInformation: {
        clusterRevision: 4,
        dataModelRevision: 0x12,
        vendorName: "Matter.js Test Vendor",
        vendorId: 0xfff1,
        productName: "Matter.js Test Product",
        productId: 0x8000,
        nodeLabel: "Matter.js Test Product",
        location: "XX",
        hardwareVersion: 0,
        hardwareVersionString: "0",
        softwareVersion: 0,
        softwareVersionString: "0",
        manufacturingDate: undefined,
        partNumber: undefined,
        productUrl: undefined,
        productLabel: "Matter.js Test Product",
        serialNumber: undefined,
        localConfigDisabled: undefined,
        reachable: undefined,
        uniqueId: expect.IGNORE,
        capabilityMinima: { caseSessionsPerFabric: 3, subscriptionsPerFabric: 3 },
        productAppearance: undefined,
        specificationVersion: 0,
        maxPathsPerInvoke: 1,
        featureMap: {},
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    accessControl: {
        clusterRevision: 2,
        featureMap: { extension: true, managedDevice: false },
        acl: [],
        extension: [],
        subjectsPerAccessControlEntry: 4,
        targetsPerAccessControlEntry: 3,
        accessControlEntriesPerFabric: 4,
        commissioningArl: undefined,
        arl: undefined,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    groupKeyManagement: {
        clusterRevision: 2,
        featureMap: { cacheAndSync: false },
        groupKeyMap: [],
        groupTable: [],
        maxGroupsPerFabric: 0,
        maxGroupKeysPerFabric: 1,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    generalCommissioning: {
        clusterRevision: 2,
        featureMap: { termsAndConditions: false },
        breadcrumb: 0,
        basicCommissioningInfo: { failSafeExpiryLengthSeconds: undefined, maxCumulativeFailsafeSeconds: undefined },
        regulatoryConfig: 2,
        locationCapability: 2,
        supportsConcurrentConnection: true,
        tcAcceptedVersion: undefined,
        tcMinRequiredVersion: undefined,
        tcAcknowledgements: undefined,
        tcAcknowledgementsRequired: undefined,
        tcUpdateDeadline: undefined,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    administratorCommissioning: {
        clusterRevision: 1,
        featureMap: { basic: false },
        windowStatus: 0,
        adminFabricIndex: null,
        adminVendorId: null,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    operationalCredentials: {
        clusterRevision: 1,
        nocs: [],
        fabrics: [],
        supportedFabrics: 0xfe,
        commissionedFabrics: 1,
        trustedRootCertificates: [],
        currentFabricIndex: 0,
        featureMap: {},
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    generalDiagnostics: {
        clusterRevision: 2,
        featureMap: { dataModelTest: true },
        networkInterfaces: [],
        rebootCount: 0,
        upTime: expect.IGNORE,
        totalOperationalHours: 0,
        bootReason: undefined,
        activeHardwareFaults: undefined,
        activeRadioFaults: undefined,
        activeNetworkFaults: undefined,
        testEventTriggersEnabled: false,
        doNotUse: undefined,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    descriptor: {
        clusterRevision: 2,
        featureMap: { tagList: false },
        deviceTypeList: [],
        serverList: [],
        clientList: [],
        partsList: [],
        tagList: undefined,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
};

const EP1_STATE = {
    identify: {
        clusterRevision: 5,
        identifyTime: 0,
        identifyType: 0,
        featureMap: {},
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    groups: {
        clusterRevision: 4,
        featureMap: { groupNames: true },
        nameSupport: { nameSupport: false, groupNames: false },
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    onOff: {
        clusterRevision: 6,
        featureMap: { lighting: true, deadFrontBehavior: false, offOnly: false },
        onOff: false,
        globalSceneControl: true,
        onTime: 0,
        offWaitTime: 0,
        startUpOnOff: null,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
    descriptor: {
        clusterRevision: 2,
        featureMap: { tagList: false },
        deviceTypeList: [],
        serverList: [],
        clientList: [],
        partsList: [],
        tagList: undefined,
        attributeList: [],
        eventList: undefined,
        acceptedCommandList: [],
        generatedCommandList: [],
    },
};
