const Projects = ({ projects }) => {
	const truncate = (str, n) => {
		return str.length > n ? str.slice(0, n - 1) + ' ...' : str;
	};
	console.log(projects);
	return (
		<div className='projects-root'>
			{projects.map((project, idx) => {
				let truncated = truncate(project.description, 125);
				return (
					<div className='projects-wrapper'>
						<h4>{project.title}</h4>
						<img src={`/images/${project.image}`} alt='' />
						<p>{truncated}</p>
						<div className='project-links-wrapper'>
							<a
								href={project.repository}
								target='_blank'
								rel='noreferrer'
								className='github-link'
							>
								<i class='fa-brands fa-github'></i>&nbsp; GitHub
							</a>
							<a
								href={project.url}
								target='_blank'
								rel='noreferrer'
								className='live-demo-link'
							>
							 Live Demo
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
