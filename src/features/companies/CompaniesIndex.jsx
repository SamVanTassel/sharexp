import React from 'react';
import { Outlet } from 'react-router-dom';

const CompaniesList = () => {
  return (
    <div>
      Companies
      <Outlet />
    </div>
  )
}

export default CompaniesList;