import { Link } from 'react-router-dom'
import { GiMusicSpell } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'

const Header = () => {
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
				<AiOutlineSetting className='hover_div_artist' size={'20'} />
			</div>
		</div>
	)
}

export default Header
