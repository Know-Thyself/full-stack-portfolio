import { useNavigate } from 'react-router-dom';
import ReadMoreLess from 'react-show-more-text';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = ({ projects, setClickedProject, setReadMore }) => {
	const navigate = useNavigate();
	const pageVariants = {
		initial: {
			height: '100%',
		},
		animate: {
			height: 0,
			transition: {
				duration: 1.5,
				ease: [0.87, 0, 0.13, 1],
			},
		},
		// exit: {
		// 	height: '100%',
		// },
	};

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
	const spring = {
		type: 'spring',
		damping: 10,
		stiffness: 100,
	};

	return (
		<motion.div
			className='projects-main-container'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: [0.87, 0, 0.13, 1], duration: 1.5 }}
		>
			<div className='projects-wrapper'>
				{projects.map((project, idx) => {
					const descriptionLines = project.description.split(/\n/);
					return (
						<div
							key={idx}
							id={idx}
							className='project-wrapper'
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
		</motion.div>
	);
};

export default Projects;
