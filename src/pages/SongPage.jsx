import { Link, useParams } from 'react-router-dom'
import { useGetSongPageQuery } from '../redux/songSlice/singlePageChartApi'
import YouTube from 'react-youtube'
import Loading from '../components/Loading/Loading'
import AlbumsPage from '../components/AlbumsPage/AlbumsPage'
import { NOT_FOUND } from '../components/utils/constants'

const SongPage = () => {
	const { id } = useParams()
	const { data, isLoading } = useGetSongPageQuery(id)
	const song = data?.song
  const artist = song?.writer_artists[0]?.id
	const youtube = song?.youtube_url?.slice(31)

	console.log(song)

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className='my_flex flex-col my-2'>
			<img
				className='title_image_page'
				src={song?.custom_header_image_url ? song?.custom_header_image_url : NOT_FOUND}
				alt='image'
			/>
			<Link to={`/artist/${artist}`}><div className='hover_div_artist'>
				<img
					src={song?.album?.artist?.header_image_url}
					alt='artist'
					className='artist_image_page'
				/>
				<div className='artist_title_page'>{song?.artist_names}</div>
			</div></Link>
			<div className='song_title_page'>{song?.title}</div>
			<div className='text-md text-gray-400 md:px-[300px] px-[50px]  text-xs '>
				relese: {song?.release_date}
			</div>
			<div className='description_preview'>{song?.description_preview}</div>
			<YouTube videoId={youtube} style={{}} opts={{ width: '360px', height: '360px' }} />
			<div className='text-2xl font-bold'>Albums</div>
			<div className='flex justify-around items-center flex-wrap my-5 gap-2'>
				<AlbumsPage chartAlbums={song?.albums} />
			</div>
		</div>
	)
}

export default SongPage
