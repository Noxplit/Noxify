import { Link } from "react-router-dom"

const AlbumsPage = ({ chartAlbums }) => {
	return (
		<>
			{chartAlbums?.map(chart => (
				<Link key={chart?.id} to={`/album/${chart?.id}`}><div key={chart?.id} className='w-[200px] h-[340px] animation_item'>
					<img
						className='w-[200px] h-[200px] object-cover'
						src={chart?.cover_art_thumbnail_url}
						alt=''
					/>
					<div>{chart?.full_title}</div>
					<div className='text-xs text-gray-400 '>{chart?.name}</div>
				</div></Link>
			))}
		</>
	)
}

export default AlbumsPage
