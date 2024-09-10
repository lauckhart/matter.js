/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BinaryKeyPair,
    Bytes,
    Crypto,
    DataWriter,
    Endian,
    InternalError,
    Key,
    Logger,
    MatterError,
    MatterFlowError,
    MaybePromise,
    PrivateKey,
    SupportedStorageTypes,
} from "@project-chip/matter.js-general";
import {
    CaseAuthenticatedTag,
    Cluster,
    FabricId,
    FabricIndex,
    GroupKeyManagement,
    NodeId,
    TypeFromSchema,
    VendorId,
} from "@project-chip/matter.js-types";
import {
    CertificateManager,
    TlvIntermediateCertificate,
    TlvOperationalCertificate,
    TlvRootCertificate,
} from "../certificate/CertificateManager.js";
import { SecureSession } from "../session/SecureSession.js";

const logger = Logger.get("Fabric");

const COMPRESSED_FABRIC_ID_INFO = Bytes.fromString("CompressedFabric");
const GROUP_SECURITY_INFO = Bytes.fromString("GroupKey v1.0");

export class PublicKeyError extends MatterError {}

export type FabricJsonObject = {
    fabricIndex: FabricIndex;
    fabricId: FabricId;
    nodeId: NodeId;
    rootNodeId: NodeId;
    operationalId: Uint8Array;
    rootPublicKey: Uint8Array;
    keyPair: BinaryKeyPair;
    rootVendorId: VendorId;
    rootCert: Uint8Array;
    identityProtectionKey: Uint8Array;
    operationalIdentityProtectionKey: Uint8Array;
    intermediateCACert: Uint8Array | undefined;
    operationalCert: Uint8Array;
    label: string;
    scopedClusterData: Map<number, Map<string, SupportedStorageTypes>>;
};

type OperationalGroupKeySet = TypeFromSchema<typeof GroupKeyManagement.TlvGroupKeySet> & {
    operationalEpochKey0: Uint8Array;
    groupSessionId0: number | null;
    operationalEpochKey1: Uint8Array | null;
    groupSessionId1: number | null;
    operationalEpochKey2: Uint8Array | null;
    groupSessionId2: number | null;
};

namespace OperationalGroupKeySet {
    export const asTlvGroupSet = (
        operationalGroupSet: OperationalGroupKeySet,
    ): TypeFromSchema<typeof GroupKeyManagement.TlvGroupKeySet> => {
        const {
            groupKeySetId,
            epochKey0,
            epochStartTime0,
            epochKey1,
            epochStartTime1,
            epochKey2,
            epochStartTime2,
            groupKeySecurityPolicy,
            groupKeyMulticastPolicy,
        } = operationalGroupSet;
        return {
            groupKeySetId,
            epochKey0,
            epochStartTime0,
            epochKey1,
            epochStartTime1,
            epochKey2,
            epochStartTime2,
            groupKeySecurityPolicy,
            groupKeyMulticastPolicy,
        };
    };
}

export type ExposedFabricInformation = {
    fabricIndex: FabricIndex;
    fabricId: FabricId;
    nodeId: NodeId;
    rootNodeId: NodeId;
    rootVendorId: VendorId;
    label: string;
};

export class Fabric {
    readonly #sessions = new Array<SecureSession<any>>();
    readonly #scopedClusterData: Map<number, any>;

    readonly #keyPair: Key;

    #removeCallbacks = new Array<() => MaybePromise<void>>();
    #persistCallback: ((isUpdate?: boolean) => MaybePromise<void>) | undefined;

    constructor(
        readonly fabricIndex: FabricIndex,
        readonly fabricId: FabricId,
        readonly nodeId: NodeId,
        readonly rootNodeId: NodeId,
        readonly operationalId: Uint8Array,
        readonly rootPublicKey: Uint8Array,
        keyPair: Key,
        readonly rootVendorId: VendorId,
        readonly rootCert: Uint8Array,
        readonly identityProtectionKey: Uint8Array,
        readonly operationalIdentityProtectionKey: Uint8Array,
        readonly intermediateCACert: Uint8Array | undefined,
        readonly operationalCert: Uint8Array,
        public label: string,
        scopedClusterData?: Map<number, Map<string, SupportedStorageTypes>>,
    ) {
        this.#keyPair = keyPair;
        this.#scopedClusterData = scopedClusterData ?? new Map<number, Map<string, SupportedStorageTypes>>();
    }

