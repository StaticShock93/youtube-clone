import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faBars,
	faSearch,
	faMicrophone,
	faPlus,
	faBell,
} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {CardRow} from './CardRow';

export default function Home() {
	return (
		<div>
			{/* MENU / SEARCH / UTILITY / NAV BAR */}
			<header>
				<nav className='flex shrink grow items-center px-10 mt-4 mb-2 text-xl'>
					{/* HAMBURGER SIDE MENU TOGGLER */}
					<ul className='flex flex-shrink justify-between w-full mx-0 items-center'>
						<div className='cursor-pointer flex items-center flex-shrink'>
							{/* Toggle Bars */}
							<li className='flex items-center'>
								<FontAwesomeIcon
									className='mr-5 cursor-pointer'
									icon={faBars}
								/>
								{/* YT Premium Icon HomeBtn */}
								<FontAwesomeIcon icon={faYoutube} style={{color: '#FF0000'}} />
								<span className='ml-1 flex-shrink-0'>Premium</span>
							</li>
							{/* 
              1.) create a toggle hamburger button that will have the leftside menu option 1 or 2 show
              2.) build icon Premium logo
              */}
						</div>
						{/* SEARCH BAR AND TALK SEARCH UI */}
						<div className='flex items-center flex-shrink'>
							{/* SearchBar */}
							<li className='flex items-center flex-shrink justify-center'>
								<input
									type='text'
									placeholder='Search'
									className='flex-shrink border rounded-l-full px-4 py-2 border-gray-300  focus:outline-none focus-ring-2 focus:ringh-blue-500 w-96'
									// className='border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
								{/* Search Enter Button */}
								<button className='flex items-center justify-center bg-[#f8f8f8] border border-l-0 border-[#d3d3d3] border-solid rounded-r-full h-[2.875rem] w-15'>
									<FontAwesomeIcon
										className='text-gray-500 px-2 py-2'
										icon={faSearch}
									/>
								</button>
							</li>
							<li className='flex items-center flex-shrink ml-4 cursor-pointer'>
								{/* Talk Search Icon */}
								<FontAwesomeIcon icon={faMicrophone} />
							</li>
						</div>
						<div className='flex  items-center justify-between flex-shrink'>
							<li className=''>
								<button className='flex items-center justify-around bg-[#f8f8f8] rounded-full px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer'>
									<FontAwesomeIcon icon={faPlus} />
									<span className='ml-3'>Create</span>
								</button>
							</li>
							<li className='mx-6'>
								<FontAwesomeIcon icon={faBell} />
							</li>
							<li>
								<button className='flex items-center justify-center px-1 py-[2px] border text-[.9em] rounded-full w-8 h-8 bg-blue-500 text-white border-grey-300'>
									<p>C</p>
								</button>
							</li>
						</div>
					</ul>
				</nav>
			</header>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start sm:flex-row'>
				<div className='w-full h-screen grid grid-cols-[1fr_11fr]'>
					<section className='bg-amber-200'>LEFT SIDEBAR</section>
					<section className=''>
						<nav className='bg-amber-700 w-full h-20'>
							<button>All</button>
						</nav>
						{/* CARD SHOULD ACCEPT API LINK AND RENDER ROWS WITHIN CARDROW COMPONENT */}
						<CardRow
							cards={[
								{
									id: 1,
									title: 'Card 1',
									description: 'Description 1',
									imageUrl: 'https://via.placeholder.com/150',
								},
								{
									id: 2,
									title: 'Card 2',
									description: 'Description 2',
									imageUrl: 'https://via.placeholder.com/150',
								},
								{
									id: 3,
									title: 'Card 3',
									description: 'Description 3',
									imageUrl: 'https://via.placeholder.com/150',
								},
							]}
						/>
					</section>
				</div>
			</main>
		</div>
	);
}
