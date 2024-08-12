const express = require('express');
const bip39 = require('bip39');
const cors = require('cors');
// const derivePath = require('ed25519-hd-key').derivePath;
// const keypair = require('@solana/web3.js').Keypair;
// const nacl = require('tweetnacl');
// const { Keypair } = require('@solana/web3.js');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const wallets = {};

// API to generate a new wallet

app.post('/', (req, res) => {
    const mnemonic = bip39.generateMnemonic();
    res.json({ mnemonic });
    // const seed = bip39.mnemonicToSeedSync(mnemonic).toString('hex');

    // function createSolWallet() {
    //     const path = `m/44'/501'/${req.body.index}'/0`;
    //     const derivedSolSeed = derivePath(path, seed.toString('hex')).key;
    //     const secret = nacl.sign.keyPair.fromSeed(derivedSolSeed).secretKey;
    //     return Keypair.fromSecretKey(secret).publicKey.toBase58();
    // }

    // function createEthWallet() {
    //     const path = `m/44'/60'/${req.body.index}'/0`
    //     const derivedEthSeed = derivePath(path, seed.toString('hex')).key;
    //     const secret = nacl.sign.keyPair.fromSeed(derivedEthSeed).secretKey;
    //     return keypair.fromSecretKey(secret).publicKey.toBase58();
    // }

});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});