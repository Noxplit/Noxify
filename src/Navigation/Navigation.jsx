import React from 'react'
import Link from 'next/link';
import { useFetchData } from '../store';
import {GiMusicSpell} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import {MdFavoriteBorder} from 'react-icons/md'
import {GiCompactDisc} from 'react-icons/gi'
import {MdAirlineStops} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
import {BsCollection} from 'react-icons/bs'


const Navigation = () => {
  const navigation = {
    logo: 'font-bold uppercase flex flex-col justify-center items-center',
  }

  const setTrackId = useFetchData(state => state.setTrackId)
  return (
    <div className='bg-[##101012]  text-white w-[10%] hidden sm:block h-[1000px] p-2'>
      <div onClick={() => setTrackId(Number)} className={navigation.logo}>
				<Link href='/'><div><GiMusicSpell size={25}/></div></Link>
				<p className='text-xl'>Noxify</p>
			</div>
<ul className=' flex flex-col text-center justify-center items-center  gap-10 pt-10 font-bold'>
  <li ><AiOutlineHome size={25}/>Home</li>
  <li ><MdFavoriteBorder size={25}/>Favorite</li>
  <li ><GiCompactDisc size={25}/>Albums</li>
  <li><MdAirlineStops size={25}/>Top tracks</li>
  <li ><AiOutlineStar size={25}/>Artists</li>
  <li ><BsCollection size={25}/>Collections</li>
</ul>
    </div>
  )
}

export default Navigation