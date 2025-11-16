import { Message, MessageCodec } from "#codec/MessageCodec.js";
import { MatterError, NoResponseTimeoutError } from "@matter/general";

export class RetransmissionLimitReachedError extends NoResponseTimeoutError {}

export class UnexpectedMessageError extends MatterError {
    public constructor(
        message: string,
        public readonly receivedMessage: Message,
    ) {
        super(`(${MessageCodec.messageDiagnostics(receivedMessage)}) ${message}`);
    }
}
/**
 * Thrown for communication attempts on closed sessions.
 */

export class SessionClosedError extends MatterError {}
