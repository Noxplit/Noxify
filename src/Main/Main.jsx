import React, { useEffect } from 'react'
import Banner from '../Banner'
import Items from '../Items'
import { useFetchData } from '../store'

const Main = () => {
  const fetchSearch = useFetchData(state => state.fetchSearch)
  const albumsArrey = useFetchData(state => state.albums)
  const loading = useFetchData(state => state.loading)
  const setTrackId = useFetchData(state => state.setTrackId)
  const trackId = useFetchData(state => state.trackId)
  const search = useFetchData(state => state.search)
  const setPage = useFetchData(state => state.setPage)
  const page = useFetchData(state => state.page)
  const searchTrack = albumsArrey?.hits



  useEffect(() => {fetchSearch()},[page])

	return (
		<div className='w-full p-4 '>
			<div className='text-center mb-10'>
				<Banner />
			</div>
			<div className='flex flex-wrap  justify-around gap-4 items-center mb-4'>
				<p className='uppercase text-center font-bold text-xl'>The most popular Traks</p>
        <div className='flex justify-center items-center gap-4'>
      <button onClick={() => setPage(page - 1)} className='bg-purple-400 px-10 py-2 rounded-lg'>DOWN</button>
      <button onClick={() => setPage(page + 1)} className='bg-purple-400 px-12 py-2 rounded-lg'>UP</button>
      </div>
				<select className='bg-purple-400 px-4 py-2 rounded-lg'>
					<option>Soul</option>
				</select>
			</div>
      {loading ? '': 	<div className='flex justify-around items-center flex-wrap  p-4'>
				 {searchTrack?.map((item, id) => (
          <div  onClick={() => setTrackId(item?.result?.id)} key={id}>
					<Items   id={id}  item={item} />
          </div>
				))}
			</div>} 
     
		</div>
	)
}

export default Main
