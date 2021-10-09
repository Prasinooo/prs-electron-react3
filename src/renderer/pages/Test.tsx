import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Test: React.FC = () => {
  const [state, setstate] = useState({ xx: '' });
  useEffect(() => {
    console.log('eeee');
    setstate({ xx: 'hhh' });
  }, []);
  return (
    <div>
      test
      <p>xxx{state.xx}</p>
      <Link to="/">home</Link>
    </div>
  );
};

export default Test;
