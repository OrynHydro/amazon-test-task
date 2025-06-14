import React from 'react'
import s from './styles/App.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { GoChevronRight, GoChevronLeft } from 'react-icons/go'
import { CardsContent } from './utils/cards-content'
import SwiperCard from './components/SwiperCard/SwiperCard'

function App() {
	return (
		<section
			className={s.testimonialSection}
			aria-labelledby='testimonials-heading'
		>
			<div className={s.container}>
				<h1 className={s.heading} id='testimonials-heading'>
					Voices of Success with Sales Fortuna
				</h1>
				<div className={s.swiperContainer}>
					<div className={s.navigation}>
						<button className='custom-prev'>
							<GoChevronLeft />
						</button>
						<button className='custom-next'>
							<GoChevronRight />
						</button>
					</div>
					<Swiper
						className={s.swiper}
						modules={[Navigation, Pagination]}
						navigation={{
							nextEl: '.custom-next',
							prevEl: '.custom-prev',
						}}
						spaceBetween={15}
						pagination={{
							renderBullet: (index: number, className: string) => {
								return `<span class="${className} ${s.paginationBullet}"></span>`
							},
						}}
						allowTouchMove={true}
						speed={500}
						slidesPerView={1}
						slidesPerGroup={1}
						observer={true}
						observeParents={true}
						breakpoints={{
							480: {
								slidesPerView: 2,
								slidesPerGroup: 2,
								allowTouchMove: false,
							},
							1024: {
								slidesPerView: 3,
								slidesPerGroup: 3,
								allowTouchMove: false,
							},
						}}
					>
						{CardsContent.map((card, index) => (
							<SwiperSlide key={index} className={s.swiperSlide}>
								<SwiperCard key={index} card={card} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default App
