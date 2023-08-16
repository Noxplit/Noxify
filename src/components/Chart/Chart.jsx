
const Chart = ({children, title='Top songs', rows}) => {
  return (
    <div>
    <div className='text-2xl ml-2 lg:text-start text-center font-bold '>{title}</div>
    <div className='overflow-scroll'>
      <div style={{display:'grid', gridTemplateRows:`repeat(${rows}, minmax(0, 1fr))`, gridAutoFlow:'column' }}>
   {children}
      </div>
    </div>
  </div>
  )
}

export default Chart