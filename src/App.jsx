import { Route, Routes} from "react-router-dom"
import Login from "./components/Login/Login"
import SongPage from "./pages/SongPage"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Albums from "./pages/Albums"
import Artists from "./pages/Artists"
import Search from "./pages/components/Search/Search"


function App() {

	return (
    <div>
      <Header/>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/song/:id" element={<SongPage/>}/>
    <Route path="/album/:id" element={<Albums/>}/>
    <Route path="/artist/:id" element={<Artists/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </div>
  )
}

export default App
