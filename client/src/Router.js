import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

const Router = () => {
	const [projects, setProjects] = useState([]);
	const [clickedProject, setClickedProject] = useState();
	useEffect(() => {
		fetch('/projects')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data[0].content.projects);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route
				exact
				path='/projects'
				element={
					<Projects
						projects={projects}
						clickedProject={clickedProject}
						setClickedProject={setClickedProject}
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
		</Routes>
	);
};

export default Router;
