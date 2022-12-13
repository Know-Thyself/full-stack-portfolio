import ReadMoreLess from 'react-show-more-text';
import './details.css';
const ProjectDetails = ({ clickedProject }) => {
	// const truncate = (str, n) => {
	// 	return str.length > n ? str.slice(0, n - 1) + ' ...' : str;
	// };

	return (
		<div className='project-details-page'>
			<h1 className='details-title'>{clickedProject.title}</h1>
			<div className='project-details-wrapper'>
				<img src={`/images/${clickedProject.image}`} alt='' />
				<section>
					{/* <p>{truncate(clickedProject.description, 700)}</p> */}
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
		</div>
	);
};

export default ProjectDetails;
