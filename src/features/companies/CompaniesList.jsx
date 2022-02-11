import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useGetCompaniesQuery } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

const Companies = () => {
  const { data, error, isLoading } = useGetCompaniesQuery();
  const navigate = useNavigate();

  const handleCLick = (id) => {
    navigate(`/companies/${id}`)
  }

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.companies.map(company => {
            return (
            <div key={company.id} onClick={() => handleCLick(company.id)}> 
              <h2>{company.name}</h2>
              <img src={company.logo} />
            </div>)
          })}
        </>
      ) : null}
    </div>
  )
}

export default Companies;