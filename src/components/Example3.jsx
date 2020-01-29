import React, { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

const Example3 = props => {
  const { persons, old } = useContext(PersonContext);

  function click() {
    old();
  }

  return (
    <div>
      <p>{JSON.stringify(persons)}</p>
      <button onClick={click}>OLD</button>
    </div>
  );
};

export default Example3;
