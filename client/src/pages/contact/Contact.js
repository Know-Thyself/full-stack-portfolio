import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: [0.87, 0, 0.13, 1], duration: 1.5 }}
		>
			<h1>Contact Page</h1>
		</motion.div>
	);
};

export default Contact;
