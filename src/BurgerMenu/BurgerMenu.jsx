import React from 'react'
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
       <div fontSize='large' >Icon</div>
        <div onClick={setCloseBurger} className='absolute top-0 right-0 hover:scale-105 transition-all cursor-pointer' fontSize='large'>Close</div>
				
				<p className='text-xl'>Noxify</p>
			</div>
<ul className='pl-5 flex flex-col justify-center  gap-10 pt-10 font-bold '>
  <li><Link href='/' onClick={setCloseBurger}> <span>Home</span></Link></li>
  <li > <span>Playlist</span></li>
  <li > <span>Albums</span></li>
  <li><span>Top tracks</span></li>
  <li > <span>Artists</span></li>
  <li ><span>Collections</span></li>
</ul>
    </div>
  )
}

export default BurgerMenu