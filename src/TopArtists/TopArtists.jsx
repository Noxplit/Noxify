import React from 'react'

const TopArtists = ({item}) => {
	const topCharts = item?.item
	return (
		<div>
			<img
				width={100}
				height={100}
				className='w-[80px] h-[80px] rounded-full object-cover hover:scale-105 cursor-pointer hover:opacity-50 transition-all'
				src={topCharts?.primary_artist?.header_image_url}
				alt=''
			/>
		</div>
	)
}

export default TopArtists
