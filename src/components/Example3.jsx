import React, { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

const Example3 = props => {
  const value = useContext(PersonContext);
  return <div>{JSON.stringify(value)}</div>;
};

export default Example3;
