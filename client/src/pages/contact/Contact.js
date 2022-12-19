import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
	const springVariant = {
		start: {
			y: '100%',
		},
		end: {
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 40,
				damping: 10,
				restSpeed: 0.5,
				velocity: 3,
				restDelta: 0.5,
			},
		},
	};

	return (
		<motion.div variants={springVariant} initial='start' animate='end'>
			<h1>Contact Page</h1>
		</motion.div>
	);
};

export default Contact;
