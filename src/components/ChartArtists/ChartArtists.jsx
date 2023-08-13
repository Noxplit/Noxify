import { useGetChartArtistsQuery } from '../../redux/songSlice/chartSongApi'

const ChartArtists = () => {
  const {data} = useGetChartArtistsQuery()
  const chartArtists = data?.chart_items

  return (
    <>
    {chartArtists?.map(items =>  <div key={items?.item?.id} className='w-[150px] animation_item'>
      <img className='w-[150px] h-[150px] object-cover' src={items?.item?.header_image_url} alt="" />
      <div>{items?.item?.name}</div>
    </div> )}
   
    </>
  )
}

export default ChartArtists