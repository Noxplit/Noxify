import { createSlice } from '@reduxjs/toolkit'

export const songSlice = createSlice({
	name: 'song',
	initialState: {
		period: 'day',
		genre: 'all',
    pagination:1,
    loading:true,
    input:'eminem',
    theme:false
	},
	reducers: {
		getPeriod: (state, { payload }) => {
			state.period = payload
		},
		getGenre: (state, { payload }) => {
			state.genre = payload
		},
		getPagination: (state, { payload }) => {
			state.pagination = payload
		},
		getLoading: (state, { payload }) => {
			state.loading = payload
		},
		getInput: (state, { payload }) => {
			state.input = payload
		},
    setTheme: (state, { payload }) => {
			state.theme = payload
		},
	},
})

export const { getGenre, getPeriod,getPagination,getLoading, getInput,setTheme } = songSlice.actions

export default songSlice.reducer
