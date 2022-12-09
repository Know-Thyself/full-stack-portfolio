import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({ theme, setTheme }) => {
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		theme === 'light' ? setIsChecked(true) : setIsChecked(false);
		setIsChecked(!isChecked);
	};
	const [isChecked, setIsChecked] = useState(() =>
		theme === 'light' ? true : false
	);

	return (
		<header className='header'>
			<img src='/images/temp-logo.png' alt='logo' className='logo' />
			<nav className='nav-links'>
				<NavLink
					to='/'
					className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
				>
					Home
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
				>
					Projects
				</NavLink>
				<NavLink
					to='/about'
					className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
				>
					About
				</NavLink>
				<NavLink
					to='/contact'
					className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
				>
					Contact
				</NavLink>
				<div className='theme-icons-and-radio-btn'>
					<div className='radio-switch'>
						<div className='light-dark-mode'>
							<input
								className='switch-checkbox'
								id='radio-button'
								name='dark-mode'
								value='dark-mode'
								type='checkbox'
								checked={isChecked}
								onChange={switchTheme}
							/>
							<label className='switch-label' htmlFor='radio-button'>
								<span className='switch-button' />
							</label>
						</div>
						<div>
							{theme === 'dark' ? (
								<i className='fa-solid fa-moon'>&nbsp;</i>
							) : (
								<span>☀️</span>
							)}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
