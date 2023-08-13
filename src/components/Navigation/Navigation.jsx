import React from 'react'

const Navigation = () => {
  return (
    <div className=' p-5'>
      <h3 className='text-red-400 text-xs font-semibold uppercase'>Noxify music</h3>
      <ul>
        <li className='navigation_li'>Top charts</li>
        <li className='navigation_li'>Top albums</li>
        <li className='navigation_li'>My playlist</li>
        <li className='navigation_li'>Favorite</li>
      </ul>
    </div>
  )
}

export default Navigation