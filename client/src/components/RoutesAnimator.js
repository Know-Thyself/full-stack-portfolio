import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import ProjectDetails from '../pages/details/ProjectDetails';
import ReadMore from '../pages/more/ReadMore';

const RoutesAnimator = () => {
	const location = useLocation();
	const [projects, setProjects] = useState([]);
	const [clickedProject, setClickedProject] = useState();
	const [readMore, setReadMore] = useState();
	useEffect(() => {
		fetch('/projects')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
			})
			.catch((error) => console.error(error));
	}, []);
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route exact path='/' element={<Home />} />
				<Route
					exact
					path='/projects'
					element={
						<Projects
							projects={projects}
							setClickedProject={setClickedProject}
							setReadMore={setReadMore}
						/>
					}
				/>
				<Route exact path='/about' element={<About />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route
					exact
					path='/details'
					element={<ProjectDetails clickedProject={clickedProject} />}
				/>
				<Route
					exact
					path='/readmore'
					element={<ReadMore readMore={readMore} />}
				/>
			</Routes>
		</AnimatePresence>
	);
};

export default RoutesAnimator;