    toStorageObject(): FabricJsonObject {
        return {
            fabricIndex: this.fabricIndex,
            fabricId: this.fabricId,
            nodeId: this.nodeId,
            rootNodeId: this.rootNodeId,
            operationalId: this.operationalId,
            rootPublicKey: this.rootPublicKey,
            keyPair: this.#keyPair.keyPair,
            rootVendorId: this.rootVendorId,
            rootCert: this.rootCert,
            identityProtectionKey: this.identityProtectionKey,
            operationalIdentityProtectionKey: this.operationalIdentityProtectionKey,
            intermediateCACert: this.intermediateCACert,
            operationalCert: this.operationalCert,
            label: this.label,
            scopedClusterData: this.#scopedClusterData,
        };
    }

    static createFromStorageObject(fabricObject: FabricJsonObject): Fabric {
        return new Fabric(
            fabricObject.fabricIndex,
            fabricObject.fabricId,
            fabricObject.nodeId,
            fabricObject.rootNodeId,
            fabricObject.operationalId,
            fabricObject.rootPublicKey,
            PrivateKey(fabricObject.keyPair),
            fabricObject.rootVendorId,
            fabricObject.rootCert,
            fabricObject.identityProtectionKey,
            fabricObject.operationalIdentityProtectionKey,
            fabricObject.intermediateCACert,
            fabricObject.operationalCert,
            fabricObject.label,
            fabricObject.scopedClusterData,
        );
    }

    async setLabel(label: string) {
        this.label = label;
        await this.persist();
    }

    get publicKey() {
        return this.#keyPair.publicKey;
    }

    sign(data: Uint8Array) {
        return Crypto.sign(this.#keyPair, data);
    }

    verifyCredentials(operationalCert: Uint8Array, intermediateCACert?: Uint8Array) {
        if (intermediateCACert === undefined) {
            // Validate NOC Certificate against Root Certificate
            CertificateManager.verifyNodeOperationalCertificate(
                TlvRootCertificate.decode(this.rootCert),
                TlvOperationalCertificate.decode(operationalCert),
            );
        } else {
            const decodedIcaCert = TlvIntermediateCertificate.decode(intermediateCACert);
            // Validate NOC Certificate against ICA Certificate
            CertificateManager.verifyNodeOperationalCertificate(
                decodedIcaCert,
                TlvOperationalCertificate.decode(operationalCert),
            );

            // Validate ICACertificate against Root Certificate
            CertificateManager.verifyIntermediateCaCertificate(
                TlvRootCertificate.decode(this.rootCert),
                decodedIcaCert,
            );
        }
    }

    matchesFabricIdAndRootPublicKey(fabricId: FabricId, rootPublicKey: Uint8Array) {
        return this.fabricId === fabricId && Bytes.areEqual(this.rootPublicKey, rootPublicKey);
    }

    matchesKeyPair(keyPair: Key) {
        return (
            Bytes.areEqual(this.#keyPair.publicKey, keyPair.publicKey) &&
            Bytes.areEqual(this.#keyPair.privateKey, keyPair.privateKey)
        );
    }

    getDestinationId(nodeId: NodeId, random: Uint8Array) {
        const writer = new DataWriter(Endian.Little);
        writer.writeByteArray(random);
        writer.writeByteArray(this.rootPublicKey);
        writer.writeUInt64(this.fabricId);
        writer.writeUInt64(nodeId);
        return Crypto.hmac(this.operationalIdentityProtectionKey, writer.toByteArray());
    }

    addSession(session: SecureSession<any>) {
        this.#sessions.push(session);
    }

    removeSession(session: SecureSession<any>) {
        const index = this.#sessions.indexOf(session);
        if (index >= 0) {
            this.#sessions.splice(index, 1);
        }
    }

    addRemoveCallback(callback: () => MaybePromise<void>) {
        this.#removeCallbacks.push(callback);
    }

    deleteRemoveCallback(callback: () => MaybePromise<void>) {
        const index = this.#removeCallbacks.indexOf(callback);
        if (index >= 0) {
            this.#removeCallbacks.splice(index, 1);
        }
    }

    set persistCallback(callback: (isUpdate?: boolean) => MaybePromise<void>) {
        // TODO Remove "isUpdate" parameter as soon as the fabric scoped data are removed from here/legacy API gets removed
        this.#persistCallback = callback;
    }

    async remove(currentSessionId?: number) {
        for (const callback of this.#removeCallbacks) {
            await callback();
        }
        for (const session of [...this.#sessions]) {
            await session.destroy(false, session.id === currentSessionId); // Delay Close for current session only
        }
    }

    persist(isUpdate = true) {
        return this.#persistCallback?.(isUpdate);
    }

    getScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string): T | undefined {
        const dataMap = this.#scopedClusterData.get(cluster.id);
        if (dataMap === undefined) {
            return undefined;
        }
        return dataMap.get(clusterDataKey);
    }

    setScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string, value: T) {
        if (!this.#scopedClusterData.has(cluster.id)) {
            this.#scopedClusterData.set(cluster.id, new Map<string, SupportedStorageTypes>());
        }
        this.#scopedClusterData.get(cluster.id).set(clusterDataKey, value);
        return this.persist(false);
    }

    deleteScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        if (!this.#scopedClusterData.has(cluster.id)) {
            return;
        }
        this.#scopedClusterData.get(cluster.id).delete(clusterDataKey);
        return this.persist(false);
    }

    hasScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        return this.#scopedClusterData.has(cluster.id) && this.#scopedClusterData.get(cluster.id).has(clusterDataKey);
    }

