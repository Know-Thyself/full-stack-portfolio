import ReadMoreLess from 'react-show-more-text';
import { useNavigate } from 'react-router-dom';
import './ReadMore.css';

const ReadMore = ({ readMore }) => {
	const descriptionLines = readMore.description.split(/\n/);
	const navigate = useNavigate();
	const handleClick = (e) => {
		if (e.target.innerText === 'read less ▲') {
			navigate('/projects');
		}
	};
	return (
		<div className='read-more-container'>
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
						expanded={true}
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
		</div>
	);
};

export default ReadMore;
