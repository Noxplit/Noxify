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

function App() {
	const {isAuth} = useSelector(state => state.authSlice)

	return (
		<>
			{isAuth ? (
				<div>
					<Header />
					<Routes>
						<Route path='/song/:id' element={<SongPage />} />
						<Route path='/album/:id' element={<Albums />} />
						<Route path='/artist/:id' element={<Artists />} />
						<Route path='/search' element={<Search />} />
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
		</>
	)
}

export default App
