import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import {AiOutlineClose} from 'react-icons/ai'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const PhotoSwiper = ({link, setSwiper}) => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				backgroundColor: 'rgba(0,0,0,0.7)',
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<AiOutlineClose
      onClick={() => setSwiper(false)}
      size={'40'}
     style={{ position: 'fixed', top: 0, zIndex: 60, right:0, color: 'white', cursor:'pointer'}}
    />
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				loop={true}
				navigation={true}
        className='text-white'
				effect='coverflow'
        zoom={true}
				grabCursor={true}>
				{link?.map((cover,id) => (
					<SwiperSlide
						key={cover?.id}
            virtualIndex={id+1}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '700px',
						}}>
              <div className='fixed top-[90%]'>{id+1}/{link.length}</div>
						<img
							alt='covers'
							className='w-[80%] '
							src={cover?.thumbnail_image_url}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default PhotoSwiper
