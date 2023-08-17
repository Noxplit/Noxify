import { Link, useParams } from 'react-router-dom'
import { useGetSongPageQuery } from '../redux/songSlice/singlePageChartApi'
import YouTube from 'react-youtube'
import Loading from '../components/Loading/Loading'
import AlbumsPage from '../components/AlbumsPage/AlbumsPage'
import { NOT_FOUND } from '../components/utils/constants'
import { useWindowSize } from '@uidotdev/usehooks'

const SongPage = () => {
  const {width} = useWindowSize()
	const { id } = useParams()
	const { data, isLoading } = useGetSongPageQuery(id)
	const song = data?.song
  const artist = song?.writer_artists[0]?.id
	const youtube = song?.youtube_url?.slice(31)

const mobileWidth = width <= 900

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className='my_flex flex-col mt-5'>
			<img
				className='title_image_page'
				src={song?.custom_header_image_url ? song?.custom_header_image_url : NOT_FOUND}
				alt='image'
			/>
			<Link to={`/artist/${artist}`}><div className='hover_div_artist'>
		
				<div className='artist_title_page'>{song?.artist_names}</div>
			</div></Link>
			<div className='song_title_page'>{song?.title}</div>
			<div className='text-md text-gray-400 md:px-[300px] px-[50px]  text-xs '>
				Relese: {song?.release_date}
			</div>
			<div className='description_preview'>{song?.description_preview}</div>
      <div>
			<YouTube videoId={youtube} opts={mobileWidth ? {width:'340px', height:'340px'} : {width:'900px', height:'500px'} } />
      </div>
			<div className='text-2xl font-bold'>Albums</div>
			<div className='flex lg:justify-center md:justify-center justify-start items-center overflow-scroll lg:w-full md:w-[80%] w-[360px]'>
				<AlbumsPage chartAlbums={song?.albums} />
			</div>
		</div>
	)
}

export default SongPage
