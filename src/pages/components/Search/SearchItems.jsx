import { Link } from "react-router-dom"

const SearchItems = ({search}) => {
	return (
		<>
			{search?.map(({result}) => (
				<Link key={result?.id} to={`/song/${result?.id}`}><div  className='w-[200px] h-[285px] text-center rounded-sm animation_item'>
					<img
						className='albums_image'
						src={result?.header_image_thumbnail_url}
						alt={result?.name}
					/>
					<div className="text-sm">{result?.artist_names}</div>
					<div className='text-xs text-gray-400 '>{result?.title}</div>
				</div></Link>
			))}
		</>
	)
}

export default SearchItems
