/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { FabricScopedAttribute, AccessLevel, FixedAttribute, Attribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString, TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvUInt16, TlvUInt64, TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

/**
 * This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.4
 */
export const TlvNOCStruct = TlvObject({
    /**
     * This field SHALL contain the NOC for the struct’s associated fabric, encoded using Matter Certificate Encoding.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.4.1
     */
    noc: TlvField(1, TlvByteString.bound({ maxLength: 400 })),

    /**
     * This field SHALL contain the ICAC or the struct’s associated fabric, encoded using Matter Certificate Encoding.
     * If no ICAC is present in the chain, this field SHALL be set to null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.4.2
     */
    icac: TlvField(2, TlvNullable(TlvByteString.bound({ maxLength: 400 })))
});

/**
 * This structure encodes a Fabric Reference for a fabric within which a given Node is currently commissioned.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.5
 */
export const TlvFabricDescriptorStruct = TlvObject({
    /**
     * This field SHALL contain the public key for the trusted root that scopes the fabric referenced by FabricIndex
     * and its associated operational credential (see Section 6.4.5.3, “Trusted Root CA Certificates”). The format for
     * the key shall be the same as that used in the ec-pub-key field of the Matter Certificate Encoding for the root
     * in the operational certificate chain.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.5.1
     */
    rootPublicKey: TlvField(1, TlvByteString.bound({ minLength: 65, maxLength: 65 })),

    /**
     * This field SHALL contain the value of AdminVendorID provided in the AddNOC command that led to the creation of
     * this FabricDescriptorStruct. The set of allowed values is defined in Section 11.17.6.8.3, “AdminVendorID Field”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.5.2
     */
    vendorId: TlvField(2, TlvUInt16),

    /**
     * This field SHALL contain the FabricID allocated to the fabric referenced by FabricIndex. This field SHALL match
     * the value found in the matter-fabric-id field from the operational certificate provid
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.5.3
     */
    fabricId: TlvField(3, TlvUInt64),

    /**
     * This field SHALL contain the NodeID in use within the fabric referenced by FabricIndex. This field SHALL match
     * the value found in the matter-node-id field from the operational certificate providing this operational identity.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.5.4
     */
    nodeId: TlvField(4, TlvUInt64),

    /**
     * This field SHALL contain a commissioner-set label for the fabric referenced by FabricIndex. This label is set by
     * the UpdateFabricLabel command.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.5.5
     */
    label: TlvField(5, TlvString.bound({ maxLength: 32 }))
});

/**
 * This command SHALL be generated to request the Attestation Information, in the form of an AttestationResponse
 * Command. If the AttestationNonce that is provided in the command is malformed, a
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.1
 */
export const TlvAttestationRequestRequest = TlvObject({
    attestationNonce: TlvField(0, TlvByteString.bound({ minLength: 32, maxLength: 32 }))
});

/**
 * This command SHALL be generated in response to an Attestation Request command.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.2
 */
export const TlvAttestationResponseRequest = TlvObject({
    /**
     * This field SHALL contain the octet string of the serialized attestation_elements_message.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.2.1
     */
    attestationElements: TlvField(0, TlvByteString),

    /**
     * This field shall contain the octet string of the necessary attestation_signature as described in Section
     * 11.17.4.7, “Attestation Information”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.2.2
     */
    attestationSignature: TlvField(1, TlvByteString.bound({ minLength: 64, maxLength: 64 }))
});

/**
 * This enumeration is used by the CertificateChainRequest command to convey which certificate from the device
 * attestation certificate chain to transmit back to the client.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.2
 */
export const enum TlvCertificateChainTypeEnum {
    DacCertificate = 1,
    PaiCertificate = 2
};

/**
 * If the CertificateType is not a valid value per CertificateChainTypeEnum then the command SHALL fail with a Status
 * Code of INVALID_COMMAND.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.3
 */
export const TlvCertificateChainRequestRequest = TlvObject({
    certificateType: TlvField(0, TlvEnum<TlvCertificateChainTypeEnum>())
});

/**
 * This command SHALL be generated in response to a CertificateChainRequest command.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.4
 */
export const TlvCertificateChainResponseRequest = TlvObject({
    /**
     * This field SHALL be the DER encoded certificate corresponding to the CertificateType field in the
     * CertificateChainRequest command.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.4.1
     */
    certificate: TlvField(0, TlvByteString.bound({ maxLength: 600 }))
});

/**
 * This command SHALL be generated to execute the Node Operational CSR Procedure and subsequently return the NOCSR
 * Information, in the form of a CSRResponse Command.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.5
 */
export const TlvCsrRequestRequest = TlvObject({
    csrNonce: TlvField(0, TlvByteString.bound({ minLength: 32, maxLength: 32 })),
    isForUpdateNoc: TlvOptionalField(1, TlvBoolean)
});

/**
 * This command SHALL be generated in response to a CSRRequest Command.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.6
 */
export const TlvCsrResponseRequest = TlvObject({
    /**
     * This field SHALL contain the octet string of the serialized nocsr_elements_message.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.6.1
     */
    nocsrElements: TlvField(0, TlvByteString),

    attestationSignature: TlvField(1, TlvByteString.bound({ minLength: 64, maxLength: 64 }))
});

/**
 * This command SHALL add a new NOC chain to the device and commission a new Fabric association upon successful
 * validation of all arguments and preconditions.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.8
 */
export const TlvAddNocRequest = TlvObject({
    nocValue: TlvField(0, TlvByteString.bound({ maxLength: 400 })),
    icacValue: TlvOptionalField(1, TlvByteString.bound({ maxLength: 400 })),

    /**
     * This field SHALL contain the value of the Epoch Key for the Identity Protection Key (IPK) to set for the Fabric
     * which is to be added. This is needed to bootstrap a necessary configuration value for subsequent CASE to
     * succeed. See Section 4.13.2.6.1, “Identity Protection Key (IPK)” for details.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.8.1
     */
    ipkValue: TlvField(2, TlvByteString.bound({ minLength: 16, maxLength: 16 })),

    /**
     * If the AddNOC command succeeds according to the semantics of the following subsections, then the
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.8.2
     */
    caseAdminSubject: TlvField(3, TlvUInt64),

    /**
     * This field SHALL be set to the Vendor ID of the entity issuing the AddNOC command. This value SHALL NOT be one
     * of the reserved Vendor ID values defined in Table 1, “Vendor ID Allocations”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.8.3
     */
    adminVendorId: TlvField(4, TlvUInt16)
});

/**
 * This enumeration is used by the NOCResponse common response command to convey detailed out
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.4.3
 */
export const enum TlvNodeOperationalCertStatusEnum {
    Ok = 0,
    InvalidPublicKey = 1,
    InvalidNodeOpId = 2,
    InvalidNoc = 3,
    MissingCsr = 4,
    TableFull = 5,
    InvalidAdminSubject = 6,
    FabricConflict = 9,
    LabelConflict = 10,
    InvalidFabricIndex = 11
};

/**
 * This command SHALL be generated in response to the following commands:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.10
 */
export const TlvNocResponseRequest = TlvObject({
    /**
     * This field SHALL contain an NOCStatus value representing the status of an operation involving a NOC.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.10.1
     */
    statusCode: TlvField(0, TlvEnum<TlvNodeOperationalCertStatusEnum>()),

    /**
     * This field SHALL be present whenever StatusCode has a value of OK. If present, it SHALL contain the Fabric Index
     * of the Fabric last added, removed or updated.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.10.2
     */
    fabricIndex: TlvOptionalField(1, TlvUInt8.bound({ min: 1, max: 254 })),

    /**
     * This field MAY contain debugging textual information from the cluster implementation, which SHOULD NOT be
     * presented to user interfaces in any way. Its purpose is to help developers in troubleshooting errors and the
     * contents MAY go into logs or crash reports.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.10.3
     */
    debugText: TlvOptionalField(2, TlvString.bound({ maxLength: 128 }))
});

/**
 * This command SHALL replace the NOC and optional associated ICAC (if present) scoped under the accessing fabric upon
 * successful validation of all arguments and preconditions. The new value SHALL immediately be reflected in the NOCs
 * list attribute.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.9
 */
export const TlvUpdateNocRequest = TlvObject({
    nocValue: TlvField(0, TlvByteString.bound({ maxLength: 400 })),
    icacValue: TlvOptionalField(1, TlvByteString.bound({ maxLength: 400 }))
});

/**
 * This command SHALL be used by an Administrator to set the user-visible Label field for a given Fabric, as reflected
 * by entries in the Fabrics attribute.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.11
 */
export const TlvUpdateFabricLabelRequest = TlvObject({ label: TlvField(0, TlvString.bound({ maxLength: 32 })) });

/**
 * This command is used by Administrators to remove a given Fabric and delete all associated fabric-scoped data.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.12
 */
export const TlvRemoveFabricRequest = TlvObject({ fabricIndex: TlvField(0, TlvUInt8.bound({ min: 1, max: 254 })) });

/**
 * This command SHALL add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding representation, to
 * the TrustedRootCertificates Attribute list and SHALL ensure the next AddNOC command executed uses the provided
 * certificate as its root of trust.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.13
 */
export const TlvAddTrustedRootCertificateRequest = TlvObject({
    rootCaCertificate: TlvField(0, TlvByteString.bound({ maxLength: 400 }))
});

/**
 * Standard OperationalCredentials cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.17
 */
export const OperationalCredentialsMetadata = ClusterMetadata({ id: 0x3e, name: "OperationalCredentials", revision: 1 });

/**
 * A OperationalCredentialsCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.5.1
         */
        noCs: FabricScopedAttribute(
            0,
            TlvArray(TlvNOCStruct),

            {
                persistent: true,
                omitChanges: true,
                default: [],
                readAcl: AccessLevel.Administer,
                writeAcl: AccessLevel.Administer
            }
        ),

        /**
         * This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list of
         * FabricDescriptorStruct. This information MAY be computed directly from the NOCs attribute.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.5.2
         */
        fabrics: FabricScopedAttribute(
            1,
            TlvArray(TlvFabricDescriptorStruct),
            { persistent: true, default: [], readAcl: AccessLevel.View }
        ),

        /**
         * This attribute contains the number of Fabrics that are supported by the device. This value is fixed for a
         * particular device.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.5.3
         */
        supportedFabrics: FixedAttribute(2, TlvUInt8.bound({ min: 5, max: 254 }), { readAcl: AccessLevel.View }),

        /**
         * This attribute contains the number of Fabrics to which the device is currently commissioned. This attribute
         * SHALL be equal to the following:
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.5.4
         */
        commissionedFabrics: Attribute(3, TlvUInt8, { persistent: true, readAcl: AccessLevel.View }),

        /**
         * This attribute SHALL contain a read-only list of Trusted Root CA Certificates installed on the Node, as
         * octet strings containing their Matter Certificate Encoding representation.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.5.5
         */
        trustedRootCertificates: Attribute(
            4,
            TlvArray(TlvByteString),
            { persistent: true, omitChanges: true, default: [], readAcl: AccessLevel.View }
        ),

        /**
         * This attribute SHALL contain accessing fabric index.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.5.6
         */
        currentFabricIndex: Attribute(5, TlvUInt8, { readAcl: AccessLevel.View })
    },

    commands: {
        /**
         * This command SHALL be generated to request the Attestation Information, in the form of an
         * AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.1
         */
        attestationRequest: Command(0, TlvAttestationRequestRequest, 1, TlvAttestationResponseRequest),

        /**
         * This command SHALL be generated in response to an Attestation Request command.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.2
         */
        attestationResponse: Command(1, TlvAttestationResponseRequest, 1, TlvNoResponse),

        /**
         * If the CertificateType is not a valid value per CertificateChainTypeEnum then the command SHALL fail with a
         * Status Code of INVALID_COMMAND.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.3
         */
        certificateChainRequest: Command(2, TlvCertificateChainRequestRequest, 3, TlvCertificateChainResponseRequest),

        /**
         * This command SHALL be generated in response to a CertificateChainRequest command.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.4
         */
        certificateChainResponse: Command(3, TlvCertificateChainResponseRequest, 3, TlvNoResponse),

        /**
         * This command SHALL be generated to execute the Node Operational CSR Procedure and subsequently return the
         * NOCSR Information, in the form of a CSRResponse Command.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.5
         */
        csrRequest: Command(4, TlvCsrRequestRequest, 5, TlvCsrResponseRequest),

        /**
         * This command SHALL be generated in response to a CSRRequest Command.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.6
         */
        csrResponse: Command(5, TlvCsrResponseRequest, 5, TlvNoResponse),

        /**
         * This command SHALL add a new NOC chain to the device and commission a new Fabric association upon successful
         * validation of all arguments and preconditions.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.8
         */
        addNoc: Command(6, TlvAddNocRequest, 8, TlvNocResponseRequest),

        /**
         * This command SHALL replace the NOC and optional associated ICAC (if present) scoped under the accessing
         * fabric upon successful validation of all arguments and preconditions. The new value SHALL immediately be
         * reflected in the NOCs list attribute.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.9
         */
        updateNoc: Command(7, TlvUpdateNocRequest, 8, TlvNocResponseRequest),

        /**
         * This command SHALL be generated in response to the following commands:
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.10
         */
        nocResponse: Command(8, TlvNocResponseRequest, 8, TlvNoResponse),

        /**
         * This command SHALL be used by an Administrator to set the user-visible Label field for a given Fabric, as
         * reflected by entries in the Fabrics attribute.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.11
         */
        updateFabricLabel: Command(9, TlvUpdateFabricLabelRequest, 8, TlvNocResponseRequest),

        /**
         * This command is used by Administrators to remove a given Fabric and delete all associated fabric-scoped data.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.12
         */
        removeFabric: Command(10, TlvRemoveFabricRequest, 8, TlvNocResponseRequest),

        /**
         * This command SHALL add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding
         * representation, to the TrustedRootCertificates Attribute list and SHALL ensure the next AddNOC command
         * executed uses the provided certificate as its root of trust.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.17.6.13
         */
        addTrustedRootCertificate: Command(11, TlvAddTrustedRootCertificateRequest, 11, TlvNoResponse)
    }
});

export type OperationalCredentialsCluster<T extends TypeFromPartialBitSchema<typeof OperationalCredentialsMetadata.features>> = 
    typeof OperationalCredentialsMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function OperationalCredentialsCluster<T extends (keyof typeof OperationalCredentialsMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...OperationalCredentialsMetadata,
        supportedFeatures: BitFlags(OperationalCredentialsMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as OperationalCredentialsCluster<BitFlags<typeof OperationalCredentialsMetadata.features, T>>;
};