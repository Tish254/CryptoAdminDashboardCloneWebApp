import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'fe83e22d53msh4a12bead73da3e3p1d0d28jsn9096110552b0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  };

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi(
{
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
          }),

          getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),

          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),

          // Note: To access this endpoint you need premium plan
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
}
)

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;