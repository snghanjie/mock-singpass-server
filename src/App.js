import React from 'react';
import './App.css';
import qs from 'qs';

function App() {
  const queryString = qs.parse(window.location.search.substr(1));

  const { redirect_uri, state } = queryString;

  const URLParams = {
    code: 'some_auth_code',
    state,
  };

  window.location.href = `${redirect_uri}?${qs.stringify(URLParams)}`;

  return (
    <div className="App">
      <header className="App-header">
        Mock Singpass Server
      </header>
    </div>
  );
}

export default App;
