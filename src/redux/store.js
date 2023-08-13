import { configureStore } from '@reduxjs/toolkit'
import { chartSongApi } from './songSlice/chartSongApi'
import { songSlice } from './songSlice/songSlice'
import { singlePageChartApi } from './songSlice/singlePageChartApi'

export const store = configureStore({
  reducer: {
    songSlice:songSlice.reducer,
    [chartSongApi.reducerPath]: chartSongApi.reducer,
    [singlePageChartApi.reducerPath]: singlePageChartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chartSongApi.middleware).concat(singlePageChartApi.middleware),
})