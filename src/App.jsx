import { useState } from "react";
import "./App.css";
import { Keypair } from "@solana/web3.js";
import { ethers } from "ethers";

function App() {
  const [ethWallets, setEthWallets] = useState([]);
  const [solWallets, setSolWallets] = useState([]);

  function createEthWallet() {
    const wallet = ethers.Wallet.createRandom();

    console.log(wallet);
    console.log("Ethereum Address:", wallet.address);
    console.log("Mnemonic:", wallet.mnemonic.phrase);
    console.log("Private Key:", wallet.privateKey);

    const mnemonic = wallet.mnemonic.phrase;
    const publicKey = wallet.address;
    const privateKey = wallet.privateKey;
    ethWallets.push({
      mnemonic: mnemonic,
      address: publicKey,
      privateKey: privateKey,
    });
    setEthWallets([
      ...ethWallets,
      {
        mnemonic: wallet.mnemonic.phrase,
        address: wallet.address,
        privateKey: wallet.privateKey,
      },
    ]);
  }

  function createSolWallet() {
    console.log("Creating Solana wallet");
    const keypair = Keypair.generate();
    console.log("Solana Public Key:", keypair.publicKey.toBase58());
    console.log("Solana Secret Key:", keypair.secretKey.toString());

    const publicKey = keypair.publicKey.toBase58();
    const secretKey = keypair.secretKey.toString();

    solWallets.push({
      publicKey: publicKey,
      secretKey: secretKey,
    });
    setSolWallets([
      ...solWallets,
      { publicKey: publicKey, secretKey: secretKey },
    ]);
  }

  return (
    <>
      <h1>Web 3 Wallet</h1>
      <button onClick={createEthWallet && (<div></div>)}>Create Ethereum Wallet</button>

      <button onClick={createSolWallet && (<div></div>)}>Create Solana Wallet</button>
    </>
  );
}

export default App;
