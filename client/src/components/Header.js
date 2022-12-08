import { NavLink } from 'react-router-dom';
const Header = ({ theme, setTheme }) => {
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

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
				<button onClick={switchTheme} className='switch-theme'>
					{theme === 'light' ? (
						<i className='fa-regular fa-moon'></i>
					) : (
						<i className='fa-solid fa-moon'>&nbsp;</i>
					)}
					Dark Mode
				</button>
			</nav>
		</header>
	);
};

export default Header;
