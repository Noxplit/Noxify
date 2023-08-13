import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const singlePageChartApi = createApi({
	reducerPath: 'singlePageChartApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com/song',

		headers: {
			'X-RapidAPI-Key': '54b1669a80msh0c910436024511fp1385fejsn73c935d333d0',
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
		},
	}),
	endpoints: builder => ({
		getSongPage: builder.query({
			query: (id) => `/details/?id=${id}`,
		}),
  
	}),
})


export const {useGetSongPageQuery } = singlePageChartApi
