import { configureStore } from '@reduxjs/toolkit'
import { chartSongApi } from './songSlice/chartSongApi'
import { songSlice } from './songSlice/songSlice'
import { singlePageChartApi } from './songSlice/singlePageChartApi'
import authSlice from './songSlice/authSlice'

export const store = configureStore({
  reducer: {
    songSlice:songSlice.reducer,
    authSlice,
    [chartSongApi.reducerPath]: chartSongApi.reducer,
    [singlePageChartApi.reducerPath]: singlePageChartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chartSongApi.middleware).concat(singlePageChartApi.middleware),
})