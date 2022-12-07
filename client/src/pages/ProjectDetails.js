const ProjectDetails = ({ clickedProject }) => {
	const truncate = (str, n) => {
		return str.length > n ? str.slice(0, n - 1) + ' ...' : str;
	};

	return (
		<div className='project-details-page'>
			<h1 className='details-title'>{clickedProject.title}</h1>
			<div className='project-details-wrapper'>
				<img src={`/images/${clickedProject.image}`} alt='' />
				<section>
					<p>{truncate(clickedProject.description, 700)}</p>
					<div className='project-links-wrapper'>
						<a
							href={clickedProject.repository}
							target='_blank'
							rel='noreferrer'
							className='github-link'
						>
							<i class='fa-brands fa-github'></i>&nbsp; GitHub
						</a>
						<a
							href={clickedProject.url}
							target='_blank'
							rel='noreferrer'
							className='live-demo-link'
						>
							Live Demo
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ProjectDetails;