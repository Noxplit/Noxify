import { Link, useParams } from "react-router-dom"
import { useGetArtistPageQuery } from "../redux/songSlice/singlePageChartApi"
import { NOT_FOUND } from "../components/utils/constants"
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import Loading from "../components/Loading/Loading"

const Artists = () => {
  const {id} = useParams()
  const {data,isLoading} = useGetArtistPageQuery(id)
  const artist = data?.artist

  if(isLoading) {
    return <Loading/>
  }
	return (
    <div className='flex items-center flex-col dark:h-screen dark:mb-[50px]'>
    <img src={artist?.header_image_url ? artist?.header_image_url : NOT_FOUND } className='title_image_page my-5' alt="" />
    <div className="my_flex">
<Link to={`https://www.instagram.com/${artist?.instagram_name}`}><AiFillInstagram className="hover_div_artist" size={'47px'}/></Link>
<Link to={`https://www.facebook.com/${artist?.facebook_name}`}><BsFacebook className="hover_div_artist" size={'40px'}/></Link>
<Link to={`https://www.twitter.com/${artist?.twitter_name}`}><AiFillTwitterCircle className="hover_div_artist" size={'46px'}/></Link>
    </div>
    <div className='artist_title_page'>{artist?.name}</div>
    <div className='description_preview'>{artist?.description_preview}</div>
   </div>
  )
  
}

export default Artists
