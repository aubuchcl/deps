import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  const fetchData = () => {
    fetch(`https://api.dec.chrisaubuchon.com/api/data`)
      .then(response => response.json())
      .then(data => setData(data.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Data from API: {data}</p>
        <button onClick={fetchData}>Fetch Data</button>
      </header>
    </div>
  );
}

export default App;

