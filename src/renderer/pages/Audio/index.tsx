import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AudioPage: React.FC = () => {
  useEffect(() => {
    console.log('Audio page init');
  }, []);
  return (
    <div className="page-container">
      Audio
      <Link to="/">Hello</Link>
    </div>
  );
};

export default AudioPage;
