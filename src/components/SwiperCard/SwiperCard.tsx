import { FC } from 'react'
import s from './SwiperCard.module.scss'
import { ICardContent } from '../../interfaces/card-content.interface'
import { FaQuoteRight } from 'react-icons/fa'

interface SwiperCardProps {
	card: ICardContent
}

const SwiperCard: FC<SwiperCardProps> = ({ card }) => {
	return (
		<article className={s.card}>
			<header>
				<img src={card.logo} alt='logo' />
			</header>
			<p>{card.text}</p>
			<span className={s.quote}>
				<FaQuoteRight />
			</span>
			<footer>
				<img src={card.avatar} alt='avatar' />
				<div>
					<strong>{card.name}</strong>
					<br />
					{card.position}
				</div>
			</footer>
		</article>
	)
}

export default SwiperCard
