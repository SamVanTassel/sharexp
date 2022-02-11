import React from "react";
import { Link } from 'react-router-dom';

const Signup = () => {
  return <div>Sign up 
    <form>
      <label>Username</label>
        <input type='text'></input>
      <label>Password</label>
        <input type='text'></input>
      <input type="submit"></input>
    </form>
    or <Link to="../login">Log In</Link></div>
}

export default Signup;