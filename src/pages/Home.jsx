import TopSongs from '../components/TopSongs/TopSongs'
import Chart from '../components/Chart/Chart'
import ChartArtists from '../components/ChartArtists/ChartArtists'
import ChartReferents from '../components/ChartReferenst/ChartReferents'
import ChartAlbums from '../components/ChartAlbums/ChartAlbums'
import Pagination from '../components/Pagination/Pagination'
import MySelect from '../components/Custom/MySelect'
import { CHART_GENRE } from '../components/utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../components/../redux/songSlice/songSlice'
import { useGetChartAlbumsQuery } from '../redux/songSlice/chartSongApi'

const Home = () => {
	const dispatch = useDispatch()
	const { genre, loading } = useSelector(state => state.songSlice)
	const { data } = useGetChartAlbumsQuery()
	const chartAlbums = data?.chart_items

	return (
		<div>
			<h4 className='text-4xl font-bold my-5'>Browse</h4>

			<hr className='my-5' />
			<Chart rows={'4'}>
				<TopSongs />
			</Chart>

			{!loading && (
				<>
					<div className='flex justify-start items-center flex-wrap gap-4 my-5'>
						<Pagination />
						<MySelect
							arrey={CHART_GENRE}
							setValue={e => dispatch(getGenre(e.target.value))}
							value={genre}
						/>
					</div>
					<Chart title='Top Artists' rows={'1'}>
						<ChartArtists />
					</Chart>
					<Chart title='Top Referents' rows={'1'}>
						<ChartReferents />
					</Chart>
					<Chart title='Top Albums' rows={'4'}>
						<ChartAlbums chartAlbums={chartAlbums} />
					</Chart>
				</>
			)}
		</div>
	)
}

export default Home
