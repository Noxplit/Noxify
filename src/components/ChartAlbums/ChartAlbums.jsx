import { Link } from "react-router-dom"

const ChartAlbums = ({ chartAlbums }) => {
	return (
		<>
			{chartAlbums?.map(chart => (
				<Link key={chart?.item?.id} to={`/album/${chart?.item?.id}`}><div  className='w-[200px] h-[285px] rounded-sm animation_item'>
					<img
						className='albums_image'
						src={chart?.item?.cover_art_thumbnail_url}
						alt=''
					/>
					<div className="text-sm">{chart?.item?.full_title}</div>
					<div className='text-xs text-gray-400 '>{chart?.item?.name}</div>
				</div></Link>
			))}
		</>
	)
}

export default ChartAlbums
