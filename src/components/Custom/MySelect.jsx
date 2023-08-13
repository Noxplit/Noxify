import React from 'react'

const MySelect = ({value, setValue,arrey}) => {
  return (
      <select  value={value}  onChange={setValue} className=' rounded-sx shadow-md border-2  border-gray-100 hover:border-red-400 px-2 py-1 mr-1  cursor-pointer'>
       {arrey?.map(val => <option key={val} value={val}>{val}</option> )} 
       
      </select>
  )
}

export default MySelect