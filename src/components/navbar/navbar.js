import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons/Highlight-inator.svg';
import { slide as BurgerMenu } from 'react-burger-menu';
import './burger.css';

export default function Navbar({ routes }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const routeLinksLg = routes.map((route) =>
		route === routes[0] || route === routes[routes.length - 1] ? null : (
			<li className='my-5 w-96 text-center' key={route}>
				<Link
					className='px-4 py-2  text-white rounded-md font-serif text-lg transform hover:bg-md-1-600 transition-colors'
					to={route}>
					{route}
				</Link>
			</li>
		),
	);

	const routeLinksSm = routes.map((route) =>
		route === routes[0] ? (
			<Link
				key={route}
				className='px-4 py-2 my-5 text-white rounded-md font-serif text-lg transform hover:bg-md-1-600 transition-colors'
				to='/'
				onClick={() => setIsMenuOpen(false)}>
				Home Page
			</Link>
		) : (
			<Link
				key={route}
				className='px-4 py-2 my-5 text-white rounded-md font-serif text-lg transform hover:bg-md-1-600 transition-colors'
				to={route}
				onClick={() => setIsMenuOpen(false)}>
				{route}
			</Link>
		),
	);

	return (
		<div className='contianer bg-md-1-700 sticky top-0 flex-grow-0'>
			<nav className='flex px-5 justify-between'>
				<div className='mr-10 sm:mx-5 flex justify-between items-center w-24 '>
					<Link
						className='pr-10 sm:px-4 text-white rounded-md'
						to='/'>
						<img
							width='100%'
							className='align-middle'
							src={logo}
							alt='Highlight-inator Logo'
						/>
					</Link>
				</div>
				<div className='hidden sm:flex w-7/12'>
					<ul className='w-full flex flex-row justify-between'>
						{routeLinksLg}
					</ul>
				</div>
				<div className='hidden sm:block m-5 w-24'>
					<Link
						className='px-4 py-2 text-white rounded-md font-serif text-lg transform hover:bg-md-1-600 transition-colors'
						to={`/${routes[routes.length - 1]}`}>
						login
					</Link>
				</div>
				<div
					className='pointer-cursor sm:hidden block'
					id='outer-container'>
					<BurgerMenu
						right
						onOpen={() => setIsMenuOpen(true)}
						onClose={() => setIsMenuOpen(false)}
						isOpen={isMenuOpen}>
						{routeLinksSm}
					</BurgerMenu>
				</div>
			</nav>
		</div>
	);
}
