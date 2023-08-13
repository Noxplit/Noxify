import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='h-[60px] p-5 flex justify-between items-center border-b-2 border-gray-100'>
			<Link to='/'><div className='flex justify-start gap-2 items-center hover:text-red-400 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clip-rule="evenodd" />
</svg>



				<h3 className='text-xl font-bold'>Noxify</h3>
			</div></Link>
			<div className='flex justify-center items-center gap-5'>
				<form className='flex justify-center items-center'>
					<input
						type='text'
						placeholder='search song...'
						className='border-gray-100 max-w-[300px] border-2 text-center text-xs rounded-l-md py-2'
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 -15 30 60'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-10 h-9 hover:bg-gray-200 cursor-pointer border-gray-100 border-2   rounded-r-md'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
          <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
				</form>


			</div>
		</div>
	)
}

export default Header