    deleteScopedClusterData(cluster: Cluster<any, any, any, any, any>) {
        this.#scopedClusterData.delete(cluster.id);
        return this.persist(false);
    }

    getScopedClusterDataKeys(cluster: Cluster<any, any, any, any, any>): string[] {
        if (!this.#scopedClusterData.has(cluster.id)) {
            return [];
        }
        return Array.from(this.#scopedClusterData.get(cluster.id).keys());
    }

    getGroupKeySet(groupKeySetId: number) {
        if (groupKeySetId === 0) {
            return OperationalGroupKeySet.asTlvGroupSet(this.getGroupSetForIpk());
        }
        // TODO add correct group handling later, right now only IPK exists
        return undefined;
    }

    private getGroupSetForIpk(): OperationalGroupKeySet {
        return {
            groupKeySetId: 0,
            epochKey0: this.identityProtectionKey,
            operationalEpochKey0: this.operationalIdentityProtectionKey,
            epochStartTime0: 0, // or do we need to track Fabric creation date?
            groupSessionId0: null,
            epochKey1: null,
            operationalEpochKey1: null,
            epochStartTime1: null,
            groupSessionId1: null,
            epochKey2: null,
            operationalEpochKey2: null,
            epochStartTime2: null,
            groupSessionId2: null,
            groupKeySecurityPolicy: GroupKeyManagement.GroupKeySecurityPolicy.TrustFirst,
            groupKeyMulticastPolicy: GroupKeyManagement.GroupKeyMulticastPolicy.PerGroupId,
        };
    }

    getAllGroupKeySets() {
        // TODO add correct group handling later, right now only IPK exists
        return [OperationalGroupKeySet.asTlvGroupSet(this.getGroupSetForIpk())];
    }

    get externalInformation(): ExposedFabricInformation {
        return {
            fabricIndex: this.fabricIndex,
            fabricId: this.fabricId,
            nodeId: this.nodeId,
            rootNodeId: this.rootNodeId,
            rootVendorId: this.rootVendorId,
            label: this.label,
        };
    }
}

export class FabricBuilder {
    #keyPair = Crypto.createKeyPair();
    #rootVendorId?: VendorId;
    #rootCert?: Uint8Array;
    #intermediateCACert?: Uint8Array;
    #operationalCert?: Uint8Array;
    #fabricId?: FabricId;
    #nodeId?: NodeId;
    #rootNodeId?: NodeId;
    #rootPublicKey?: Uint8Array;
    #identityProtectionKey?: Uint8Array;
    #fabricIndex?: FabricIndex;
    #label = "";

    get publicKey() {
        return this.#keyPair.publicKey;
    }

    get fabricIndex() {
        return this.#fabricIndex;
    }

