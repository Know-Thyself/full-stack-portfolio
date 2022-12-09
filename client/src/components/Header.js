import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Toggle from 'react-toggle';
const Header = ({ theme, setTheme }) => {
	// const [isDark, setIsDark] = useState(true);
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		theme === 'light' ? setChecked(true) : setChecked(false);
		setChecked(!checked);
	};
	const [checked, setChecked] = useState(() =>
		theme === 'light' ? true : false
	);

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
				<div className='theme-icons-and-radio-btn'>
					<div className='radio-switch'>
						<div className='light-dark-mode'>
							<input
								className='switch-checkbox'
								id='radio-button'
								name='dark-mode'
								value='dark-mode'
								type='checkbox'
								checked={checked}
								onChange={switchTheme}
								// onClick={switchTheme}
							/>
							<label className='switch-label' htmlFor='radio-button'>
								<span className='switch-button' />
							</label>
						</div>
						{/* <p className='switch-theme' onClick={switchTheme}> */}
						{/* <span>{theme === 'dark' ? <span>🌒</span> : <span>☀️</span>}</span> */}
						<span>
							{theme === 'dark' ? (
								<i className='fa-solid fa-moon'>&nbsp;</i>
							) : (
								<span>☀️</span>
								// <i class='fa-solid fa-sun'></i>
								// <i className='fa-regular fa-moon'></i>
							)}
						</span>

						{/* {checked ? 'Dark Mode' : 'Light Mode'} */}
						{/* </p> */}
					</div>
					{/* <Toggle
						className='dark-mode-toggle'
						checked={isDark}
						onChange={({ target }) => setIsDark(target.checked)}
						icons={{ checked: '🌙', unchecked: '🔆' }}
						aria-label='Dark mode toggle'
					/> */}
				</div>
			</nav>
		</header>
	);
};

export default Header;
