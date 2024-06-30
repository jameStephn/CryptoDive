import { createApi , fetchBaseQuery}  from "@reduxjs/toolkit/query/react";
const baseUrl = "https://coinranking1.p.rapidapi.com";
console.log(baseUrl)
const crytoHeaders = {
    'X-RapidAPI-Key': 'e1f565df5cmsh8dd396b4535f88dp17640cjsn07dcba972a7c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    
    
}
const createRequest = (url ) => ({
    url,
    headers: crytoHeaders
})
export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) =>createRequest(`/coins?limit=${count}`),
        }),

        getCoin: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCoinHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),
    

    })            
})
export const { useGetCryptosQuery ,useGetCoinQuery , useGetCoinHistoryQuery } = coinsApi;