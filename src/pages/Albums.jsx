import { Link, useParams } from 'react-router-dom';
import { useGetAlbumsAppearanceQuery, useGetAlbumsPageQuery} from '../redux/songSlice/singlePageChartApi';
import Loading from '../components/Loading/Loading';

const Albums = () => {
  const {id} = useParams()
  const {data, isLoading} = useGetAlbumsPageQuery(id)
  const {data:albumAppearance} = useGetAlbumsAppearanceQuery(id)
const album = data?.album
const coverArts = data?.album?.cover_arts
const appearance = albumAppearance?.album_appearances
console.log(album);
if(isLoading) {
  return <Loading/>
}

  return (
    
   <div className='my_flex my-5 flex-col'>
    <img src={album?.cover_art_thumbnail_url} className='title_image_page' alt="" />
    <Link to={`/artist/${album?.artist?.id}`}><div className='my_flex hover_div_artist'>
    <div className='artist_title_page'>{album?.artist?.name}</div>
    </div></Link>
    <div className='song_title_page'>{album?.name}</div>
    <div className='song_title_page'>{album?.release_date_for_display}</div>
    <div className='flex md:justify-center justify-start items-center overflow-scroll lg:w-full md:w-[80%] w-[360px] gap-2'>
    {coverArts?.map(cover => <img key={coverArts?.id} alt='covers' className='w-[100px] h-[100px] rounded-md cursor-pointer hover:scale-105 transition-all' src={cover?.thumbnail_image_url}/>)}
    </div>
    <div className='description_preview'>{album?.description_preview}</div>
    <div className='artist_title_page'>Tracklist</div>
    <div className='flex lg:flex-col justify-start lg:items-center items-start overflow-scroll lg:w-full md:w-[80%] w-[360px] gap-5'>
    {appearance?.map(({song}) => <Link  key={song?.id} to={`/song/${song?.id}`}><div className='hover_div_artist font-semibold'>{`${song?.title}`}</div> </Link>)}
    </div>
   </div>
  )
}

export default Albums