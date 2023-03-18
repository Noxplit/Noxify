import React, { useEffect } from 'react'
import TopCharts from '../ChartsItem/TopCharts'
import { useFetchData } from '../store'
import TopArtists from '../TopArtists'
import Link from 'next/link'
import { BarLoader } from 'react-spinners'

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
				<div className='flex justify-center items-center m-10'><BarLoader color='#a854f7'/></div>
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
        <Link href='/details'>
				<div className='flex flex-wrap gap-4  '>
					{topCharts?.slice(0, 8).map((item, index) => (
            <div  key={index} onClick={() => setTrackId(item?.item?.id)}>
						<TopArtists  item={item} />
            </div>
					))}
				</div>
        </Link>
			)}
		</div>
	)
}

export default Charts
