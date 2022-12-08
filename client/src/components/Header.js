import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({ theme, setTheme }) => {
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		setChecked(!checked);
	};
	const [checked, setChecked] = useState(false);

	return (
		<header className='header'>
			<h1 className='logo'>A Logo</h1>
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
				<div className='radio-switch'>
					<div className='light-dark-mode'>
						<input
							className='switch-checkbox'
							id='radio-button'
							name='dark-mode'
							value='dark-mode'
							type='checkbox'
							checked={checked}
							onChange={(e) => setChecked(!checked)}
							onClick={switchTheme}
						/>
						<label className='switch-label' htmlFor='radio-button'>
							<span className='switch-button' />
						</label>
					</div>
					<p className='switch-theme' onClick={switchTheme}>
						<span>
							{theme === 'light' ? (
								<i className='fa-regular fa-moon'></i>
							) : (
								<i className='fa-solid fa-moon'>&nbsp;</i>
							)}
						</span>
						{checked ? 'Dark Mode' : 'Light Mode'}
					</p>
				</div>
			</nav>
		</header>
	);
};

export default Header;
