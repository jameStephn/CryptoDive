import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://google-api31.p.rapidapi.com/';
const crytoNewsHeaders = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'e1f565df5cmsh8dd396b4535f88dp17640cjsn07dcba972a7c',
    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
};

const createRequest = (url, body) => ({
    url,
    method: 'POST',
    headers: crytoNewsHeaders,
    body: JSON.stringify(body)
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (  count ) =>
                createRequest('https://google-api31.p.rapidapi.com/', {
                    text: "cryptonews",
                    region:"wt-wt",
                    max_results: count
                }),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


// const url = 'https://google-api31.p.rapidapi.com/';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'e1f565df5cmsh8dd396b4535f88dp17640cjsn07dcba972a7c',
// 		'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
// 	},
// 	body: {
// 		text: 'CryptoNews',
// 		region: 'wt-wt',
// 		max_results: 25
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }