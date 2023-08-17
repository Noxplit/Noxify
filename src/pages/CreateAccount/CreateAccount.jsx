import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUser } from '../../redux/songSlice/authSlice'
import { IMAGE_AVATAR } from '../../components/utils/constants'

const CreateAccount = () => {
  const defaultValues = {
    name: '', email: '', password: '', avatar: IMAGE_AVATAR
  }
	const [values, setValues] = useState(defaultValues)
  
	const { error, currentUser } = useSelector(state => state.authSlice)
	const dispatch = useDispatch()


	const handleSubmit = e => {
		e.preventDefault()
		dispatch(createUser(values))
		setValues({ name: '', email: '', password: '', avatar: '' })
	}

	return (
		<div
			style={{
				background:
					'url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
				height: '100vh',
				backgroundSize: 'cover',
				backGroundPosition: 'bottom',
				backgroundRepeat: 'no-repeat',
			}}
			className='flex justify-center items-center'>
			<div className=' p-5 rounded-md flex justify-center items-center flex-col gap-5'>
				<h1 className='text-5xl  uppercase text-white '>Noxify</h1>
				<span className='text-md  uppercase text-white  text-center'>
					The best music application ever!
				</span>
				{error?.message && <span className='text-red-400'>Invalid data entered</span>}
				{currentUser && <span className='text-green-400'>User successfully created</span>}
				<form
					onSubmit={e => handleSubmit(e)}
					action='submit'
					className='flex justify-center items-center flex-col gap-5 w-full'>
					<input
						placeholder='Enter email'
						name='login'
						value={values.email}
						className='input_login'
						onChange={e => setValues({ ...values, email: e.target.value })}
					/>
					<input
						placeholder='Enter name'
						name='login'
						value={values.name}
						className='input_login'
						onChange={e => setValues({ ...values, name: e.target.value })}
					/>
					<input
						placeholder='Enter avatar URL'
						name='login'
						value={values.avatar}
						className='input_login'
						onChange={e => setValues({ ...values, avatar: e.target.value })}
					/>
					<input
						placeholder='Enter password'
						name='password'
						value={values.password}
						className='input_login'
						onChange={e => setValues({ ...values, password: e.target.value })}
					/>
					<button type='submit' className='border-2 border-gray-300 p-2 rounded-md bg-white w-full'>
						Create Account
					</button>
				</form>
				<Link to='/login'>
					<p className='text-gray-100 underline hover_div_artist'>Login Account</p>
				</Link>
			</div>
		</div>
	)
}

export default CreateAccount
