import TopSongs from '../components/TopSongs/TopSongs'
import Chart from '../components/Chart/Chart'
import ChartArtists from '../components/ChartArtists/ChartArtists'
import ChartReferents from '../components/ChartReferenst/ChartReferents'
import ChartAlbums from '../components/ChartAlbums/ChartAlbums'
import Pagination from '../components/Pagination/Pagination'
import MySelect from '../components/Custom/MySelect'
import { CHART_GENRE, TIME_PERIOD } from '../components/utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getGenre, getPeriod } from '../components/../redux/songSlice/songSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {genre, period,loading} = useSelector(state => state.songSlice)

	return (
		<div className='  overflow-scroll border-l-2 border-l-gray-100 p-5'>
			<h4 className='text-4xl font-bold mb-5'>Browse</h4>

			<hr className='my-5' />
			<Chart rows={'4'}>
				<TopSongs />
			</Chart>
		
{!loading && <>	<div className='flex justify-start items-center flex-wrap gap-4 my-5'>
				<Pagination />
				<MySelect arrey={CHART_GENRE} setValue={e => dispatch(getGenre(e.target.value))} value={genre} />
				<MySelect arrey={TIME_PERIOD} setValue={e => dispatch(getPeriod(e.target.value))} value={period} />
			</div>
<Chart title='Top Artists' rows={'1'}>
				<ChartArtists />
			</Chart>
			<Chart title='Top Referents' rows={'1'}>
				<ChartReferents />
			</Chart>
			<Chart title='Top Albums' rows={'4'}>
				<ChartAlbums />
			</Chart>
      </>
		}
</div> 
	)
}

export default Home
