import React from 'react';
require('typeface-roboto');

const Test = () => {
  return (
    <div style={{fontFamily:'roboto'}}>
      <a href="/auth/google">Login Google</a>
      <hr></hr>
      <a href="/auth/facebook">Login FaceBook</a>
      <hr></hr>
      <a href="/api/logout">Logout</a>
    </div>
  );
}


export default Test;