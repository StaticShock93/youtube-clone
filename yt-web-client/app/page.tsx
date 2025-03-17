import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faBars);

export default function Home() {
	return (
		<div>
			<header>
				<nav className='flex px-10 bg-gray-300 mt-2 mb-2'>
					<div className='mx-3'>LOGO</div>
					<ul className='flex justify-between w-full mx-0'>
						<div>
							<li>
								<FontAwesomeIcon icon={faBars} />
							</li>
							<li></li>
							{/* 
              1.) create a toggle hamburger button that will have the leftside menu option 1 or 2 show
              2.) build icon Premium logo
              */}
						</div>
						<div>
							<li>center</li>
							{/* 
              3.) create center search bar
              4.) micrphone icon 
              */}
						</div>
						<div>
							<li className='pr-15'>right</li>
							{/* 
              5.) build the rightside menu into 3 mini sections
               */}
						</div>
					</ul>
				</nav>
			</header>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start sm:flex-row'>
				<div className='bg-amber-200 w-full h-screen grid grid-cols-2'>
					<div className='bg-amber-700 w-50'>LEFT SIDEBAR</div>
					<div>MAIN CONTENT</div>
				</div>
			</main>
		</div>
	);
}
