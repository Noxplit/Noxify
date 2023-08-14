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
console.log(appearance);
if(isLoading) {
  return <Loading/>
}

  return (
    
   <div className='my_flex my-5 flex-col'>
    <img src={album?.cover_art_thumbnail_url} className='title_image_page' alt="" />
    <div className='my_flex hover_div_artist'>
    <img src={album?.artist?.image_url} alt="" className='artist_image_page' />
    <div className='artist_title_page'>{album?.artist?.name}</div>
    </div>
    <div className='song_title_page'>{album?.name}</div>
    <div className='song_title_page'>{album?.release_date_for_display}</div>
    <div className='my_flex flex-wrap'>
    {coverArts?.map(cover => <img alt='covers' className='w-[75px] h-[75px]' src={cover?.thumbnail_image_url}/>)}
    </div>
    <div className='description_preview'>{album?.description_preview}</div>
    <div className='artist_title_page'>Tracklist</div>
    <div className='align-start'>
    {appearance?.map(({song}, id) => <Link to={`/song/${song?.id}`}><div>{`${id+1}) ${song?.title}`}</div></Link>)}
    </div>
   </div>
  )
}

export default Albums