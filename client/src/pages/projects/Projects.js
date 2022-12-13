import { useNavigate } from 'react-router-dom';
import ReadMoreLess from 'react-show-more-text';
import './Projects.css';

const Projects = ({ projects, setClickedProject, setReadMore }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		let selected = projects[e.currentTarget.id];
		setClickedProject(selected);
		setReadMore(selected);
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
					navigate('/readmore');
				} else if (
					element.id === e.currentTarget.id &&
					e.target.innerText === 'read less ▲'
				) {
					element.style.height = 'fit-content';
				} else {
					element.style.height = 'fit-content';
					element.style.marginTop = '0';
				}
			}
		}
	};

	return (
		<div className='projects-root'>
			{projects.map((project, idx) => {
				const descriptionLines = project.description.split(/\n/);
				return (
					<div
						key={idx}
						id={idx}
						className='projects-wrapper'
						onClick={handleClick}
					>
						<h4 className='project-title'>{project.title}</h4>
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
								{descriptionLines.map((line, idx) => (
									<p>{line}</p>
								))}
							</ReadMoreLess>
						</div>
						<div className='project-links-wrapper'>
							<a
								href={project.repository}
								target='_blank'
								rel='noreferrer'
								className='github-link'
							>
								<i className='fa-brands fa-github'></i>&nbsp; GitHub
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
