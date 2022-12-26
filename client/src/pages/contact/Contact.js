import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
		const springVariant = {
			start: {
				y: -100,
				opacity: 0,
			},
			end: {
				y: 0,
				opacity: 1,
				transition: {
					type: 'spring',
					bounce: 0.25,
					stiffness: 40,
					damping: 10,
					restSpeed: 0.5,
					velocity: 3,
					restDelta: 0.5,
				},
			},
			exit: {
				y: 100,
				opacity: 0,
			},
		};

	return (
		<motion.div
			className='wrapper'
			variants={springVariant}
			initial='start'
			animate='end'
			exit='exit'
		>
			<h1>Contact Page</h1>
		</motion.div>
	);
};

export default Contact;
