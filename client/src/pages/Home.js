import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home'>
			<section className='hero'>
				<div className='hero-text-container'>
					<h1 className='primary-text'>Hello & Welcome!</h1>
					<img
						className='profile-photo'
						src='/images/profile-photo.png'
						alt=''
					/>
					<h3 className='secondary-text'>
						Biruk here, If you are looking to hire a passionate, logical
						thinker, problem solver, team player, great communicator and skillful Software Engineer
						for a frontend, backend or full stack web development role, you have
						come to the right place!
					</h3>
					<div className='links-wrapper'>
						<a
							href='https://github.com/Know-Thyself'
							target='_blank'
							rel='noreferrer'
							className='link'
						>
							<i class='fa-brands fa-github'></i>&nbsp; GitHub
						</a>
						<Link to='/projects' className='link'>
							Projects
						</Link>
					</div>
				</div>
				<div className='hero-right'>
					<h3>Some content here</h3>
				</div>
			</section>
		</div>
	);
};

export default Home;
