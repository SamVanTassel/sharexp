import React from 'react';
import Login from './Login.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signup" element={<SignUp />}></Route> */}
        <Route path="/" element={<Dashboard />}></Route> 
        {/* <Route path="/main" element={<MainContainer />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;