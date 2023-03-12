import React, { useEffect } from 'react'
import TopCharts from '../ChartsItem/TopCharts'
import { useFetchData } from '../store'
import TopArtists from '../TopArtists'
import CircularProgress from '@mui/material/CircularProgress'
import Link from 'next/link'

const Charts = () => {
	const topChartsArrey = useFetchData(state => state.topCharts)
	const setTrackId = useFetchData(state => state.setTrackId)
	const fetchTopChartsArrey = useFetchData(state => state.fetchTopCharts)
	const loading = useFetchData(state => state.loading)
	const topCharts = topChartsArrey?.chart_items

	useEffect(() => {
		fetchTopChartsArrey()
	}, [])

	const charts = {
		title: 'text-xl font-bold text-center p-4',
	}
	return (
		<div className='w-[30%] hidden sm:block'>
			<h1 className={charts.title}>Top Charts</h1>
			{loading ? (
				''
			) : (
				<Link href='/details'>
					<div className='flex justify-start items-start flex-col'>
						{topCharts?.slice(0, 8).map((item, index) => (
							<div key={index} onClick={() => setTrackId(item?.item?.id)}>
								<TopCharts id={index} item={item} />
							</div>
						))}
					</div>
				</Link>
			)}

			<h2 className={charts.title}>Top Artists</h2>
			{loading ? 
		''
			 : (
				<div className='flex flex-wrap gap-4  '>
					{topCharts?.slice(0, 8).map((item, index) => (
						<TopArtists key={index} item={item} />
					))}
				</div>
			)}
		</div>
	)
}

export default Charts
