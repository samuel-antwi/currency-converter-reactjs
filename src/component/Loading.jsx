import React from 'react';
import loading from './img/loading.gif';

function Loading() {
  return (
    <div className='container text-center loading'>
      <img
        src={loading}
        alt='loading'
        style={{ width: '100px', borderRadius: '50px' }}
      />
    </div>
  );
}

export default Loading;
