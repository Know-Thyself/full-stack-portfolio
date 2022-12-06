const Projects = ({ projects }) => {
	console.log(projects)
	return (
		<div>
			{projects.map((project, idx) => (
				<div>
					<h4>{project.title}</h4>
					<p>{project.description}</p>
					<div className='links-wrapper'>
						<a
							href={project.repository}
							target='_blank'
							rel='noreferrer'
							className='link'
						>
							<i class='fa-brands fa-github'></i>&nbsp; GitHub
						</a>
						<a
							href={project.url}
							target='_blank'
							rel='noreferrer'
							className='link'
						>
							<i class='fa-brands fa-github'></i>&nbsp; Live Demo
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
