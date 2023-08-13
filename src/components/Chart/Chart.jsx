
const Chart = ({children, title='Top Songs',rows}) => {
  return (
    <div>
    <div className='text-xl font-bold '>{title}</div>
    <div className='overflow-scroll'>
      <div className={`grid grid-rows-${rows} grid-flow-col`}>
   {children}
      </div>
    </div>
  </div>
  )
}

export default Chart