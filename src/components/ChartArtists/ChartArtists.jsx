import { Link } from 'react-router-dom';
import { useGetChartArtistsQuery } from '../../redux/songSlice/chartSongApi'

const ChartArtists = () => {
  const {data} = useGetChartArtistsQuery()
  const chartArtists = data?.chart_items

  return (
    <>
    {chartArtists?.map(({item}) =>  <Link key={item?.id} to={`/artist/${item?.id}`}><div  className='w-[150px] animation_item'>
      <img className='w-[150px] h-[150px] rounded-sm object-cover' src={item?.header_image_url} alt="" />
      <div>{item?.name}</div>
    </div></Link> )}
   
    </>
  )
}

export default ChartArtists