import ReadMoreLess from 'react-show-more-text';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ReadMore.css';

const ReadMore = ({ readMore }) => {
	const descriptionLines = readMore.description.split(/\n/);
	const navigate = useNavigate();
	const handleClick = (e) => {
		if (e.target.innerText === 'read less ▲') {
			// navigate('/projects');
			console.log('yes')
		}
	};
	return (
		<motion.div
			className='read-more-container'
			initial={{ opacity: 0.5 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0.5 }}
		>
			<div className='read-more-project-wrapper'>
				<h4 className='project-title'>{readMore.title}</h4>
				<img src={`/images/${readMore.image}`} alt='' />
				<div className='read-more-read-less-wrapper' onClick={handleClick}>
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
						href={readMore.repository}
						target='_blank'
						rel='noreferrer'
						className='github-link'
					>
						<i className='fa-brands fa-github'></i>&nbsp; GitHub
					</a>
					<a
						href={readMore.url}
						target='_blank'
						rel='noreferrer'
						className='live-demo-link'
					>
						Live Demo
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default ReadMore;
