import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUser } from '../../redux/songSlice/authSlice'
import { IMAGE_AVATAR } from '../../components/utils/constants'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const CreateAccount = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'onBlur' })

	const { error,  isCreated } = useSelector(state => state.authSlice)
	const dispatch = useDispatch()

	const onSubmit = data => {
		dispatch(createUser(data))
		reset()
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
				{error?.message && (
					<span className='text-red-400 my_flex'>
						<AiOutlineWarning />
						Invalid data entered
					</span>
				)}
				{isCreated && (
					<span className='text-green-400 my_flex'>
						<AiOutlineCheckCircle />
						User successfully created
					</span>
				)}
				<form
					onSubmit={handleSubmit(onSubmit)}
					action='submit'
					className='flex justify-center items-center flex-col gap-5 w-full'>
					<input
						placeholder='Enter email'
						name='login'
						{...register('email', {
							required: 'Enter correct e-mail',
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
						placeholder='Enter name'
						name='name'
						className='input_login'
						{...register('name', {
							required: 'Enter correct name',
							minLength: { message: 'Min length 5 symbols', value: 5 },
						})}
					/>
					{errors?.name && (
						<span className='text-red-400 my_flex'>
							<AiOutlineWarning />
							{errors?.name?.message}
						</span>
					)}
					<input
						placeholder='Enter avatar URL'
						name='avatar'
						{...register('avatar', {
							required: 'Enter correct avatar URL',
							minLength: { message: 'Min length 5 symbols', value: 5 },
							value: IMAGE_AVATAR,
						})}
						className='input_login'
					/>
					{errors?.avatar && (
						<span className='text-red-400 my_flex'>
							<AiOutlineWarning />
							{errors?.avatar?.message}
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
					<button type='submit' disabled={!isValid} className={isValid ? 'button_enabled' : 'button_disabled'}>
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
