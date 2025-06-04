import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [numberType, setNumberType] = useState('p');
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/numbers/${numberType}`);
      setResponseData(res.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setResponseData({ error: 'Failed to fetch data' });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Number Window Dashboard</h2>
      <label htmlFor="numberType">Choose number type:</label>
      <select
        id="numberType"
        value={numberType}
        onChange={(e) => setNumberType(e.target.value)}
        style={{ marginLeft: '1rem' }}
      >
        <option value="p">Primes</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchData} style={{ marginLeft: '1rem' }}>Fetch Numbers</button>

      {responseData && (
        <div style={{ marginTop: '2rem' }}>
          <h4>Response:</h4>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
