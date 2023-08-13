import { useParams } from 'react-router-dom';
import { useGetSongPageQuery } from '../redux/songSlice/singlePageChartApi';
import YouTube from 'react-youtube';
import Loading from '../components/Loading/Loading';

const SongPage = () => {
  const {id} = useParams()
  const {data, isLoading} = useGetSongPageQuery(id)
  const song = data?.song
  const youtube = song?.youtube_url.slice(31)

if(isLoading) {
  return <Loading/>
}

  return (
    
    <div className='flex justify-center flex-col items-center my-5 '>
<img className='w-[200px] h-[200px] object-cover rounded-full border-2 border-red-400 'src={song?.custom_header_image_url} alt="" />
<div className='text-2xl font-bold mt-5'>{song?.artist_names}</div>
<div className='text-md text-gray-400 md:px-[300px] px-[50px] py-2  text-center'>{song?.title}</div>
<div className='text-md text-gray-400 md:px-[300px] px-[50px] py-2 text-xs'>{song?.release_date}</div>
<div className='md:px-[300px] px-[50px] py-5 text-xs'>{song?.description_preview}</div>
<YouTube videoId={youtube} style={{}} opts={{width:'360px', height:'360px'}} />
    </div>
  )
}

export default SongPage