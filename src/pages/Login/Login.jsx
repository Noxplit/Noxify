import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser, setIsAuth } from '../../redux/songSlice/authSlice'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'

const Login = () => {
	const { currentUser, errorLogin } = useSelector(state => state.authSlice)
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'onBlur' })

	const onSubmit = data => {
		dispatch(loginUser(data))
		if (currentUser) {
			dispatch(setIsAuth(true))
		}
		localStorage.setItem('auth', 'true')
		reset()
	}

	if (currentUser) {
		dispatch(setIsAuth(true))
		localStorage.setItem('email', currentUser.email)
		localStorage.setItem('id', currentUser.id)
		localStorage.setItem('name', currentUser.name)
		localStorage.setItem('avatar', currentUser.avatar)
		localStorage.setItem('password', currentUser.password)
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
					onSubmit={handleSubmit(onSubmit)}
					className='flex justify-center items-center flex-col gap-5 w-full'>
					<input
						placeholder='Enter email'
						name='email'
						{...register('email', {
							required: 'Enter correct email',
							minLength: { message: 'Min length 5 symbols', value: 5 },
						})}
						className='input_login'
					/>
					{errors?.email && (
						<span className='text-red-400 my_flex'>
							<AiOutlineWarning />
							{errors?.email?.message}
						</span>
					)}
					<input
						placeholder='Enter password'
						name='password'
						{...register('password', {
							required: 'Enter correct password',
							minLength: { message: 'Min length 5 symbols', value: 5 },
						})}
						className='input_login'
					/>
					{errors?.password && (
						<span className='text-red-400 my_flex'>
							<AiOutlineWarning />
							{errors?.password?.message}
						</span>
					)}
					<button
						disabled={!isValid}
						type='submit'
						className={isValid ? 'button_enabled' : 'button_disabled'}>
						Login
					</button>
				</form>
				<Link to='/create_account'>
					<p className='text-gray-100 underline hover_div_artist'>Create new account</p>
				</Link>
				<Link  to='/'>
					<p onClick={() => dispatch(setIsAuth(true))} className='text-gray-100 bg-red-400 p-2 rounded-lg hover:text-white  hover_div_artist'>Continue without registration</p>
				</Link>
			</div>
		</div>
	)
}

export default Login
