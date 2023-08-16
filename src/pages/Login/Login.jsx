import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser, setIsAuth } from '../../redux/songSlice/authSlice'

const Login = () => {
	const [values, setValues] = useState({ email: '', password: '' })
	const { currentUser, errorLogin } = useSelector(state => state.authSlice)
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(loginUser(values))
		if (currentUser) {
			dispatch(setIsAuth(true))
		}
		setValues({ email: '', password: '' })
	}

	if (currentUser) {
		dispatch(setIsAuth(true))
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
				{errorLogin?.message && <span className='text-red-400'>Invalid user data entered</span>}
				<form
					action='submit'
					onSubmit={handleSubmit}
					className='flex justify-center items-center flex-col gap-5 w-full'>
					<input
						placeholder='Enter email'
						name='login'
						value={values.email}
						onChange={e => setValues({ ...values, email: e.target.value })}
						className='input_login'
					/>
					<input
						placeholder='Enter password'
						name='password'
						value={values.password}
						onChange={e => setValues({ ...values, password: e.target.value })}
						className='input_login'
					/>
					<button type='submit' className='border-2 border-gray-300 p-2 rounded-md bg-white w-full'>
						Login
					</button>
				</form>
				<Link to='/create_account'>
					<p className='text-gray-100 underline hover_div_artist'>Create new account</p>
				</Link>
			</div>
		</div>
	)
}

export default Login
