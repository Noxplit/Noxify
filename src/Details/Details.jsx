import React, { useEffect } from 'react'
import { useFetchData } from '../store'
import YouTube from 'react-youtube'
import { AiOutlineEye } from 'react-icons/ai'
import { BarLoader } from 'react-spinners';

const Details = () => {
	const trackDetails = useFetchData(state => state.trackDetails)
	const fetchTrackDetails = useFetchData(state => state.fetchTrackDetails)
	const loading = useFetchData(state => state.loading)
	const details = trackDetails?.song
	console.log(details?.custom_song_art_image_url)



	useEffect(() => {
		fetchTrackDetails()
	}, [])

	function getText(html) {
		var divContainer = document.createElement('div')
		divContainer.innerHTML = html
		return divContainer.textContent || divContainer.innerText || ''
	}

	return (
		<div>
			{loading ? <div className='flex justify-center items-center m-10'><BarLoader color='#a854f7'/></div>: 
				<div className='flex flex-col justify-center items-center'>
					<div className='flex justify-center items-center gap-10 '>
						{details?.custom_song_art_image_url?.length == null ? (
							<img
								src='notFound.png'
								className='w-[200px] h-[200px] rounded-full object-cover border-gray-700 border-4'
								alt=''
							/>
						) : (
							<img
								src={details?.custom_song_art_image_url}
								className='w-[200px] h-[200px] rounded-full border-gray-700 border-4'
								alt=''
							/>
						)}

						<div className='flex justify-center items-center flex-col'>
							<div className='text-3xl font-bold'>{details?.title}</div>
							<div className='text-gray-400 text-xl'>{details?.artist_names}</div>
							<div className='flex justify-start items-center gap-10'>
								<div className='text-gray-400 text-md flex justify-start items-center gap-2'>
									<AiOutlineEye />
									{details?.stats?.pageviews}
								</div>
								<div className='text-gray-400 text-md'>{details?.release_date_for_display}</div>

								<div className='text-gray-400 text-md flex justify-start items-center gap-2'>{`Genre: ${details?.primary_tag?.name}`}</div>
							</div>
						</div>
					</div>
					{details?.description?.html.length > 10 ? (
						<div className='my-4 p-4 text-sm  text-center'>
							{getText(details?.description?.html.replace('"', ''))}
						</div>
					) : (
						<div className='text-center p-4 my-4 text-2xl font-bold'>
							Sorry... This song has no description
						</div>
					)}
					<div className='flex justify-center items-center gap-4'>
						<a href={details?.share_url}>
							<button className='border-gray-500 border-2 px-10 py-2 rounded-md my-4 uppercase'>
								song page
							</button>
						</a>
						<a href={`https://open.spotify.com/track/${details?.spotify_uuid}`}>
							<button className='bg-[#1bd760] text-white px-10 py-2 rounded-md my-4 uppercase'>
								listen on spotify
							</button>
						</a>
						<a href={details?.apple_music_player_url}>
							<button className='bg-purple-700 text-white px-10 py-2 rounded-md my-4 uppercase'>
								demo
							</button>
						</a>
					</div>
					<YouTube videoId={details?.youtube_url?.replace('http://www.youtube.com/watch?v=', '')} />
				</div>

			}
		</div>
	)
}

export default Details
