import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
	const pageVariants = {
		initial: {
			height: 0,
			bottom: 0,
		},
		animate: {
			height: '90vh',
			transition: {
				duration: 1.5,
				ease: [0.87, 0, 0.13, 1],
			},
		},
		exit: {
			height: '90vh',
			bottom: 0,
		},
	};
	const spring = {
		type: 'spring',
		damping: 10,
		stiffness: 100,
	};
	return (
		<motion.div
			className='home'
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			transition={{
				type: 'spring',
				stiffness: 40,
				ease: [0.87, 0, 0.13, 1],
				duration: 1,
			}}
		>
			<section className='hero'>
				<div className='hero-text-container'>
					<h1 className='primary-text'>Hello & Welcome!</h1>
					<img
						className='profile-photo'
						src='/images/profile-photo.png'
						alt=''
					/>
					<h3 className='subtext'>
						Biruk here, I am a Full Stack Web Developer specialized in HTML,
						CSS, JavaScript, React.js, Next.js, Node.js and PostgreSQL Database
						along with related Frameworks and Libraries.
						<br />
						<br />
						If you are looking to hire a passionate, problem solver, team
						player, effective communicator and skillful Software Engineer for a
						frontend, backend or full stack web development role, you have come
						to the right place!
					</h3>
					<div className='links-wrapper'>
						<motion.a
							href='https://github.com/Know-Thyself'
							target='_blank'
							rel='noreferrer'
							className='link'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8 }}
						>
							<i className='fa-brands fa-github'></i>&nbsp; GitHub
						</motion.a>
						<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
							<Link to='/projects' className='link'>
								Projects
							</Link>
						</motion.div>
					</div>
				</div>
				{/* <div className='hero-right'>
					<h3>Some content here</h3>
				</div> */}
			</section>
		</motion.div>
	);
};

export default Home;
