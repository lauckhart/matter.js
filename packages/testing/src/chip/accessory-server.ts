/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { AddressInfo } from "net";
import { Parser } from "xml2js";

/**
 * Server side the CHIP testing "accessory" protocol invoked by `accessory_server_bridge.py` in the SDK.
 */
export class AccessoryServer {
    #server: Server;
    #isClosed = false;

    private constructor(onReady: () => void) {
        this.#server = createServer(this.#handleRequest.bind(this));
        this.#server.listen(0, "127.0.0.1", onReady);
    }

    static create() {
        return new Promise<AccessoryServer>(resolve => {
            const server = new AccessoryServer(() => resolve(server));
        });
    }

    get port() {
        const port = (this.#server.address() as AddressInfo)?.port;
        if (typeof port !== "number") {
            // Shouldn't happen
            throw new Error("Accessory server has no assigned port");
        }
        return port;
    }

    async close() {
        if (!this.#isClosed) {
            this.#isClosed = true;
            await new Promise<void>(resolve =>
                this.#server.close(error => {
                    if (error) {
                        console.warn("Error closing accessory server", error);
                    }
                    resolve();
                }),
            );
        }
    }

    #handleRequest(request: IncomingMessage, response: ServerResponse) {
        request.on("error", error => {
            console.warn("Accessory server request error", error);
        });

        response.on("error", error => {
            console.warn("Accessory server response error", error);
        });

        const parser = new Parser();
        request.on("data", chunk => {
            parser.parseString(chunk, (error, result) => {
                if (error !== undefined) {
                    response.writeHead(400);
                    response.end();
                }
                if (result !== undefined) {
                    this.#invoke(result).then(
                        status => {
                            response.writeHead(200);
                            response.end(
                                `<?xml version="1.0"?>\n<methodResponse><params><param><value><boolean>${status}</boolean></value></param></params></methodResponse>`,
                            );
                        },
                        error => {
                            console.warn("Error invoking accessory method", error);
                            response.writeHead(500);
                            response.end();
                        },
                    );
                }
            });
        });
    }

    async #invoke(request: any) {
        console.log(request);
        return false;
    }
}
