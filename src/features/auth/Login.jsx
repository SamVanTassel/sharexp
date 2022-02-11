import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <div>
    Login 
    <form>
      <label>Username</label>
        <input type='text'></input>
      <label>Password</label>
        <input type='text'></input>
      <input type="submit"></input>
    </form>
    or <Link to="../signup">Sign Up</Link>
  </div>)
}

export default Login;