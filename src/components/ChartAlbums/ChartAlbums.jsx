import React from 'react'
import { useGetChartAlbumsQuery } from '../../redux/songSlice/chartSongApi'
import { Audio } from 'react-loader-spinner'

const ChartAlbums = () => {
  const {data} = useGetChartAlbumsQuery()
  const chartAlbums = data?.chart_items


  return (

    <>
       {chartAlbums?.map(chart => <div key={chart?.item?.id} className='w-[200px] h-[340px] animation_item'>
    <img className='w-[200px] h-[200px] object-cover' src={chart?.item?.cover_art_thumbnail_url} alt="" />
    <div>{chart?.item?.full_title}</div>
    <div className='text-xs text-gray-400 '>{chart?.item?.name}</div>
  </div> )}
  </>
  )
}

export default ChartAlbums