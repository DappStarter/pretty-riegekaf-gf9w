require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rice pitch provide grace force flower genre'; 
let testAccounts = [
"0x5b1a5bf7f743e7f4fb80663ab2bff01e45b2de551e4b24a7ec05f88c52a98e95",
"0x8d0972c33b84476ced9767b647e6dc8886cd057658b4cbfc9136da15a1bc5e13",
"0xde8f3ac69edabd7ccfc2fea0a57e606fcb7846bc7a7004fa09dd342d3864d2c8",
"0xd767d0df6239ebc4a71ab3fd2ad766ab4a62f1c3fe00f16b498f7b067148a38e",
"0xae8212a9c070fcea089a75800dc7b094ad566b8fe28daa12fb974a1b17c9e26c",
"0x085b659931693a136ad189fa910053f3bebb1669128afff6dc1a31957951abb1",
"0x12215d40970395cf7748ef85733166b188042f82f0fdfcb3901adbad2764d4d8",
"0x82a99557ee78383dfa7f92a2b30bf56dc308902643c9d74c5138459897d3e3bc",
"0x25051f1951d36e618b5ae51841d52f51e27ffbc43888a0eb4b945e7709b94b2a",
"0x676b1908d8a9813d982c2a6731ab26448d7a46cb57d6396453c2d9a6b79037bd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

