import React from 'react';

const Login = () => {
  return (
    <div>
      <a href="/auth/google">Login Google</a>
      <hr></hr>
      <a href="/auth/facebook">Login FaceBook</a>
      <hr></hr>
      <a href="/api/logout">Logout</a>
    </div>
  );
}


export default Login;