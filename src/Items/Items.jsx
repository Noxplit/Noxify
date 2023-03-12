import Link from 'next/link'
import React, { useState } from 'react'
import { useFetchData } from '../store'

const Items = ({ item}) => {
	const albums = item?.result

	return (
		<Link href='/details'>
			<div 
				className='text-center  hover:opacity-50 cursor-pointer relative border-gray-400 transition-all rounded-lg'>
				<img
					className='rounded-xl p-2 w-[250px] h-[250px] object-cover'
					src={albums?.header_image_url}
					alt='Items'
				/>
				<h3 className='text-2xl font-bold'>{albums?.title.slice(0, 20)}</h3>
				<h4 className='text-gray-400'>{albums?.artist_names.slice(0, 20)}</h4>
			</div>{' '}
		</Link>
	)
}

export default Items
