import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const singlePageChartApi = createApi({
	reducerPath: 'singlePageChartApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',

		headers: {
			'X-RapidAPI-Key': '54b1669a80msh0c910436024511fp1385fejsn73c935d333d0',
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
		},
	}),
	endpoints: builder => ({
		getSongPage: builder.query({
			query: (id) => `/song/details/?id=${id}`,
		}),
    getAlbumsPage: builder.query({
			query: (id) => `/album/details/?id=${id}`,
		}),
    getArtistPage: builder.query({
			query: (id) => `/artist/details/?id=${id}`,
		}),
    getAlbumsAppearance: builder.query({
			query: (id) => `/album/appearances/?id=${id}`,
		}),
  
	}),
})


export const {useGetSongPageQuery, useGetAlbumsPageQuery, useGetAlbumsAppearanceQuery, useGetArtistPageQuery } = singlePageChartApi
