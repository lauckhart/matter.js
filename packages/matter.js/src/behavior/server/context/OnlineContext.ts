import { MatterDevice } from "../../../MatterDevice.js";
import type { Message } from "../../../codec/MessageCodec.js";
import { assertSecureSession } from "../../../session/SecureSession.js";
import { AccessLevel } from "../../../cluster/Cluster.js";
import { Session } from "../../../session/Session.js";
import { Transaction } from "../../state/transaction/Transaction.js";
import { ActionContext, ActionContext, InternalMessage, CONTEXT } from "./ActionContext.js";

/**
 * Create an online {@link ActionContext}.  Public Matter API interactions happen in an online context.
 */

export function OnlineContext(options: OnlineContext.Options): ActionContext {
    let context = (options.message as InternalMessage)[CONTEXT];
    if (context) {
        return context;
    }

    if (!options.session) {
        // TODO -ideally there'd be something more explicit here to indicate we're
        // operating without ACL enforcement but currently lower levels just omit
        // the session.
        //
        // I think read access is correct here
        context = {
            ...options,
            transaction: new Transaction(`online#${options.message.packetHeader.messageId.toString(16)}`),
        };
    } else {
        assertSecureSession(session);

        // TODO - here too would be good to explicitly designate session as PASE
        // or something so we know fabric wasn't simply omitted by a bug or
        // something
        const fabric = session.getFabric();

        context = {
            ...fields,
            associatedFabric: fabric?.fabricIndex,
            session,
            transaction,

            // TODO - this effectively disables access level enforcement because we
            // don't have privilege management implemented yet
            accessLevel: AccessLevel.Administer,
        };
    }

    if (invoke) {
        context.command = true;
    }

    return context;
}

export namespace OnlineContext {
    export type Options = {
        invoke?: boolean;
        fabricFiltered?: boolean;
        message: Message;
        session?: Session<MatterDevice>;
    };
}

export const CONTEXT = Symbol("context");

/**
 * We graft a transaction onto the message as it the contextual object that exists for the life of a request.
 * 
 * Perhaps instead makes sense to wire ActionContext into lower levels of the server but this works for now.
 */
export interface InternalMessage extends Message {
    [CONTEXT]?: ActionContext;
}


