import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chartSongApi = createApi({
	reducerPath: 'chartSongApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com/chart/',

		headers: {
			'X-RapidAPI-Key': '54b1669a80msh0c910436024511fp1385fejsn73c935d333d0',
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
		},
	}),
	endpoints: builder => ({
		getChartSongs: builder.query({
			query: ({pagination, period, genre}) => `/songs/?per_page=50/?time_period=${period}/&page=${pagination}/&chart_genre=${genre}`,
		}),
    getChartArtists: builder.query({
			query: () => `/artists/?per_page=20`,
		}),
    getChartReferents: builder.query({
			query: () => `/referents/?per_page=20`,
		}),
    getChartAlbums: builder.query({
			query: () => `/albums/?per_page=50`,
		}),
	}),
})


export const { useGetChartSongsQuery, useGetChartArtistsQuery, useGetChartReferentsQuery, useGetChartAlbumsQuery} = chartSongApi
