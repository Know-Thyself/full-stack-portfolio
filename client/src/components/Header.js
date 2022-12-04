import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header className='header'>
			<img className='logo' src='/images/logo.png' alt='developer logo' />
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
			</nav>
		</header>
	);
};

export default Header;
