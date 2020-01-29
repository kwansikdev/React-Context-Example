import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import PersonContext from './contexts/PersonContext';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Austin', age: 28 },
    { name: 'Linda', age: 27 },
  ]);

  return (
    <PersonContext.Provider
      value={{
        persons,
        old: () => {
          setPersons(persons =>
            persons.map(person => ({
              ...person,
              age: person.age + 1,
            })),
          );
        },
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example1 />
          <Example2 />
          <Example3 />
        </header>
      </div>
    </PersonContext.Provider>
  );
}

export default App;
