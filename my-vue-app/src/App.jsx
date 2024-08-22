import { Buffer } from "buffer";
import { useState } from "react";
import "./App.css";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

window.Buffer = window.Buffer || Buffer;

function App() {

  const [account, setAccount] = useState(0);


  function createSolWallet() {
    console.log("Creating Solana wallet");
    // Implement Solana wallet creation logic here
  }

  const createEthWallet = () => {

    const mnemonic = generateMnemonic();
    console.log("Generated Mnemonic:", mnemonic);
    const seed = mnemonicToSeedSync(mnemonic);
    const path = `m/44'/501'/${account}'/0'`; // This is the derivation path
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
    setAccount(account + 1);
  };



  return (
    <>
      <h1>Web 3 Wallet</h1>
      <button onClick={createEthWallet}>Create Ethereum Wallet</button>
      <button onClick={createSolWallet}>Create Solana Wallet</button>
    </>
  );
}

export default App;
