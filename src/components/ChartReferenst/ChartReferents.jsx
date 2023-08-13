import { useGetChartReferentsQuery } from '../../redux/songSlice/chartSongApi'

const ChartReferents = () => {
  const {data} = useGetChartReferentsQuery()
  const chartReferents = data?.chart_items
  return (
    <>
    {chartReferents?.map(chart =>    <div key={chart?.item?.id} className='w-[100px] m-2 animation_item'>
    <img className='w-[100px] h-[100px] object-cover' src={chart?.item?.annotatable?.image_url} alt="" />
    <div className='text-xs text-gray-700'>{chart?.item?.annotatable?.context}</div>
  </div> )}
 
  </>
  )
}

export default ChartReferents