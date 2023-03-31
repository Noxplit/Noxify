import Image from 'next/image'
import React from 'react'


const Banner = () => {

	return (
		<div className='relative flex justify-center items-center w-full'>
	
			<Image
				src='/Item/4.jpeg'
				width={500}
				className='w-full h-[400px] object-cover rounded-lg opacity-60'
				height={130}
				alt='Banner'
			/>
			<div className='absolute  flex flex-col gap-2'>
				<h1 className='font-bold text-4xl uppercase'>Noxify</h1>
				<h2 className='text-xl text-gray-400 uppercase'>The best music app on the world</h2>
				<button className='text-xl bg-purple-700 py-2 mx-8 text-white rounded-lg hover:scale-105 transition-all'><a href='https://genius.com'>Listen Music Now</a></button>
			</div>
		</div>
	)
}

export default Banner
