import React from 'react';
import classes from './Login.module.css';
require('typeface-roboto');

const Test = () => {
  return (
    <div
      className={classes.Body}
      style={{
        fontFamily: 'roboto',
      }}
    > <div className={classes.RegisterButton}>Register</div>
      <div className={classes.Container}>
        <div className={classes.BoxAppName}>
          <span className={classes.Logo}>Logo</span>
          <span className={classes.AppName}>Kicko</span>
        </div>
          <input placeholder="Email address" className={classes.Email}></input>
          <input placeholder="Password" className={classes.Password}></input>
          <div className={classes.ForgotPass}>Forgot your password</div>
          <button className={classes.Login}>Login</button>
        <div style={{ marginTop: '31px' }}>
          <span className={classes.Or}>
            ______________________ Or ______________________
          </span>
        </div>
        <div className={classes.Facebook}>
          <span className={classes.Simbol}>f</span>Sign in with Facebook
        </div>
        <div className={classes.Google}>
          <span className={classes.Simbol}>G</span>Sign in with Google
        </div>
        <div className={classes.Apple}>
          <span className={classes.Simbol}>A</span>Sign in with Apple
        </div>
        <div className={classes.Register} style={{ color: 'black' }}>
          Don't you have an account?
          <span
            /*onClick={}*/
            style={{
              color: 'rgb(57,73,171)',
              fontWeight: 'bold',
              fontSize: '15px',
              paddingLeft: '10px',
            }}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Test;
