import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { LiaTelegramPlane } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='flex justify-between items-center'>
			<div>
				<h1 className='font-bold text-xl'>Noxify</h1>
				<p className='text-xs text-gray-400'>Designed and created by noxplit</p>
			</div>
			<div className='flex justify-center items-center gap-2'>
				<Link to={'https://github.com/Noxplit'}>
					<AiFillGithub size={25} />
				</Link>
				<Link to={'https://telegram.me/noxplit'}>
					<LiaTelegramPlane size={25} />
				</Link>
				<Link to={'https://linkedin.com/in/noxplit-p'}>
					<AiOutlineLinkedin size={25} />
				</Link>
			</div>
		</div>
	)
}

export default Footer
