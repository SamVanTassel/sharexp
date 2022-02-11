import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CompaniesList from '../features/companies/CompaniesList.jsx';
import Layout from './Layout.jsx';
import Home from '../features/home/Home.jsx'
import Login from '../features/auth/Login.jsx';
import Signup from '../features/auth/Signup.jsx';
import SelectedCompany from '../features/companies/SelectedCompany.jsx';
import CompaniesIndex from '../features/companies/CompaniesIndex.jsx';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="companies" element={<CompaniesIndex />}>
            <Route path='all' element={<CompaniesList />} />
            <Route path=":id" element={<SelectedCompany />} />
          </Route>
          <Route path="signup" element={<Signup/>} />
          <Route path="login" element={<Login />} />
        </Route> 
      </Routes>
  )
}

export default App;