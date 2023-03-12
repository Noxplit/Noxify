import React from 'react'
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import Link from 'next/link';
import { useFetchData } from '../store';


const Navigation = () => {
  const navigation = {
    logo: 'font-bold uppercase text-center',
  }

  const setTrackId = useFetchData(state => state.setTrackId)
  return (
    <div className='bg-[#101012] text-white w-[10%] hidden sm:block h-[1000px] p-2'>
      <div onClick={() => setTrackId(Number)} className={navigation.logo}>
				<Link href='/'><GraphicEqIcon fontSize='large' /></Link>
				<p className='text-xl'>Noxify</p>
			</div>
<ul className='pl-5 flex flex-col justify-center  gap-10 pt-10 font-bold '>
  <li><HomeMaxIcon/> <span>Home</span></li>
  <li ><PlaylistPlayIcon/> <span>Playlist</span></li>
  <li ><LibraryMusicIcon/> <span>Albums</span></li>
  <li><AirlineStopsIcon/> <span>Top tracks</span></li>
  <li ><PeopleAltIcon/> <span>Artists</span></li>
  <li ><CollectionsIcon/> <span>Collections</span></li>
</ul>
    </div>
  )
}

export default Navigation