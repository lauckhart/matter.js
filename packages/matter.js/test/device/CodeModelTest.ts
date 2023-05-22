import { CodeModel, ClusterModel, DeviceModel } from "../../src/device/CodeModel.js";

// Should update these periodically
const MINIMUM_EXPECTED_CLUSTERS = 18;
const MINIMUM_EXPECTED_DEVICES = 41;

type CollectionTest<M> = {
    name: "clusters" | "devices",
    minSize: number,
    Model: new (...args: any[]) => M,
    instanceTests: { [name: string]: (instance: M) => void }
};

function testCollection<M>({ name, minSize, Model, instanceTests }: CollectionTest<M>) {
    const collection = CodeModel[name];
    describe(name, () => {
        it("finds all", () => {
            expect(collection.length).toBeGreaterThanOrEqual(minSize);
        })

        it("iterates", () => {
            let count = 0;
            CodeModel[name].forEach((c) => {
                expect(c instanceof Model);
                count++;
            });
            expect(count).toBeGreaterThanOrEqual(minSize);
        })

        it("maps", () => {
            let count = 0;
            CodeModel[name].map((c) => {
                expect(c).toBeInstanceOf(Model);
                count++;
            });
            expect(count).toBeGreaterThanOrEqual(minSize);
        })

        for (const key in instanceTests) {
            const index = CodeModel[name].findIndex((m) => m.name == key);
            const model = index == -1 ? undefined : CodeModel[name][index];
            describe(`instance ${key}`, () => {
                it("exists", () => {
                    expect(model).toBeDefined();
                });

                if (model) {
                    it("has correct name", () => {
                        expect(model.name).toBe(key);
                    })

                    instanceTests[key](model as M);
                }
            })
        }
    })
}

describe("CodeModel", () => {
    testCollection({
        name: "clusters",
        minSize: MINIMUM_EXPECTED_CLUSTERS,
        Model: ClusterModel,
        instanceTests: {
            LevelControl: (cluster) => {
                expect(cluster.attributes.length).toBeGreaterThan(11);
                expect(cluster.commands.length).toBeGreaterThan(7);
                expect(cluster.events.length).toBe(0);
            },

            PowerSource: (cluster) => {
                expect(cluster.attributes.length).toBeGreaterThan(36);
                expect(cluster.commands.length).toBe(0);
                expect(cluster.events.length).toBeGreaterThan(2);
            }
        }
    });
    testCollection({
        name: "devices",
        minSize: MINIMUM_EXPECTED_DEVICES,
        Model: DeviceModel,
        instanceTests: {
            Pump: (device) => {
                // TODO
                device;
            }
        }
    });
})
