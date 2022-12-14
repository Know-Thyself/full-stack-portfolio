import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0.5 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0.5 }}
		>
			<h1>Contact Page</h1>
		</motion.div>
	);
};

export default Contact;
