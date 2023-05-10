import { Key } from "../../src/util/Key.js";
import { ByteArray } from "@project-chip/matter.js/util";

const SEC1 = "30770201010420aef3484116e9481ec57be0472df41bf499064e5024ad869eca5e889802d48075a00a06082a8648ce3d030107a144034200043c398922452b55caf389c25bd1bca4656952ccb90e8869249ad8474653014cbf95d687965e036b521c51037e6b8cedefca1eb44046694fa08882eed6519decba";
const PKCS8 = "308141020100301306072a8648ce3d020106082a8648ce3d030107042730250201010420727F1005CBA47ED7822A9D930943621617CFD3B79D9AF528B801ECF9F1992204";

describe("Key", () => {
    describe("fromSec1", () => {
        it("decodes", () => {
            expect(Key.fromSec1(ByteArray.fromHex(SEC1))).toEqual({
                d: "rvNIQRbpSB7Fe-BHLfQb9JkGTlAkrYaeyl6ImALUgHU"
            });
        });
    });

    describe("fromPkcs8", () => {
        it("decodes", () => {
            expect(Key.fromPkcs8(ByteArray.fromHex(PKCS8))).toEqual({
                d: "cn8QBcukfteCKp2TCUNiFhfP07edmvUouAHs-fGZIgQ"
            });
        });
    });
});