    createCertificateSigningRequest() {
        return CertificateManager.createCertificateSigningRequest(this.#keyPair);
    }

    setRootCert(rootCert: Uint8Array) {
        const decodedRootCertificate = TlvRootCertificate.decode(rootCert);
        CertificateManager.verifyRootCertificate(decodedRootCertificate);
        this.#rootCert = rootCert;
        this.#rootPublicKey = decodedRootCertificate.ellipticCurvePublicKey;
        return this;
    }

    // TODO Remove when legacy API gets removed because then no longer needed
    get rootCert() {
        return this.#rootCert;
    }

    hasRootCert() {
        return this.#rootCert !== undefined;
    }

    setOperationalCert(operationalCert: Uint8Array, intermediateCACert?: Uint8Array) {
        if (intermediateCACert !== undefined && intermediateCACert.length === 0) {
            intermediateCACert = undefined;
        }
        const {
            subject: { nodeId, fabricId, caseAuthenticatedTags },
            ellipticCurvePublicKey,
        } = TlvOperationalCertificate.decode(operationalCert);
        logger.debug(
            `FabricBuilder setOperationalCert: nodeId=${nodeId}, fabricId=${fabricId}, caseAuthenticatedTags=${caseAuthenticatedTags}`,
        );
        if (caseAuthenticatedTags !== undefined) {
            CaseAuthenticatedTag.validateNocTagList(caseAuthenticatedTags);
        }

        if (!Bytes.areEqual(ellipticCurvePublicKey, this.#keyPair.publicKey)) {
            throw new PublicKeyError("Operational Certificate does not match public key.");
        }

        if (this.#rootCert === undefined) {
            throw new MatterFlowError("Root Certificate needs to be set first.");
        }

        if (intermediateCACert !== undefined) {
            const decodedIntermediateCACert = TlvIntermediateCertificate.decode(intermediateCACert);
            CertificateManager.verifyIntermediateCaCertificate(
                TlvRootCertificate.decode(this.#rootCert),
                decodedIntermediateCACert,
            );
            CertificateManager.verifyNodeOperationalCertificate(
                decodedIntermediateCACert,
                TlvOperationalCertificate.decode(operationalCert),
            );
        } else {
            CertificateManager.verifyNodeOperationalCertificate(
                TlvRootCertificate.decode(this.#rootCert),
                TlvOperationalCertificate.decode(operationalCert),
            );
        }

        this.#operationalCert = operationalCert;
        this.#intermediateCACert = intermediateCACert;
        this.#fabricId = FabricId(fabricId);
        this.#nodeId = nodeId;

        return this;
    }

    setRootVendorId(rootVendorId: VendorId) {
        this.#rootVendorId = rootVendorId;
        return this;
    }

    setRootNodeId(rootNodeId: NodeId) {
        this.#rootNodeId = rootNodeId;
        return this;
    }

    setIdentityProtectionKey(key: Uint8Array) {
        this.#identityProtectionKey = key;
        return this;
    }

    initializeFromFabricForUpdate(fabric: Fabric) {
        this.#rootVendorId = fabric.rootVendorId;
        this.#rootNodeId = fabric.rootNodeId;
        this.#identityProtectionKey = fabric.identityProtectionKey;
        this.#rootCert = fabric.rootCert;
        this.#rootPublicKey = fabric.rootPublicKey;
        this.#label = fabric.label;
    }

    matchesToFabric(fabric: Fabric) {
        if (this.#fabricId === undefined || this.#rootPublicKey === undefined) {
            throw new MatterFlowError("Node Operational Data needs to be set first.");
        }
        return fabric.matchesFabricIdAndRootPublicKey(this.#fabricId, this.#rootPublicKey);
    }

    get nodeId() {
        return this.#nodeId;
    }

    get fabricId() {
        return this.#fabricId;
    }

    get keyPair() {
        return this.#keyPair;
    }

    async build(fabricIndex: FabricIndex) {
        if (this.#fabricIndex !== undefined) throw new InternalError("FabricBuilder can only be built once");
        if (this.#rootNodeId === undefined) throw new InternalError("rootNodeId needs to be set");
        if (this.#rootVendorId === undefined) throw new InternalError("vendorId needs to be set");
        if (this.#rootCert === undefined || this.#rootPublicKey === undefined)
            throw new InternalError("rootCert needs to be set");
        if (this.#identityProtectionKey === undefined) throw new InternalError("identityProtectionKey needs to be set");
        if (this.#operationalCert === undefined || this.#fabricId === undefined || this.#nodeId === undefined)
            throw new InternalError("operationalCert needs to be set");

        this.#fabricIndex = fabricIndex;
        const saltWriter = new DataWriter(Endian.Big);
        saltWriter.writeUInt64(this.#fabricId);
        const operationalId = await Crypto.hkdf(
            this.#rootPublicKey.slice(1),
            saltWriter.toByteArray(),
            COMPRESSED_FABRIC_ID_INFO,
            8,
        );

        return new Fabric(
            this.#fabricIndex,
            this.#fabricId,
            this.#nodeId,
            this.#rootNodeId,
            operationalId,
            this.#rootPublicKey,
            this.#keyPair,
            this.#rootVendorId,
            this.#rootCert,
            this.#identityProtectionKey, // Epoch Key
            await Crypto.hkdf(this.#identityProtectionKey, operationalId, GROUP_SECURITY_INFO),
            this.#intermediateCACert,
            this.#operationalCert,
            this.#label,
        );
    }
}
