/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OperationalCredentials } from "../../../cluster/definitions/OperationalCredentialsCluster.js";
import { MatterFabricConflictError } from "../../../common/FailSafeManager.js";
import { MatterFlowError } from "../../../common/MatterError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { FabricTableFullError } from "../../../fabric/FabricManager.js";
import { Logger } from "../../../log/Logger.js";
import { NodeServer } from "../../../node/server/NodeServer.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";
import { assertSecureSession } from "../../../session/SecureSession.js";
import { State } from "../../state/State.js";
import { OperationalCredentialsBehavior } from "./OperationalCredentialsBehavior.js";
import { AddNocRequest, AddTrustedRootCertificateRequest, AttestationRequest, CertificateChainRequest, CsrRequest, RemoveFabricRequest, UpdateFabricLabelRequest, UpdateNocRequest } from "./OperationalCredentialsInterface.js";
import { TlvAttestation, TlvCertSigningRequest } from "./OperationalCredentialsTypes.js";

const logger = Logger.get("OperationalCredentials");

/**
 * This is the default server implementation of OperationalCredentialsBehavior.
 */
export class OperationalCredentialsServer extends OperationalCredentialsBehavior {
    private get cert() {
        return this.part.getAncestor(NodeServer).certification;
    }

    override attestationRequest({ attestationNonce }: AttestationRequest) {
        const elements = TlvAttestation.encode({
            declaration: this.cert.declaration,
            attestationNonce: attestationNonce,
            timestamp: 0,
        });
        return {
            attestationElements: elements,
            attestationSignature: this.cert.sign(
                this.session,
                elements
            )
        };
    }

    override csrRequest({ csrNonce, isForUpdateNoc }: CsrRequest) {
        if (isForUpdateNoc && this.session.isPase()) {
            throw new StatusResponseError(
                "csrRequest for UpdateNoc received on a PASE session.",
                StatusCode.InvalidCommand,
            );
        }
        const device = this.session.getContext();
        device.assertFailSafeArmed("csrRequest received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();
        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `csrRequest received after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        const certSigningRequest = failSafeContext.createCertificateSigningRequest(
            isForUpdateNoc ?? false,
            this.session.getId(),
        );
        const nocsrElements = TlvCertSigningRequest.encode({ certSigningRequest, csrNonce });
        return { nocsrElements, attestationSignature: this.cert.sign(this.session, nocsrElements) };
    }

    override certificateChainRequest({ certificateType }: CertificateChainRequest) {
        switch (certificateType) {
            case OperationalCredentials.CertificateChainType.DacCertificate:
                return { certificate: this.cert.certificate };
            case OperationalCredentials.CertificateChainType.PaiCertificate:
                return { certificate: this.cert.intermediateCertificate };
            default:
                throw new MatterFlowError(`Unsupported certificate type: ${certificateType}`);
        }
    }

    override async addNoc(
        { nocValue, icacValue, ipkValue, caseAdminSubject, adminVendorId }: AddNocRequest
    ) {
        // TODO 1. Verify the NOC using:
        //         a. Crypto_VerifyChain(certificates = [NOCValue, ICACValue, RootCACertificate]) if ICACValue is present,
        //         b. Crypto_VerifyChain(certificates = [NOCValue, RootCACertificate]) if ICACValue is not present. If this
        //            verification fails, the error status SHALL be InvalidNOC.
        //     2. The public key of the NOC SHALL match the last generated operational public key on this session, and
        //        therefore the public key present in the last CSRResponse provided to the Administrator or
        //        Commissioner that sent the AddNOC or UpdateNOC command. If this check fails, the error status SHALL
        //        be InvalidPublicKey.
        //     3. The DN Encoding Rules SHALL be validated for every certificate in the chain, including valid value
        //        range checks for identifiers such as Fabric ID and Node ID. If this validation fails, the error status
        //        SHALL be InvalidNodeOpId if the matter-node-id attribute in the subject DN of the NOC has a value
        //        outside the Operational Node ID range and InvalidNOC for all other failures.

        const device = this.session.getContext();
        device.assertFailSafeArmed("addNoc received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();

        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `addNoc received after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        if (!failSafeContext.fabricBuilder.hasRootCert()) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidNoc,
                debugText: "Root certificate not found.",
            };
        }

