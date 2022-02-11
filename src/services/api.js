import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/'}),
  endpoints: builder => ({
    getCompanies: builder.query({
      query: () => 'companies',
    })
  })
})

export const { getCompaniesQuery } = api;
