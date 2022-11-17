import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'fe83e22d53msh4a12bead73da3e3p1d0d28jsn9096110552b0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  };

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'fe83e22d53msh4a12bead73da3e3p1d0d28jsn9096110552b0',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };