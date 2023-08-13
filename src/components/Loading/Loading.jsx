import { Audio } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='h-[82px] flex justify-center items-center'>
    <Audio
      height='80'
      width='80'
      radius='9'
      color='#fca2a2'
      ariaLabel='loading'
      wrapperStyle
      wrapperClass
    />
  </div>
  )
}

export default Loading