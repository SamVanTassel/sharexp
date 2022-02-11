import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/'}),
  endpoints: builder => ({
    getCompanies: builder.query({
      query: () => 'companies',
    }),
    getSelectedCompany: builder.query({
      query: (id) => `companies/${id}`
    }),
    postCompany: builder.mutation({
      query: ({ companyName }) => ({
        url: 'companies/',
        mehtod: 'POST',
        body: companyName
      })
    })
  })
})

export const { useGetCompaniesQuery, useGetSelectedCompanyQuery, usePostCompanyMutation } = api;
