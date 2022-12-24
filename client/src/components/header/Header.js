import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DarkMode from '../switch/DarkMode';
import './Header.css';

const Header = ({ theme, setTheme }) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [checked, setChecked] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
		setChecked(!checked);
	};
	
	function screenTest(e) {
		if (screenWidth <= 667) {
			setToggleMenu(!toggleMenu);
			setToggleMenu(false);
			setChecked(!checked);
		} 
	}

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener('resize', changeWidth);
		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	}, []);

	return (
		<header className='header'>
			<img className='logo' src='/images/placeholder-logo.png' alt='logo' />
			<div className='nav_wrapper'>
				<menu className='hamburger-menu'>
					<input
						id='menu__toggle'
						type='checkbox'
						checked={checked}
						onChange={toggleNav}
					/>
					<label className='menu__btn' for='menu__toggle'>
						<span></span>
					</label>
					{(toggleMenu || screenWidth > 667) && (
						<nav className='menu__box'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'active' : 'menu__item'
								}
								onClick={screenTest}
							>
								Home
							</NavLink>
							<NavLink
								to='/projects'
								className={({ isActive }) =>
									isActive ? 'active' : 'menu__item'
								}
								onClick={screenTest}
							>
								Projects
							</NavLink>
							<NavLink
								to='/about'
								className={({ isActive }) =>
									isActive ? 'active' : 'menu__item'
								}
								onClick={screenTest}
							>
								About
							</NavLink>
							<NavLink
								to='/contact'
								className={({ isActive }) =>
									isActive ? 'active' : 'menu__item'
								}
								onClick={screenTest}
							>
								Contact
							</NavLink>
						</nav>
					)}
				</menu>
				<DarkMode theme={theme} setTheme={setTheme} />
			</div>
		</header>
	);
};

export default Header;
