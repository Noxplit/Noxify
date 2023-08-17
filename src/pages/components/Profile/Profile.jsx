import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, setIsAuth, updateUser } from '../../../redux/songSlice/authSlice'

const Profile = () => {
  const {currentUser} = useSelector(state=> state.authSlice)
 const dispatch = useDispatch()
  const [values,setValues] = useState(currentUser)

  const handleSubmit = e => {
		e.preventDefault()
    dispatch(updateUser(values))
	}

  const handleExit = () => {
dispatch(setIsAuth(false))
dispatch(setCurrentUser(null))
localStorage.removeItem('auth')
  }

  return (
    <div className='flex items-center  flex-col dark:h-screen'>
      <img className='title_image_page my-5' src={currentUser?.avatar} alt={currentUser?.name} />
      <span className='text-2xl font-bold'>{currentUser?.name}</span>
      <form
					onSubmit={e => handleSubmit(e)}
					action='submit'
					className='flex justify-center items-center flex-col gap-5 w-full p-4'>
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
					<button type='submit' className='my_button'>
						Update Account
					</button>
					<button onClick={handleExit} type='submit' className='my_button border-2 border-red-400 text-red-400'>
						Exit
					</button>
				</form>
    </div>
  )
}

export default Profile