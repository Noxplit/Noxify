import React from 'react'
import { useDispatch } from 'react-redux';
import { getPagination } from '../../redux/songSlice/songSlice';

const Pagination = () => {
  const dispatch = useDispatch()
  const handleClick = (item) => {
    dispatch(getPagination(item))
  }
  return (
    
    <div>
     {[1,2,3,4].map(item => <span onClick={() => handleClick(item)}  key={item} className=' rounded-sx shadow-md border-2  border-gray-100 hover:border-red-400 px-2 py-1 mr-1 hover:bg-red-400 cursor-pointer'>{item}</span>)}

    </div>
  )
}

export default Pagination