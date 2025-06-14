import { ICardContent } from '../interfaces/card-content.interface'

import logo1 from '../assets/images/logos/logo_1.jpg'
import logo2 from '../assets/images/logos/logo_2.jpg'
import logo3 from '../assets/images/logos/logo_3.jpg'

import avatar1 from '../assets/images/avatars/avatar_1.jpg'
import avatar2 from '../assets/images/avatars/avatar_2.jpg'
import avatar3 from '../assets/images/avatars/avatar_3.jpg'

const BaseCardsContent: ICardContent[] = [
	{
		logo: logo1,
		text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
		avatar: avatar1,
		name: 'Ethan Morgan',
		position: 'Founder and CEO, Serene Living Products',
	},
	{
		logo: logo2,
		text: 'Sales Fortuna made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
		avatar: avatar2,
		name: 'Olivia Hayes',
		position: 'Owner, Starlight Creations',
	},
	{
		logo: logo3,
		text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
		avatar: avatar3,
		name: 'Alexander Reed',
		position: 'Co-Founder, Opulent Living Group',
	},
]

export const CardsContent: ICardContent[] = [
	...BaseCardsContent,
	...BaseCardsContent.slice().reverse(),
]
