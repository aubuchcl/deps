import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://dec.chrisaubuchon.com/api/data')
      .then(response => response.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Data from API: {data}</p>
      </header>
    </div>
  );
}

export default App;
