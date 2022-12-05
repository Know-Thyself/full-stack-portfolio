import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa, brand, github } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => console.error(error));
	}, []);
  console.log(data);
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
						Biruk here, I'm a passionate Full Stack Web Developer...
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
