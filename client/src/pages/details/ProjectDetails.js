import ReadMoreLess from 'react-show-more-text';
import { motion } from 'framer-motion';
import './details.css';
const ProjectDetails = ({ clickedProject }) => {

	return (
		<motion.div
			className='project-details-page'
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			transition={{
				type: 'spring',
				stiffness: 40,
				duration: 1.5,
			}}
		>
			<h1 className='details-title'>{clickedProject.title}</h1>
			<div className='project-details-wrapper'>
				<img src={`/images/${clickedProject.image}`} alt='' />
				<section>
					<ReadMoreLess
						className='read-more-less content-css'
						lines={7}
						more='read more ▼'
						less='read less ▲'
						truncatedEndingComponent={'... '}
						anchorClass='anchor-css-class'
						expanded={false}
					>
						{clickedProject.description}
					</ReadMoreLess>
					<div className='project-links-wrapper'>
						<a
							href={clickedProject.repository}
							target='_blank'
							rel='noreferrer'
							className='github-link'
						>
							<i className='fa-brands fa-github'></i>&nbsp; GitHub
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
		</motion.div>
	);
};

export default ProjectDetails;
