import * as standardExports from "../../src/device/standard/index.js";

const standard = Object.entries(standardExports).filter(([k]) => k.match(/Device$/)).map(([_k, v]) => v);

describe("AutoDevice", () => {
    standard.forEach((Device) => {
        describe(Device.name, () => {
            it("instantiates", () => {
                new Device();
            });
        });
    });
})