import React, { useEffect } from 'react'
import { useBurgerMenu, useFetchData } from '../store'
import Link from 'next/link'
import {GiMusicSpell} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'


const Header = () => {
const isOpenBurger = useBurgerMenu(state => state.setOpenBurger)
const search = useFetchData(state => state.search)
const setSearch = useFetchData(state => state.setSearch)
const fetchSearch = useFetchData(state => state.fetchSearch)


const setSearchButton = () => {
  fetchSearch()
}


	const style = {
		header: 'bg-gradient-to-r from-[#101012] to-[#101019] text-white p-4 flex justify-between items-center',
		search: 'flex justify-center items-center gap-4',
	}
	return (
		<div className={style.header}>
			<div className={style.search}>
				
<div className='block sm:hidden'><Link href='/'><GiMusicSpell size={25}/></Link></div>
				<input
					className='rounded-xl py-2 text-black bg-transparent text-center text-gray-300'
					placeholder='Поиск...' value={search} onChange={(e) => setSearch(e.target.value) }
				/>
        <div className='hover:scale-105 transition-all cursor-pointer'  fontSize='medium' onClick={setSearchButton} ><AiOutlineSearch size={25}/></div>
			</div>
			<div className='sm:hidden block transition-all cursor-pointer hover:scale-105'>
				<div onClick={isOpenBurger} ><RxHamburgerMenu size={20}/></div>
			</div>
		</div>
	)
}

export default Header
