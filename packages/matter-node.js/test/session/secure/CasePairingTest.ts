/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, PublicKey } from "@project-chip/matter.js-general";
import { TlvEncryptedDataSigma2, TlvEncryptedDataSigma3, TlvSignedData } from "@project-chip/matter.js/session";
import * as assert from "assert";
import { CryptoNode } from "../../../src/crypto/CryptoNode.js";

const cryptoNode = new CryptoNode();

describe("CasePairing", () => {
    describe("pair", () => {
        it("generates the right bytes for sigma 2", async () => {
            const sigma1Bytes = Bytes.fromHex(
                "153001208681a088651b1803d3027e7994756aedb4c4bd56ca1f5e1c54cf6da4a104fffa25028830300320066ab9dc4e84686b9fb7850d4b8306e8c42189f39c919459a552cf27ad34004230044104ae6e458cf40ad53761ee90bc458aa577e6a1acf75410524551bb0bc4c708832c6525991ee2eed47df35ce2d83dad743bff6769ebbf731395d62453cb37303e0335052501881325022c011818",
            );
            const noc = Bytes.fromHex(
                "153001010124020137032414001826048012542826058015203b370624150124115a1824070124080130094104531a14e4c1b4cc7ac69aa5e403d5ccc3c5152c29fddedc29ac98ecff6c8f8695317446029cf3eb3e295ee18f0fd0ba9f06f7fa229138db0bc8d8c6f9875c9707370a3501280118240201360304020401183004149038f60c3542d5e610f29abc5f42ac09b07ee0d7300514e766069362d7e35b79687161644d222bdde93a6818300b40cbd9a06e77e9a7bcd19d02da0f2e50042f7d78201e8be26e793e995ca8f02f1094b34d0fd53b1f1458908d0d29183f2611e6132c6401d15dfff081d1021358ad18",
            );
            const ipk = Bytes.fromHex("0c677d9b5ac585827b577470bd9bd516");
            const random = Bytes.fromHex("75d1443943a23371699bb017958a87e9ec6bbcad5f990aa3822a45bec7786489");
            const sharedSecret = Bytes.fromHex("08ec3182f7111854fd22fe527951527e4fe905d29a959f99013279cd9c9299f1");
            const pubKey = Bytes.fromHex(
                "04e2690445cc017a388853eaeca3a1ffd2712f6898e0bb523b8b496590804a39bf1555300bbd2a159e927b428397fb07a41e26c8cdf858ec62a310d0480d94eb64",
            );
            const peerPubKey = Bytes.fromHex(
                "04ae6e458cf40ad53761ee90bc458aa577e6a1acf75410524551bb0bc4c708832c6525991ee2eed47df35ce2d83dad743bff6769ebbf731395d62453cb37303e03",
            );
            const fabricPubKey = Bytes.fromHex(
                "04531a14e4c1b4cc7ac69aa5e403d5ccc3c5152c29fddedc29ac98ecff6c8f8695317446029cf3eb3e295ee18f0fd0ba9f06f7fa229138db0bc8d8c6f9875c9707",
            );

            const sigma2Salt = Buffer.concat([ipk, random, pubKey, cryptoNode.hash(sigma1Bytes)]);

            assert.equal(
                Bytes.toHex(sigma2Salt),
                "0c677d9b5ac585827b577470bd9bd51675d1443943a23371699bb017958a87e9ec6bbcad5f990aa3822a45bec778648904e2690445cc017a388853eaeca3a1ffd2712f6898e0bb523b8b496590804a39bf1555300bbd2a159e927b428397fb07a41e26c8cdf858ec62a310d0480d94eb64df506d7014c72ed4a18169954cf24a5cacf44fc7c13eb39906c06a50864f8106",
            );

            const sigma2Key = await cryptoNode.hkdf(sharedSecret, sigma2Salt, Bytes.fromString("Sigma2"));

            assert.equal(Bytes.toHex(sigma2Key), "7ed5e720195c511dc2d97535e262f935");

            const signatureData = TlvSignedData.encode({
                nodeOpCert: noc,
                ecdhPublicKey: pubKey,
                peerEcdhPublicKey: peerPubKey,
            });

            assert.equal(
                Bytes.toHex(signatureData),
                "153001f1153001010124020137032414001826048012542826058015203b370624150124115a1824070124080130094104531a14e4c1b4cc7ac69aa5e403d5ccc3c5152c29fddedc29ac98ecff6c8f8695317446029cf3eb3e295ee18f0fd0ba9f06f7fa229138db0bc8d8c6f9875c9707370a3501280118240201360304020401183004149038f60c3542d5e610f29abc5f42ac09b07ee0d7300514e766069362d7e35b79687161644d222bdde93a6818300b40cbd9a06e77e9a7bcd19d02da0f2e50042f7d78201e8be26e793e995ca8f02f1094b34d0fd53b1f1458908d0d29183f2611e6132c6401d15dfff081d1021358ad1830034104e2690445cc017a388853eaeca3a1ffd2712f6898e0bb523b8b496590804a39bf1555300bbd2a159e927b428397fb07a41e26c8cdf858ec62a310d0480d94eb6430044104ae6e458cf40ad53761ee90bc458aa577e6a1acf75410524551bb0bc4c708832c6525991ee2eed47df35ce2d83dad743bff6769ebbf731395d62453cb37303e0318",
            );

            const signature = Bytes.fromHex(
                "1736972364d84c4ae069f642f491256c6e74c86eda9f5ed4d89dfd7cadb68b67574f032afa2764fcc890e9218eaedcc484576d2d65e4df1ae22dd916f12ab59e",
            );

            cryptoNode.verify(PublicKey(fabricPubKey), signatureData, signature);

            const encryptedDataPlain = TlvEncryptedDataSigma2.encode({
                nodeOpCert: noc,
                signature,
                resumptionId: Bytes.fromHex("8731f8cec507136df7558fca9360e9fc"),
            });

            assert.equal(
                Bytes.toHex(encryptedDataPlain),
                "153001f1153001010124020137032414001826048012542826058015203b370624150124115a1824070124080130094104531a14e4c1b4cc7ac69aa5e403d5ccc3c5152c29fddedc29ac98ecff6c8f8695317446029cf3eb3e295ee18f0fd0ba9f06f7fa229138db0bc8d8c6f9875c9707370a3501280118240201360304020401183004149038f60c3542d5e610f29abc5f42ac09b07ee0d7300514e766069362d7e35b79687161644d222bdde93a6818300b40cbd9a06e77e9a7bcd19d02da0f2e50042f7d78201e8be26e793e995ca8f02f1094b34d0fd53b1f1458908d0d29183f2611e6132c6401d15dfff081d1021358ad183003401736972364d84c4ae069f642f491256c6e74c86eda9f5ed4d89dfd7cadb68b67574f032afa2764fcc890e9218eaedcc484576d2d65e4df1ae22dd916f12ab59e3004108731f8cec507136df7558fca9360e9fc18",
            );

            const encrypted = cryptoNode.encrypt(sigma2Key, encryptedDataPlain, Bytes.fromString("NCASE_Sigma2N"));

            assert.equal(
                Bytes.toHex(encrypted),
                "7db57138c40bd8f37deb377764270e35143ec2cadfa73ef138d5ff3818ca3f003db767061051a19cb2cb1756ff214a855b6c32a07798c22756ff22338928928baa9ed8ab9484e3a662612616a95a7dbd11ac8d84ebe33b141366349452e47ebac98423140dffa764c83257c079c29a925f5a065ba98c491ae54289fc3d09d8bd8519e9f82dd51dfe4317e22b8481ada14462f01a1b837dc7af1000a3869bc1f9539d69cf73e0eb2377e35b5f9799ccb38b14dab2735edf37660a641669031820133122b5b62267b8b543e797977278b4bef14b6a820749ce66617251356ab8b759ccb3b3cdb376ec1862268aacb46145527f7940794fbc77c852a02bafb64e8e461e50349a342c34f493ac20abc7442ecf78531b4e07047af37dbe2e4746fb344169dd302f1ecc9339cb54a40b11957e2d395e4bcfb98a560247dffa5c22454febdb94b82c40838a279143a089b6ef8df76222ecdf4e04bcd6e6e222",
            );
        });

        it("generates the right signature", () => {
            const fabricPubKey = Bytes.fromHex(
                "049bfa105c3d209ff226c31da689dafb297b73499ec1844bba89c60ce65938b722300dd0abbb201e9451c6ab284ec99b8d90c5dd892388c59fde30c299c64af8c4",
            );
            const signatureData = Bytes.fromHex(
                "153001f1153001010124020137032414001826048012542826058015203b370624150124115d18240701240801300941049bfa105c3d209ff226c31da689dafb297b73499ec1844bba89c60ce65938b722300dd0abbb201e9451c6ab284ec99b8d90c5dd892388c59fde30c299c64af8c4370a3501280118240201360304020401183004142c3494bc756f4b58a73bde64a3141285a3efd5c9300514e766069362d7e35b79687161644d222bdde93a6818300b406772b5445ef466a669d9e5e5663238b817511e73ce992937ddd975690abda8b86b0a79f2fd49bae78c653fad9bd3d53463d4abd7f996964988a7644c4cc1d0321830020030034104473bd04e2a9c4e6a12b9008739c64a16d0113295822faf17e3d2ffcb77b0cae437701b0f0525ddcc6139da5a56dfda2af2b86a2836ef6b03f8f5c231dbaf950b3004410441838848a7e58ab46a1a71a539c474780002bf22adccbeaa43ee07f5176c61aaa3d718102333fc856595ea3a6a5bfd37d2890049acb82c49440e1f490cd970e018",
            );
            const signature = Bytes.fromHex(
                "75e35c22a5da60805d65772b3d4decc8c6eabe30bd2925608524ea12b729efd00a12faeb5757cdfc65aaefddd01c57be9f14d37e2c0beca43434f8ebdd81d635",
            );

            cryptoNode.verify(PublicKey(fabricPubKey), signatureData, signature);
        });

        it("generates the right bytes for sigma 3", async () => {
            const ecdhPublicKey = Bytes.fromHex(
                "04d1dbb16fd8ffda505a00f49c9af98eb5e98573708590575991aa06f09e295463f33cccf49c8df7c5b58f6d02c4f193485d4c9ae41cf4df0b89b223822adf7db5",
            );
            const peerEcdhPublicKey = Bytes.fromHex(
                "041d5a2e34457dcb4184b94bf7cb6f64689ee73d69282daa5fa5ee6fa5810f80c136ec7b8806679878cb045d9b25aa28a1a411c77677f5a1cf6f98c4acfeb9793c",
            );
            const sigma1Bytes = Bytes.fromHex(
                "15300120dbf3b308b237d4a734ea0926a611706953fb83c80bf93dda569799777cd11fe1250244c23003206283cd5207ae1602ed4b07f27f4166453966c601b3c8a825dc39f18b1fb12a55300441041d5a2e34457dcb4184b94bf7cb6f64689ee73d69282daa5fa5ee6fa5810f80c136ec7b8806679878cb045d9b25aa28a1a411c77677f5a1cf6f98c4acfeb9793c35052501881325022c011818",
            );
            const sigma2Bytes = Bytes.fromHex(
                "15300120c64d8172a7c8f77fadc6d6a35da29cb880ed54da6fa70d9e922ff96c12b13a4b2502ece930034104d1dbb16fd8ffda505a00f49c9af98eb5e98573708590575991aa06f09e295463f33cccf49c8df7c5b58f6d02c4f193485d4c9ae41cf4df0b89b223822adf7db531045c0186ce241016bdb0efe61b6ad8c57fc7e936773c7889994df8a891ae8cd469b02c87d36719d103a0890d03525ca253c598cabdb48aeafdedf7c4bdb56dbab4977af00d258aeba02d7999d92d47976c987be4aa2e28bc67bc868bb6c7ef1d636f1cb26e2cf41e5733991a6064fdfb1cac762938e60f492760219832830e05d712868343126c80983f9d8bfeb5bdb373368d88eb72e5179c07f75a5f8f622285a0c02b2642ebf96cb4394717188a313cf960ec0a07927cade2edbe901511a77902c440860d2f4a3191aeca6039bb8891bf82798ddeb3944a68f613f8d2fbaa1ca572474c2e99c456f1a86cf0bf9b547f45fe1069c33fb04429916b36cf17e6e65d61fe8b22d767b88218889eddc40c38335093c406c31c58d3a5770ef31899cda4ded48acf1394f1467e124f33925bd7e4d6e3e1d80a0b82783a3ce440178e9295f24a778bb315a084831238bfab5f46727a31f5d797bb7a91d72101fb3635052501881325022c011818",
            );
            const sigma3Bytes = Bytes.fromHex(
                "1531014c01d3e009b49a46a2492a96fc8391dd90a53ad5de4fadc911a524036bbaf439577bf4ce9bb4b5cab2942c8c6e8d5666b3ce7449e0fb290833291641f40a366a4a9fd5573b5913b932914e23f13d25353d4cad0ad6e2ecbb85163800580dfb7ea88c56bb67565e94542f49c2f0fe4a7de22ee0fecc85a28da31e32508c3ce1d30b4cfe7b7bb84d5c4425f20336ea816f4b9a04c6c0828e4f4b24eb4aacf29a4b6b419d85dcf02d222c9826691aa73864f9cd6b8ebfd94680b0db75f7356018284e2c9b3bcea807f73f5adaff5db005550e441921420ddc65500a2bd4a177875f71be4e293c35c8221867bf206c016d6d5add4ceba754fb3ad375a03061634d3a0b0ae6b0bafe272640c545f07cf7742d960f399a12c09b7bf7833678e048e039ee7b1a66e365817fff0d0d7e28edb7beae205a2974b3273ae23909e9bb482cdc5b05363265d78eb747536336b7ef18",
            );
            const identityProtectionKey = Bytes.fromHex("0c677d9b5ac585827b577470bd9bd516");
            const sharedSecret = Bytes.fromHex("c1466cab85d7809732786f63cb3b014a51cd49d01f494fcd56665ba8e00e5502");
            const peerEncrypted = Bytes.fromHex(
                "d3e009b49a46a2492a96fc8391dd90a53ad5de4fadc911a524036bbaf439577bf4ce9bb4b5cab2942c8c6e8d5666b3ce7449e0fb290833291641f40a366a4a9fd5573b5913b932914e23f13d25353d4cad0ad6e2ecbb85163800580dfb7ea88c56bb67565e94542f49c2f0fe4a7de22ee0fecc85a28da31e32508c3ce1d30b4cfe7b7bb84d5c4425f20336ea816f4b9a04c6c0828e4f4b24eb4aacf29a4b6b419d85dcf02d222c9826691aa73864f9cd6b8ebfd94680b0db75f7356018284e2c9b3bcea807f73f5adaff5db005550e441921420ddc65500a2bd4a177875f71be4e293c35c8221867bf206c016d6d5add4ceba754fb3ad375a03061634d3a0b0ae6b0bafe272640c545f07cf7742d960f399a12c09b7bf7833678e048e039ee7b1a66e365817fff0d0d7e28edb7beae205a2974b3273ae23909e9bb482cdc5b05363265d78eb747536336b7ef",
            );

            const sigma3Salt = Buffer.concat([identityProtectionKey, cryptoNode.hash([sigma1Bytes, sigma2Bytes])]);

            assert.equal(
                Bytes.toHex(sigma3Salt),
                "0c677d9b5ac585827b577470bd9bd51678d8306a4055524d843215d1e697791dd53abd3db440370264bf9d191f1cb786",
            );

            const sigma3Key = await cryptoNode.hkdf(sharedSecret, sigma3Salt, Bytes.fromString("Sigma3"));

            assert.equal(Bytes.toHex(sigma3Key), "5ba760e89d08efcfe22dbe5832684415");

            const peerEncryptedData = cryptoNode.decrypt(sigma3Key, peerEncrypted, Bytes.fromString("NCASE_Sigma3N"));

            assert.equal(
                Bytes.toHex(peerEncryptedData),
                "153001f4153001010124020137032414001826048012542826058015203b3706241501261169b6010018240701240801300941041b5c00110e57c1c9bc0619ada179f31bb8c07c8b95b5b0f94ffb21acb87c4d307678026d858be56e2a2ad146b3a895480fc8a616c9199980bd620503f4a311e7370a3501280118240201360304020401183004144cf0ce8e72e489e884550045a3bc6469b135fa3c300514e766069362d7e35b79687161644d222bdde93a6818300b40fa1b589089ed43e6ea3dc500eb18b4933d735c3cf384246e641fe13701a46cfe5d5e7b8d9e6e6e7d203d24c23c7f8b56a7849b813c0bb8709a47ce089d19a71b18300340b474e61e26d3a4bb243890632e2c12a82263a9433f31e9c0303d7b3ffc61799bce5b219679c90c820eebb9af5fb8066c7d459b69cef49e37ccbb8c66534240f218",
            );

            const { nodeOpCert: peerNewOpCert, intermediateCACert: peerIntermediateCACert } =
                TlvEncryptedDataSigma3.decode(peerEncryptedData);
            const peerSignatureData = TlvSignedData.encode({
                nodeOpCert: peerNewOpCert,
                intermediateCACert: peerIntermediateCACert,
                ecdhPublicKey: peerEcdhPublicKey,
                peerEcdhPublicKey: ecdhPublicKey,
            });

            assert.equal(
                Bytes.toHex(peerSignatureData),
                "153001f4153001010124020137032414001826048012542826058015203b3706241501261169b6010018240701240801300941041b5c00110e57c1c9bc0619ada179f31bb8c07c8b95b5b0f94ffb21acb87c4d307678026d858be56e2a2ad146b3a895480fc8a616c9199980bd620503f4a311e7370a3501280118240201360304020401183004144cf0ce8e72e489e884550045a3bc6469b135fa3c300514e766069362d7e35b79687161644d222bdde93a6818300b40fa1b589089ed43e6ea3dc500eb18b4933d735c3cf384246e641fe13701a46cfe5d5e7b8d9e6e6e7d203d24c23c7f8b56a7849b813c0bb8709a47ce089d19a71b18300341041d5a2e34457dcb4184b94bf7cb6f64689ee73d69282daa5fa5ee6fa5810f80c136ec7b8806679878cb045d9b25aa28a1a411c77677f5a1cf6f98c4acfeb9793c30044104d1dbb16fd8ffda505a00f49c9af98eb5e98573708590575991aa06f09e295463f33cccf49c8df7c5b58f6d02c4f193485d4c9ae41cf4df0b89b223822adf7db518",
            );

            const secureSessionSalt = Buffer.concat([
                identityProtectionKey,
                cryptoNode.hash([sigma1Bytes, sigma2Bytes, sigma3Bytes]),
            ]);
            const decryptKey = await cryptoNode.hkdf(
                sharedSecret,
                secureSessionSalt,
                Bytes.fromString("SessionKeys"),
                16,
            );

            assert.equal(Bytes.toHex(decryptKey), "e3ffee2792dc6d8dee832e248d1df718");
        });
    });
});
