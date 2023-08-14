import { Link } from 'react-router-dom'
import { useGetChartReferentsQuery } from '../../redux/songSlice/chartSongApi'

const ChartReferents = () => {
  const {data} = useGetChartReferentsQuery()
  const chartReferents = data?.chart_items
  console.log(chartReferents);
  return (
    <>
    {chartReferents?.map(({item}) =>   <Link key={item?.id} to={`/song/${item?.song_id}`}> <div  className='w-[100px] m-2 animation_item'>
    <img className='w-[100px] h-[100px] object-cover' src={item?.annotatable?.image_url} alt="" />
    <div className='text-xs text-gray-700'>{item?.annotatable?.title.slice(0,10)}</div>
  </div></Link> )}
 
  </>
  )
}

export default ChartReferents