import { Route, Routes } from 'react-router-dom'
import SongPage from './pages/SongPage'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Albums from './pages/Albums'
import Artists from './pages/Artists'
import Search from './pages/components/Search/Search'
import Login from './pages/Login/Login'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import { useSelector } from 'react-redux'
import Profile from './pages/components/Profile/Profile'

function App() {
	const {isAuth} = useSelector(state => state.authSlice)
  const {theme} = useSelector(state => state.songSlice)

	return (
		<div className={theme ? '' : 'dark' }>
			{isAuth ? (
				<div className='dark:text-white dark:bg-gradient-to-tr from-slate-800 via-gray-800 to-neutral-600 dark:h-100%'>
					<Header />
					<Routes>
						<Route path='/song/:id' element={<SongPage />} />
						<Route path='/album/:id' element={<Albums />} />
						<Route path='/artist/:id' element={<Artists />} />
						<Route path='/search' element={<Search />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/' element={<Home />} />
						<Route path='*' element={<Home />} />
					</Routes>
				</div>
			) : (
				<Routes>
					<Route path='/login' element={<Login/>} />
					<Route path='/create_account' element={<CreateAccount/>} />
					<Route path='*' element={<Login />} />
				</Routes>
			)}
		</div>
	)
}

export default App
