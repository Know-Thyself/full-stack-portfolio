import { useNavigate } from 'react-router-dom';

const Projects = ({ projects, setClickedProject }) => {
	const navigate = useNavigate();
	const truncate = (str, n) => {
		return str.length > n ? str.slice(0, n - 1) + ' ...' : str;
	};

	const handleClick = (e) => {
		let selected = projects[e.currentTarget.id];
		setClickedProject(selected);
		if (e.target.innerText !== 'Live Demo' && e.target.innerText !== 'GitHub') {
			navigate('/details');
		}
	};

	return (
		<div className='projects-root'>
			{projects.map((project, idx) => {
				let truncated = truncate(project.description, 125);
				return (
					<div
						key={idx}
						id={idx}
						className='projects-wrapper'
						onClick={handleClick}
					>
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
