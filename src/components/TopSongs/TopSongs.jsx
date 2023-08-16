import { useDispatch, useSelector } from 'react-redux'
import { useGetChartSongsQuery } from '../../redux/songSlice/chartSongApi'
import { useEffect } from 'react'
import { getLoading } from '../../redux/songSlice/songSlice'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

const TopSongs = () => {
	const { pagination, genre, period } = useSelector(state => state.songSlice)
  const dispatch = useDispatch()
	const params = { pagination, genre, period }
	const { data, isFetching,isLoading } = useGetChartSongsQuery(params)
	const chartSongs = data?.chart_items
	useEffect(() => {dispatch(getLoading(isLoading))}, [pagination, genre, period,isLoading])

	if (isFetching) {
		return <Loading/>
	}

	return (
		<>
			{chartSongs?.map((item, id) => (
				<Link 	key={id} to={`/song/${item?.item?.id}`}><div
				
					className='flex justify-start items-center gap-2 hover:bg-gray-100 w-[300px] cursor-pointer px-2 '>
					<img
						className='w-[50px] h-[50px] rounded-sm object-cover'
						src={item?.item?.header_image_thumbnail_url}
						alt='travis'
					/>
					<div className='p-2 border-b-2 border-b-gray-200 w-[250px]'>
						<div className='text-xs'>{item?.item?.artist_names}</div>
						<p className='text-xs text-gray-400'>{item?.item?.title}</p>
					</div>
					<div className='text-xs '>2:30</div>
				</div>
        </Link>
			))}
		</>
	)
}

export default TopSongs
