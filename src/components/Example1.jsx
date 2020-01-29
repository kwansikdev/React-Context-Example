import React from 'react';
import PersonContext from '../contexts/PersonContext';

const Example1 = () => {
  return (
    <div>
      <PersonContext.Consumer>
        {value => JSON.stringify(value)}
      </PersonContext.Consumer>
    </div>
  );
};

export default Example1;
