import React from 'react';
import Contacts from './Contacts';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
      </header>
      <main>
        <Contacts />
      </main>
    </div>
  );
};

export default App;
