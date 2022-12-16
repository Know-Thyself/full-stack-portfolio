import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
	return (
		<motion.div
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			transition={{
				type: 'spring',
				stiffness: 40,
				ease: [0.87, 0, 0.13, 1],
				duration: 1.5,
			}}
		>
			<h1>Contact Page</h1>
		</motion.div>
	);
};

export default Contact;
