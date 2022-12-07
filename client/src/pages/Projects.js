import { useNavigate } from 'react-router-dom';
import ReadMoreLess from 'react-show-more-text';

const Projects = ({ projects, setClickedProject }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		let selected = projects[e.currentTarget.id];
		setClickedProject(selected);
		if (
			e.target.innerText !== 'Live Demo' &&
			e.target.innerText !== 'GitHub' &&
			e.target.innerText !== 'read more ▼' &&
			e.target.innerText !== 'read less ▲'
		) {
			navigate('/details');
		} else if (
			e.target.innerText === 'read more ▼' ||
			e.target.innerText === 'read less ▲'
		) {
			let wrappers = document.querySelectorAll('.projects-wrapper');
			for (let i = 0; i < wrappers.length; i++) {
				const element = wrappers[i];
				if (
					element.id === e.currentTarget.id &&
					e.target.innerText === 'read more ▼'
				) {
					element.style.height = '100%';
				} else if (
					element.id === e.currentTarget.id &&
					e.target.innerText === 'read less ▲'
				) {
					element.style.height = 'auto';
					element.style.width = '100%';
				} else {
					element.style.height = 'auto';
					element.style.marginTop = '0';
				}
			}
		}
	};

	return (
		<div className='projects-root'>
			{projects.map((project, idx) => {
				return (
					<div
						key={idx}
						id={idx}
						className='projects-wrapper'
						onClick={handleClick}
					>
						<h4>{project.title}</h4>
						<img src={`/images/${project.image}`} alt='' />
						<div className='read-more-read-less-wrapper'>
							<ReadMoreLess
								className='read-more-less content-css'
								lines={3}
								more='read more ▼'
								less='read less ▲'
								truncatedEndingComponent={'... '}
								anchorClass='anchor-css-class'
								expanded={false}
							>
								{project.description}
							</ReadMoreLess>
						</div>
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
