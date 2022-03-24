import React from "react";
import { useState } from "react";

const Home = () => {
  const [postInfo, updatePost] = useState('')
  return (
    <div>
      Post a review:
      <form>
        <label>Title</label>
        <input type='text'></input>
        <label>Position</label>
        <input type='text'></input>
        <label>Level</label>
        <input type='text'></input>
        <label>Location</label>
        <input type='text'></input>
        <submit>Submit</submit>
      </form>
    </div>
  )
}

export default Home;