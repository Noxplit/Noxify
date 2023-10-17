import { Link } from 'react-router-dom'
import { GiMusicSpell } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMoonFill } from 'react-icons/bs'
import { AiOutlineLogin } from 'react-icons/ai'
import { BsMoon } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../redux/songSlice/songSlice'
import { setCurrentUser, setIsAuth } from '../../redux/songSlice/authSlice'


const Header = () => {
  const { currentUser } = useSelector(state => state.authSlice)
  const {theme} = useSelector(state => state.songSlice)
  const dispatch = useDispatch()


const handleUser = () => {
  dispatch(setIsAuth(false))
  dispatch(setCurrentUser(null))
  localStorage.removeItem('auth')
}
	return (
		<div className='h-[60px] p-5 flex justify-between items-center border-b-2 border-gray-100'>
			<Link to='/'>
				<div className='flex justify-start gap-2 items-center hover:text-red-400 cursor-pointer'>
					<GiMusicSpell size={'25'} />
					<h3 className='text-xl font-bold'>Noxify</h3>
				</div>
			</Link>

			<div className='my_flex'>
				<Link to='/search'>
					<AiOutlineSearch className='hover_div_artist' size={'20'} />
				</Link>
        {currentUser  ? 	<Link to='/profile'><div className='my_flex'>
  <img  className='w-[25px] h-[25px] rounded-full'src={currentUser?.avatar} alt={currentUser?.name} />
  <div className='font-bold'>{currentUser?.name}</div>
</div></Link>  : <div className='hover_div_artist' onClick={handleUser}><AiOutlineLogin size={20}/></div>}
			
{theme ?  <BsMoon onClick={() => dispatch(setTheme(false))}/> : <BsFillMoonFill onClick={() => dispatch(setTheme(true))}/> }


			</div>
		</div>
	)
}

export default Header
