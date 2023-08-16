import { useDispatch, useSelector } from "react-redux"
import { useGetSearchSongQuery } from "../../../redux/songSlice/singlePageChartApi"
import { getInput } from "../../../redux/songSlice/songSlice"
import Chart from "../../../components/Chart/Chart"
import SearchItems from "./SearchItems"
import { useEffect, useState } from "react"
import Loading from "../../../components/Loading/Loading"
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Search = () => {
  const dispatch = useDispatch()
  const {input} = useSelector(state => state.songSlice)
  const [page, setPage] = useState(1)
  const plus = () => setPage(page + 1)
  const minus = () => setPage(page - 1)
  const params = {
    input,
    page
  }
  const [value, setValue] = useState('eminem')
  const {data, isFetching} = useGetSearchSongQuery(params)
  const search =  data?.hits

  useEffect(() => {},[input])
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input);
    dispatch(getInput(value))
  }

 
	return (
		<div>
			<div className='my-5 '>
				<form  onSubmit={e => handleSubmit(e)} className='flex justify-center flex-col gap-2  items-center'>
					<input
          value={value}
          onChange={e => handleChange(e)}
						type='text'
						placeholder='search song...'
						className='border-gray-100 lg:w-[900px] md:w-[600px] sm:w-[450px] w-[360px]  border-2 text-center text-xs rounded-l-md py-2'
					/>
          <div className="my_flex">
          <button className="my_button" type="submit">Search</button>
          <div onClick={minus} className="my_button flex justify-center items-center"><AiOutlineArrowLeft/></div>
          <div onClick={plus} className="my_button flex justify-center items-center"><AiOutlineArrowRight/></div>
          </div>
				</form>
			</div>
      {isFetching ?  <Loading/> :  <Chart title="Search" rows={'4'}>
      <SearchItems search={search}/>
      </Chart> }
     
		</div>
	)
}

export default Search
