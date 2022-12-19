import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
	const [bio, setBio] = useState({});

	useEffect(() => {
		fetch('/bio')
			.then((res) => res.json())
			.then((data) => {
				setBio(data);
			})
			.catch((error) => console.error(error));
	}, []);

	const springVariant = {
		start: {
			y: '100%',
		},
		end: {
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 40,
				damping: 10,
				restSpeed: 0.5,
				velocity: 3,
				restDelta: 0.5,
			},
		},
	};

	return (
		<motion.main
			className='about-page-main-container'
			variants={springVariant}
			initial='start'
			animate='end'
		>
			<div className='about-page-wrapper'>
				<div className='about-img-wrapper'>
					<img className='about-img' src='/images/about.png' alt='' />
				</div>
				<div className='about-text-wrapper'>
					<h1>About Me</h1>
					<p>
						I am a father of two grown up children who are currently studying
						Computer Science and IT at a university. Although I am not religious
						anymore, I am from a theological studies background and used to
						serve as a bishop for nearly two decades in a church. <br />I also
						have transferable communication, collaborative, public speaking and
						leadership skills that could enhance harmonized workflow in a
						professional environment. <br />I started coding in 2020 when I
						joined the most amazing coding bootcamp, CodeYourFuture! Joining
						CodeYourFuture has literally transformed my life in many ways and is
						the best thing ever happened to me in a very long time. <br />
						I'm currently volunteering as a Teaching Assistant and Technical
						Mentor at CodeYourFuture to give back to my wonderful community and
						learn more as I teach trainee developers.
					</p>
					<div className='about-section-buttons'>
						<button>Contact Me</button>
						<button>Resume Download</button>
					</div>
				</div>
			</div>
			<section className='skills-section'>
				<div className='tech-stacks skill-set'>
					<div className='skill-card'></div>
					<div className='skill-card'></div>
					<div className='skill-card'></div>
				</div>
			</section>
		</motion.main>
	);
};

export default About;