        if (failSafeContext.csrSessionId !== this.session.getId()) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.MissingCsr,
                debugText: "CSR not found in failsafe context.",
            };
        }

        if (failSafeContext.forUpdateNoc) {
            throw new StatusResponseError(
                `addNoc received after csr request was invoked for UpdateNOC.`,
                StatusCode.ConstraintError,
            );
        }

        const state = this.state;
        if (device.getFabrics().length === state.supportedFabrics) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.TableFull,
                debugText: `No more fabrics can be added because limit ${state.supportedFabrics} reached.`,
            };
        }

        let fabric;
        try {
            fabric = await failSafeContext.buildFabric({
                nocValue,
                icacValue,
                adminVendorId,
                ipkValue,
                caseAdminSubject,
            });
        } catch (error) {
            if (error instanceof MatterFabricConflictError) {
                return {
                    statusCode: OperationalCredentials.NodeOperationalCertStatus.FabricConflict,
                    debugText: error.message,
                };
            } else if (error instanceof FabricTableFullError) {
                return {
                    statusCode: OperationalCredentials.NodeOperationalCertStatus.TableFull,
                    debugText: error.message,
                };
            } else {
                throw error;
            }
        }
        await device.addFabric(fabric);

        if (this.session.isPase()) {
            logger.debug(`Add Fabric ${fabric.fabricIndex} to PASE session ${this.session.name}.`);
            this.session.addAssociatedFabric(fabric);
        }

        // TODO: The receiver SHALL create and add a new Access Control Entry using the CaseAdminSubject field to grant
        //  subsequent Administer access to an Administrator member of the new Fabric. It is RECOMMENDED that the
        //  Administrator presented in CaseAdminSubject exist within the same entity that is currently invoking the
        //  AddNOC command, within another of the Fabrics of which it is a member.

        // TODO The incoming IPKValue SHALL be stored in the Fabric-scoped slot within the Group Key Management cluster
        //  (see KeySetWrite), for subsequent use during CASE.

        // TODO If the current secure session was established with PASE, the receiver SHALL:
        //  a. Augment the secure session context with the FabricIndex generated above, such that subsequent interactions
        //     have the proper accessing fabric.

        logger.info(`addNoc success, adminVendorId ${adminVendorId}, caseAdminSubject ${caseAdminSubject}`);

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex: fabric.fabricIndex
        };
    }

    override fabricsAttributeGetter({ session, isFabricFiltered }) {
        if (session === undefined || !session.isSecure()) return []; // ???
        const fabrics = isFabricFiltered ? [session.getAssociatedFabric()] : session.getContext().getFabrics();

        return fabrics.map(fabric => ({
            fabricId: fabric.fabricId,
            label: fabric.label,
            nodeId: fabric.nodeId,
            rootPublicKey: fabric.rootPublicKey,
            vendorId: fabric.rootVendorId,
            fabricIndex: fabric.fabricIndex,
        }));
    }

    override nocsAttributeGetter({ session, isFabricFiltered }) {
        if (session === undefined || !session.isSecure()) return []; // ???
        const fabrics = isFabricFiltered ? [session.getAssociatedFabric()] : session.getContext().getFabrics();
        return fabrics.map(fabric => ({
            noc: fabric.operationalCert,
            icac: fabric.intermediateCACert ?? null,
            fabricIndex: fabric.fabricIndex,
        }));
    }

    override commissionedFabricsAttributeGetter({ session }) {
        if (session === undefined || !session.isSecure()) return 0; // ???
        return session.getContext().getFabrics().length;
    }

    override trustedRootCertificatesAttributeGetter({ session, isFabricFiltered }) {
        if (session === undefined || !session.isSecure()) return []; // ???
        const fabrics = isFabricFiltered ? [session.getAssociatedFabric()] : session.getContext().getFabrics();
        return fabrics.map(fabric => fabric.rootCert);
    }

    override currentFabricIndexAttributeGetter({ session }) {
        if (session === undefined || !session.isSecure()) return FabricIndex.NO_FABRIC;
        assertSecureSession(session);
        return session.getFabric()?.fabricIndex ?? FabricIndex.NO_FABRIC;
    }

    override updateNoc({ nocValue, icacValue }: UpdateNocRequest) {
        assertSecureSession(session);

        const device = session.getContext();

        device.assertFailSafeArmed("updateNoc received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();

        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `updateNoc received after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        if (failSafeContext.forUpdateNoc) {
            throw new StatusResponseError(
                `addNoc received after csr request was invoked for UpdateNOC.`,
                StatusCode.ConstraintError,
            );
        }

        if (failSafeContext.fabricBuilder.hasRootCert()) {
            throw new StatusResponseError(
                "Trusted root certificate added in this session which is now allowed for UpdateNOC.",
                StatusCode.ConstraintError,
            );
        }

        if (!failSafeContext.forUpdateNoc) {
            throw new StatusResponseError("csrRequest not invoked for UpdateNOC.", StatusCode.ConstraintError);
        }

        if (session.getAssociatedFabric().fabricIndex !== failSafeContext.associatedFabric?.fabricIndex) {
            throw new StatusResponseError(
                "Fabric of this session and the failsafe context do not match.",
                StatusCode.ConstraintError,
            );
        }

        // Build a new Fabric with the updated NOC and ICAC
        const updateFabric = await failSafeContext.buildUpdatedFabric(nocValue, icacValue);

        // update FabricManager and Resumption records but leave current session intact
        device.updateFabric(updateFabric);

        // Update connected attributes
        nocs.updated(session);
        fabrics.updated(session);

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex: updateFabric.fabricIndex,
        };
    }

    override updateFabricLabel({ label }: UpdateFabricLabelRequest) {
        assertSecureSession(session, "updateOperationalCert should be called on a secure session.");
        const fabric = session.getFabric();
        if (fabric === undefined) throw new MatterFlowError("updateOperationalCert on a session linked to a fabric.");

        const currentFabricIndex = fabric.fabricIndex;
        const device = session.getContext();
        const conflictingLabelFabric = device
            .getFabrics()
            .find(f => f.label === label && f.fabricIndex !== currentFabricIndex);
        if (conflictingLabelFabric !== undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.LabelConflict,
                debugText: `Label ${label} already used by fabric ${conflictingLabelFabric.fabricIndex}`,
            };
        }

        fabric.setLabel(label);

        fabrics.updated(session);

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex: fabric.fabricIndex };
    }

    override removeFabric({ fabricIndex }: RemoveFabricRequest) {
        const device = session.getContext();

        const fabric = device.getFabricByIndex(fabricIndex);

        if (fabric === undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex,
                debugText: `Fabric ${fabricIndex} not found`,
            };
        }

        const basicInformationCluster = endpoint.getClusterServer(BasicInformation.Cluster);
        basicInformationCluster?.triggerLeaveEvent?.({ fabricIndex });

        assertSecureSession(session);

        await fabric.remove(session.getId());
        nocs.updated(session);
        commissionedFabrics.updated(session);
        fabrics.updated(session);
        trustedRootCertificates.updated(session);

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex,
        };
    }

    override addTrustedRootCertificate({ rootCaCertificate }: AddTrustedRootCertificateRequest) {
        const device = this.session.getContext();

        device.assertFailSafeArmed("addTrustedRootCertificate received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();
        if (failSafeContext.fabricBuilder.hasRootCert()) {
            throw new StatusResponseError(
                "Trusted root certificate already added in this FailSafe context.",
                StatusCode.ConstraintError,
            );
        }

        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `Can not add trusted root certificates after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"}.`,
                StatusCode.ConstraintError,
            );
        }

        this.session.getContext().getFailSafeContext().setRootCert(rootCaCertificate);
    }
}

export namespace OperationalCredentialsServer {
    export class EndpointScope extends State implements InstanceType<typeof OperationalCredentialsBehavior.EndpointScope> {
        get supportedFabrics(): number {

        }

        get commissionedFabrics(): number {

        }

        get trustedRootCertificates(): Uint8Array[] {

        }

        get currentFabricIndex(): FabricIndex {

        }
    }
}
