import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [mnemonics, setMnemonics] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateMneumonics = async () => {
    setLoading(true);
    setError('');

    try{
      const response = await axios.post('http://localhost:5000');
      setMnemonics(response.data.mnemonic);
    } catch (err) {
      setError('Failed to generate mneumonics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Create your own Solana or Ethereum Wallet</h1>
      <h3> Click below button to generate pneumonics:</h3>
      <button onClick={generateMneumonics} disabled={loading}>{loading ? "Generating..." : "Generate Mneumonics"}</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <p>{mnemonics}</p>
    </div>
  );
}

export default App;
