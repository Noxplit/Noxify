import React from 'react'
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import CloseIcon from '@mui/icons-material/Close';
import { useBurgerMenu } from '../store';
import Link from 'next/link';

const BurgerMenu = () => {
const setCloseBurger = useBurgerMenu(state => state.setCloseBurger)

  const navigation = {
    logo: 'font-bold uppercase text-center relative',
  }
  return (
    <div className='w-[70%] h-full sm:hidden  block fixed bg-black/75 z-50 p-4'>
      <div className={navigation.logo}>
       <GraphicEqIcon fontSize='large' />
        <CloseIcon onClick={setCloseBurger} className='absolute top-0 right-0 hover:scale-105 transition-all cursor-pointer' fontSize='large'/>
				
				<p className='text-xl'>Noxify</p>
			</div>
<ul className='pl-5 flex flex-col justify-center  gap-10 pt-10 font-bold '>
  <li><Link href='/' onClick={setCloseBurger}><HomeMaxIcon/> <span>Home</span></Link></li>
  <li ><PlaylistPlayIcon/> <span>Playlist</span></li>
  <li ><LibraryMusicIcon/> <span>Albums</span></li>
  <li><AirlineStopsIcon/> <span>Top tracks</span></li>
  <li ><PeopleAltIcon/> <span>Artists</span></li>
  <li ><CollectionsIcon/> <span>Collections</span></li>
</ul>
    </div>
  )
}

export default BurgerMenu