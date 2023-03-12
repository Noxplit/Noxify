import React, { useEffect } from 'react'
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor'
import MenuIcon from '@mui/icons-material/Menu'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import { useBurgerMenu, useFetchData } from '../store'
import Link from 'next/link'

const Header = () => {
const isOpenBurger = useBurgerMenu(state => state.setOpenBurger)
const search = useFetchData(state => state.search)
const setSearch = useFetchData(state => state.setSearch)
const fetchSearch = useFetchData(state => state.fetchSearch)

console.log(search);

const setSearchButton = () => {
  fetchSearch()
}


	const style = {
		header: 'bg-[#101012] text-white p-4 flex justify-between items-center',
		search: 'flex justify-center items-center gap-4',
	}
	return (
		<div className={style.header}>
			<div className={style.search}>
				
<div className='block sm:hidden'><Link href='/'><GraphicEqIcon fontSize='medium'/></Link></div>
				<input
					className='rounded-xl py-2 text-black bg-transparent text-center text-gray-300'
					placeholder='Поиск...' value={search} onChange={(e) => setSearch(e.target.value) }
				/>
        <YoutubeSearchedForIcon className='hover:scale-105 transition-all cursor-pointer'  fontSize='medium' onClick={setSearchButton} />
			</div>
			<div className='sm:hidden block transition-all cursor-pointer hover:scale-105'>
				<MenuIcon onClick={isOpenBurger} />
			</div>
		</div>
	)
}

export default Header
