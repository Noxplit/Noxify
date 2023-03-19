import React from 'react'
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
				<Link href='/'><div>Icon</div></Link>
				<p className='text-xl'>Noxify</p>
			</div>
<ul className='pl-5 flex flex-col justify-center  gap-10 pt-10 font-bold '>
  <li> <span>Home</span></li>
  <li > <span>Playlist</span></li>
  <li ><span>Albums</span></li>
  <li><span>Top tracks</span></li>
  <li ><span>Artists</span></li>
  <li ><span>Collections</span></li>
</ul>
    </div>
  )
}

export default Navigation