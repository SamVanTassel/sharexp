import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Companies = () => {
  const companies = useSelector(state => state.companies.companies)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "companies/load"});
  // }, [])

  return (
    <div>
      {companies.map(c => {
        return (
        <div key={c}>{c}</div>
        )
      })}
    </div>
  )
}

export default Companies;