require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot blanket regret pumpkin clump grace canoe army gentle'; 
let testAccounts = [
"0x7f637fe20908f178fb8a016726a0af252eee2e84e81158b9d258e37f513a0cd3",
"0x01559778abacca84166baedfe9cc8f56baad9578bc669fd502c88b51826385ad",
"0x3adce014d3344b8b6c81a78c7a6872fcbad27404c711f860bf67e4cc3386e762",
"0x7c5cde5486306c401549fa7c776a1584dc31d546b84ffc7767b1d39836981861",
"0x1686baf9c2b09d4d8d88e44d0348f0cea82338a3dd1085d2f9763a20ef83d0ba",
"0x253b03332d5a4801bb7719b04ea09ab0fab3fc0410df46332498fe2ab08c18a1",
"0x150f1b4ab6ea448dcf6ca4b4d01288bc83371ce693e717d58fa0067529476223",
"0xbcf33a999c973bb8e8aa60d6640d18925209bb248130d8757c1a37ebc4d9d209",
"0x62cd02745758adb6f3e0c99920701678ddd7829194a0370d961cd0065af60c0a",
"0x0c42f6ec47116202b4bd4238a508d986100427bc73a29cf46ab3db12a6602cbd"
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

