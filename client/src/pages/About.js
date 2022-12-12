import React, { useState, useEffect } from 'react';

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

	return (
		<main className='about-page-main-container'>
			<div className='about-page-wrapper'>
				<div className='about-img-wrapper'>
					<img
						className='about-img'
						src='/images/about.png'
						alt=''
					/>
				</div>
				<div className='about-text-wrapper'>
					<h1>About Me</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
						adipiscing enim eu turpis. Leo vel fringilla est ullamcorper eget
						nulla facilisi etiam. Rhoncus dolor purus non enim praesent
						elementum facilisis. Pellentesque adipiscing commodo elit at
						imperdiet dui accumsan. Elementum nisi quis eleifend quam adipiscing
						vitae proin sagittis. In est ante in nibh mauris cursus mattis
						molestie a. Consequat interdum varius sit amet mattis vulputate
						enim. Nunc non blandit massa enim nec dui. A iaculis at erat
						pellentesque adipiscing commodo. Convallis aenean et tortor at
						risus. Porta nibh venenatis cras sed. Commodo sed egestas egestas
						fringilla. Sed viverra ipsum nunc aliquet bibendum enim facilisis
						gravida neque. Tellus elementum sagittis vitae et leo duis. Quis
						commodo odio aenean sed.
					</p>
				</div>
			</div>
			<section className='skills-section'>
				<div className='tech-stacks skill-set'>
					<div className='skill-card'></div>
					<div className='skill-card'></div>
					<div className='skill-card'></div>
				</div>
			</section>
		</main>
	);
};

export default About;
