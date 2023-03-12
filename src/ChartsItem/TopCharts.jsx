import React from 'react'

const TopCharts = ({ item, id }) => {
	const topCharts = item?.item
	return (
		<div className='flex justify-between  gap-2 p-4 hover:opacity-60 cursor-pointer'>
			<p>{`${id+1} .`}</p>
			<img
				src={topCharts?.header_image_thumbnail_url}
				width={100}
				height={100}
				className='w-[60px] h-[60px] rounded-lg'
				alt='ChartsTrack'
			/>
			<div>
				<h3 className='text-md'>{topCharts?.title.slice(0,15)}</h3>
				<h4 className='text-sm text-gray-500'>{topCharts?.artist_names}</h4>
			</div>
		</div>
	)
}

export default TopCharts
